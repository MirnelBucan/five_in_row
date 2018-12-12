$(".forma").on('submit', function(e) {
    e.preventDefault();
    let username = $("#username").val();
    let password = $("#password").val();
    let logovan = false;
    users.forEach(function(user){
      if(user.username === username)
       if(user.password === password){
          logovan = true;
         location.assign('/game.html');
        }
    });
    if(!logovan)
      //Ubaci jquery sa label paragrafima kao bootstrap sto ima alert

})

$(document).ready(function() {
    //ovdje ide kad se dom loada
})
