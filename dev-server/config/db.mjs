import mongoose from 'mongoose'

export function connectToDb(){
    mongoose.connect('mongodb+srv://manuel:ff4w0gmw0@cluster0.qyllx.mongodb.net/filmsapp?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true },
    error => {
        if (error){
            console.log('Unable to connect to DB')
            throw error
        } else {
            console.log('Connected to DB')
        }
    })
}