import { UserBuilderMethod } from "./configuration"; 
import { IUser } from './types'

interface UserBuilder {
    [UserBuilderMethod.PRODUCE_REGULAR_USER]():void;
    [UserBuilderMethod.PRODUCE_UPDATED_USER]():void;
    [UserBuilderMethod.PRODUCE_ADMIN_USER]():void;
}

class ApplicationUser implements UserBuilder {
    constructor(private user : IUser) {}

    [UserBuilderMethod.PRODUCE_REGULAR_USER]():void {
        console.log('trigger build')
        this.user.userPropertiesActions?.push('Regular properties')
    }
    [UserBuilderMethod.PRODUCE_UPDATED_USER]():void {
        
        this.user.userPropertiesActions?.push('Updated properties')
    }
    [UserBuilderMethod.PRODUCE_ADMIN_USER]():void {

        this.user.userPropertiesActions?.push('Admin properties')
    }
}

export { ApplicationUser }