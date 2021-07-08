function getDayName(dateString) {
  const daysOfWeeks = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];

  return daysOfWeeks[new Date(dateString).getDay()];
}

console.log(
  getDayName('10/12/2009')
);