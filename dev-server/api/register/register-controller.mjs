import { StringUtil } from '../../utilities/string-util.mjs'
import User from '../../model/user-model.mjs'

export function index(req, res){
    const validation = validateIndex(req.body)
    if(!validation.isValid){
        return res.status(400).json({ message: validation.message })
    }

    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })
    user.save(error => {
        if(error){
            if(error.code === 11000){
                return res.status(403).json({ message: 'El nombre de usuario ya existe' })
            }
            return res.status(500).json({ message: '?????' })
        }
        return res.status(201).json()
    })
}

function validateIndex(body){
    let errors = ''
    if(StringUtil.isEmpty(body.username)){
        errors += 'Complete el campo usuario. '
    }
    if(StringUtil.isEmpty(body.email)){
        errors += 'Complete el campo email. '
    }
    if(StringUtil.isEmpty(body.password)){
        errors += 'Complete el campo contraseña. '
    }

    return {
        isValid: StringUtil.isEmpty(errors),
        message: errors
    }
}