import generateToken from '../../helper/generateToken'

const creatUserInvite = async (parent, arg, { prisma }, info) => {
    const { first_name, last_name, email, apps } = arg.data
    const user = await prisma.mutation.createUser({
        data: {
            first_name,
            last_name,
            email,
            apps: {
                connect: apps
            }
        }
    }, '{id apps{name scopes{ name } } }')

    return { invite_token: generateToken(user) }

}

export { creatUserInvite }