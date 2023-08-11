const router = require('express').Router();
const { User, Service, Quote, Quote_Item } = require('../../models');

router.get ('/', async (req, res) => {
	try {
		const services = await Service.findAll();
		res.status(200).json(services)
	} catch { 
		res.status(500).json(err);
	}
});

module.exports = router;