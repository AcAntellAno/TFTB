var mongoose = requre('mongoose');

var userSchema = new mongoose.Schema({
	username: String,
	password: String
});

module.exports = mongose.model('User', userSchema);