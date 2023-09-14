const inputEl = document.getElementById("input");
const btnEl = document.getElementById("btn");

btnEl.addEventListener("click", () => {
    checkAndDisplayPalindrome(inputEl.value);
});

inputEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkAndDisplayPalindrome(inputEl.value);
    }
});

function checkAndDisplayPalindrome(str) {
    const isPalindrome = checkPalindrome(str);
    isPalindrome ? alert("The number is a palindrome") : alert("The number is not a palindrome");
}

function checkPalindrome(str) {
    return str === str.split("").reverse().join("");
}
