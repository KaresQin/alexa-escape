

var grid = [
	[0, 0, 0, 0, 0], 
	[0, 5, 0, 0, 0], 
	[0, 3, 1, 0, 0], 
	[0, 0, 0, 0, 0], 
	[0, 0, 0, 0, 0]
]


var item = {
	1 : {
		scene : "<speak>I saw a door on the west.</speak>",
		intentedSearch : 2,
		intentedMove : [1,2]
	},
	2 : {
		scene : "<speak>it's a woman's potrait.</speak>",
		IntentedMove: [1,2]
	},
	3 : {
		scene : "<speak>Wow, looks like it is a big dining room. \
					<audio src=\"https://s3.amazonaws.com/alexa-transporter/audio/rat.mp3\"/> \
		         There are a table and three chairs. \
		         a giant door is to the north</speak>",
		intentedMove : [1,2]
	},
    4 : {
    	scene : "<speak>there is letter</speak>",
    	intentedMove: [1,2]
    },
    5 : {
    	scene : "<speak>You have escaped the room</speak>",
    	escaped : true
    }
}


module.exports = {
	grid: grid,
	item : item
};

