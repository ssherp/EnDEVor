const router = require('express').Router();
const userRoutes = require('./userRoutes');
const serviceRoutes = require('./serviceRoutes');
const quoteRoutes= require ('./quoteRoutes')
const quoteRoutes= require ('./quoteRoutes')

router.use('/user', userRoutes);
router.use('/services',serviceRoutes);
router.use('/quoteItem',quoteRoutes);
router.use('/quotes',quoteRoutes);



module.exports = router;
