/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

'use strict';
var storage = require('./storage');
var map = require('./map');


var registerIntentHandlers = function (intentHandlers, skillContext) {
    intentHandlers.NewGameIntent = function (intent, session, response) {
        //reset scores for all existing players
        storage.loadGame(session, function (currentGame) {
            if(!initial(currentGame, response)){
                checkNextStatus(currentGame, currentGame.data.position, response);    
            }
        });
    };

    intentHandlers.MoveNorthIntent = function (intent, session, response) {
        storage.loadGame(session, function (currentGame) {
            var clonedArray = currentGame.data.position.concat();
            clonedArray[0] -= 1;
            checkNextStatus(currentGame, clonedArray, response);
        });
    };

    intentHandlers.MoveSouthIntent = function (intent, session, response) {
        storage.loadGame(session, function (currentGame) {
            var clonedArray = currentGame.data.position.concat();
            clonedArray[0] += 1;
            checkNextStatus(currentGame, clonedArray, response);
        });
    };

    intentHandlers.MoveWestIntent = function (intent, session, response) {
        storage.loadGame(session, function (currentGame) {
            var clonedArray = currentGame.data.position.concat();
            clonedArray[1] -= 1;
            checkNextStatus(currentGame, clonedArray, response);
        });
    };

    intentHandlers.MoveEastIntent = function (intent, session, response) {
        storage.loadGame(session, function (currentGame) {
            var clonedArray = currentGame.data.position.concat();
            clonedArray[1] += 1;
            checkNextStatus(currentGame, clonedArray, response);
        });
    };
  
    intentHandlers.ResetPlayersIntent = function (intent, session, response) {
        //reset scores for all existing players
        storage.loadGame(session, function (currentGame) {
        	var result = utils.move.west();
        })
    };


    intentHandlers['AMAZON.CancelIntent'] = function (intent, session, response) {
        if (skillContext.needMoreHelp) {
            response.tell('Okay. I\'m teleporting back to assist you. Hope you enjoy the game');
        } else {
            response.tell('');
        }
    };

    intentHandlers['AMAZON.StopIntent'] = function (intent, session, response) {
        if (skillContext.needMoreHelp) {
            response.tell('Okay. I\'m teleporting back to assist you. Hope you enjoy the game');
        } else {
            response.tell('');
        }
    };
};

function initial(currentGame, response){
    if(!currentGame.data.position[0] && !currentGame.data.position[1]){
        response.ask('New game started. Who\'s your first player?',
        'Please tell me who\'s your first player?');
        currentGame.data.position[0] = currentGame.data.position[1] = 2;
        currentGame.update(currentGame.data.position);
        return true;
    }
}

function checkNextStatus(currentGame, clonedArray, response){
    var x = clonedArray[0];
    var y = clonedArray[1];
    console.log("try", x, y);
    if(map.grid[x] && map.grid[x][y]){
        //call a function and then update the array
        console.log("in", x, y);
        if(!outputResponseAndCheck(currentGame, map.grid[x][y], response)){
            currentGame.update(clonedArray);
        }
    } else{
        response.ask('there is a wall, what\'s your next step?');
    }
}

function outputResponseAndCheck(currentGame, status, response){
    if(map.item[status]){
        var itemData = map.item[status];
        if(!itemData.escaped){

            if(itemData.image){
                response.askWithCard({
                    type:"SSML",
                    speech:itemData.scene
                });
            }
            else{
                response.ask({
                    type:"SSML",
                    speech:itemData.scene
                });
            }
        }
        else{
            response.tell("Woo, I escaped.");
            currentGame.reset();
            return true;
        }
    }
    else{
        response.ask("Oops, there is something wrong, you might want to pick another step");
    }

}
exports.initial = initial;
exports.checkNextStatus = checkNextStatus;
exports.outputResponseAndCheck = outputResponseAndCheck;
exports.register = registerIntentHandlers;
