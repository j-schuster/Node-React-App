const mongoose = require('mongoose')
const { Schema } = mongoose

const serviceSchema = new Schema({
    userName: String,
    about: String,
    image: '',
    skills: String,
    lookingFor: String,
    userId: String,
    timestamp: Date,
    tags: Array,
})

mongoose.model('services', serviceSchema)