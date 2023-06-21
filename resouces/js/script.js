// Assignment code here



function generatePassword(){
  let length = 10;
  let include_upper_case = true;
  let include_lower_case = true;
  let include_special_chars = true;
  let include_numbers = true;
  let included_chars = "";
  let password = "";

  if(include_upper_case){
    included_chars += "ABCDEFGHIJKLMNOPQRSTVWXYZ";
  }

  if(include_lower_case){
    included_chars += "abcdefghijklmnopqrstuvwxyz";
  }

  if(include_numbers){
    included_chars += "1234567890";
  }

  if(include_special_chars){
    included_chars += "!@#$%^&*()+=:/?.>,<\_-`~";
  }

  for(let i = 0; i < length; i++){
    password += included_chars[Math.floor(Math.random() * included_chars.length)];
  }

  

  return password 
  
}

password = generatePassword();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
