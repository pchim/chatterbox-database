var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(data) {
        res.send(data);
        res.status(200).end();
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.body);
      models.messages.post(req.body, function() {
        res.status(200).end();
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {
      console.log(req.body);
      models.users.post(req.body, function() {
        res.status(200).end();
      });
    }
  }
};

