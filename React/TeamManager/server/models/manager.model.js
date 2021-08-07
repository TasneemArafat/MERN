const mongoose = require('mongoose');
	const PlayerSchema = new mongoose.Schema({
		playerName: {
			type: String,
			required: [true, "Name is required"],
			minlength: [2, "Player name must be at least 2 characters long"]
		},
        preferredPosition: {
            type: String,
        },
        Game1: {
            type:String
        },
        Game2: {
            type:String
        },
        Game3: {
            type:String
        }
    },
		{timestamps:true}
	);
	const Player = mongoose.model('Player', PlayerSchema);
	module.exports = Player;