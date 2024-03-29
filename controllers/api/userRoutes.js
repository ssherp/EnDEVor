//-------------------- Requires --------------------//

//Express Package
const router = require('express').Router();


//USER Model
const { User } = require('../../models');





//-------------------- CRUD --------------------//

//Create a new User
router.post('/', async (req, res) => {
  console.log(req)
  try {
    const userData = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});



//Get a User
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});



// Update a User
router.put('/profile', async (req, res) => {
  console.log("your hit the route")
  try {
    console.log (req.body)
    const { firstName, lastName, companyName, address, city, state, zip, phone, password } = req.body;

    const updatedUserData = await User.update(
      {
        firstName,
        lastName,
        companyName,
        address,
        city,
        state,
        zip,
        phone,
        password,
      },
      {
        where: {
          id: req.session.user_id,
        },
      }
    );
    console.log (updatedUserData)
    if (updatedUserData) {
      res.status(200).json(updatedUserData);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});



//End a user session
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});





//-------------------- Export User CRUD Routes --------------------//
module.exports = router;