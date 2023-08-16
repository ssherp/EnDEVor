const router = require('express').Router();
const { Quote_Item } = require('../../models');


router.post('/', async (req, res) => {
    try {
      const { service_id, quantity } = req.body;
      const newQuoteItem = await Quote_Item.create({
        service_id,
        quantity,
      });
  
      return res.status(201).json(newQuoteItem);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Server error' });
    }
  });


module.exports = router;