

var grid = [
	[0, 0, 0, 0, 0], 
	[0, 5, 0, 0, 0], 
	[0, 3, 1, 0, 0], 
	[0, 0, 0, 0, 0], 
	[0, 0, 0, 0, 0]
]


var TestItem1 = {
	1 : {
		scene : "I entered a empty room. I saw a door on the left, \
		         and there is a photo on the wall",
		search : 2
	},
	2 : {
		scene : "it's a woman's potrait."
	},
	3 : {
		scene : "Wow, looks like it is a big dinning room. \
		         There is a table and three chairs.",
		search: 4
	},
    4 : {
    	scene: "there is letter"
    }

}

var TestItem2 = {
	1 : {
		scene : "<speak>  I saw a door on the left, \
		         and there is a photo on the wall</speak>",
		intentedSearch : 2,
		intentedMove : 3
	},
	2 : {
		scene : "<speak>it's a woman's potrait.</speak>",
		IntentedMove: 3
	},
	3 : {
		scene : "<speak>Wow, looks like it is a big dining room. \
					<audio src=\"https://s3.amazonaws.com/alexa-transporter/audio/rat.mp3\"/> \
		         There are a table and three chairs. \
		         a giant door is to the north</speak>",
		intentedSearch : 4,
		intentedMove : 5
	},
    4 : {
    	scene : "<speak>there is letter</speak>",
    	intentedMove: 5
    },
    5 : {
    	scene : "<speak>You have escaped the room</speak>",
    	escaped : true
    }
}


module.exports = {
	grid: grid,
	item : TestItem2
};
