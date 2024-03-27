import { types } from 'sass'
import { LoginContext } from './login-strategy'
import { IUser, } from './types'
import { loginType, UserBuilderMethod } from './configuration'
import { ApplicationUser } from './login-builder'
import { updateStorage } from './local-storage'
import { LocalStorageKeys } from '../../../core/configs'

class LoginService {
    private static instance: LoginService;
    private isLoggedIn: boolean = false
    private token: string = ''
    private applicationUser: ApplicationUser = {} as ApplicationUser
    // private loginState: IUser | null = null
    private constructor() { }

    public static getInstance(): LoginService {
        if (!LoginService.instance) {
            console.log('LoginService new instance')
            LoginService.instance = new LoginService()
        }
        return LoginService.instance;
    }



    async login(user: string, password: string) {
        console.log(user, password)
        const loginContext = new LoginContext(loginType)
        console.log('loginContext', loginContext)
        const loginState = await loginContext.useLogin(user, password)
        console.log('loginState', loginState)
        this.isLoggedIn = loginState.state;
        this.applicationUser = new ApplicationUser(loginState)
        loginState.userProperties.forEach((property: keyof typeof UserBuilderMethod) => {
            UserBuilderMethod[property] && this.applicationUser[UserBuilderMethod[property]]()
        })

        this.token = loginState.token;

        updateStorage(LocalStorageKeys.LOGIN, JSON.stringify(loginState))

         return loginState
        //return { isLoggedIn: this.isLoggedIn, token: this.token, applicationUser: this.applicationUser };
    }

    getLoginStatus() {
        return this.isLoggedIn
    }

    getToken() {
        return this.token
    }

    anyAPICall() {
        console.log('here we can call an API')
    }

}

export { LoginService }