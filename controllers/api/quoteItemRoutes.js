//-------------------- Requires --------------------//

//Express Package
const router = require('express').Router();


//Quote Item Model
const { Quote_Item } = require('../../models');





//-------------------- CRUD File Paths: Part II --------------------//

//Create a new quote items
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


  //Get a single quote items
  router.get('/:id', async (req, res) => {
    try {
    const quoteItemId = req.params.id;
    const quoteItemData = await quoteItemId.findByPk(quoteItemId);

        if (!quoteItemData) {
             res.status(404).json({ message: 'Quote Items not found!' });
            return;
        }
        res.status(200).json(quoteItemData);
    } catch (err) {
        res.status(500).json(err);
    }
});


  //-------------------- Export Quote CRUD Routes --------------------//

module.exports = router;