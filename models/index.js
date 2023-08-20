//-------------------- Require Model Files --------------------//
const User = require("./User");
<<<<<<< HEAD
const Service = require("./Service");
=======
const Service = require("./Services");
>>>>>>> main
const Quote = require("./Quote");
const Quote_Item = require("./Quote_Item");




<<<<<<< HEAD
Quote_Item.belongsTo(Service, {
	foreignKey: "service_id"
});

Service.hasMany(Quote_Item, {
	foreignKey: "service_id"
});

Service.belongsTo(User, {
	foreignKey: "user_id",
	onDelete: "CASCADE"
});

=======

//-------------------- Model Associations --------------------//

//USER
>>>>>>> main
User.hasMany(Service, {
	foreignKey: "user_id",
});

User.hasMany(Quote, {
	foreignKey: "user_id",
});

User.hasMany(Quote_Item, {
	foreignKey: "user_id",
});

<<<<<<< HEAD
=======


//SERVICE
Service.belongsTo(User, {
	foreignKey: "user_id",
	onDelete: "CASCADE"
});

Service.hasMany(Quote_Item, {
	foreignKey: "service_id"
});



//QUOTE ITEM
Quote_Item.belongsTo(Quote, {
	foreignKey: "quote_id",
	onDelete: "CASCADE"
});

Quote_Item.belongsTo(Service, {
	foreignKey: "service_id"
});



//QUOTE
Quote.belongsTo(User, {
	foreignKey: "user_id",
});

Quote.hasMany(Quote_Item, {
	foreignKey: "quote_id",
});





//-------------------- Export Models --------------------//
>>>>>>> main
module.exports = { User, Service, Quote, Quote_Item };