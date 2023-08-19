const router = require('express').Router();
const { Service, User, Quote, Quote_Item , } = require('../models');
const withAuth = require('../utils/auth');

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

 module.exports = router;

