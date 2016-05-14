var db = require('../db').dbConnection;
var esc = require('../escape.js');

module.exports = {
  messages: {
    get: function() {}, // a function which produces all the messages
    post: function(req, callback) {
      var queryString = 'INSERT INTO messages (user, message, roomname) VALUES(\'' 
                        + esc(req.username) + '\',\'' 
                        + esc(req.message) + '\',\'' 
                        + esc(req.roomname) + '\')';
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
      var queryString = 'INSERT IGNORE INTO users (name) VALUES(\'' 
                        + esc(req.username) + '\')';
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

