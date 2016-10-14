var User = require('./../js/user.js').userModule;

var displayRepos = function(repoName, repoDescription, repoDate) {
  console.log(repoName);
  for (var i = 0; i < repoName.length; i++) {
    $('#search-results').append('<h3>Repo name: ' + repoName[i] + '</h3>');
    $('#search-results').append('<p>description: ' + repoDescription[i] + '</p>');
    $('#search-results').append('<p>created: ' + repoDate[i] + '</p>');
  }
};

var currentUser = new User();
$(document).ready(function() {
  $("#user-search").submit(function(event) {
    event.preventDefault();
    var username = $("#username").val();
    currentUser.setUser(username);
  });
});
