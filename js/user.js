var apiKey = require('./../.env').apiKey;

User = function() {
}

User.prototype.getRepos = function(username, displayFunction){
  var repoNames = [];
  var repoDescriptions = [];
  var repoDates = [];
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    console.log(moment(response[0].created_at).format('L'));
    for (var i = 0; i < response.length; i++) {
      repoNames.push(response[i].name);
      repoDescriptions.push(response[i].description);
      repoDates.push(moment(response[i].created_at).format('L'));
    }
    displayFunction(repoNames, repoDescriptions, repoDates);
  }).fail(function(error){
    $("#search-results").text("User: " + error.responseJSON.message + ". Please check the username and try searching again.");
  });
};

exports.userModule = User;
