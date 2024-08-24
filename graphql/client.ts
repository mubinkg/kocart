import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'http://kocart.com/api/graphql',
    cache: new InMemoryCache(),
});