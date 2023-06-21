// Assignment code here



function generatePassword(){

  let length = prompt("How long would you like your Password?\nChoose Between 8 and 128 characters");
  if(length <=8 || length >=128)length = prompt("Please Choose between 8 and 128 characters");
  if(!Number.isInteger(length))length= prompt("Please Choose between 8 and 128 characters") ;

  let include_upper_case = confirm("Would you like to include Upper Case Letters?");
  if (!include_upper_case) include_upper_case = confirm("Your Password will be less secure!\nPress OK to include and Cancel to Continue less Secure Password");

  let include_lower_case = confirm("Would you like to include Lower Case Letters?");
  if (!include_lower_case) include_lower_case = confirm("Your Password will be less secure!\nPress OK to include and Cancel to Continue less Secure Password");
  
  let include_special_chars = confirm("Would you like Special Characters?");
  if (!include_special_chars) include_special_chars = confirm("Your Password will be less secure!\nPress OK to include and Cancel to Continue less Secure Password");
  
  let include_numbers = confirm("Do you want Numbers in included?");
  if (!include_numbers) include_numbers = confirm("Your Password will be less secure!\nPress OK to include and Cancel to Continue less Secure Password");
  
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
