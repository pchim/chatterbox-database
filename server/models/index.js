var db = require('../db');

module.exports = {
  messages: {
    get: function() {}, // a function which produces all the messages
    post: function(req) {
      var queryString = 'INSERT INTO chat (user, message, roomname) VALUES(' + req.username + ',' + req.message + ',' + req.roomname + ')';
      db.query(queryString, function(err) {
    	  if (err) {
          throw err;
        } else {
          console.log('Success: ', queryString);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function(username) {
      var queryString = '';
    },
    post: function () {}
  }
};

