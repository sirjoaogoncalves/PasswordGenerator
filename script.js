// Function to generate a random password
function generatePassword(length) {
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  
  var password = "";
  
  // Ensure at least one character from each character type
  password += getRandomChar(uppercaseChars);
  password += getRandomChar(lowercaseChars);
  password += getRandomChar(numericChars);
  password += getRandomChar(specialChars);
  
  // Generate remaining characters to reach desired length
  var remainingLength = length - 4;
  for (var i = 0; i < remainingLength; i++) {
    var charSet = uppercaseChars + lowercaseChars + numericChars + specialChars;
    password += getRandomChar(charSet);
  }
  
  // Shuffle the password to randomize the character order
  password = shuffleString(password);
  
  return password;
}

// Function to get a random character from a string
function getRandomChar(charSet) {
  var randomIndex = Math.floor(Math.random() * charSet.length);
  return charSet.charAt(randomIndex);
}

// Function to shuffle a string
function shuffleString(str) {
  var array = str.split('');
  var currentIndex = array.length, temporaryValue, randomIndex;
  
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  
  return array.join('');
}

// Usage example
var passwordLength = 10;
var newPassword = generatePassword(passwordLength);
console.log(newPassword);

// Function to copy password to clipboard
    function copyToClipboard() {
      var passwordElement = document.getElementById("password");
      passwordElement.select();
      document.execCommand("copy");
      alert("Password copied to clipboard!");
    }
    
    // Function to generate and display a password
    function generateAndDisplayPassword() {
      var passwordLength = 10; // Modify to set desired password length
      var newPassword = generatePassword(passwordLength);
      var passwordElement = document.getElementById("password");
      passwordElement.value = newPassword;
    }
