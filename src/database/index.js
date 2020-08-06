const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false');
mongoose.Promise = global.Promise;

module.exports = mongoose;