const router = require('express').Router();
const { Service, User } = require('../models');
const withAuth = require('../utils/auth');

// Routing Logic / Structure based on the Excalidraw
// -  router.get('/') = New User / Existing User buttons ... New User = render(signup) Sign Up, Existing = render(login) login    
// -  option 1. Sign-up = ('/signup') 
// -  option 2. Log-in = ('/login')
// After this, we go to the homepage
// 1. ('/') -> ('/signup') -> ('/homepage')
// 2. ('/') -> ('/login') -> ('/homepage')

// Now, we can add
// ('/addService') , ('editService') , ('quoteForm') , ('quoteFile') , ('etc etc...')

//But we cannot test our code if we can't get this first step done... 


router.get('/', (req, res) => {
  
    res.render('login');
  });


router.get('/homepage', withAuth, async (req, res)=>{
  try{
      res.render('homepage', { 
        logged_in: req.session.logged_in 
      });
  }catch(error){
      res.json( {error, loggedIn: req.session.log_in})
  }
})

router.get('/profile', withAuth, async (req, res)=>{
  try{
      res.render('profile', { 
        logged_in: req.session.logged_in 
      });
  }catch(error){
      res.json( {error, loggedIn: req.session.log_in})
  }
})

router.get('/pizza', (req,res) => {
  res.render('quote-file');
})  
  
module.exports = router