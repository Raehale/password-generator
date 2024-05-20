const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePasswords() {
    let passwordOne = "";
    let passwordTwo = "";
    let passLength = document.getElementById("password_length");
    
    if (passLength) {
        
    }
    
    for (let i = 0; i < 15; i++) {
        let characterOne = characters[Math.floor(Math.random() * (characters.length - 1))];
        passwordOne += characterOne;
        
        let characterTwo = characters[Math.floor(Math.random() * (characters.length - 1))];
        passwordTwo += characterTwo;
    }
    
    document.getElementById('password_field_one').textContent = passwordOne;
    document.getElementById('password_field_two').textContent = passwordTwo;
}

/***LIGHT MODE ***/

let lightModeCheckbox = document.getElementById("light_mode");
let container = document.getElementById("info_container");

lightModeCheckbox.addEventListener('change', function() {
  if (this.checked) {
    container.classList.add("light-mode");
  } else {
    container.classList.remove("light-mode");
  }
});