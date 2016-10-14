var apiKey = require('./../.env').apiKey;

User = function() {
}

User.prototype.getRepos = function(username, displayFunction){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    displayFunction(response[1].name);
  }).fail(function(error){
    displayFunction(error.responseJSON.message);
  });
};

exports.userModule = User;
