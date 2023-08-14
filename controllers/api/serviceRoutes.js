const router = require('express').Router();
const { Service } = require('../../models');

//get all services we offer for services page 
router.get ('/', async (req, res) => {
	try {
		//get servicesData from Service model.
		const servicesData = await Service.findAll();
		console.log(servicesData)
		const services = servicesData.map((service) => service.get({ plain: true })) 
		res.status(200).json(services)
		console.log(services) 
		}
	catch { 
		res.status(400).json(err);
	}
});

module.exports = router;

