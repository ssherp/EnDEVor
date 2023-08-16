const router = require('express').Router();
const { Service, User , Quote , Quote_Item , } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res)=>{
	try{
		 res.render('quote-form', { 
			logged_in: req.session.logged_in 
		 });
	}catch(error){
		 res.status(500).json({ error, loggedIn: req.session.log_in })
	}
 })

 module.exports = router;

