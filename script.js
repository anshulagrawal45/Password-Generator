let UpperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let LowerChar = "abcdefghijklmnopqrstuvwxyz";
let NumericChar = "1234567890";
let Specialchar = "!@#$%&(){}[]?";
let password = "";
let passbox = document.getElementById("passbox");
let lengthbox = document.getElementById("length");
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let specialchar = document.getElementById("specialchar");
let btn = document.getElementById("btn");

function generatepass(password) {
  let array = [];
  if (uppercase.checked) {
    array.push(UpperChar);
  }
  if (lowercase.checked) {
    array.push(LowerChar);
  }
  if (numbers.checked) {
    array.push(NumericChar);
  }
  if (specialchar.checked) {
    array.push(Specialchar);
  }
  while (password.length < lengthbox.value) {
    let Dataset = array[Math.floor(Math.random() * array.length)];
    password += getRandomData(Dataset);
  }
  passbox.innerText = password;
}
function getRandomData(Dataset) {
  let a = Dataset[Math.floor(Math.random() * Dataset.length)];
  return a;
}
