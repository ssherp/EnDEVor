const router = require('express').Router();
const { Service } = require('../../models');
const withAuth = require('../../utils/auth')

//create new service to services list 
router.post('/', async (req,res) => {
	try {
		const serviceData = await Service.create({
			service_name: req.body.name,
			description: req.body.description,
			price: req.body.price
		});
		res.status(200).json(serviceData)
	} catch (err) {
		req.status(500).json(err);
	} 
});

//GET all services
router.get ('/', withAuth, async (req, res) => {
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
		console.log(servicesData)
		const services = servicesData.map((service) => service.get({ plain: true })) 
		res.status(200).json(services)
		console.log(services) 
		}
	catch (err) { 
		res.status(500).json(err);
	}
});

/*potentially add this code instead of other models required.
const servicesData = await Service.findAll({
	include: [{ model: Service }], 
}); 
*/

//GET single service
router.get('./:id', async (req, res) => {
	try {
		const servicesData = await Service.findByPk(req.params.id);
		if (!servicesData) {
			res.status(404).json({ message: 'No service found with this ID' });
			return;
		}
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
router.delete('./:id', async (req,res) => {
	try {
		const servicesData = await Service.destroy({
			where: {
				id: req.params.id,
			}})
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

