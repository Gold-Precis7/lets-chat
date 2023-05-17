// Your web app's Firebase configuration
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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);
    
    window.location = "chat_room.html";
    
}



