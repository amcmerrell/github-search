var apiKey = require('./../.env').apiKey;

User = function() {
  this.name;
  this.photo;
  this.followerCount;
};

User.prototype.setUser = function(username, displayFunction){
  var that = this;
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    that.name = response.name;
    that.followerCount = response.followers;
    that.photo = response.avatar_url;
    displayFunction(that);
  }).fail(function(error){
    $("#search-results").text("User: " + error.responseJSON.message + ". Please check the username and try searching again.");
  });
};

exports.userModule = User;
