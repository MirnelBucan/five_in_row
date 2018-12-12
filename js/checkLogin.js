(function checkLogin(){
  let checkUsers = localStorage.getItem('users');
  let currentlyLogedIn = sessionStorage.getItem('user');
  let logovan = false;
  console.log(checkUsers);
  console.log(currentlyLogedIn);
  if(checkUsers === null || currentlyLogedIn === null){
    location.assign('login.html');
    return;
  }
  checkUsers = JSON.parse(checkUsers);
  currentlyLogedIn = JSON.parse(currentlyLogedIn);
  checkUsers.forEach(function(user){
    if(user.username === currentlyLogedIn.username)
      if(user.password === currentlyLogedIn.password){
        logovan=true;
        return;
      }
  });
  if(!logovan){
    location.assign('login.html');
  }
})();