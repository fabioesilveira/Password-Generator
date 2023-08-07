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
var passwordlength=prompt ("Enter your Password length")
var includelower=confirm("Would you like to include Lowercase letters?")
var includeupper=confirm("Would you like to include Uppercase letters?")
var includenumbers=confirm("Would you like to include numbers?")
var includespecialcharacters=confirm("Would you like to include Special Characters?")
var choosencharacters=""
if (includelower === true){
choosencharacters += "qwertyuiopasdfghjklzxcvbnm"
}
if (includeupper === true){
  choosencharacters += "QWERTYUIOPASDFGHJKLZXCVBNM"
}
if (includenumbers === true){
  choosencharacters += "1234567890"
}
if (includespecialcharacters === true){
  choosencharacters += "!@#$%^&*()_+"
}
var password=""
for (i=0;i<passwordlength;i++){
password+=choosencharacters.charAt(Math.floor(Math.random()*choosencharacters.length))
}
return password
}