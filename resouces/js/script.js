// Assignment code here

// Function that sets the characters to be included in password
function confirm_include(group){
  // Looks at HTML doc to determine if checkbox is checked or not 
  let include_confirm = document.getElementById(group).checked;
  // IF not checked displays warning about password being less secure
  if (!include_confirm){ include_confirm = confirm("Your Password Will Be Less Secure!\nPress OK to Include " 
  + group + "!"+
  "\nPress Cancel to Continue With A Less Secure Password!\n");
  // Forces checkbox to be checked if user decides to include character group
  document.getElementById(group).checked = include_confirm;
}

    return include_confirm;
}
// Function that generates password
function generatePassword(){
  // Allows user to determine lenght of password between 8 and 128 digits
  let length = document.getElementById("length").value;
  // Displays warning if length not between 8-128 and/or Not a Number
  if(isNaN(length) || length < 8 || length > 128){
    alert("Length of Pasword Must Be a Number Between 8 and 128");
    length = 0;
  }
  // Defines Characters groups
  let include_upper_case = confirm_include("Upper Case Letters");
  let include_lower_case = confirm_include("Lower Case Letters");
  let include_special_chars = confirm_include("Special Character");
  let include_numbers = confirm_include("Numbers");
  
  
  let included_chars = "";
  

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

  const length_array = new Uint32Array(length);
  crypto.getRandomValues(length_array);

  let password = "";

  for(let i = 0; i < length; i++){
    const included_chars_index = length_array[i] % included_chars.length;
    password += included_chars[included_chars_index];
  }

  

  if(!include_upper_case && !include_lower_case && !include_special_chars && !include_numbers){
      password=("You Must Choose At Least One of The Groups To Be Included");
    }

  return password; 
  
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
