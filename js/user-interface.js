var User = require('./../js/user.js').userModule;

var displayRepos = function(repoName, repoDescription) {
  $('#search-results').append('<h3>Repo name: ' + repoName + '</h3>');
  $('#search-results').append('<p>description: ' + repoDescription + '</p>');
}

var currentUser = new User();
$(document).ready(function() {
  $("#user-search").submit(function(event) {
    event.preventDefault();
    var username = $("#username").val();
    currentUser.getRepos(username, displayRepos);
  })
});
