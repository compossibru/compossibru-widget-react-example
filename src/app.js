import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import React from 'react';
import ReactDOM from 'react-dom';
import gql from 'graphql-tag';

const client = new ApolloClient({
    uri: 'https://swapi.apis.guru'
});

const People = () => (
    <Query
        query={gql`
          {
              allPeople {
                people {
                  id
                  name
                }
              }
            }
        `}
    >
        {({ loading, error, data }) => {
            if (loading) return <div>Loading...</div>;
            if (error) return <div>Error :(</div>;

            return data.allPeople.people.map(({ name, id }) => (
                <div key={id}>
                    {name}
                </div>
            ));
        }}
    </Query>
);

const App = () => (
    <ApolloProvider client={client}>
        <div>
            <People/>
        </div>
    </ApolloProvider>
);

ReactDOM.render(<App/>, document.getElementById('app'));
