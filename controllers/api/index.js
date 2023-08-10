const router = require('express').Router();
const userRoutes = require('./userRoutes');
const clientRoutes = require('./clientRoutes');
const productRoutes = require('./productRoutes');
const quoteRoutes= require ('./quoteRoutes')

router.use('/user', userRoutes);
router.use('/clients', clientRoutes);
router.use('/products',productRoutes);
router.use('/quotes',quoteRoutes);



module.exports = router;
