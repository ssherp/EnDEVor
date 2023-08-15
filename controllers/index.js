const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const servicesRoutes = require('./servicesRoutes');
const editServiceRoutes = require('./editServicesRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/services', servicesRoutes);
router.use('/edit_service', );


module.exports = router;
