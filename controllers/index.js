const router = require('express').Router();

const apiRoutes = require('./api/index');
const homeRoutes = require('./homeRoutes');
const servicesRoutes = require('./addServiceRoutes');
const editServiceRoutes = require('./editServiceRoutes');
const quoteFormRoutes = require('./quoteFormRoutes');
const quoteFileRoutes = require('./quoteFileRoutes');
 
//Not sure if different files are necessary
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
// services routes
router.use('/services', servicesRoutes);
router.use('/services/edit', editServiceRoutes);
// profile route -> when does user fill this out?
// quote routes
router.use('/quote-form', quoteFormRoutes);
router.use('/quote-file', quoteFileRoutes);


module.exports = router;
