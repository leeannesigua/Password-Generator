// Assignment Code

// Write password to the #password input
function generatePassword(){
 //lowLettersArray
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//upperLettersArray
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//numArray
var numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//special charcters array
var specialChar =['!', '@', '#', '$', '%', '&', '^', '/','?', '*', '(', ')'];

var result = [];
var passResult = [];
  //prompt: choose the length of your password
  var passwordLength = parseInt (
    prompt('How many characters will your password have?'), 10 
  );

  if(Number.isNaN(passwordLength)){
    alert('password length must be a valid integer')
    return null;
  }

  if (passwordLength < 8 || passwordLength > 128){
    alert('password must be between 8-128 characters in length')
    return null;
  }
  //confirm: click "ok" if you would like lowercase letters in your password
  var wantLowercase = confirm ("Click 'OK' if you would like to include lowercase letters, otherwise click 'Cancel'");

  //confirm: click "ok" for uppercase letters in your password
  var wantUppercase = confirm ("click 'OK' if you would like to include uppercase letters, otherwise click 'Cancel'");

  //confirm: click "ok" for numeric characters in your password
  var wantNumbers = confirm ("click 'OK' if you would like to include numbers, otherwise click 'Cancel'");
  
  //confirm: click "ok" if you would like special characters in your password
  var wantSpecialChar = confirm ("click 'OK' if you would like to include special characters, otherwise click 'Cancel'");

  //validate: at least 1 character type should be selected, they can't all be false

  
  if (wantLowercase) {
    result = result.concat(lowercaseLetters);
  }

  if (wantUppercase) {
    result = result.concat(uppercaseLetters);
  
  }

  if (wantNumbers) {
    result = result.concat(numArray);
    
  }

  if (wantSpecialChar) {
    result = result.concat(specialChar);
    
  }

  for (var i = 0; i < passwordLength; i++){
    passResult.push(result[Math.floor(Math.random() * result.length)]);
  }

  return passResult.join("");

}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
