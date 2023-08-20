const router = require('express').Router();
const { Service, User , Quote , Quote_Item , } = require('../models');
const withAuth = require('../utils/auth');
<<<<<<< HEAD
=======
const { Service, Quote_Item } = require('../models')
>>>>>>> main

router.get('/', withAuth, async (req, res)=>{
	try {
<<<<<<< HEAD
		 res.render('service', {
			logged_in: req.session.logged_in 
		 });
	} catch(error) {
		 res.status(500).json({ error, loggedIn: req.session.log_in })
=======
		//Get all services in the Services model
		const allServices = await Service.findAll({
			include: [{
				model: Quote_Item
			}]
		});

		//Serialize the Services data so the template (handlebars) can read it
		const services = allServices.map((service) => service.get({ plain: true }));
		console.log(services);
		//Displaying the route on the specified handlebar
		res.render('view-services', {
			services,
			logged_in: req.session.logged_in
		});

	} catch (err) {
		res.status(500).json(err);
	}
});

//Get Add Service
router.get('/add-service-item', withAuth, async (req, res) => {
	try {
		//Get a services in the Services model
		const allServices = await Service.findAll();

		//Serialize the Services data so the template (handlebars) can read it
		const services = allServices.map((service) => service.get({ plain: true }));
		console.log(services);
		//Displaying the route on the specified handlebar
		res.render('add-service-item', {
			services,
			logged_in: req.session.logged_in
		});

	} catch (err) {
		res.status(500).json(err);
>>>>>>> main
	}
 })

 module.exports = router;