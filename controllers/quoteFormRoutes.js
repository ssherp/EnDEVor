//-------------------- Requires --------------------//

//Express Package
const router = require('express').Router();


//All Models
const { Service } = require('../models');


//Helper
const withAuth = require('../utils/auth');





//-------------------- Render File Paths --------------------//

//Quote Form
router.get('/', withAuth, async (req, res)=>{
	try{
		const serviceData=await Service.findAll()
		const services=serviceData.map(service=>service.get({plain:true}))
		console.log(services)
		 res.render('quote-form', { 
			services,
			logged_in: req.session.logged_in 
		 });
	}catch(error){
		 res.status(500).json({ error, loggedIn: req.session.log_in })
	}
 })





  //-------------------- Export Render Routes --------------------//
 module.exports = router;