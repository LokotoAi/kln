//company data
var firebaseConfig = {
apiKey: “AIzaSyD_AHwVjSu_R4JZ-Gn5FJm8jYK381j3sv4”,
authDomain: “sex-actions.firebaseapp.com”,
databaseURL: “https://sex-actions.firebaseio.com",
projectId: “sex-actions”,
storageBucket: “sex-actions.appspot.com”,
messagingSenderId: “1062591321085”,
appId: “1:1062591321085:ios:e128bb33018f90b2”
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
function signUp(){
var email = document.getElementById(“email”);
var password = document.getElementById(“password”);
const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
promise.catch(e => alert(e.message));
alert(“Signed Up”);
}
function signIn(){
var email = document.getElementById(“email”);
var password = document.getElementById(“password”);
const promise = auth.signInWithEmailAndPassword(email.value, password.value);
promise.catch(e => alert(e.message));
}
function signOut(){
auth.signOut();
alert(“Signed Out”);
}
auth.onAuthStateChanged(function(user){
if(user){
var email = user.email;
alert(“Active User “ + email);
//Take user to a different or home page
//is signed in
}else{
alert(“No Active User”);
//no user is signed in
}
});