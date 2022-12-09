const firebaseConfig = {
    apiKey: "AIzaSyBCZv7QBBObx1g7jLbVJvywzczwHRwgeL8",
    authDomain: "chat-codecamp.firebaseapp.com",
    databaseURL: "https://chat-codecamp-default-rtdb.firebaseio.com",
    projectId: "chat-codecamp",
    storageBucket: "chat-codecamp.appspot.com",
    messagingSenderId: "541622335364",
    appId: "1:541622335364:web:c3caa79626bf67d8208fd1",
    measurementId: "G-J5B8CD9SKZ"
};

firebase.initializeApp(firebaseConfig);
database = firebase.database();


function sendMsg(){
    let date = new Date();
    let msg = $("#message").val();
    database.ref("msgs/"+date.getTime()).set(msg);
    $("#message").val("");
}

function loadMsgs(){
    database.ref("msgs").on("value", callback);
    function callback(snapshot){
        $("#chatlist").html("");
        console.log(snapshot);
        snapshot.forEach(function(child){
             $("#chatlist").append("<div>"+child.val()+"</div>");
        });
        $("#chatlist").scrollTop(15000);
    }
}
