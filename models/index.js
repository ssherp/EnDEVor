const User = require('./User');
const Product = require('./Product');
const Client = require('./Client');
const Quote = require('./Quote');




// no many to many: all one to many relationships
//user
//users have many products
//users have many quotes
//users have many clients


//client
//client belong to one user
//client has many quotes
//client has many product
//will have foreign key that points to the user


//product 
//products belongs to one user
//product have many clients
//product has many quotes
//will have foreign key for user
//will have foreign key for client

//quote 
//quote belongs to one user
//quote have many clients
//quote has many product
//will have foreign key for user
//will have foreign key for client







module.exports = { User, Product, Client, Quote };