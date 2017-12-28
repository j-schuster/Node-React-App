const mongoose = require('mongoose')
const { Schema } = mongoose

const serviceSchema = new Schema({
    title: String,
    description: String,
    image: '',
    skills: String,
    timestamp: Date
})

mongoose.model('services', serviceSchema)