//Required dependencies
var path = require('path');


var friend = require('../data/friend.js');

// Export API routes
module.exports = function(app) {
	
	app.get('/api/friend', function(req, res) {
		res.json(friend);
	});

	// Add friend entry
	app.post('/api/friend', function(req, res) {
		
		var userInput = req.body;
		var userResponses = userInput.scores;
		var matchedName = '';
		var matchedPhoto = '';
		var checkNum = 10000; 

		
		for (var i = 0; i < friend.length; i++) {
			
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friend[i].scores[j] - userResponses[j]);
			}
			
			if (diff < checkNum) {
				checkNum = diff;
				matchedName = friend[i].name;
				matchedPhoto = friend[i].photo;
			}
		}

	
		friend.push(userInput);

		res.json({status: 'OK', matchedName: matchedName, matchedPhoto: matchedPhoto});
	});
};