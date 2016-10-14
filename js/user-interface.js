var User = require('./../js/user.js').userModule;

var displayUser = function(userObject) {
  $('#search-results').append('<img src="' + userObject.photo + '">');
  $('#search-results').append('<h3>Repo name: ' + userObject.name + '</h3>');
  $('#search-results').append('<p>followers: ' + userObject.followerCount + '</p>');
};

var currentUser = new User();
$(document).ready(function() {
  $("#user-search").submit(function(event) {
    event.preventDefault();
    var username = $("#username").val();
    currentUser.setUser(username, displayUser);
  });
});
