//-------------------- Requires --------------------//

// //Express Package
// const router = require('express').Router();


// //Quote Item Model
// const { Quote_Item, Quote } = require('../../models');





// //-------------------- CRUD File Paths: Part II --------------------//

// //Create a Quote with multiple Quote Items
// router.post('/quotes', async (req, res) => {
//   try {
//     const {
//       project_title,
//       project_due_date,
//       user_first,
//       user_last,
//       user_email,
//       user_phone,
//       client_first,
//       client_last,
//       client_email,
//       client_phone,
//       client_address,
//       client_address_2,
//       client_city,
//       client_state,
//       client_zip,
//       quote_items,
//       total_price,
//       notes
//     } = req.body;

//     const newQuote = await Quote.create({
//       project_title,
//       project_due_date,
//       user_first,
//       user_last,
//       user_email,
//       user_phone,
//       client_first,
//       client_last,
//       client_email,
//       client_phone,
//       client_address,
//       client_address_2,
//       client_city,
//       client_state,
//       client_zip,
//       quote_items,
//       total_price,
//       notes
//     });
//     res.status(201).json(newQuote);
//   } catch (error) {
//     res.status(500).json({ error: 'Error creating quote' });
//   }
// });


// //Get a single quote items
// router.get('/:id', async (req, res) => {
//   try {
//     const quoteItemId = req.params.id;
//     const quoteItemData = await quoteItemId.findByPk(quoteItemId);

//     if (!quoteItemData) {
//       res.status(404).json({ message: 'Quote Items not found!' });
//       return;
//     }
//     res.status(200).json(quoteItemData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// //-------------------- Export Quote CRUD Routes --------------------//

// module.exports = router;