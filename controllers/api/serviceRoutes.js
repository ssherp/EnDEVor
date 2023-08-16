const router = require('express').Router();
const { Service , User } = require('../../models');
const withAuth = require('../../utils/auth')

//create new service to services list 
router.post('/', async (req,res) => {
	try {
		const serviceData = await Service.create({
			service_name: req.body.service_name,
			service_description: req.body.service_description,
			service_price: req.body.service_price,
		});
		res.status(200).json(serviceData);
	} catch (err) {
		res.status(500).json(err);
	} 
});

//GET all services
router.get ('/',  async (req, res) => {
	try {
		const servicesData = await Service.findAll();
		console.log(servicesData)
		const services = servicesData.map((service) => service.get({ plain: true })) 
		res.status(200).json(services)
		console.log(services) 
		}
	catch (err) { 
		res.status(500).json(err);
	}
});

//GET all services for logged-in user
router.get ('/', withAuth, async (req, res) => {
	try {
		const servicesData = await Service.findAll({
			where: { user_id: req.session.user_id }
		});

		const services = servicesData.map((service) => service.get({ plain: true })) 
		// res.render('service', {services})
		res.status(200).json(services)
		}
	catch (err) { 
		res.status(500).json(err);
	}
});

//GET single service
router.get('/:id', async (req, res) => {
	try {
		const servicesData = await Service.findByPk(req.params.id);
		const service = servicesData.get({ plain: true });

		if (!servicesData) {
			res.status(404).json({ message: 'No service found with this ID' });
			return;
		}
		res.render('addService', { service })
		res.status(200).json(servicesData);
	} catch (err) {
		res.status(500).json(err)
	 }
});

//edit service by id  - 13.7, routes
router.put('/:id', async (req,res) => {
	try {
		const serviceUpdate = await Service.update(serviceUpdate, 
		{
			service_name: req.body.service_name,
			description: req.body.description,
			price: req.body.price
		},
		{
			where: {
				id: req.params.id, // use req.params.service_id depending on route
			}
		}
	);
		res.status(200).json(serviceUpdate)
	} catch (err) {
		res.status(500).json(err);
	}
}); 

//delete method but id, services id placeholder for future services database pathway
router.delete('/:id', async (req,res) => {
	try {
		const servicesData = await Service.destroy({
			where: {
				id: req.params.id,
				user_id: req.session.user_id,
			},})
			if (!serviceData) {
				res.status(404).json({ message: 'No service found with this ID' });
				return;
			}
			res.status(200).json(servicesData);
		} catch (err) {
			res.status(500).json(err);
		}
});

module.exports = router;

		// ({
		// 	...req.body,
		// 	user_id: req.session.user_id
		// });