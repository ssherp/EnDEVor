const router = require('express').Router();
const { Service } = require('../../models');

//create new service to services list 
router.post('/', async (req,res) => {
	try {
		const serviceData = await Service.create({
			service_name: req.body.name,
			service_description: req.body.description,
			service_price: req.body.price
		});
		res.status(200).json(serviceData)
	} catch {
		req.status(400).json(err);
	} 
});

//get all services we offer for services page 
router.get ('/', async (req, res) => {
	try {
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

//get single service
router.get('./services/:id', async (req, res) => {
	try {
		const servicesData = await Service.findByPk(req.params.id);
		if (!quoteData) {
			res.status(404).json({ message: 'Service not found' });
			return;
		}
		res.status(200).json(servicesData);
	} catch {
		res.status(400).json(err)
	 }
});



module.exports = router;

