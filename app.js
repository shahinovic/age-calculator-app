const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const showDays = document.querySelector(".show-days span:first-child");
const showMonths = document.querySelector(".show-months span:first-child");
const showYears = document.querySelector(".show-years span:first-child");
const calculateBtn = document.querySelector(".calculator-button");

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();

const calculate = () => {
  const dayInputValue = parseInt(dayInput.value);
  const monthInputValue = parseInt(monthInput.value);
  const yearInputValue = parseInt(yearInput.value);

  // Validation
  if (isNaN(dayInputValue)) {
    dayInput.classList.add("error");
    document.querySelector('label[for="day"]').classList.add("error");
    document.querySelector(
      'label[for="day"]'
    ).dataset.error = `Enter a valid day`;
    return;
  }
  if (isNaN(monthInputValue)) {
    dayInput.classList.remove("error");
    document.querySelector('label[for="day"]').classList.remove("error");
    monthInput.classList.add("error");
    document.querySelector('label[for="month"]').classList.add("error");
    document.querySelector(
      'label[for="month"]'
    ).dataset.error = `Enter a valid Month`;
    return;
  }
  if (isNaN(yearInputValue) || yearInputValue > currentYear) {
    monthInput.classList.remove("error");
    document.querySelector('label[for="month"]').classList.remove("error");
    yearInput.classList.add("error");
    document.querySelector('label[for="year"]').classList.add("error");
    document.querySelector(
      'label[for="year"]'
    ).dataset.error = `Enter a valid Year`;
    return;
  } else {
    yearInput.classList.remove("error");
    document.querySelector('label[for="year"]').classList.remove("error");
  }

  if (
    dayInputValue < 1 ||
    dayInputValue > 31 ||
    monthInputValue < 1 ||
    monthInputValue > 12 ||
    yearInputValue > currentYear ||
    (yearInputValue === currentYear &&
      (monthInputValue > currentMonth || dayInputValue > currentDay))
  ) {
    alert("Please enter a valid date.");
    return;
  }

  // Calculation logic
  const outputDay = currentDay - dayInputValue;
  const outputMonth = currentMonth - monthInputValue;
  const outputYear = currentYear - yearInputValue;
  let day = 0;
  let month = 0;
  let year = 0;
  let dayId;
  let yearId;
  let monthId;

  function incrementDay() {
    day++;
    showDays.innerHTML = day;

    if (day === outputDay) {
      clearInterval(dayId);
    }
  }

  dayId = setInterval(incrementDay, 100);

  function incrementMonth() {
    month++;
    showMonths.innerHTML = month;

    if (month === outputMonth) {
      clearInterval(monthId);
    }
  }

  monthId = setInterval(incrementMonth, 100);

  function incrementYear() {
    year++;
    showYears.innerHTML = year;

    if (year === outputYear) {
      clearInterval(yearId);
    }
  }

  yearId = setInterval(incrementYear, 100);
};

calculateBtn.addEventListener("click", calculate);
