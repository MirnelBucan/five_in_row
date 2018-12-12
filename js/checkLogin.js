(function checkLogin(){
  const checkUsers = localStorage("user");
  let logovan = false;
  if(!checkUsers)
    location.assign('/login.html');
  users.forEach(function(user){
    if(user.username === checkUsers.username)
      if(user.password === checkUsers.password){
        location.assign('/game');
        return;
      }
  });
  if(!logovan)
    location.assign('/login.html');
})();