// Assignment code here

function number_generator(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePassword(length, inlcude_upper_case, inlcude_lower_case, inlcude_special_chars, inlcude_numbers){
  let included_chars = "";
  const all_chars = number_generator(33,127);
  const upper_case = number_generator(65,90);
  const lower_case = number_generator(97,122);
  const special_chars = number_generator(33,64);
  const numbers = number_generator(48,57);

  if (inlcude_upper_case, inlcude_lower_case, inlcude_special_chars, inlcude_numbers){
    included_chars = all_chars 
  }

  if (inlcude_upper_case){
    included_chars += upper_case;
  }

  if (inlcude_lower_case){
    included_chars += lower_case;
  }

  if (inlcude_special_chars){
    included_chars += special_chars;
  }

  if(inlcude_numbers){
    included_chars += numbers;
  }


}

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
