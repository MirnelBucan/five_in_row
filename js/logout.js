function logOut(){
    sessionStorage.removeItem('user');
    location.assign('index.html');
}