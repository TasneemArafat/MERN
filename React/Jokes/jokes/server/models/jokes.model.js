const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: {
		type: String,
		minlength: [10, "The joke must be 10 characters at leats"]
	},

	punchline: {
		type: String,
		minlength: [3, "The punchline must be 3 characters at leats"]
	}
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;