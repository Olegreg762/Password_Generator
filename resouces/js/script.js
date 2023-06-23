// Assignment code here

function confirm_include(group){
  include_confirm = confirm("Would you like to include " + group + "?");
  if (!include_confirm) include_confirm = confirm("Your Password Will Be Less Secure!\nPress OK to Include " 
  + group +
  "\nPress Cancel to Continue With A Less Secure Password With\n" 
  + group + " Not Included.");

    return include_confirm;
}

function generatePassword(){

  let length = prompt("How long would you like your Password?\nChoose Between 8 and 128 characters");
  while(isNaN(length) || length < 8 || length > 128){
    length = prompt("Please Choose between 8 and 128 characters");
  }

  let include_upper_case = false,
      include_lower_case = false,
      include_special_chars = false,
      include_numbers = false;

  while(!include_upper_case && !include_lower_case && !include_special_chars && !include_numbers){
    alert("You Must Choose At Least One of The Following Groups To Be Included");

    include_upper_case = confirm_include("Upper Case Letter");
  
    include_lower_case = confirm_include("Lower Case Letters");
  
    include_special_chars = confirm_include("Special Characters");
  
    include_numbers = confirm_include("Numbers");
  }

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

  const length_array = new Uint32Array(length);
  crypto.getRandomValues(length_array);

  for(let i = 0; i < length; i++){
    const included_chars_index = length_array[i] % included_chars.length;
    password += included_chars[included_chars_index];
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
