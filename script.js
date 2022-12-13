const UpperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerChar = "abcdefghijklmnopqrstuvwxyz";
const NumericChar = "1234567890";
const Specialchar = "!@#$%&(){}[]?";

const getRandomData = (Dataset) => {
  return Dataset[Math.floor(Math.random * Dataset.length)];
}

const passbox = document.getElementById("passbox")
const lengthbox = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const specialchar = document.getElementById("specialchar");
const btn = document.getElementById("btn");

const generatepass = (password = "")=>{
  if(uppercase.checked){
    password += getRandomData(UpperChar);
  }
  if (lowercase.checked) {
    password += getRandomData(LowerChar);
  }
  if (numbers.checked) {
    password += getRandomData(NumericChar);
  }
  if (specialchar.checked) {
    password += getRandomData(Specialchar);
  }
  if(password.length <= lengthbox.value){
    return generatepass();
  }
  if (password.length > lengthbox.value) {
    return password.slice(0,lengthbox.value+1);
  }
}

btn.addEventListener("click",function(){
  generatepass();
})