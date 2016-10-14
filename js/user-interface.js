var User = require('./../js/user.js').userModule;

var displayUser = function(userObject) {
  $('#user-result').append('<img class="profile-pic" src="' + userObject.photo + '">');
  $('#user-result').append('<h3>Name: ' + userObject.name + '</h3>');
  $('#user-result').append('<p>followers: ' + userObject.followerCount + '</p>');
};

var currentUser = new User();
$(document).ready(function() {
  $("#user-search").submit(function(event) {
    event.preventDefault();
    var username = $("#username").val();
    currentUser.setUser(username, displayUser);
    $(".hidden").removeClass("hidden");
  });
});
