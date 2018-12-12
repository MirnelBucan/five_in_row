function checkLogin(){
  const checkUsers = localStorage("user");
  let logovan = false;
  if(!checkUsers)
    location.assign('/index.html');
  users.forEach(function(user){
    if(user.username === checkUsers.username)
      if(user.password === checkUsers.password){
        logovan = true;
        return;
      }
  });
  if(!logovan)
    location.assign('/index.html');
}