// Get references to the #generate element
const generateBtn = document.querySelector("#generate");
let generatedPassword = "";
let finalPassword = "";
let finalOutput = "";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

function generatePassword() {
  let passwordText = document.querySelector("#password");
  passwordText.innerHTML = "placeholder='Your Secure Password'";

  let generatedPassword = "";
  let finalPassword = "";
  let finalOutput = "";

  // prompt user for password length
  let lengthOfPassword = parseInt(
    prompt("Length of password? (Between 8 - 128)")
  );
  console.log(lengthOfPassword);
  console.log(typeof lengthOfPassword);
  while (
    lengthOfPassword < 8 ||
    lengthOfPassword > 128 ||
    isNaN(lengthOfPassword)
  ) {
    lengthOfPassword = parseInt(
      prompt("Sorry that is invalid, Length of password? (Between 8 - 128)")
    );
    console.log(lengthOfPassword);
    console.log(typeof lengthOfPassword);
  }

  // prompt/ask user whether or not include lowercase, uppercase, numberic, and/or special characters

  const lower = confirm("Would you like to include lowercase letters? ");
  if (lower === true) {
    generatedPassword += lowerCaseLetters;
    console.log(generatedPassword);
  }

  const upper = confirm("Would you like to include uppercase letters? ");
  if (upper === true) {
    generatedPassword += upperCaseLetters;
    console.log(generatedPassword);
  }

  const nums = confirm("Would you like to include numbers? ");
  if (nums === true) {
    generatedPassword += numbers;
    console.log(generatedPassword);
  }

  const specialC = confirm("Would you like to include special characters? ");
  if (specialC === true) {
    generatedPassword += specialChars;
    console.log(generatedPassword);
  }

  function finalSelect() {
    let randomSelect =
      generatedPassword[Math.floor(Math.random() * generatedPassword.length)];
    return randomSelect;
  }

  for (let i = 1; i <= lengthOfPassword; i++) {
    finalOutput = finalPassword += finalSelect();
  }

  // generate password
  return finalOutput;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
});
