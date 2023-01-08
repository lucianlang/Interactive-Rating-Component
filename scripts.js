
const rateNumbers = document.querySelectorAll(".rate-number");

rateNumbers.forEach(function (e, index) {
    e.addEventListener("click", function () {
        document.querySelector(".selected-rate").value = index + 1;
        let selectedRate = document.querySelector(".selected-rate").value;
        document.querySelector(".selected-heading").innerText = `You selected ${selectedRate} out of 5`;
    })
})


function clickedNumber(number) {
    let unclickedNumbers = document.querySelectorAll(".rate-number-clicked");
    unclickedNumbers.forEach(function (unclickedNumber) {
        unclickedNumber.classList.replace("rate-number-clicked", "rate-number");
    })
    if (number.classList.contains("rate-number")) {
        number.classList.replace("rate-number", "rate-number-clicked");
    }
}

rateNumbers.forEach(e => e.addEventListener("click", () => clickedNumber(e)))


document.querySelector("input.submit-button").addEventListener("click", function () {
    if (!document.querySelector(".selected-rate").value) {
        alert(`You haven't selected any score yet!`);
    }
    else {
        document.querySelector(".rating-state").style.display = "none";
        document.querySelector(".thank-you-start").style.display = "flex";
    }

})




