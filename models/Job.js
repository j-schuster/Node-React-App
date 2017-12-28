const mongoose = require('mongoose')
const { Schema } = mongoose

const jobSchema = new Schema({
    title: String,
    description: String,
    image: '',
    skills: String,
    timeframe: String,
    createdBy: String,
    timestamp: Date,
    company: String,
    createdUserImage: String
})

mongoose.model('jobs', jobSchema)