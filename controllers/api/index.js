const router = require('express').Router();
const userRoutes = require('./userRoutes');
const serviceRoutes = require('./serviceRoutes');
const quoteRoutes= require ('./quoteRoutes')
const quoteItemRoutes= require ('./quoteItemRoutes')



router.use('/users', userRoutes);
router.use('/services',serviceRoutes);
router.use('/quotes',quoteRoutes);
router.use('/quote_items',quoteItemRoutes);







module.exports = router;
