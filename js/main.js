$(".forma").on('submit', function(e) {
  e.preventDefault();
  let username = $("#username").val();
  let password = $("#password").val();
  let logovan = false;
  users.forEach(function(user){
    if(user.username === username)
    if(user.password === password){
      logovan = true;
      localStorage.setItem
      location.assign('/game.html');
    }
  });
  if(!logovan) {

  }
  //Ubaci jquery sa label paragrafima kao bootstrap sto ima alert

})

$(document).ready(function() {
    //ovdje ide kad se dom loada
})

$("#data").on("click", function() {
  $.ajax({
    url: "./db/users.json",
    dataType: "json",
    success: function(data) {
      setting(data);
    }
  });
  function setting(data) {
    data.username = "ndsna";
    console.log(data);
  }
})