const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const servicesRoutes = require('./servicesRoutes');
const editServiceRoutes = require('./editServiceRoutes');
const profileRoutes = require('./profileRoutes');
const quoteFormRoutes = require('./quoteFormRoutes');
const quoteFileRoutes = require('./quoteFileRoutes');


//Not sure if different files are necessary
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/services', servicesRoutes);
router.use('/edit_service', editServiceRoutes);
router.use('/profile', profileRoutes);
router.use('/quote_form', quoteFormRoutes);
router.use('/quote_file', quoteFileRoutes);


module.exports = router;
