var apiKey = require('./../.env').apiKey;

Repo = function() {
// Refactor to use fields instead of array variables in getRepos method.
};

Repo.prototype.getRepos = function(username, displayFunction){
  var repoNames = [];
  var repoDescriptions = [];
  var repoDates = [];
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    for (var i = 0; i < response.length; i++) {
      repoNames.push(response[i].name);
      repoDescriptions.push(response[i].description);
      repoDates.push(moment(response[i].created_at).format('L'));
    }
    displayFunction(repoNames, repoDescriptions, repoDates);
  }).fail(function(error){
    $("#search-results").text("Repo: " + error.responseJSON.message + ". Please check the username and try searching again.");
  });
};

// Repo.prototype.setRepo = function(username, index){
//   var that = this;
//   $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
//     that.name = response[index].name;
//     repoDescriptions.push(response[index].description);
//     repoDates.push(moment(response[index].created_at).format('L'));
//     // displayFunction(repoNames, repoDescriptions, repoDates);
//   }).fail(function(error){
//     $("#search-results").text("User: " + error.responseJSON.message + ". Please check the username and try searching again.");
//   });
// };

exports.repoModule = Repo;
