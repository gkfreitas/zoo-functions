const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  // seu código aqui
  const entrantsAge = entrants.map((element) => element.age);
  const childs = entrantsAge.filter((age) => age < 18);
  const adult = entrantsAge.filter((age) => age >= 18 && age < 50);
  const senior = entrantsAge.filter((age) => age >= 50);
  return { child: childs.length, adult: adult.length, senior: senior.length };
};

const { prices } = data;

const calculateEntry = (entrants) => {
  // seu código aqui
  if (!Array.isArray(entrants)) return 0;
  // Soma dos valores
  const { child, adult, senior } = countEntrants(entrants);
  const childCalc = child * prices.child;
  const adultCalc = adult * prices.adult;
  const seniorCalc = senior * prices.senior;
  const calcTotal = childCalc + adultCalc + seniorCalc;
  return calcTotal;
};
module.exports = { calculateEntry, countEntrants };
