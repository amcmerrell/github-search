var User = require('./../js/user.js').userModule;

var currentUser = new User();
$(document).ready(function() {
  $("#user-search").submit(function(event) {
    event.preventDefault();
    var username = $("#username").val();
    currentUser.getRepos(username);
  })
});
