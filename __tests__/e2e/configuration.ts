import { getMock} from "../../mocks"

enum Configuration {
    HOST = 'http://localhost:3000'
};

const expectations = {
    mainPage: {
        header: 'Hello there ! This is the main page of CookBook'    
    },
    auth : {
        login: getMock.users[0].user,
        password: getMock.users[0].password
    },
    articles : {
        header: 'Articles list',
        add : 'add article',
        itemUrl: '/articles/123',
        itemHeader: 'test title'
    }
}

export { Configuration, expectations}