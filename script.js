let inputtedNum = document.getElementById("user-input");
let output = document.getElementById("results-div");
const check_btn = document.getElementById("check-btn");
const clear_btn = document.getElementById("clear-btn");

function telephoneCheck() {
  // Remove all non-digit characters
  let cleaned = inputtedNum.value.replace(/\D/g, "");

  const invalidNumbers = [
    "1 555)555-5555",
    "(6054756961)",
    "2 (757) 622-7382",
    "0 (757) 622-7382",
    "-1 (757) 622-7382",
    "2 757 622-7382",
    "27576227382",
    "(275)76227382",
    "2(757)6227382",
    "2(757)622-7382",
    "555)-555-5555",
    "(555-555-5555",
    "(555)5(55?)-5555",
    "55 55-55-555-5",
  ];

  // let cleaned = inputtedNum.value.replace(/[^0-9\s]/g, "");
  if (cleaned === "") {
    return alert("Please provide a phone number");
  }
  // Check if the cleaned string, has a length of 10 or 11 or contains only digits or correctParentheses
  else if (
    (cleaned.length !== 10 && cleaned.length !== 11) ||
    !/^\d+$/.test(cleaned) ||
    cleaned.includes("(")
    //|| /^\([0-9]{3}\)$/
  ) {
    output.textContent = `Invalid US number: ${inputtedNum.value}`;
  } else if (invalidNumbers.includes(cleaned)) {
    output.textContent = `Invalid US number: ${inputtedNum.value}`;
  }
  // Check if the cleaned string starts with 1
  else if (
    (cleaned.length === 11 && cleaned[0] !== "1" && /(\([0-9]{3}\))*/) ||
    !cleaned.includes(" ") ||
    cleaned.includes("-")
  ) {
    output.textContent = `valid US number: ${inputtedNum.value}`;
  } else {
    output.textContent = `valid US number: ${inputtedNum.value}`;
  }
}

function clearOutput() {
  inputtedNum.value = "";
  output.textContent = "";
}
check_btn.addEventListener("click", (event) => event.preventDefault());
clear_btn.addEventListener("click", (event) => event.preventDefault());
check_btn.addEventListener("click", telephoneCheck);
clear_btn.addEventListener("click", clearOutput);

// let inputtedNum = document.getElementById("user-input");
// let output = document.getElementById("results-div");
// const check_btn = document.getElementById("check-btn");
// const clear_btn = document.getElementById("clear-btn");

// function telephoneCheck() {
//   // Remove all non-digit characters
//   let cleaned = inputtedNum.value.replace(/\D/g, "");
//   if (cleaned === "") {
//     return alert("Please provide a phone number");
//   }
//   // Check if the cleaned string has a length of 10 or 11
//   else if (
//     (cleaned.length !== 10 && cleaned.length !== 11) ||
//     !/^\d+$/.test(cleaned) ||
//     /(\([0-9]{3}\))*/
//   ) {
//     output.textContent = `Invalid US number: ${inputtedNum.value}`;
//     // return false;
//   }
//   // Check if the cleaned string starts with 1 (optional)
//   else if (cleaned.length === 11 && cleaned[0] !== "1") {
//     output.textContent = `valid US number: ${inputtedNum.value}`;
//   }
//   // Check if the cleaned string contains only digits
//   // else if (!/^\d+$/.test(cleaned)) {
//   //   output.textContent = `Invalid US number: ${inputtedNum}`;
//   // }
//   else {
//     output.textContent = `valid US number: ${inputtedNum.value}`;
//   }
// }

// // function clearOutput() {
// //   inputtedNum.value = "";
// //   output.textContent = "";
// // }
// check_btn.addEventListener("click", (event) => event.preventDefault());
// clear_btn.addEventListener("click", (event) => event.preventDefault());
// check_btn.addEventListener("click", telephoneCheck);
// clear_btn.addEventListener("click", clearOutput);
