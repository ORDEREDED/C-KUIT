var firebaseConfig = {
  apiKey: "AIzaSyBEca8LSQVDDCtbWuTnMIV7R_avkmqErnw",
  authDomain: "kuitter-3df98.firebaseapp.com",
  databaseURL: "https://kuitter-3df98-default-rtdb.firebaseio.com",
  projectId: "kuitter-3df98",
  storageBucket: "kuitter-3df98.appspot.com",
  messagingSenderId: "1058729284444",
  appId: "1:1058729284444:web:7f86f53ceca476f284a799"
};
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kuitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kuitter_page.html";







}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}

