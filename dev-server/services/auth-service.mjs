import jwt from 'jsonwebtoken'

export function generateJWT(user) {
    const tokenData = { username: user.username, id: user._id }
    return jwt.sign({user: tokenData}, 'secretToken')
}

export function requireLoggin(res, req, next) {
    const token = decodeToken(req)
    if(!token){
        return res.status(401).json({ message: 'Debes iniciar sesión' })
    }
}

export function decodeToken(req) {
    const token = req.headers.authorization || req.headers['authorization']

    if(!token){
        return null
    }

    try{
        return jwt.verify(token, 'secretToken')
    } catch(error){
        return null
    }
}