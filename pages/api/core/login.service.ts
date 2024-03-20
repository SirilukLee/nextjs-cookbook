import { types } from 'sass'
import { LoginContext } from './login-strategy'
import { IUser, } from './types'
import { loginType, UserBuilderMethod } from './configuration'
import { ApplicationUser } from './login-builder'
import { updateStorage } from './local-storage'
import { LocalStorageKeys } from '../../../pages/core/configs'

class LoginService {
    private static instance: LoginService;
    private isLoggedIn: boolean = false
    private token: string = ''
    private applicationUser: ApplicationUser = {} as ApplicationUser
    private loginState: IUser | null = null
    private constructor() { }

    public static getInstance(): LoginService {
        if (!LoginService.instance) {
            console.log('LoginService new instance')
            LoginService.instance = new LoginService()
        }
        return LoginService.instance;
    }



    async login(user: string, password: string) {
        const loginContext = new LoginContext(loginType)
        //console.log('loginContext',loginContext)
        const loginState =  await loginContext.useLogin(user, password)
        console.log('loginState', loginState)
        this.isLoggedIn = loginState.isLoggedIn;
        this.applicationUser = new ApplicationUser(loginState)
        //console.log(this.applicationUser)
        loginState.userProperties.forEach((property: keyof typeof UserBuilderMethod) => {
         UserBuilderMethod[property] && this.applicationUser[UserBuilderMethod[property]]()
        })

        this.token = loginState.token;
    
        updateStorage(LocalStorageKeys.LOGIN, JSON.stringify(loginState) )

        return loginState
    }

    getLoginStatus() {
        return this.isLoggedIn
    }

    getToken() {
        return this.token
    }

}

export { LoginService }