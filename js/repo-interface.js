var Repo = require('./../js/repo.js').repoModule;

var displayRepos = function(repoName, repoDescription, repoDate) {
  for (var i = 0; i < repoName.length; i++) {
    $("#search-results").append("<h3>Repo name: " + repoName[i] + "</h3>");
    $("#search-results").append("<p>description: " + repoDescription[i] + "</p>");
    $("#search-results").append("<p>created: " + repoDate[i] + "</p>");
  }
};

var currentRepo = new Repo();
$(document).ready(function() {
  $("#find-repos").click(function() {
    debugger;
    var username = $("#username").val();
    currentRepo.getRepos(username, displayRepos);
  });
});
