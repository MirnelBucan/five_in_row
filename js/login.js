//LOGIN FUNCTION

$(".forma").on('submit', function(e) {
  e.preventDefault();
  let username = $("#username").val();
  let password = $("#password").val();
  let logovan = false;
  users = localStorage.getItem('users');
  if (!users) {
    location.assign('login.html');
  }
  users = JSON.parse(users);
  console.log(users);
  users.forEach(function(user) {
    if (user.username === username)
      if (user.password === password) {
        logovan=true;
        sessionStorage.setItem('user',JSON.stringify({username, password}));//+JSON.stringify({username, password});
        location.assign('game.html');
        return;
      }
  });
  if (!logovan) {
    //eventualno dodat za massage da je fulio pw ili nesto slicno
    //location.assign('login.html');
  }
});