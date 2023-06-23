// Assignment code here

function confirm_include(id, group){
  let include_confirm = document.getElementById(id).checked;
  if (!include_confirm) include_confirm = confirm("Your Password Will Be Less Secure!\nPress OK to Include " 
  + group +
  "\nPress Cancel to Continue With A Less Secure Password With\n" 
  + group + " Not Included.");

    return include_confirm;
}

function generatePassword(){

  let length = document.getElementById("length").value;
  if(isNaN(length) || length < 8 || length > 128){
    alert("Length of Pasword Must Be a Number Between 8 and 128");
    length = 0;
  }

  let include_upper_case = confirm_include("upper", "Upper Case Letters")

  let include_lower_case = confirm_include("lower", "Lower Case Letters");

  let include_special_chars = confirm_include("special", "Special Character");

  let include_numbers = confirm_include("number", "Numbers");
  
  
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
