const data = require('../data/zoo_data');

const { employees, species } = data;

const getOldestFromFirstSpecies = (id) => {
  // seu código aqui
  const findEmployed = employees.find((employed) => employed.id === id);
  const FirstAnimal = findEmployed.responsibleFor[0];
  const findAnimal = species.find((animal) => animal.id === FirstAnimal);
  const AnimalResidents = findAnimal.residents;
  const findOlderAge = AnimalResidents.reduce((acc, cur) => {
    const olderAge = acc > cur.age ? acc : cur.age;
    return olderAge;
  }, 0);
  const findAnimalPerAge = AnimalResidents.find((age) => age.age === findOlderAge);
  const animalValues = Object.values(findAnimalPerAge);
  return animalValues;
};
module.exports = getOldestFromFirstSpecies;
