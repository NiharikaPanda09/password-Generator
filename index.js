const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
"s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_",
"-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



let btn = document.getElementById("generate");
let pass_1 = document.getElementById("password-1");
let pass_2 = document.getElementById("password-2");

function generatePassword(){
    let password_1 = ""
    let password_2 = ""
   

    for(let i=0;i<15;i++){
        const randomIndex1 = Math.floor(Math.random() * characters.length);
        const randomIndex2 =  Math.floor(Math.random() * characters.length);
     password_1 += characters[randomIndex1]
      password_2+= characters[randomIndex2]
  
      
    }
    pass_1.textContent = password_1;
    pass_2.textContent = password_2
     
      
    
   
    
}
function copyFunction(){
  let text = pass_1.textContent || pass_1.innerText; // Get text from <p> or <div>
    
    let tempInput = document.createElement("textarea");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    alert("Copied the text: " + text);

     
}
function copyFunction_2(){
let text2= pass_2.textContent || pass_2.innerText; // Get text from <p> or <div>
    
    let tempInput2 = document.createElement("textarea");
    tempInput2.value = text2;
    document.body.appendChild(tempInput2);
    tempInput2.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput2);

    alert("Copied the text: " + text2);
}

