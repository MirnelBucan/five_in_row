$(".forma").on('submit', function(e) {
  e.preventDefault();
  let username = $("#username").val();
  let password = $("#password").val();
  let users = localStorage.getItem('users');
  if (!users) {
    users = [];
    users.push({ username, password });
    window.localStorage.setItem('users', JSON.stringify(users));
  } else {
    users = JSON.parse(users);
    let postoji = false;
    users.forEach(function(user) {
      if (user.username === username) {
        postoji = true;
        return;
      }
    });
    if (!postoji) {
      users.push({ username, password });
      localStorage.removeItem('users');
      localStorage.setItem('users', JSON.stringify(users));
    }
  }
   location.assign('login.html');
});