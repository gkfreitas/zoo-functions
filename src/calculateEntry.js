const data = require('../data/zoo_data');

const entrantsPersons = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

const countEntrants = (entrants) => {
  // seu código aqui
  const entrantsAge = entrants.map((element) => {
    const arrayAge = element.age;
    return arrayAge;
  });
  const childs = entrantsAge.filter((age) => age < 18);
  const adult = entrantsAge.filter((age) => age >= 18 && age < 50);
  const senior = entrantsAge.filter((age) => age >= 50);
  return {
    child: childs.length,
    adult: adult.length,
    senior: senior.length,
  };
};

const calculateEntry = (entrants) => {
  // seu código aqui
  if (!Array.isArray(entrants)) {
    return 0;
  }
  // Soma dos valores
  const { child, adult, senior } = countEntrants(entrants);

  const childCalc = child * 20.99;
  const adultCalc = adult * 49.99;
  const seniorCalc = senior * 24.99;
  const calcTotal = childCalc + adultCalc + seniorCalc;
  return calcTotal;
};
console.log(calculateEntry(entrantsPersons));

module.exports = { calculateEntry, countEntrants };
