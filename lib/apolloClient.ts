import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
  },
  cache: new InMemoryCache(),
});

export default client;
