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
  console.log("hi" + passwordText)
  passwordText.value = password;
}
// Prompts the user for the length of password they would like
function generatePassword() {
  const userInput = window.prompt("What would you like the length of the password to be?");
  if (userInput < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }
  if (userInput > 128) {
    alert('Password length must be less than 128 characters')
    return null;
  }


  // Applies password options to confirm whether to include certain characters in the password
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

  // In the case that user chooses not to select (presses cancel) any of the characters to include in password
  if ( hasUpperCasedCharacters === false && hasLowerCasedCharacrers === false && hasSpecialCharacters === false && hasNumbers === false) {
    alert('Choose at least one character type')
    return null;
  }
  
  // Creates an empty array to consildate which characters the user chooses to put into that array
  var bag = [];

  // If these conditions are true, then the contents in the array variable go into the empty array (bag)
  console.log('before bag: ' + bag)
  if (hasNumbers) {
    console.log('inside')
    var array = bag.concat(numeric)
    bag = array;
    console.log("this other array: " + array)
  }
  console.log('after bag: ' + bag)

  if (hasUpperCasedCharacters) {
    console.log('inside')
    var array = bag.concat(uppercase)
    bag = array;
    console.log("this other array: " + array)
  }

  if (hasLowerCasedCharacters) {
    var array = bag.concat(lowercase)
    bag = array;
  }

  if (hasSpecialCharacters) {
    var array = bag.concat(specialvalue)
    bag = array;
  }
  console.log('final bag: ' + bag)

  var actualPassword = ""

  // This loop generates a new character "userInput #"" of times. And combines the characters one step at a time.
  for (var i = 0; i < userInput; i++) {
    // randomIndex defines the position of the letter in the array
    var randomIndex = Math.floor(Math.random() * bag.length);
    console.log('random spot is ' + randomIndex)
    // randomValue represents the letter of the position generated from the randomIndex
    let randomValue = bag[randomIndex]
    console.log("hi " + randomValue)
    // 
    actualPassword = actualPassword + randomValue
    console.log("bye " + actualPassword)
  }
  return actualPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


