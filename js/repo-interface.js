var Repo = require('./../js/repo.js').repoModule;

var displayRepos = function(repoName, repoDescription, repoDate) {
  $("#search-results").append("<h3>Repositories</h3>");
  for (var i = 0; i < repoName.length; i++) {
    $("#search-results").append("<h4>" + repoName[i] + "</h4>");
    if (repoDescription[i]) {
      $("#search-results").append("<p>Description: " + repoDescription[i] + "</p>");
    } else {
      $("#search-results").append("<p>Description: No description.</p>");
    }

    $("#search-results").append("<p>Created: " + repoDate[i] + "</p><hr>");
  }
};

var currentRepo = new Repo();
$(document).ready(function() {
  $("#find-repos").click(function() {
    var username = $("#username").val();
    currentRepo.getRepos(username, displayRepos);
  });
});
