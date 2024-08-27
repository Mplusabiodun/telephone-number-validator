let inputtedNum = document.getElementById("number");
let output = document.getElementById("output");
let outputDiv = document.querySelector(".output_div");
const button = document.getElementById("convert-btn");
outputDiv.style.visibility = "hidden";

function palindromeChecker() {
  if (inputtedNum.value === "") {
    error();
    output.textContent = "Please enter a valid number";
  } else if (inputtedNum.value < 0) {
    error();
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (inputtedNum.value > 3999) {
    error();
    output.textContent = "Please enter a number less than or equal to 3999";
  } else {
    const romanNumerals = [
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1],
    ];
    let result = "";
    for (let i = 0; i < romanNumerals.length; i++) {
      while (inputtedNum.value >= romanNumerals[i][1]) {
        result += romanNumerals[i][0];
        inputtedNum.value -= romanNumerals[i][1];
      }
    }
    output.textContent = result;
    outputDiv.style.backgroundColor = "#3b3b4f";
    outputDiv.style.borderColor = "#fff";
    output.style.color = "#fff";
  }
}
button.addEventListener("click", (event) => event.preventDefault());
button.addEventListener("click", palindromeChecker);

function error() {
  outputDiv.style.visibility = "visible";
  outputDiv.style.backgroundColor = "#ffadad";
  outputDiv.style.borderColor = "#850000";
  output.style.color = "#850000";
}

// function telephoneCheck(str) {
//   // Regular expression pattern for US phone numbers
//   const pattern = /^(1\s?)?(\(\d{3}\)|\d{3})([-.\s]?)\d{3}([-.\s]?)\d{4}$/;

//   return pattern.test(str);
// }

// // Test the function
// console.log(telephoneCheck("555-555-5555")); // true
// console.log(telephoneCheck("1 555-555-5555")); // true
// console.log(telephoneCheck("1 (555) 555-5555")); // true
// console.log(telephoneCheck("5555555555")); // true
// console.log(telephoneCheck("(555)555-5555")); // true
// console.log(telephoneCheck("555-5555")); // false
// console.log(telephoneCheck("123**&!!asdf#")); // false

// function telephoneCheck(str) {
//   // Remove all non-digit characters
//   let cleaned = str.replace(/\D/g, '');

//   // Check if the cleaned string has a length of 10 or 11
//   if (cleaned.length !== 10 && cleaned.length !== 11) {
//     return false;
//   }

//   // Check if the cleaned string starts with 1 (optional)
//   if (cleaned.length === 11 && cleaned[0] !== '1') {
//     return false;
//   }

//   // Check if the cleaned string contains only digits
//   if (!/^\d+$/.test(cleaned)) {
//     return false;
//   }

//   // If all checks pass, return true
//   return true;
// }

// console.log(telephoneCheck("555-555-5555")); // true
// console.log(telephoneCheck("1 555 555 5555")); // true
// console.log(telephoneCheck("5555555555")); // true
// console.log(telephoneCheck("555-555-555")); // false
// console.log(telephoneCheck("555/555/5555")); // false
