// Assignment Code

// Button for generate password
var generateBtn = document.querySelector("#generate");

// Define different criterias of characters that can be used in the password and store them in a string
let passwordCharaLowercase = "abcdefghijklmnopqrstuvwxyz";
let passwordCharaUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passwordCharaNumber = "0123456789";
let passwordCharaSymbol = "!@#$%^&*()+_-=~`";

let criteria1, criteria2, criteria3, criteria4;

// Write a function to generate password
function generatePassword() {
  let criteriaStatus = true;
  let passwordChara;
  while (criteriaStatus) {
    // Write prompts for password chriteria
    confirm(
      "Would you like to include lower case letters in your password? Click OK for YES, Cancel for NO!"
    )
      ? (criteria1 = passwordCharaLowercase)
      : (criteria1 = "");
    confirm(
      "Would you like to include upper case letters in your password? Click OK for YES, Cancel for NO!"
    )
      ? (criteria2 = passwordCharaUppercase)
      : (criteria2 = "");

    confirm(
      "Would you like to include numbers in your password? Click OK for YES, Cancel for NO!"
    )
      ? (criteria3 = passwordCharaNumber)
      : (criteria3 = "");
    confirm(
      "Would you like to include special symbols in your password? Click OK for YES, Cancel for NO!"
    )
      ? (criteria4 = passwordCharaSymbol)
      : (criteria4 = "");

    // If no criterias are selected, prompt invalid criteria selection, then the while loop runs again for selecting criterias
    if (!criteria1 && !criteria2 && !criteria3 && !criteria4) {
      // if its true, then it means none of the criterias are selected
      alert(
        "Invalid password criterias selection! At least one password criteria needs to be selected. Please select password criterias again!"
      );
    } else {
      // Add all selected criteria together to generate the pool for characters for password generation.
      passwordChara = criteria1 + criteria2 + criteria3 + criteria4;
      // Change criteria Status to false to break out of the while loop
      criteriaStatus = false;
    }
  }

  // Prompt for password length:
  let lengthStatus = true;
  let passwordLength;
  while (lengthStatus) {
    passwordLength = Number(
      prompt(
        "Please type in the length of your password! The length of the password needs to have a minimum of 8 characters and a maximum of 128 characters!"
      )
    );
    if (passwordLength >= 8 && passwordLength <= 128) {
      lengthStatus = false;
    } else {
      alert("Invalid password length! Please try again!");
    }
  }
  // Define inital password to be empty string
  let password = "";

  // Generate random password
  for (let i = 0; i < passwordLength; i++) {
    // Generate random number between 0 and length of the passwordChara string
    let randomNum = Math.trunc(Math.random() * passwordChara.length);
    // Generate random character
    let randomChara = passwordChara[randomNum];
    password += randomChara;
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
