//-------------------- Requires --------------------//

//Express Package
const router = require('express').Router();


//File Path Files
const userRoutes = require('./userRoutes');
const serviceRoutesApi = require('./serviceRoutesApi');
const quoteRoutes= require ('./quoteRoutes')
const quoteItemRoutes= require ('./quoteItemRoutes')


<<<<<<< HEAD
router.use('/users', userRoutes);
router.use('/services',serviceRoutesApi);
router.use('/quotes',quoteRoutes);
=======



//-------------------- CRUD File Paths: Part II --------------------//

//Users
router.use('/users', userRoutes);


//Services
router.use('/services',serviceRoutes);


//Quote Items
>>>>>>> main
router.use('/quote_items',quoteItemRoutes);


//Quotes
router.use('/quotes',quoteRoutes);



<<<<<<< HEAD
=======


//-------------------- Export Routes --------------------//
>>>>>>> main
module.exports = router;
