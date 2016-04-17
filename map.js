

var grid = [
	[0, 0, 0, 0, 0, 0], 
	[0, 1, 1, 4, 3, 0], 
	[0, 1, 1, 1, 2, 0], 
	[0, 1, 1, 1, 1, 0], 
	[0, 1, 1, 1, 1, 0], 
	[0, 0, 0, 0, 0, 0]
]


var item = {
	1 : {
		scene : "<speak>I here.</speak>"
	},
	2 : {
		scene : "<speak>There is table</speak>",
		IntentedSearch: 5
	},
	3 : {
		scene : "<speak>Oh, I find a door here. But it's locked.</speak>"//,
		// image:{

		// }
	},
    4 : {
    	scene : "<speak>there is box, should I open it?</speak>",
    	IntentedSearch: 6
    },
    5 : {
    	scene : "<speak>There is a paper on the table, it looks like a password</speak>"//,
    	// image:{

    	// }
    },
    6:{
    	scene : "<speak>OK, Let me check <audio src=\"https://s3.amazonaws.com/angelhack-echo/audio/snif.mp3\"/> em <audio src=\"https://s3.amazonaws.com/angelhack-echo/audio/open-box.mp3\"/>  <audio src=\"https://s3.amazonaws.com/angelhack-echo/audio/scream.mp3\"/> <audio src=\"https://s3.amazonaws.com/angelhack-echo/audio/cat.mp3\"/> A cat!, it run to the east!</speak>"
    },
	7 : {
		scene : "<speak>Yes, the door is open. I escaped</speak>",
		escaped:true
	},
}


module.exports = {
	grid: grid,
	item : item
};

