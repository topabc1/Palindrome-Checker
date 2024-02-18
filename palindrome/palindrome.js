const textInput = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");

checkBtn.addEventListener("click", () => {
  if(textInput.value !== "") {
    checkForPalindrome();
  } else {
    alert("Please input a value");
  }
});

function checkForPalindrome() {
  // convert to lower case
  let input = textInput.value.toLowerCase();

  // search for punctuation and spacing
  const regex = /[(+-\s.),'"`;*:_-]|\/|\\/g;
  input = input.replace(regex, "");
  console.log(input);

  // make input an array of chars
  let inputArray = input.split("");
  
  // reverse inputArray and make it string again
  let inputReversed = inputArray.reverse().join("");

  // check for palindrome
  if(input === inputReversed) {
    result.innerHTML = `<strong>${textInput.value}</strong> is a palindrome.`;
  } else {
    result.innerHTML = `<strong>${textInput.value}</strong> is not a palindrome.`;
  }
}