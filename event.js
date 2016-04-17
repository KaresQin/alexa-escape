/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

'use strict';
var storage = require('./storage');
var utils = require('./utils');

var registerEventHandlers = function (eventHandlers, skillContext) {
    eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
        //if user said a one shot command that triggered an intent event,
        //it will start a new session, and then we should avoid speaking too many words.
        skillContext.needMoreHelp = false;
    };

    eventHandlers.onLaunch = function (launchRequest, session, response) {
        //Speak welcome message and ask user questions
        //based on whether there are players or not.
        storage.loadGame(session, function (currentGame) {
            var speechOutput = '',
                reprompt;
            reprompt = {
                type : "SSML",
                speech : "<speak>Woo, I open it now <audio src=\"https://s3.amazonaws.com/alexa-transporter/audio/open-box.mp3\" />. It's a key.</speak>"
            }
            response.askWithCard(speechOutput, reprompt, "right now", "It looks like a door?", {
                    "smallImageUrl":  "https://s3.amazonaws.com/alexa-transporter/picture/door.jpg",
                    "largeImageUrl":  "https://s3.amazonaws.com/alexa-transporter/picture/door.jpg"
                });
        });
    };
};
exports.register = registerEventHandlers;
