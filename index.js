function shout(string) {
 return string.toUpperCase()
}
// returns string in caps

function whisper(string) {
 return string.toLowerCase()
}
// returns string in lower case

function logShout(string) {
  console.log(${string}.toUpperCase)
}
// prints string in all caps to console

function logWhisper(string) {
  console.log(${string}.toLowerCase)
}
//prints string in lower case to console

function sayHiToGrandma(string) {
  var uppercase = string.toUpperCase
  var lowercase = string.toLowerCase

if (string === uppercase) {
    return "YES INDEED"
  }
 else if (string === lowercase) {
    return "I can't hear you!"
  }
  
}