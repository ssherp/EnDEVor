const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const serviceRoutes = require('./serviceRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/services', serviceRoutes);


module.exports = router;
