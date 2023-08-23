//-------------------- Requires --------------------//

//Express Package
const router = require('express').Router();


//File Path Files
const userRoutes = require('./userRoutes');
const serviceRoutes = require('./serviceRoutes');
const quoteRoutes= require ('./quoteRoutes')
// const quoteItemRoutes= require ('./quoteItemRoutes')





//-------------------- CRUD File Paths: Part II --------------------//

//Users
router.use('/users', userRoutes);


//Services
router.use('/services',serviceRoutes);


//Quotes
router.use('/quotes',quoteRoutes);


//Quote Items
// router.use('/quote_items',quoteItemRoutes);





//-------------------- Export Routes --------------------//
module.exports = router;
