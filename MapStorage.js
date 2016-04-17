'use strict';
var AWS = require("aws-sdk");
AWS.config.update({accessKeyId: 'AKIAI622QKRBOFAI5CVQ', secretAccessKey: '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'});
AWS.config.update({region: 'us-east'});

function loadGame(session, callback) {
// var storage = (){
<<<<<<< HEAD
	var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
	
	function PuzzelGame(session, data) {
=======
        var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

        function PuzzelGame(session, data) {
>>>>>>> m
        if (data) {
            this.data = data;
        } else {
            this.data = {
                position : [0,0],
            };
        }
        this._session = session;
    }

<<<<<<< HEAD
	//load user location
	dynamodb.getItem({
=======
        //load user location
        dynamodb.getItem({
>>>>>>> m
        TableName: 'CurrentLocationKeeper',
                Key: {
                    UserId: {
                        S: session.user.userId
                    }
                }
    }
};
