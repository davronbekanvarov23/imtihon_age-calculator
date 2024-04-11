const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const boxs = document.querySelectorAll(".box");
const validDay = document.getElementById("valid_day");
const validMonth = document.getElementById("valid_month");
const validYear = document.getElementById("valid_year");

const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const button = document.getElementById("button");
const now = new Date();
const dayy = now.getDate();
const yearr = now.getFullYear();
const monthh = now.getMonth() + 1;
// console.log(dayy);
button.addEventListener("click", (e) => {
  e.preventDefault();
  let yill = yearr - year.value;
  let oyy = monthh - month.value;
  let kunn = dayy - day.value;
  function result(k) {
    if (yill >= 0) {
      if (yill == 0) {
        if (oyy >= 0) {
          if (oyy == 0) {
            if (kunn > 0) {
              years.textContent = yill;
              months.textContent = oyy;
              days.textContent = kunn;
            } else {
              validDay.textContent = "Must be a valid day";
              validMonth.textContent = "Must be a valid month";
              validYear.textContent = "Must be in the past";
              boxs.forEach((box) => {
                box.classList.add("red");
              });
            }
          } else {
            if (kunn >= 0) {
              years.textContent = yill;
              months.textContent = oyy;
              days.textContent = kunn;
            } else {
              years.textContent = yill;
              months.textContent = oyy - 1;
              days.textContent = kunn + k;
            }
          }
        } else {
          validDay.textContent = "Must be a valid day";
          validMonth.textContent = "Must be a valid month";
          validYear.textContent = "Must be in the past";
          boxs.forEach((box) => {
            box.classList.add("red");
          });
        }
      } else {
        if (oyy >= 0) {
          if (kunn >= 0) {
            years.textContent = yill;
            months.textContent = oyy;
            days.textContent = kunn;
          } else {
            years.textContent = yill;
            months.textContent = oyy - 1;
            days.textContent = kunn + k;
          }
        } else {
          if (kunn >= 0) {
            years.textContent = yill - 1;
            months.textContent = oyy + 12;
            days.textContent = kunn;
          } else {
            years.textContent = yill - 1;
            months.textContent = oyy + 11;
            days.textContent = kunn + k;
          }
        }
      }
    } else {
      validDay.textContent = "Must be a valid day";
      validMonth.textContent = "Must be a valid month";
      validYear.textContent = "Must be in the past";
      boxs.forEach((box) => {
        box.classList.add("red");
      });
    }
  }
  /**function end */

  if (day.value == "" || month.value == "" || year.value == "") {
    validDay.textContent = "This field is required";
    validMonth.textContent = "This field is required";
    validYear.textContent = "This field is required";
    boxs.forEach((box) => {
      box.classList.add("red");
    });
  } else {
    if (month.value > 12) {
      validDay.textContent = "Must be a valid day";
      validMonth.textContent = "Must be a valid month";
      validYear.textContent = "Must be in the past";
      boxs.forEach((box) => {
        box.classList.add("red");
      });
    } else {
      if (
        (year.value % 4 == 0 && year.value % 100 != 0) ||
        year.value % 400 == 0
      ) {
        if (month.value == 2) {
          if (day.value <= 29) {
            result(31);
          } else {
            validDay.textContent = "Must be a valid date";
            boxs.forEach((box) => {
              box.classList.add("red");
            });
          }
        } else if (
          month.value == 1 ||
          month.value == 3 ||
          month.value == 5 ||
          month.value == 7 ||
          month.value == 8 ||
          month.value == 10 ||
          month.value == 12
        ) {
          if (day.value <= 31) {
            result(31);
          } else {
            validDay.textContent = "Must be a valid date";
            boxs.forEach((box) => {
              box.classList.add("red");
            });
          }
        } else {
          if (day.value <= 30) {
            result(31);
          } else {
            validDay.textContent = "Must be a valid date";
            boxs.forEach((box) => {
              box.classList.add("red");
            });
          }
        }
      } else {
        if (month.value == 2) {
          if (day.value <= 28) {
            result(31);
          } else {
            validDay.textContent = "Must be a valid date";
            boxs.forEach((box) => {
              box.classList.add("red");
            });
          }
        } else if (
          month.value == 1 ||
          month.value == 3 ||
          month.value == 5 ||
          month.value == 7 ||
          month.value == 8 ||
          month.value == 10 ||
          month.value == 12
        ) {
          if (day.value <= 31) {
            result(31);
          } else {
            validDay.textContent = "Must be a valid date";
            boxs.forEach((box) => {
              box.classList.add("red");
            });
          }
        } else {
          if (day.value <= 30) {
            result(31);
          } else {
            validDay.textContent = "Must be a valid date";
            boxs.forEach((box) => {
              box.classList.add("red");
            });
          }
        }
      }
    }
  }
});
