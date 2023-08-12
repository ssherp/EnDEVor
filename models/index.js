const User = require('./User');
const Service = require('./Service');
const Quote_Item = require('./Quote_Item');
const Quote = require('./Quote');




// no many to many: all one to many relationships
//user
//users have many Services
//users have many quotes
//users have many Quote_Item

//Service 
//Services belongs to one user
//Service have many Quote_Item
//Service has many quotes
//will have foreign key for user
//will have foreign key for client

//quote_item
//quote_item belongs to service
//quote_item belongs to quote
//will have foreign key for service
//will have foreign key for quote
Quote_Item.belongsTo(Service, {
    foreignKey: "service_id"
});

Quote_Item.belongsTo(Quote, {
    foreignKey: "quote_id"
});

//quote 
//quote belongs to user
//quote have many Quote_Item
//quote has many Service
//will have foreign key for user
Quote.hasMany(Quote_Item, {
    foreignKey: 'quote_item_id',
    onDelete: 'CASCADE'
})

Quote.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Service, Quote, Quote_Item };