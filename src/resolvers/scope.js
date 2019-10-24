const scopes = (parent, arg, { prisma }, info) => {
    return prisma.query.scopes(null, info)
}

const scope = async (parent, arg, { prisma }, info) => {
    return prisma.query.scope({ where: { id: arg.id } }, info)
}

const createScope = async (parent, arg, { prisma }, info) => {
    const { data } = arg
    return prisma.mutation.createScope({ data }, info)
}
const updateScope = async (parent, arg, { prisma }, info) => {
    const { where, data } = arg
    return prisma.mutation.updateScope({ where, data }, info)
}

const deleteScope = async (parent, arg, { prisma }, info) => {
    const { where } = arg
    return prisma.mutation.deleteScope({ where }, info)
}

export { scopes, scope, createScope, updateScope, deleteScope }