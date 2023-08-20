//-------------------- Requires --------------------//

//Express Package
const router = require('express').Router();


//File Path Files
const apiRoutes = require('./api/index');
const homeRoutes = require('./homeRoutes');
const serviceRoutes = require('./serviceRoutes');
const quoteFormRoutes = require('./quoteFormRoutes');
const quoteFileRoutes = require('./quoteFileRoutes');
 




//-------------------- File Paths: Part I --------------------//

//CRUD Routes
router.use('/api', apiRoutes);


//Render Routes
router.use('/', homeRoutes);


// Services Routes
router.use('/services', serviceRoutes);


//Create Quote Routes
router.use('/quote_form', quoteFormRoutes);


//View and Download Quote Routes
router.use('/quote_file', quoteFileRoutes);



//-------------------- Export Routes --------------------//
module.exports = router;
