var User = require('./../js/user.js').userModule;

var displayUser = function(userObject) {
  $("#search-results").html("")
  $('#user-image').html('<img class="profile-pic" src="' + userObject.photo + '">');
  $('#user-name').html('<h3>Name: ' + userObject.name + '</h3>');
  $('#user-followers').html('<p>followers: ' + userObject.followerCount + '</p>');
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
