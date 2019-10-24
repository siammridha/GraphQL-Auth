const userLogout = async (parent, arg, { req, res, prisma }, info) => {
    res.clearCookie('token').redirect('/login')
}

export { userLogout }