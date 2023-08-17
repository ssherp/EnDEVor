const User = require("./User");
const Services = require("./Services");
const Quote = require("./Quote");
const Quote_Item = require("./Quote_Item");

Quote_Item.belongsTo(Quote, {
	foreignKey: "quote_id",
	onDelete: "CASCADE"
});

Quote.hasMany(Quote_Item, {
	foreignKey: "quote_id",

});

Quote_Item.belongsTo(Services, {
	foreignKey: "service_id"
});

Services.hasMany(Quote_Item, {
	foreignKey: "service_id"
});

Services.belongsTo(User, {
	foreignKey: "user_id",
	onDelete: "CASCADE"
});

User.hasMany(Services, {
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

module.exports = { User, Services, Quote, Quote_Item };