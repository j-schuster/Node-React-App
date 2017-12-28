const passport = require('passport')
const requireLogin = require('../middlewares/requireLogin')
const mongoose = require('mongoose')
const User = mongoose.model('users')

module.exports = (app) => {
    
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
        scope: ['profile', 'email']
      })
    )

    app.get(
        '/auth/google/callback', 
         passport.authenticate('google'),
         (req, res) => {
             res.redirect(`/profile/${req.user._id}`)
      }
    )
    
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
    
    app.get('/api/current_user', (req, res) => {
        res.send(req.user)
    })

    app.post('/api/current_user', (req, res) => { 

      const { about, city, country, interests, projects, image } = req.body.data
      User.findOneAndUpdate({ _id: req.user._id }, {interests: interests, activeProjects: projects, city: city, country: country, about: about, image: image  }) 
      .then((res, err) => err ? console.log(err) : console.log('done'))   

      res.json(req.body.data)
    })
    
}

// require login