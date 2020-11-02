
var greeting = prompt("Hi, how are you doing on this lovely day?");

if (greeting.toUpperCase() === greeting) {
    console.log("You are shouting");
} 

else if (greeting.toLowerCase() === greeting) {
    console.log("You are whispering");
} 

else {
    console.log("You are speaking normally");
}