var apiKey = require('./../.env').apiKey;

User = function() {
}

User.prototype.getRepos = function(username, displayFunction){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    displayFunction(response[0].name, response[0].description);
  }).fail(function(error){
    displayFunction(error.responseJSON.message);
  });
};

exports.userModule = User;
