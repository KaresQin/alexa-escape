var map = require("./map");
var storage = require("./storage");

function updateStorage(position){
	storage.update({
		position:position
	})
}

/*
 * go north : position [0,+1]
 * go south : position [0,-1]
 * go west : position [-1,0]
 * go east : position [1,0]
*/
var exports = {
	move :{
		west : function(){

			updateStorage(position);
		},
		east : function(){

			updateStorage(position);
		},
		north : function(){


			updateStorage(position);
		},
		south : function(){

			updateStorage(position);
		}
	}
}

module.exports = exports;