var apiKey = require('./../.env').apiKey;

User = function() {
  this.name;
  this.photo;
  this.followerCount;
  this.repos = [];
};

User.prototype.setUser = function(username){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);

    //displayFunction(repoNames, repoDescriptions, repoDates);
  }).fail(function(error){
    $("#search-results").text("User: " + error.responseJSON.message + ". Please check the username and try searching again.");
  });
};

exports.userModule = User;
