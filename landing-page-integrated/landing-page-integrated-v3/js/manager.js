

const firebaseConfig = {
    apiKey: "AIzaSyBrSmL5l7B5jZOrd4PEXfXuBY7ZrnXQr9c",
    authDomain: "randing-page.firebaseapp.com",
    databaseURL: "https://randing-page-default-rtdb.firebaseio.com",
    projectId: "randing-page",
    storageBucket: "randing-page.appspot.com",
    messagingSenderId: "494897134256",
    appId: "1:494897134256:web:d8a5f9f62e428f03f49975"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.database();


let count = 1;
let user_number = 1;
var nameRef = db.ref("name/");
nameRef.on('child_added', function (snapshot) {
    $(`.row_${count}`).before(`<tr class="row_${++count}"><th class="user"> ${count}</th>
    <td></td><td></td><td></td></tr>`);

    var data = snapshot.val();
    var message = data.test;
    console.log("name => " + message)
    if (message != undefined) {
        $(`.row_${count} td:nth-child(2)`).text(message);
    }
});

let tel_number = 2;
var telRef = db.ref("tel/");
telRef.on('child_added', function (snapshot) {
    var data = snapshot.val();
    var message = data.test;
    console.log("tel => " + message)
    if (message != undefined) {
        $(`.row_${tel_number++} td:nth-child(3)`).text(message);
    }
});

let email_number = 2;
var emailRef = db.ref("email/");
emailRef.on('child_added', function (snapshot) {
    var data = snapshot.val();
    var message = data.test;
    console.log("email => " + message)
    if (message != undefined) {
        $(`.row_${email_number++} td:nth-child(4)`).text(message);
    }
});



