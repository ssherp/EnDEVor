const router = require('express').Router();
const { Service, User , Quote , Quote_Item , } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res)=>{
	try{
		const servicesData = await User.findByPk(req.session.user_id, {
			include: [{ model: Service }]
		});

		const services = servicesData.get({ plain: true })
		 res.render('add-service', { 
			...services,
			logged_in: req.session.logged_in 
		 });
	}catch(error){
		 res.status(500).json({ error, loggedIn: req.session.log_in })
	}
 })

 module.exports = router;