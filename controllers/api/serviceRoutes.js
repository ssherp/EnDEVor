//-------------------- Requires --------------------//

//Express Package
const router = require('express').Router();


//Service & User Model
const { Service , User } = require('../../models');


//Helper
const withAuth = require('../../utils/auth');





//-------------------- CRUD & File Paths --------------------//

//Create a new service
router.post('/', async (req,res) => {
	console.log(req.body)
	//try {
		const newService = await Service.create({
			service_name: req.body.service_name,
			service_description: req.body.service_description,
			service_price: req.body.service_price,
			user_id: req.session.user_id
		});
		res.status(200).json(newService);
	// } catch (err) {
	// 	res.status(500).json(err);
	// } 
});



//Get all services
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



//GET a service
router.get('/:id', async (req, res) => {
	try {
		const servicesData = await Service.findByPk(req.params.id);
		const service = servicesData.get({ plain: true });

		if (!servicesData) {
			res.status(404).json({ message: 'No service found with this ID' });
			return;
		}
		res.status(200).json(servicesData);
	} catch (err) {
		res.status(500).json(err)
	 }
});



//Update a service by id  - 13.7, routes
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



//Delete a service
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





//-------------------- Export Service CRUD Routes --------------------//

module.exports = router;