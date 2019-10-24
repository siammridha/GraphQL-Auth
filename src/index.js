import { GraphQLServer } from 'graphql-yoga'
import prisma from './prisma'
import { apps, app, createApp, createManyApp, updateApp, deleteApp } from './resolvers/app'
import { scopes, scope, createScope, updateScope, deleteScope } from './resolvers/scope'
import { creatUserInvite } from './resolvers/user/userInvite'
import { user } from './resolvers/user/user'
import { users } from './resolvers/user/users'
import { createUserSignUp, userLogin, userLogout } from './resolvers/user/userSignUp'

// Resolvers
const resolvers = {
  Query: {
    users,
    user,
    apps,
    app,
    scopes,
    scope
  },
  Mutation: {
    creatUserInvite,
    createUserSignUp,
    userLogin,
    userLogout,
    createApp,
    createManyApp,
    updateApp,
    deleteApp,
    createScope,
    updateScope,
    deleteScope
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: ({ request, response }) => ({
    req: request,
    res: response,
    prisma
  })
})

server.start(() => {
  console.log('The server is up!')
})