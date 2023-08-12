const router = require('express').Router();
const { User, Service, Quote, Quote_Item } = require('../../models');



// part of home route?
//get all services we offer for services page 
router.get ('/services/user', async (req, res) => {
	try {
		const servicesData = await Service.findAll().catch((err) => {res.json(err);
		});
		const services = servicesData.map((service) => service.get({ plain: true }))
		}
	catch { 
		res.status(500).json(err);
	}
});

//add new services to list
router.post ('/services', async (req,res) => {

}) 




//assuming services is a different page...
router.post('/services', async (req,res) => {


})

module.exports = router;