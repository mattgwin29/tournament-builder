console.log("hi");

let renderLogin = ()=>{
   $("#loginInfo").html(`
<button id="login_button">Login</button>
                  `);
   $("#login_button").on("click", ()=>{
     firebase.auth().signInWithRedirect(google_provider);
   })
}

let globalUser = null;

let startApp = (user)=>{
   $("#loginInfo").html(`<h1>Welcome ${user.displayName}!!</h1><button id="logout">Log out here</button>`);
   $("#loginInfo").css({ 'color': 'white'});
   $("#logout").click(()=>{
     firebase.auth().signOut();
   })
}


  var google_provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().onAuthStateChanged(user => {
    if (!!user){
      startApp(user);
    } else {
      renderLogin();
    }
    globalUser = user;
  });


  function renderProfile(){
    $('.profile-card').html(`
      <img src="${getProfilePhotoURL()}">
      `);
    }
    
  function getProfilePhotoURL(){
    console.log(globalUser.photoURL);
    return globalUser.photoURL;
  }
  