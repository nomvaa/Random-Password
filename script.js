// Write password to the #password input
function writePassword(password) {
  var passwordTextBox = document.querySelector("#password");
  passwordTextBox.value = password;
}

// MAIN <---starting point
function generate() {
  var passwordLength = prompt('How long do you want the password to be?');
  passwordLength = verifyLength(passwordLength);
  var charSet = generateCharSet(); //character set
  var password = generatePassword(charSet, passwordLength); //password
  writePassword(password);
}

// Length of password
function verifyLength(passLength) {
  if(passLength < 8 || passLength > 128) { //<--condition
    var newLength = prompt('Please re-enter passowrd length of 8 - 128.'); // prompt user
    return verifyLength(newLength);
  } else {
    return passLength;
  }
}


// generates character set and returns it
function generateCharSet() {
  var specialType = confirm('Do you want special characters?');
  var upperType = confirm('Do you want uppercase?');
  var lowerType = confirm('Do you want lowercase?');
  var numType = confirm('Do you want numerics?')
  console.log(specialType, upperType, lowerType, numType);

  var charSet = "";
  if(lowerType){
    charSet = charSet.concat("abcdefghijklmnopqrstuvwxyz");

  } 
  if(upperType) {
    charSet = charSet.concat("ABCDEFGHIJKLMNOPQRSTUVWXZY");

  }
  if(numType) {
    charSet = charSet.concat("1234567890");

  }
  if(specialType) {
    charSet = charSet.concat("!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~");

  }
  return charSet;
}

// generates password and returns it
// takes character set and password length as parameters
function generatePassword(characters, passLength) {
  var password = "";
  var charLength = characters.length;

  for ( var i = 0; i < passLength; i++ ) {
    password += characters.charAt(Math.floor(Math.random() * charLength));
 
  }
  return password;
}
