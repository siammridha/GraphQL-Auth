import jwt from 'jsonwebtoken'
import CryptoJS from "crypto-js"

export default (token) => {
    token = CryptoJS.AES.decrypt(token, 'thisisasceret').toString(CryptoJS.enc.Utf8)
    token = jwt.verify(token, 'thisisasceret', (err, decodedToken) => {

        if (err || !decodedToken) {
            throw new Error('not authorized')
        }

        return decodedToken
    })
    return token
}