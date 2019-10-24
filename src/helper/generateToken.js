import jwt from 'jsonwebtoken'
import CryptoJS from "crypto-js"

export default (user) => {
    if (user.apps) {
        let object = { id: user.id, apps: [], scopes: [] }

        user.apps.forEach((app) => {
            if (object.apps.indexOf(app.name) === -1) {
                object.apps.push(app.name)
            }
            app.scopes.forEach((scope) => {
                if (object.scopes.indexOf(scope.name) === -1) {
                    object.scopes.push(scope.name)
                }
            })
        })
        const token = jwt.sign(object, 'thisisasceret')
        return CryptoJS.AES.encrypt(token, 'thisisasceret').toString()
    } else {
        const token = jwt.sign({ id: user.id }, 'thisisasceret')
        return CryptoJS.AES.encrypt(token, 'thisisasceret').toString()
    }

}