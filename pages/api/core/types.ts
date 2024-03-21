import { UserBuilderMethod } from "./configuration";

export interface IUser {
    //isLoggedIn: boolean
    state: boolean;
    token: string;
    userProperties: Array<keyof typeof UserBuilderMethod>
    userPropertiesActions?: string[]
}

export interface ILoginStrategy {
    login(user: string, password: string): IUser;
}

export interface ILoginStrategyGQL {
    login(user: string, password: string): Promise<IUser>;
}
