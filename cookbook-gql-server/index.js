const { ApolloServer, gql } = require('apollo-server');
const users = require('../pages/mocks/users.json')
//console.log(users)
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
            return users.find(user => users.user === params.user && user.password === params.password)
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
    cache: 'bounded'
});

server.listen().then(({url})=>{
    console.log(`server ready at ${url}`)
})
