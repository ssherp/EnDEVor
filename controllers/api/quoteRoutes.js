//-------------------- Requires --------------------//

//Express Package
const router = require('express').Router();


//Quote & Quote Item Model
const { Quote } = require('../../models');





//-------------------- CRUD & File Paths --------------------//

//Create a Quote with multiple Quote Items
router.post('/quotes', async (req, res) => {
    try {
      const {
        project_title,
        project_due_date,
        user_first,
        user_last,
        user_email,
        user_phone,
        client_first,
        client_last,
        client_email,
        client_phone,
        client_address,
        client_address_2,
        client_city,
        client_state,
        client_zip,
        quote_items,
        total_price,
        notes
      } = req.body;
  
      const newQuote = await Quote.create({
        project_title,
        project_due_date,
        user_first,
        user_last,
        user_email,
        user_phone,
        client_first,
        client_last,
        client_email,
        client_phone,
        client_address,
        client_address_2,
        client_city,
        client_state,
        client_zip,
        quote_items,
        total_price,
        notes
      });
      res.status(201).json(newQuote);
    } catch (error) {
      res.status(500).json({ error: 'Error creating quote' });
    }
  });



//Get all quotes
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



//Get a single quote
router.get('/:id', async (req, res) => {
    try {
    const quote_id = req.params.id;
    const quoteData = await Quote.findByPk(quote_id);

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