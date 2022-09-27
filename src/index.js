let i=0;
const welcome = "Hello! What is your name?";
const len = welcome.length;

const Typewrite = () =>{

    if(i<len){
        document.getElementById("login").innerHTML += welcome.charAt(i);
        i++;
    }
    setTimeout(Typewrite,100);
}




Typewrite();