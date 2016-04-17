'use strict';
var textHelper = require('./textHelper'),
    storage = require('./storage');

var registerIntentHandlers = function (intentHandlers, skillContext) {

        intentHandlers.MoveNorthIntent = function (intent, session, response) {

        storage.loadGame(session, function (currentGame) {
		if(!currentGame.data.position[0] && !currentGame.data.position[1]){
			response.ask('New game started. Who\'s your first player?',
                    'Please tell me who\'s your first player?');
			return;
		}
        });

        var clonedArray = currentGame.data.position.concat();
        clonedArray[0] -= 1;
        checkNextStatus(clonedArray[0], clonedArray[1]);
        // var array = string.split(',');
        // var x = array[0];
        // var y = array[1];
        // x -= 1;
        // currentLocation = x + "," + y;



    };






};

function checkNextStatus(x, y){
                //0 means wall
                if(map[x][y] == 0){
                        return false;
                } else{
                        return map[x][y];
                }
}