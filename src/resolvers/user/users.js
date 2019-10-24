const users = async (parent, arg, { prisma }, info) => {
    return prisma.query.users(null, info)
}

export { users }