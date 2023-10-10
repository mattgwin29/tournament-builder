console.log("hi");

let renderLogin = ()=>{
   $("#loginInfo").html(`
<button id="clickme">Login</button>
                  `);
   $("#clickme").on("click", ()=>{
     firebase.auth().signInWithRedirect(google_provider);
   })
}


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
  });
