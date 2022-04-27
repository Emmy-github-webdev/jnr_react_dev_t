import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider} from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient, gql } from 'apollo-boost';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache
});

client.query({
  query: gql`
  {
    query {
      category {
        name
        products {
          id
          name
          inStock
          gallery
          description
          category
          brand
        }
      }
    }
  }
  `
}).then(res => console.log(res));

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root'),
)

reportWebVitals();
