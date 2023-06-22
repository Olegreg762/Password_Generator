// Assignment code here

function sercure_alert(){
  let confrimation = confirm("Your Password Will Be Less Secure!\nPress OK to Include and Cancel to Continue With Less Secure Password");
    return confrimation
}

function generatePassword(){

  let length = prompt("How long would you like your Password?\nChoose Between 8 and 128 characters");
  while(isNaN(length) || length < 8 || length > 128){
    length = prompt("Please Choose between 8 and 128 characters")
  }

  let include_upper_case = confirm("Would you like to include Upper Case Letters?");
  if (!include_upper_case) include_upper_case = sercure_alert()

  let include_lower_case = confirm("Would you like to include Lower Case Letters?");
  if (!include_lower_case) include_lower_case = sercure_alert()

  let include_special_chars = confirm("Would you like Special Characters?");
  if (!include_special_chars) include_special_chars = sercure_alert()

  let include_numbers = confirm("Do you want Numbers in included?");
  if (!include_numbers) include_numbers = sercure_alert()

  while(!include_upper_case && !include_lower_case && !include_special_chars && !include_numbers){
    alert("You Must Choose At Least One Group To Be Included")

    include_upper_case = confirm("Would you like to include Upper Case Letters?");
    if (!include_upper_case) include_upper_case = sercure_alert()
  
    include_lower_case = confirm("Would you like to include Lower Case Letters?");
    if (!include_lower_case) include_lower_case = sercure_alert()
  
    include_special_chars = confirm("Would you like Special Characters?");
    if (!include_special_chars) include_special_chars = sercure_alert()
  
    include_numbers = confirm("Do you want Numbers in included?");
    if (!include_numbers) include_numbers = sercure_alert()
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
