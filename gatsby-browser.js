import "./src/styles/global.css";
import React from "react";
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import wrapRootElement from "./wrap-root-element";
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri:
      "https://hassanalikhan-bc2020c39.netlify.app/.netlify/functions/graphql",
  }),
});

const _wrapRootElement = ({ element }) => {
  return (
    <ApolloProvider client={client}>
      {wrapRootElement({ element })}
    </ApolloProvider>
  );
};
export { _wrapRootElement as wrapRootElement };
