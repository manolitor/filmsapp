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
        first: req.body.first,
        last: req.body.last
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
        errors += 'Username is required. '
    }
    if(StringUtil.isEmpty(body.first)){
        errors += 'Firstname is required. '
    }
    if(StringUtil.isEmpty(body.last)){
        errors += 'Lastname is required. '
    }
    if(StringUtil.isEmpty(body.password)){
        errors += 'Password is required. '
    }

    return {
        isValid: StringUtil.isEmpty(errors),
        message: errors
    }
}