import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./styles/index.css";
import "./styles/font.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: process.env.REACT_APP_MY_GRAPHCMS_URI,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(process.env.REACT_APP_MY_GRAPHCMS_URI);
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
);
