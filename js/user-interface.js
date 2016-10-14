var User = require('./../js/user.js').userModule;

var displayRepos = function(searchResults) {
  $('#search-results').text('First repo name: ' + searchResults);
}

var currentUser = new User();
$(document).ready(function() {
  $("#user-search").submit(function(event) {
    event.preventDefault();
    var username = $("#username").val();
    currentUser.getRepos(username, displayRepos);
  })
});
