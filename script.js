// Assignment code here
const passwordArr = [];
// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

generatePassword = () => {
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
      prompt("Length of password? (Between 8 - 128)")
    );
    console.log(lengthOfPassword);
    console.log(typeof lengthOfPassword);
  }

  // prompt/ask user whether or not include lowercase, uppercase, numberic, and/or special characters

  prompt("Would you like to inclue Lowercase? ");

  // Validate input

  // generate password

  return lengthOfPassword;
};

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
});
