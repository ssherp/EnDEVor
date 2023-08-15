const router = require('express').Router();
const { Service, User , Quote , Quote_Item , } = require('../models');
const withAuth = require('../utils/auth');

 //home route to login handlebar
router.get('/', (req, res) => {
    res.render('login');
  });

//homepage when logged in
router.get('/homepage', withAuth, async (req, res)=>{
  try{
      res.render('homepage', { 
        logged_in: req.session.logged_in 
      });
  }catch(error){
      res.json( {error, loggedIn: req.session.log_in})
  }
})

//checks if user logged in
router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (!req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});



router.get('/pizza', (req,res) => {
  res.render('quote-file');
})  
  
module.exports = router