'use client'

import React from 'react'
import {ApolloProvider} from '@apollo/client'
import {client} from './client'

const GraphqlProvider = ({children}:any) => {
  return (
    <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
  )
}

export default GraphqlProvider
