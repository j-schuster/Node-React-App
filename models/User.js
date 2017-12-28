const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    googleId: String,
    name: String,
    email: String,
    image: String,
    interests: String,
    activeProjects: String,
    city: String,
    country: String,
    about: String,
    timestamp: ''
})

mongoose.model('users', userSchema)

