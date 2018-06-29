import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: "https://api.graph.cool/relay/v1/cjizl47lq07jx015359g6hhxs"
});

ReactDOM.render(
  <ApolloProvider client = {client}>
  <div>
      <h2>My first Apollo app 🚀</h2>
    </div>

  </ApolloProvider>,
    document.getElementById('root'));
registerServiceWorker();
