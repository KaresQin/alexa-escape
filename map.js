

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
		scene : "<speak>Oh, I find a door here.</speak>"//,
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
    	scene : "<speak>but nothing in the box</speak>"
    }
}


module.exports = {
	grid: grid,
	item : item
};

