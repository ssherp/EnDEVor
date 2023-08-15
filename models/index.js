const User = require("./User");
const Service = require("./Service");
const Quote = require("./Quote");
const Quote_Item = require("./Quote_Item");

Quote_Item.belongsTo(Quote, {
	foreignKey: "quote_id",
	onDelete: "CASCADE"
});

Quote.hasMany(Quote_Item, {
	foreignKey: "quote_id",

});

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

User.hasMany(Service, {
	foreignKey: "user_id",
});

Quote.belongsTo(User, {
	foreignKey: "user_id",
});


User.hasMany(Quote, {
	foreignKey: "user_id",
});


//reorganized relationships, this one might be redundant. 
//quoteitem -> services/:id -> user 

User.hasMany(Quote_Item, {
	foreignKey: "user_id",
});

module.exports = { User, Service, Quote, Quote_Item };