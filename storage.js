/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

'use strict';
var AWS = require("aws-sdk");
AWS.config.loadFromPath('./config.json');

var userData;

var storage = (function () {
    var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

    /*
     * The Game class stores all game states for the user
     * go north : position [0,+1]
     * go south : position [0,-1]
     * go west : position [-1,0]
     * go east : position [1,0]
     */
    function Game(session, data) {
        if (data) {
            this.data = data;
        } else {
            this.data = {
                position : [0,0]
            };
        }
        this._session = session;
    }

    Game.prototype = {
        update:function(position){
            this.data.position = position;
            this.save();
        },
        reset:function(){
            this.update([0,0]);
        },
        save: function (callback) {
            console.log("start save", this.data);
            //save the game states in the session,
            //so next time we can save a read from dynamoDB
            this._session.attributes.currentGame = this.data;
            userData = this.data;
        }
    };

    return {
        loadGame: function (session, callback) {
            callback(new Game(session, userData));
        },
        newGame: function (session) {
            return new Game(session);
        }
    };
})();
module.exports = storage;
