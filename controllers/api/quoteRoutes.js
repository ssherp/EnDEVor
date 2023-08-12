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
      console.log(quoteDataData);
      const quotes = quoteData.map((quote) => quote.get({ plain: true }));
      console.log("quotes", quotes);
      res.status(200).json(quoteData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// GET a quote
router.get('/:id', async (req, res) => {
    try {
      const quoteData = await quote.findByPk(req.params.id, {
        include: [{ model: Quote, through: Trip, as: 'location_travellers' }]
      });
  
      if (!quoteData) {
        res.status(404).json({ message: 'No location found with this id!' });
        return;
      }
  
      res.status(200).json(locationData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// DELETE a quote
router.delete('/:id', async (req, res) => {
    try {
      const tripData = await Trip.destroy({
        where: { id: req.params.id }
      });
      if (!tripData) {
        res.status(404).json({ message: 'No trip with this id!' });
        return;
      }
      res.status(200).json(tripData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;