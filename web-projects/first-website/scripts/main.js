// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// function multiply(num1, num2) {
//   let result = num1 * num2;
//   return result;
// }

// document.querySelector("html").addEventListener("click", () => {
//   alert("别戳我，我怕疼！");
// });
const myImage = document.querySelector("img");
myImage.onclick = function () {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/toggle-on.png") {
    myImage.setAttribute("src", "images/toggle-off.png");
  } else {
    myImage.setAttribute("src", "images/toggle-on.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}
