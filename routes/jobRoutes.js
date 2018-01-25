const requireLogin = require('../middlewares/requireLogin')
const mongoose = require('mongoose')

const Job = mongoose.model('jobs')

module.exports = (app) => {

  app.get('/api/jobs', (req, res) => {
    Job.find()
    .then((jobs) => res.json(jobs))
    
  })

  app.get('/api/jobs/:id', (req, res) => {
    Job.findById(req.params.id)
    .then((job) => res.json(job))
  })
    
   app.post('/api/jobs', (req, res) => {
      const { title, description, skills, timeframe, createdBy, company, createdUserImage, createdUserEmail } = req.body.data;

      const job = new Job({
        title,
        description,
        skills,
        timeframe,
        createdBy,
        company,
        createdUserImage,
        createdUserEmail,
        timestamp: Date.now()
      })

      job.save()
      res.json(job)
   });
};

// require login
// refactor .then statements
