const router = require('express').Router();
const { Service, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', (req, res) => {
  
    res.render('login');
  });


router.get('/homepage', withAuth, async (req, res)=>{
  try{
      const {user_id} = req.session
      const blogPosts = await Blog.findAll({
          where: {
              user_id: user_id
          }
      })
  
      const posts = blogPosts.map((blog) => blog.get({plain: true}))
      
      res.render('homepage', { 
        posts, 
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