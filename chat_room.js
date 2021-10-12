
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();


function logout(){
  window.location="index.html";
}


var firebaseConfig = {
  apiKey: "AIzaSyCR2e1o50nA7ie-vVCxCnrXnY0NQDB3mJ4",
  authDomain: "ice--cream-social.firebaseapp.com",
  projectId: "ice--cream-social",
  storageBucket: "ice--cream-social.appspot.com",
  messagingSenderId: "975098434701",
  appId: "1:975098434701:web:12607f14ae97ea78273ec4"
};

firebase.initializeApp(firebaseConfig);