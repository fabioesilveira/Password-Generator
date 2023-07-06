// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword () {
var passwordlenght=prompt ("Enter your Password lenght")
var includelower=confirm("Would you like to include Lowercase letters?")
var includeuper=confirm("Would you like to include Upercase letters?")
var includenumbers=confirm("Would tou like to include numbers?")
var includespecialcaracters=confirm("Would you like to include Special caracters?")
var choosencaracters=""
if (includelower == true){
choosencaracters += "qwertyuiopasdfghjklzxcvbnm"
}
if (includeuper == true){
  choosencaracters += "QWERTYUIOPASDFGHJKLZXCVBNM"
}
if (includenumbers == true){
  choosencaracters += "1234567890"
}
if (includespecialcaracters == true){
  choosencaracters += "!@#$%^&*()_+"
}
var password=""
for (i=0;i<passwordlenght;i++){
password+=choosencaracters.charAt(Math.floor(Math.random()*choosencaracters.length))
}
return password
}
