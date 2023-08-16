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


// Route to render the profile page
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Fetch the user data from the database using the user_id stored in the session
    const userData = await User.findByPk(req.session.user_id);
    if (!userData) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    // Serialize user data for the template
    const serializedUserData =userData.get({ plain: true });

    // Render the profile template and pass the serialized user data
    res.render('profile', {
      serializedUserData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err)
    res.status(500).json({err});
  }
});
  
module.exports = router