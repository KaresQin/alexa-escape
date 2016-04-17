'use strict';
var AWS = require("aws-sdk");
AWS.config.update({accessKeyId: 'AKIAI622QKRBOFAI5CVQ', secretAccessKey: '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'});
AWS.config.update({region: 'us-east'});

function loadGame(session, callback) {
// var storage = (){
        var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

        function PuzzelGame(session, data) {
        if (data) {
            this.data = data;
        } else {
            this.data = {
                position : [0,0],
            };
        }
        this._session = session;
    }

        //load user location
        dynamodb.getItem({
        TableName: 'CurrentLocationKeeper',
                Key: {
                    UserId: {
                        S: session.user.userId
                    }
                }
    }
};
