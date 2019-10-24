import bcrypt from 'bcryptjs'
import generateToken from '../../helper/generateToken'
import decryptToken from '../../helper/decryptToken'

const createUserSignUp = async (parent, arg, { req, res, prisma }, info) => {

    const decodedToken = decryptToken(req.headers.invitelink)

    const password = await bcrypt.hash(arg.data.password, 10)

    const user = await prisma.mutation.updateUser({
        where: { id: decodedToken.id }, data: { password }
    }, '{ id apps { name scopes { name } } }')

    if (user) {
        const { id } = user

        const token = generateToken(user)

        res.cookie('token', token, {
            maxAge: 1000 * 60 * 60 * 24, //expires in a day
            httpOnly: true, // cookie is only accessible by the server
            secure: process.env.NODE_ENV === 'prod', // only transferred over https
        })

        return prisma.query.user({ where: { id } }, info)
    }
}

export { createUserSignUp }