import { ApolloClient, InMemoryCache , HttpLink} from "@apollo/client";
import fetch from 'cross-fetch';
/* const client = new ApolloClient({
  link: new HttpLink({ uri: 
    '/graphql', fetch 
    })
}); */
 


 const client = new ApolloClient({
    uri : "http://localhost:4000",
    cache: new InMemoryCache(),
}) 

export default client;