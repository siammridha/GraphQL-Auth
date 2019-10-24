const user = async (parent, arg, { prisma }, info) => {
    return prisma.query.user({ where: { id: arg.id } }, info)
}

export { user }