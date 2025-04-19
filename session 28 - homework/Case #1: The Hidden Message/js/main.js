const button = document.querySelector("button");
const hiddenMsg = document.getElementById("hidden-message");
const visibleMsg = document.querySelector("#decoded-message");

button.addEventListener("click",(e)=>{
    let hiddenText = hiddenMsg.textContent;
    hiddenText = hiddenText.split("").reverse().join("");

    visibleMsg.textContent = hiddenText;

})