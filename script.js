let inputtedNum = document.getElementById("user-input");
let output = document.getElementById("results-div");
const check_btn = document.getElementById("check-btn");
const clear_btn = document.getElementById("clear-btn");

function telephoneCheck() {
  // Remove all non-digit characters
  let cleaned = inputtedNum.value.replace(/\D/g, "");
  // let cleaned = inputtedNum.value.replace(/[^0-9\s]/g, "");
  if (cleaned === "") {
    return alert("Please provide a phone number");
  }
  // Check if the cleaned string, has a length of 10 or 11 or contains only digits or correctParentheses
  else if (
    (cleaned.length !== 10 && cleaned.length !== 11) ||
    !/^\d+$/.test(cleaned) ||
    (cleaned.includes("(") && !/^\(\d{3}\)\s\d{3}-\d{4}$/.test(cleaned)) // /^\([0-9]{3}\)$/
  ) {
    output.textContent = `Invalid US number: ${inputtedNum.value}`;
  }
  // Check if the cleaned string starts with 1
  else if (
    (cleaned.length === 11 && cleaned[0] !== "1" && /(\([0-9]{3}\))*/) ||
    !cleaned.includes(" ") ||
    cleaned.includes("-")
    // || /^\([0-9]{3}\)$/
  ) {
    output.textContent = `valid US number: ${inputtedNum.value}`;
  } else {
    output.textContent = `valid US number: ${inputtedNum.value}`;
  }

  // if (str.includes('(') && !/^\(\d{3}\)\s\d{3}-\d{4}$/.test(str)) {
  //   return false;
  // }
  // if (str.includes('-') && !/^\d{3}-\d{3}-\d{4}$/.test(str)) {
  //   return false;
  // }
}

function clearOutput() {
  inputtedNum.value = "";
  output.textContent = "";
}
check_btn.addEventListener("click", (event) => event.preventDefault());
clear_btn.addEventListener("click", (event) => event.preventDefault());
check_btn.addEventListener("click", telephoneCheck);
clear_btn.addEventListener("click", clearOutput);
