var express = require("express"); // Express web server framework
// var request = require('request'); // "Request" library
// var cors = require('cors');
var querystring = require("querystring");
// var cookieParser = require('cookie-parser');
var client_id = "CLIENT_ID";
// var client_secret = 'CLIENT_SECRET';
var redirect_uri = "http://localhost:5000/callback";
var scopes = "streaming";

var app = express();

var generateRandomString = function (length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

app.get("/login", function (req, res) {
  var state = generateRandomString(16);
  var scope = "user-read-private user-read-email";

  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
      })
  );
});
