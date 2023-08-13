const User = require("./User");
const Service = require("./Service");
const Quote_Item = require("./Quote_Item");
const Quote = require("./Quote");

User.hasMany(Service, {
	foreignKey: "user_id",
});

User.hasMany(Quote, {
	foreignKey: "user_id",
});

User.hasMany(Quote_Item, {
	foreignKey: "user_id",
});

Service.belongsTo(User, {
	foreignKey: "user_id",
	onDelete: "CASCADE"
});

Service.hasMany(Quote_Item, {
	foreignKey: "service_id"
});

Quote_Item.belongsTo(Service, {
	foreignKey: "service_id"
});

Quote_Item.belongsTo(Quote, {
	foreignKey: "quote_id",
});

Quote.hasMany(Quote_Item, {
	foreignKey: "quote_item_id",
	onDelete: "CASCADE"
});

Quote.belongsTo(User, {
	foreignKey: "user_id",
});

module.exports = { User, Service, Quote, Quote_Item };