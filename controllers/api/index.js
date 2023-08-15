const router = require('express').Router();
const userRoutes = require('./userRoutes');
const serviceRoutes = require('./serviceRoutes');
const quoteRoutes= require ('./quoteRoutes')


router.use('/users', userRoutes);
router.use('/services',serviceRoutes);
router.use('/quotes',quoteRoutes);





module.exports = router;
