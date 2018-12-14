$(".forma").on('submit', function(e) {
  e.preventDefault();
  let username = $("#username").val();
  let password = $("#password").val();
  let logovan = false;
  users.forEach(function(user) {
    if (user.username === username)
      if (user.password === password) {
        logovan = true;
        localStorage.setItem
        location.assign('/game.html');
      }
  });
  if (!logovan) {

  }
  //Ubaci jquery sa label paragrafima kao bootstrap sto ima alert

})

//LOGIN FUNCTION
function login() {
  $(".forma").on('submit', function(e) {
    e.preventDefault();
    let username = $("#username").val();
    let password = $("#password").val();
    let logovan = false;
    users = localStorage.getItem('users');
    users.forEach(function(user) {
      if (user.username === username)
        if (user.password === password) {
          logovan = true;
          location.assign('/game.html');
        }
    });
    if (!logovan) {
      //eventualno dodat za massage da je fulio pw ili nesto slicno
      location.assign('/login');
    }
  });
}