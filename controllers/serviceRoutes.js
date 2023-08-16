const router = require('express').Router();
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {
	try {
		res.render('test-servers', {
			logged_in: req.session.logged_in
		});
	} catch (error) {
		res.json({ error, loggedIn: req.session.log_in })
	}
})

module.exports = router;