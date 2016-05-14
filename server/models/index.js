var db = require('../db').dbConnection;
var esc = require('../escape.js');

var dbQuery = function(string, success) {
  db.query(string, function(err) {
    if (err) {
      throw err;
    } else {
      console.log('Success: ', string);
      if (success) {
        success();
      }
    }
  });
};

module.exports = {
  messages: {
    get: function() {}, // a function which produces all the messages
    post: function(req, callback) {
      //var queryString = 'INSERT IGNORE INTO rooms (name) VALUES(\'' + esc(req.roomname) + '\')';

      //dbQuery(queryString, function(callback) {
      queryString = 'INSERT INTO messages (user, message, roomname) VALUES(\'' 
                        + esc(req.username) + '\',\'' 
                        + esc(req.message) + '\',\'' 
                        + esc(req.roomname) + '\')';
      dbQuery(queryString, callback);
      //});
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
      dbQuery(queryString, callback);
    }
  }
};

