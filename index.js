var know = {
    
    //Basic functionalities of this Chat Bot
    // We can add more funtionalities according to the requirement of the user

    "hello":"Hi",
    "hi":"Hello",
    "thanks":"Your Welcome",
    "how are you?":"Good",
    "harshit":"hi harshit",
    "bye":"see you soon",
    "are you free":"Always free to help you",
    
};
// Chat function for chatting with the Chat Bot
function Chat() {
     var user =document.getElementById("userBox") .value;
        
    document.getElementById("chatLog").innerHTML +=user+"<br>";
     
    if(user in know){
        document.getElementById("chatLog").innerHTML += know[user]+"<br>";
    } else{
        document.getElementById("chatLog").innerHTML+="Sorry, I didn't get it.<br>";}
        document.getElementById('userBox').value = "";

    }
