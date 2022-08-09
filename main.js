//variable is container which can hold value//
var name 
var email
var username
var password

function submit(){
    name= document.getElementById("name").value 
    email=document.getElementById("email").value
    username=document.getElementById("username").value
    password=document.getElementById("pw").value   
    
    document.getElementById("name").value=""
    document.getElementById("email").value=""
    document.getElementById("username").value=""
    document.getElementById("pw").value=""

    document.getElementById("output").innerHTML="Please enter your username and password"
}
function check(){

}

