/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

'use strict';
var storage = require('./storage');
// var utils = require('./utils');
var map = require('./map');


var registerIntentHandlers = function (intentHandlers, skillContext) {
    intentHandlers.NewGameIntent = function (intent, session, response) {
        //reset scores for all existing players
        storage.loadGame(session, function (currentGame) {
        	response.tell('');
        });


    };

    intentHandlers.MoveNorthIntent = function (intent, session, response) {
        storage.loadGame(session, function (currentGame) {
            initial(currentGame);
            var clonedArray = currentGame.data.position.concat();
            clonedArray[0] -= 1;
            checkNextStatus(clonedArray, response);
        });
    };

    intentHandlers.MoveSouthIntent = function (intent, session, response) {
        storage.loadGame(session, function (currentGame) {
            initial(currentGame);
            var clonedArray = currentGame.data.position.concat();
            clonedArray[0] += 1;
            checkNextStatus(clonedArray, response);
        });
    };

    intentHandlers.MoveWestIntent = function (intent, session, response) {
        storage.loadGame(session, function (currentGame) {
            initial(currentGame);
            var clonedArray = currentGame.data.position.concat();
            clonedArray[1] -= 1;
            checkNextStatus(clonedArray, response);
        });
    };

    intentHandlers.MoveEastIntent = function (intent, session, response) {
        storage.loadGame(session, function (currentGame) {
            initial(currentGame);
            var clonedArray = currentGame.data.position.concat();
            clonedArray[1] += 1;
            checkNextStatus(clonedArray, response);
        });
    };

    intentHandlers.GoWestIntent = function (intent, session, response) {
        //reset scores for all existing players
        storage.loadGame(session, function (currentGame) {
        	var result = utils.move.west();
        })
    };
    intentHandlers.ResetPlayersIntent = function (intent, session, response) {
        //reset scores for all existing players
        storage.loadGame(session, function (currentGame) {
        	var result = utils.move.west();
        })
    };


    intentHandlers['AMAZON.CancelIntent'] = function (intent, session, response) {
        if (skillContext.needMoreHelp) {
            response.tell('Okay.  Whenever you\'re ready, you can start giving points to the players in your game.');
        } else {
            response.tell('');
        }
    };

    intentHandlers['AMAZON.StopIntent'] = function (intent, session, response) {
        if (skillContext.needMoreHelp) {
            response.tell('Okay.  Whenever you\'re ready, you can start giving points to the players in your game.');
        } else {
            response.tell('');
        }
    };
};

function initial(currentGame){
    if(!currentGame.data.position[0] && !currentGame.data.position[1]){
        response.ask('New game started. Who\'s your first player?',
        'Please tell me who\'s your first player?');
        currentGame.data.position[0] = currentGame.data.position[1] = 2;
        currentGame.update(currentGame.data.position);
    }
}

function checkNextStatus(clonedArray, response){
    var x = clonedArray[0];
    var y = clonedArray[1];
    if(map[x] && map[x][y]){
        //call a function and then update the array
        // outputResponse(status, response);
        return storage.update(clonedArray);
    } else{
        response.tell('there is a wall');
    }
}

function outputResponse(status, response){
    switch(status) {
    case 1:
        response.tell("");
        break;
    case 2:
        response.tell("");
        break;
    default:
        response.tell("Oops, something is wrong")
    }
}

exports.register = registerIntentHandlers;
