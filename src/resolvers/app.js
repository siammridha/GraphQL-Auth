const apps = async (parent, arg, { prisma }, info) => {
    return prisma.query.apps(null, info)
}

const app = async (parent, arg, { prisma }, info) => {
    return prisma.query.app({ where: { id: arg.id } }, info)
}

const createApp = async (parent, arg, { prisma }, info) => {
    const { name, scopes } = arg.data
    return prisma.mutation.createApp({
        data: {
            name,
            scopes: {
                connect: scopes
            }
        }
    }, info)
}

const createManyApp = async (parent, arg, { prisma }, info) => {
    let apps = []
    const { dataList } = arg
    dataList.forEach((data) => {
        const { name, scopes } = data
        const app = prisma.mutation.createApp({
            data: {
                name,
                scopes: {
                    connect: scopes
                }
            }
        }, info)
        apps.push(app)
    })

    return apps

}

const updateApp = async (parent, arg, { prisma }, info) => {
    const { where, data } = arg
    return prisma.mutation.updateApp({
        where, data: {
            name: data.name,
            scopes: {
                set: data.scopes
            }
        }
    }, info)
}

const deleteApp = async (parent, arg, { prisma }, info) => {
    const { where } = arg
    return prisma.mutation.deleteApp({ where }, info)
}

export { apps, app, createApp, createManyApp, updateApp, deleteApp }