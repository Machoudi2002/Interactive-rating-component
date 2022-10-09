const rateNum = document.querySelectorAll(".rate-num");
var current = document.getElementsByClassName("active");
const submitBtn = document.querySelector('#submit-btn')
const submitRate = document.querySelector('#var-rate')


rateNum.forEach(span => {
    span.addEventListener("click", (e) => {
        rateNum.forEach(span => {
            span.classList.remove("active")
        })
        e.target.classList.add("active")

        value = e.target.textContent;

    })


})

submitBtn.addEventListener("click", () => {
    submitRate.textContent = value;
    before.style.display = "none";
    after.style.display = "block";
  });



