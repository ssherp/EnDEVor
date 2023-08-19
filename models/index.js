//-------------------- Require Model Files --------------------//
const User = require("./User");
const Service = require("./Services");
const Quote = require("./Quote");
const Quote_Item = require("./Quote_Item");





//-------------------- Model Associations --------------------//

//USER
User.hasMany(Service, {
	foreignKey: "user_id",
});

User.hasMany(Quote, {
	foreignKey: "user_id",
});

User.hasMany(Quote_Item, {
	foreignKey: "user_id",
});



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
module.exports = { User, Service, Quote, Quote_Item };