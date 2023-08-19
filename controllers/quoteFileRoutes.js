//-------------------- Requires --------------------//

//Express Package
const router = require('express').Router();


//All Models
const { Service, User , Quote , Quote_Item , } = require('../models');


//Helper
const withAuth = require('../utils/auth');




//-------------------- Render File Paths --------------------//

//Generated Quote
router.get('/', withAuth, async (req, res)=>{
	try {
		 res.render('quote_file', { 
			logged_in: req.session.logged_in 
		 });
	} catch(error) {
		 res.status(500).json({ error, loggedIn: req.session.log_in }) //checks
	}
 })





 //-------------------- Export Render Routes --------------------//

 module.exports = router;

