const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Service } = require('../models')

//Get ALL Services
router.get('/', withAuth, async (req, res) => {
	try {
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
	}
});

//Exporting these routes
module.exports = router;