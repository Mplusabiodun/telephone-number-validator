let inputtedNum = document.getElementById("user-input");
let output = document.getElementById("results-div");
const check_btn = document.getElementById("check-btn");
const clear_btn = document.getElementById("clear-btn");

function telephoneCheck() {
  // Remove all non-digit characters
  let cleaned = inputtedNum.value.replace(/\D/g, "");
  if (cleaned === "") {
    return alert("Please provide a phone number");
  }
  // Check if the cleaned string has a length of 10 or 11
  else if (
    (cleaned.length !== 10 && cleaned.length !== 11) ||
    !/^\d+$/.test(cleaned)
  ) {
    output.textContent = `Invalid US number: ${inputtedNum.value}`;
    // return false;
  }
  // Check if the cleaned string starts with 1 (optional)
  else if (cleaned.length === 11 && cleaned[0] !== "1") {
    output.textContent = `valid US number: ${inputtedNum.value}`;
  }
  // Check if the cleaned string contains only digits
  // else if (!/^\d+$/.test(cleaned)) {
  //   output.textContent = `Invalid US number: ${inputtedNum}`;
  // }
  else {
    output.textContent = `valid US number: ${inputtedNum.value}`;
  }
}

// function clearOutput() {
//   inputtedNum.value = "";
//   output.textContent = "";
// }
check_btn.addEventListener("click", (event) => event.preventDefault());
clear_btn.addEventListener("click", (event) => event.preventDefault());
check_btn.addEventListener("click", telephoneCheck);
clear_btn.addEventListener("click", clearOutput);

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
