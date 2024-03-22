import { getMock } from "../../../pages/mocks";
import { generateToken } from "./generate-token";
import { IUser, ILoginStrategy, ILoginStrategyGQL } from './types'
import client from "../../../apollo-client"
import { useQuery, gql } from '@apollo/client';


class LoginContext {
    private strategy: ILoginStrategy | ILoginStrategyGQL ;

    constructor(strategy: ILoginStrategy | ILoginStrategyGQL) {
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

    }
}


class LoginWithGQL implements ILoginStrategyGQL {
    async gqlLogin(user: string, password: string) {
        
        const { data } = await client.query({
            query: gql`
            query {
                getUser(user: "${user}", password: "${password}") {
                    user
                    userProperties
                }
            }
            `
        });
        
        return await data
    }
    public async login(user: string, password: string) {
        console.log(user , password)
        let loginState = {state: false, token: '', userProperties:[]}
        const checkUser = await this.gqlLogin(user,password)
        console.log(checkUser)
        if (checkUser && checkUser.getUser) {
            loginState =  { state: true, token: generateToken(), userProperties: checkUser.getUser.userProperties}
        }
        return loginState

    }
}

export { LoginContext, LoginWithMock, LoginWithGQL }
