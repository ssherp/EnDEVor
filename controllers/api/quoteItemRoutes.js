const router = require('express').Router();
const { Quote_Item } = require('../../models');

// CREATE a quote item
router.post('/', async (req, res) => {
    try {
        const quoteItemData = await Quote_Item.create(req.body);
        res.status(200).json(quoteItemData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// GET all quotes
router.get('/', async (req, res) => {
    try {   
        const quoteData = await Quote.findAll();
        console.log(quoteData);
        const quotes = quoteData.map((quote) => quote.get({ plain: true }));
        console.log("quotes", quotes);
        res.status(200).json(quoteData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// // GET a quote
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


// DELETE a quote
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

module.exports = router;