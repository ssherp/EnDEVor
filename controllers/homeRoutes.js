const router = require('express').Router();
const { Service, User } = require('../models');
const withAuth = require('../utils/auth');


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

// Route to render the profile page
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Fetch the user data from the database using the user_id stored in the session
    const userData = await User.findByPk(req.session.user.id,);

    if (!userData) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    // Serialize user data for the template
    const serializedUserData = userData.map((data) => data.get({ plain: true }));

    // Render the profile template and pass the serialized user data
    res.render('profile', {
      ...serializedUserData,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get('/pizza', (req,res) => {
  res.render('quote-file');
})  
  
module.exports = router