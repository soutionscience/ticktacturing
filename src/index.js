import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import  {Router, browserHistory}  from 'react-router'
import Routes from './routes'

const client = new ApolloClient({
  uri: "https://api.graph.cool/relay/v1/cjizl47lq07jx015359g6hhxs"
});

ReactDOM.render(
  <ApolloProvider client = {client}>
 <Router
 history ={browserHistory}
 routes= {Routes} >

 </Router>

  </ApolloProvider>,
    document.getElementById('root'));
registerServiceWorker();
