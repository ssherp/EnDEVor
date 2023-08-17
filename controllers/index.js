const router = require('express').Router();

const apiRoutes = require('./api/index');
const homeRoutes = require('./homeRoutes');
const serviceRoutes = require('./serviceRoutes');
const quoteFormRoutes = require('./quoteFormRoutes');
const quoteFileRoutes = require('./quoteFileRoutes');
 
//Not sure if different files are necessary
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
// services routes
router.use('/services', serviceRoutes);
// profile route -> when does user fill this out?
// quote routes
router.use('/quote_form', quoteFormRoutes);
router.use('/quote_file', quoteFileRoutes);


module.exports = router;
