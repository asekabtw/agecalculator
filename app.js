const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const inputs = document.querySelectorAll(".form__input");
const submit = document.querySelector(".main__submit");
// const year = new Date().getTime() - new Date("1984-09-24");

// const result = new Number(
//   (new Date().getTime() - new Date("24 September 1984").getTime()) / 31536000000
// );

// console.log(year / (1000 * 60 * 60 * 24));

function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function check() {
  const daysInMonth = getDaysInMonth(month.value, year.value);
  if (day.value > daysInMonth) {
    day.parentElement.classList.add("error");
    day.parentElement.querySelector(".form__error").innerHTML =
      "Must be a valid date";
  } else if (month.value > 12) {
    month.parentElement.classList.add("error");
    month.parentElement.querySelector(".form__error").innerHTML =
      "Must be a valid month";
  } else if (year.value < 1900 && year.value != "") {
    year.parentElement.classList.add("error");
    year.parentElement.querySelector(".form__error").innerHTML =
      "Must be a valid year";
  } else if (day.value > 28 && month.value === 2 && year.value % 4 === 0) {
  } else {
    console.log(day.value);
  }
}

submit.addEventListener("click", () => {
  // if (day.value <= 31 && month.value <= 12 && year.value >= 1900) {
  //   console.log(day.value);
  //   console.log(month.value);
  //   console.log(year.value);
  // }
  // if (day.value > 31) {
  // } else if (day.value == '' || month.value == '' || year.value == '') {
  // }
  inputs.forEach((item) => {
    if (item.value === "") {
      item.parentElement.classList.add("error");
      item.parentElement.querySelector(".form__error").innerHTML =
        "This field is required";
    } else if (item.value.match(/[a-z]/gi)) {
      item.parentElement.classList.add("error");
    } else {
      item.parentElement.classList.remove("error");
    }
    // else if (inputs[0] === item && item.value > 31) {
    //   item.parentElement.classList.add("error");
    // } else if (inputs[1] === item && item.value > 12) {
    //   item.parentElement.classList.add("error");
    // } else if (inputs[2] === item && item.value < 1900) {
    //   item.parentElement.classList.add("error");
    // }
  });
  check();
});

check();
