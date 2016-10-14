var apiKey = require('./../.env').apiKey;

User = function() {
}

User.prototype.getRepos = function(username, displayFunction){
  var repoNames = [];
  var repoDescriptions = [];
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    for (var i = 0; i < response.length; i++) {
      repoNames.push(response[i].name);
      repoDescriptions.push(response[i].description);
    }
    displayFunction(repoNames, repoDescriptions);
  }).fail(function(error){
    displayFunction(error.responseJSON.message);
  });
};

exports.userModule = User;
