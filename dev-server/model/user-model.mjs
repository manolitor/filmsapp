import mongoose from 'mongoose'
import { StringUtil } from '../utilities/string-util.mjs'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    first: { type: String },
    last: { type: String },
    password: { type: String },
})
userSchema.set('timestamps', true)

userSchema.virtual('fullName').get(function(){
    const first = StringUtil.capitalize(this.first.toLowerCase())
    const last = StringUtil.capitalize(this.last.toLowerCase())
    return `${first} ${last}`
})

userSchema.statics.passwordMatches = function(password, hash) {
    return bcrypt.compareSync(password, hash)
    
}

userSchema.pre('save', function(next){
    this.username = this.username.toLowerCase()
    this.first = this.first.toLowerCase()
    this.last = this.last.toLowerCase()
    const unsafePassword = this.password
    bcrypt.hash(unsafePassword, 10, (err, hash) => {
        this.password = hash;        
        next()     
    })
})

export default mongoose.model('user', userSchema)