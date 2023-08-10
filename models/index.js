const User = require('./User');
const Service = require('./Service');
const Quote_Item = require('./Quote_Item');
const Quote = require('./Quote');




// no many to many: all one to many relationships
//user
//users have many Services
//users have many quotes
//users have many Quote_Item


//client
//client belong to one user
//client has many quotes
//client has many Service
//will have foreign key that points to the user


//Service 
//Services belongs to one user
//Service have many Quote_Item
//Service has many quotes
//will have foreign key for user
//will have foreign key for client

//quote 
//quote belongs to one user
//quote have many Quote_Item
//quote has many Service
//will have foreign key for user
//will have foreign key for client







module.exports = { User, Service, Quote, Quote_Item };