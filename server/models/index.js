var db = require('../db').dbConnection;

module.exports = {
  messages: {
    get: function() {}, // a function which produces all the messages
    post: function(req, callback) {
      var queryString = 'INSERT INTO messages (user, message, roomname) VALUES(' 
                        + req.username + ',' + req.message + ',' + req.roomname + ')';
      db.query(queryString, function(err) {
        if (err) {
          throw err;
        } else {
          console.log('Success: ', queryString);
          if (callback) {
          	callback();
          }
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function(username) {
      var queryString = '';
    },
    post: function(req, callback) {
    	console.log(req.username);
      var queryString = 'INSERT INTO users (name) VALUES(\'' + req.username + '\')';
      db.query(queryString, function(err) {
        if (err) {
        	console.log('Error posting a user');
          throw err;
        } else {
          console.log('Success: ', queryString);
          if (callback) {
          	callback();
          }
        }
      });
    }
  }
};

