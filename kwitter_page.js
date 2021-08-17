var firebaseConfig = {
    apiKey: "AIzaSyDFxOWJj_SzAbymytC6aV0i05JW3hl9j30",
    authDomain: "kwitter-app-70b80.firebaseapp.com",
    projectId: "kwitter-app-70b80",
    storageBucket: "kwitter-app-70b80.appspot.com",
    messagingSenderId: "976341497527",
    appId: "1:976341497527:web:5ce77aba43c7119786bf32"
  };

  user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,Like:0

      });
      document.getElementById("msg").value="";
}