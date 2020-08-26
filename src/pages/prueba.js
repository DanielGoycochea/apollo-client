import React from 'react'
import { Query } from 'react-apollo'
import gql  from 'graphql-tag'

const APOLLO_QUERY = gql`
query   {
  log_in(credentials:{
    email: "danielgoycocheardz@gmail.com"
    password: "Tricuricus1982."
  }){
    token
    last_login
  }
}
`

const Prueba = () => {
  return (
    <>
      <Query query={APOLLO_QUERY}>
        {({data, loading, error}) => {
          if(loading) return <span>Loading...</span>
          if(error) return <p>{error.message}</p>
          return (
            <p>{console.log(data)}</p>
          )
        }}
      </Query>
    </>
  )
}

export default Prueba
