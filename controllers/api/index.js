const router = require('express').Router();
const userRoutes = require('./userRoutes');
const clientRoutes = require('./clientRoutes');
const productRoutes = require('./serviceRoutes');
const quoteRoutes= require ('./quoteRoutes')

router.use('/user', userRoutes);
router.use('/clients', clientRoutes);
router.use('/products',productRoutes);
router.use('/quoteItem',quoteItemRoutes);
router.use('/quotes',quoteRoutes);



module.exports = router;
