const { ApolloServer, gql } = require('apollo-server');
const users = require('../pages/mocks/users.json')
console.log(users)
const typeDefs = gql`
type User {
    user: String!
    password: String!
    userProperties: [String!]!
}

type Query {
    getUser(user: String!, password:String!):User
}
`;

const resolvers = {
    Query: {
        getUser: (obj, params) => {
            console.log(params)
            return users.find(user => user.user === params.user && user.password === params.password)
        }
    },
};

const {
    ApolloServerPluginLandingPageLocalDefault
} = require('apollo-server-core');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
        ApolloServerPluginLandingPageLocalDefault({ embed: true})
    ]
});

server.listen().then(({url})=>{
    console.log(`server ready at ${url}`)
})
