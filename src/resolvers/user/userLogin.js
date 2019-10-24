import generateToken from '../../helper/generateToken'

const userLogin = async (parent, arg, { req, res, prisma }, info) => {
    const { email, password } = arg.data
    const user = await prisma.query.user({ where: { email } }, info)
    if (user) {
        if (user.password === password) {
            const token = generateToken(user)
            res.cookie('token', token, {
                maxAge: 1000 * 60 * 60 * 24, //expires in a day
                httpOnly: true, // cookie is only accessible by the server
                secure: process.env.NODE_ENV === 'prod', // only transferred over https
            })

            return user
        }

        throw new Error('invalid email or password')
    }

    throw new Error('invalid email or password')
}

export { userLogin }