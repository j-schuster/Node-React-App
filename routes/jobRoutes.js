const requireLogin = require('../middlewares/requireLogin')
const mongoose = require('mongoose')

const Job = mongoose.model('jobs')

module.exports = (app) => {

  app.get('/api/jobs', (req, res) => {
    Job.find()
    .then((jobs) => res.json(jobs))
  })

  app.delete('/api/jobs/:id', (req, res) => {
    Job.findByIdAndRemove({
      _id: req.params.id
    }).then((job) => res.send(job))
  })

  app.get('/api/jobs/:id', (req, res) => {
    Job.findById(req.params.id)
    .then((job) => res.json(job))
  })
    
   app.post('/api/jobs', (req, res) => {
      const { title, description, skills, timeframe, createdBy, company, createdUserImage, createdUserEmail, tags } = req.body.data;

      const job = new Job({
        title,
        description,
        skills,
        timeframe,
        createdBy,
        company,
        createdUserImage,
        createdUserEmail,
        tags,
        timestamp: Date.now()
      })

      job.save()
      res.json(job)
   });
};
