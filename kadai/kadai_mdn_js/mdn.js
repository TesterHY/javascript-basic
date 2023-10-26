const today = new Date();
const [month, day, year] = [
  today.getMonth(),
  today.getDate(),
  today.getFullYear(),
];

console.log(year, month + 1, day);
