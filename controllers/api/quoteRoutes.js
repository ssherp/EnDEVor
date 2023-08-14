const router = require('express').Router();
const { Quote } = require('../../models');

// CREATE a quote
router.post('/', async (req, res) => {
  try {
    const quoteData = await Quote.create(req.body);
    res.status(200).json(quoteData);
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
      const quoteData = await quote.findByPk(req.params.id, {
        include: [{ model: , through: , as: '' }]
      });
  
      if (!quoteData) {
        res.status(404).json({ message: 'No quote found with this id!' });
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
      if (!quotepData) {
        res.status(404).json({ message: 'No quote with this id!' });
        return;
      }
      res.status(200).json(quoteData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;