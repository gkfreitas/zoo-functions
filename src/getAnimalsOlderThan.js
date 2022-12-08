const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  // seu código aqui
  const findElement = species.find((element) => element.name === animal);
  const { residents } = findElement;
  const everyElement = residents.every((element) => element.age > age);
  return everyElement;
};

module.exports = getAnimalsOlderThan;
