const router = require('express').Router();
const { Service, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', (req, res) => {
  
    res.render('login');
  });
  
  module.exports = router