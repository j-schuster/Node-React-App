const requireLogin = require('../middlewares/requireLogin')
const mongoose = require('mongoose')

const Service = mongoose.model('services')

module.exports = (app) => {

  app.get('/api/services', (req, res) => {
    Service.find()
    .then((services) => res.json(services))
  })

  app.get('/api/services/:id', (req, res) => {
    Service.findById(req.params.id)
    .then((service) => res.json(service))
  })

  app.post('/api/services', (req, res) => {
  	
  	const { userName, about, image, skills, lookingFor, userId } = req.body.data;
   
  	const service = new Service({
  		userName: userName,
      about: about,
      image: image,
      skills: skills,
      userId: userId,
  		timestamp: Date.now()
  	})

  	service.save()
    res.json(service)

  })

  
  
};

