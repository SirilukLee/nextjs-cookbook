import { getMock } from "../../../pages/mocks";
import { generateToken } from "./generate-token";
import { IUser, ILoginStrategy, ILoginStrategyGQL } from './types'
import client from "../../../apollo-client"
import { useQuery, gql } from '@apollo/client';


class LoginContext {
    private strategy: ILoginStrategy;

    constructor(strategy: ILoginStrategy) {
        console.log('Login strategy class is', strategy)
        this.strategy = strategy
    }

    public useLogin(user: string, password: string) {
        console.log('Now login is on fire')
        console.log(this.strategy.login(user, password))
        return this.strategy.login(user, password)
    }
}

class LoginWithMock implements ILoginStrategy {
    public login(user: string, password: string) {
        const users = getMock.users
        const checkUser = users.find((userItem: {user: string, password: string})=>{
            return userItem.user === user && userItem.password === password
        }) 
        let loginState = { state: false, token: '', userProperties: []}
        if (checkUser){
            loginState = { state:true, token: generateToken(), userProperties: []}
        }

        return loginState;
        // return new Promise<IUser>((resolve, reject) => {
        //     const users = getMock.users
        //     const checkUser = users.find((userItem: { user: string, password: string }) => {
        //         return userItem.user === user && userItem.password === password
        //     })
        //     let loginState = { state: false, token: '', userProperties: [] }
        //     if (checkUser) {
        //         const loginState = { state: true, token: generateToken(), userProperties: [] };
                
        //     }
        // });
    }
}


class LoginWithGQL implements ILoginStrategyGQL {
    async gqlLogin(user: string, password: string) {
        // console.log(client)
        const { data } = await client.query({
            query: gql`
            query {
                getUser(user: "${user}", pasword: "${password}") {
                    user
                    userProperties
                }
            }
            `
        });
        return await data
    }
    public async login(user: string, password: string) {
        let loginState = {state: false, token: '', userProperties:[]}
        const checkUser = await this.gqlLogin(user,password)
        if (checkUser && checkUser.getUser) {
            loginState =  { state: true, token: generateToken(), userProperties: checkUser.getUser.userProperties}
        }
        return loginState
        // return new Promise <IUser>(async (resolve, reject) => {
        //     let loginState = { state: false, token: '', userProperties: [] }
        //     const checkUser = await this.gqlLogin(user, password)
        //     if (checkUser && checkUser.getUser) {
        //         loginState = { state: true, token: generateToken(), userProperties: checkUser.getUser.userProperties }
        //     }
        // })

    }
}

export { LoginContext, LoginWithMock, LoginWithGQL }
