// Dom Selectors
const day = document.getElementById("days");
const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");

const genDOM = (num) => {
  return (
    '<div class="page next top" data-num="' +
    (num - 1) +
    '" ></div>' +
    '<div class="page prev top" data-num="' +
    num +
    '"></div>' +
    '<div class="page prev bottom" data-num="' +
    num +
    '"></div>' +
    '<div class="page next bottom" data-num="' +
    (num - 1) +
    '"></div>'
  );
};

// End date
const endDate = new Date("Aug 5, 2021 15:37:25").getTime();

// On load put values in clock
const onLoad = () => {
  // Today date:
  const todayDate = new Date().getTime();

  // Difference between end date and today
  const distance = endDate - todayDate;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  day.innerHTML = genDOM(days);
  hour.innerHTML = genDOM(hours);
  minute.innerHTML = genDOM(minutes);
  second.innerHTML = genDOM(seconds);
};

onLoad();

const Interval = setInterval(function () {
  // Today date:
  const todayDate = new Date().getTime();

  // Difference between end date and today
  const distance = endDate - todayDate;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (seconds <= 0) {
    seconds = 60;
    $("#minutes").empty().append(genDOM(minutes));
  }

  if (minutes <= 0) {
    $("#hours").empty().append(genDOM(hours));
  }

  if (hours <= 0) {
    $("#days").empty().append(genDOM(days));
  }

  $("#seconds").empty().append(genDOM(seconds));

  // When you reach end date
  if (distance < 0) {
    clearInterval(interval);
    days.innerHTML = "/";
    hours.innerHTML = "/";
    minutes.innerHTML = "/";
    second.innerHTML = "/";
  }
}, 1000);
