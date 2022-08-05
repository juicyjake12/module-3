
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatepassword();
  var passwordtext = document.querySelector("#password");
  passwordtext.value = password;
}
function generatepassword() {
  var question = "type Yes or No, would you like to include: ";
  var passwordCriteria = ["Uppercase", "Lowercase", "Numbers", "Special Characters"];
  var selectedCriteria = [];
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "1234567890";
  var specialCharacters = "!@#$%^&*";
  var charset = "";
  var randompassword = "";

  for (let i = 0; i < passwordCriteria.length; i++) {
    var criteriaAnswer = window.prompt(question + passwordCriteria[i]);
    if (criteriaAnswer.toLowerCase() == "yes") {
      selectedCriteria.push(passwordCriteria[i]);
    }
  }
  

  var passwordLength = Number(window.prompt("How long would you like your password to be? , Must be 8-128 characters long "));
  console.log(passwordLength)

  for (let i = 0; i < selectedCriteria.length; i++) {
    if (selectedCriteria[i] == "Uppercase") {
      charset = charset.concat(uppercase);

    }
    else if (selectedCriteria[i] == "Lowercase") {
      charset = charset.concat(lowercase);
    }
    else if (selectedCriteria[i] == "Numbers") {
      charset = charset.concat(numbers);
    }
    else if (selectedCriteria[i] == "SpecialCharacters") {
      charset = charset.concat(specialCharacters);
    }
  }

  for (let i = 0; i < passwordLength; i++) {
    var character = charset.charAt(Math.floor(Math.random() + charset.length));
    randompassword += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return randompassword
}
generateBtn.addEventListener("click", writePassword);
