let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
const inputs = document.querySelectorAll(".form__input");
const submit = document.querySelector(".main__submit");
const yearsNumber = document.querySelector(".main__years--number");
const monthsNumber = document.querySelector(".main__months--number");
const daysNumber = document.querySelector(".main__days--number");

function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

let status = 0;
function check() {
  const daysInMonth = getDaysInMonth(month.value, year.value);
  const nowDate = new Date().getTime();
  const prevDate = new Date(
    `${year.value}-${month.value}-${day.value}`
  ).getTime();
  console.log(nowDate);
  console.log(prevDate);
  if (prevDate > nowDate) {
    day.parentElement.classList.add("error");
    day.parentElement.querySelector(".form__error").innerHTML =
      "Must be a valid date";
    month.parentElement.classList.add("error");
    month.parentElement.querySelector(".form__error").innerHTML =
      "Must be a valid month";
    year.parentElement.classList.add("error");
    year.parentElement.querySelector(".form__error").innerHTML =
      "Must be a valid year";
  } else if (day.value > daysInMonth) {
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
  } else {
    day = day.value;
    month = month.value;
    year = year.value;
    // day = 28;
    // month = 12;
    // year = 2000;
  }
}

submit.addEventListener("click", () => {
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
  });

  let currentDay = new Date().getDate();
  // let currentDay = 18;
  let currentMonth = new Date().getMonth() + 1;
  // let currentMonth = 10;
  let currentYear = new Date().getFullYear();
  let finalDay = 0;
  let finalMonth = 0;
  const daysInMonth = getDaysInMonth(month.value, year.value);
  check();
  if (day !== "" && month !== "" && year !== "") {
    if (currentDay >= day - 1) {
      console.log("plus");
      finalDay = currentDay - day + 1;
      // if (currentDay >= day) {
      if (currentMonth >= month) {
        finalMonth = currentMonth - month;
        year = currentYear - year;
      } else {
        finalMonth = currentMonth + 12 - month;
        year = currentYear - year - 1;
      }
      // }
    } else {
      console.log("minus");
      finalDay = daysInMonth - day + currentDay + 1;
      currentMonth--;
      // if (currentDay < day - 1) {
      //   currentMonth--;
      // }
      if (currentMonth >= month) {
        finalMonth = currentMonth - month;
        year = currentYear - year;
      } else {
        finalMonth = currentMonth + 12 - month;
        year = currentYear - year - 1;
      }
    }
  }
  if (
    !isNaN(day) &&
    day !== "" &&
    !isNaN(month) &&
    month !== "" &&
    !isNaN(year) &&
    year !== ""
  ) {
    yearsNumber.innerHTML = year;
    monthsNumber.innerHTML = finalMonth;
    daysNumber.innerHTML = finalDay;
  }

  console.log(finalDay.toString());
  console.log(finalMonth.toString());
  console.log(year.toString());
  day = document.getElementById("day");
  month = document.getElementById("month");
  year = document.getElementById("year");
  // day = day.value;
  // month = month.value;
  // year = year.value;
});
