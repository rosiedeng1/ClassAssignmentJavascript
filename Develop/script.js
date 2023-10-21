// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialvalue = ['!', '@', '#', '$', '%', '^', '&', '*', '+'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  const userInput = window.prompt("What would you like the length of the password to be?");
  // do something with the input
  if (userInput < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }
  if (userInput > 128) {
    alert('Password length must be less than 128 characters')
    return null;
  }

//  now start applying password options
var hasUpperCasedCharacters = confirm(
  'Click OK to confirm that this password contains uppercase characters.'
);
var hasLowerCasedCharacrers = confirm(
  'Click OK to confirm that this password contains lowercase characters.'
)
var hasNumbers = confirm(
  'Click OK to confirm that this password contains numbers.'
);
var hasSpecialCharacters = confirm(
  'Click OK to confirm that this password has special characters.'
);

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var actualPassword = ""

for (var n = 0; n < userInput; n++) {
  var randomIndex = Math.floor(Math.random() * uppercase.length);
  console.log('random spot is ' + randomIndex)
  let randomValue = uppercase[randomIndex]
  console.log(randomValue)
  actualPassword = actualPassword + randomValue
  console.log(actualPassword)
}
return actualPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


