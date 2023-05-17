
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBD75io0HUgAo7KS_zxDIjdylbrB7AWBZ8",
    authDomain: "kwitter-49a32.firebaseapp.com",
    databaseURL: "https://kwitter-49a32-default-rtdb.firebaseio.com",
    projectId: "kwitter-49a32",
    storageBucket: "kwitter-49a32.appspot.com",
    messagingSenderId: "748205442149",
    appId: "1:748205442149:web:cb20a9df6ec5ab6754b28c",
    measurementId: "G-50FCT68FRF"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addRoom()
  {
   room_name= document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
   });
   localStorage.setItem("room_name",room_name);
   window.location = "kwitter_page.html";     
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name -" + Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location ="kwitter_page.html";
}