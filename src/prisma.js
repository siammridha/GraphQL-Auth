import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://localhost:4466/playground/dev',
    secret: 'thisismysupersecrecttext'
})

export { prisma as default }