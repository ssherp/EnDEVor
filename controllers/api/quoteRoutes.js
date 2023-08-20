//-------------------- Requires --------------------//

//Express Package
const router = require('express').Router();


//Quote & Quote Item Model
const { Quote, Quote_Item } = require('../../models');





//-------------------- CRUD & File Paths --------------------//

//Create a new quote
router.post('/', async (req, res) => {
    try {
        const quoteData = await Quote.create(req.body);
        //do we need to add quote_items to model?
        for (const quoteItem of req.body.quote_items) {
            await Quote_Item.create(quoteItem)
        }
        // res.send('Quote PDF generated successfully');
        res.status(200).json(quoteData);
    } catch (err) {
        res.status(500).json(err);
    }
});



//Get all quotes
router.get('/', async (req, res) => {
    try {   
        const quoteData = await Quote.findAll({
            include: [{model : Quote_Item}]
        });
        console.log(quoteData);
        const quotes = quoteData.map((quote) => quote.get({ plain: true }));
        console.log("quotes", quotes);
        res.status(200).json(quoteData);
    } catch (err) {
        res.status(500).json(err);
    }
});



//Get a single quote
router.get('/:id', async (req, res) => {
    try {
    const quoteId = req.params.id;
    const quoteData = await quoteId.findByPk(quoteId);

        if (!quoteData) {
             res.status(404).json({ message: 'Quote not found!' });
            return;
        }
        res.status(200).json(quoteData);
    } catch (err) {
        res.status(500).json(err);
    }
});


//Delete a quote
router.delete('/:id', async (req, res) => {
    try {
        const quoteData = await Quote.destroy({
            where: { id: req.params.id }
        });
        if (!quoteData) {
            res.status(404).json({ message: 'Quote not found!' });
            return;
        }
        res.status(200).json(quoteData);
    } catch (err) {
        res.status(500).json(err);
    }
});





//-------------------- Export Quote CRUD Routes --------------------//

module.exports = router;