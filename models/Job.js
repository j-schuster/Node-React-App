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
    createdUserImage: String,
    createdUserEmail: String,
    tags: Array,
})

mongoose.model('jobs', jobSchema)