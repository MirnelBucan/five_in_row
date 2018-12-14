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
        sessionStorage.setItem('user',JSON.stringify({username, password}));
        location.assign('chooseGame.html');
        logovan = true;
        sessionStorage.setItem('user', JSON.stringify({ username, password }));
        location.assign('chooseGame.html');
        return;
      }
  });
  if (!logovan) {
    //location.assign('login.html');
    $(".poruka").attr('display', 'block').text("Invalid username/password!").fadeOut(3000);
    $('.forma').trigger('reset');
  }
});