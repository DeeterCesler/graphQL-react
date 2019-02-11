import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import 'bootstrap/dist/css/bootstrap.min.css';


import ProductWrapper from "./ProductWrapper";
  
const client = new ApolloClient({
    uri: "https://api.crystallize.com/graphql",
});

const App = () => (
<ApolloProvider client={client}>
    <ProductWrapper/>
</ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
