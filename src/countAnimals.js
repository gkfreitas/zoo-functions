const data = require('../data/zoo_data');

const { species } = data;
const countAnimals = (animal) => {
  const objectEveryAnimals = {};
  species.forEach((element) => {
    const animalFind = species.find((e) => e.name === element.name);
    objectEveryAnimals[element.name] = animalFind.residents.length;
  });
  if (animal === undefined) {
    return objectEveryAnimals;
  }
  const findAnimal = species.find((element) => {
    const objectAnimal = element.name === animal.species;
    return objectAnimal;
  });
  const animalCount = findAnimal.residents.length;
  if (Object.keys(animal).length === 1) {
    return animalCount;
  }
  const findAnimalSex = findAnimal.residents.filter((element) => element.sex === animal.sex);
  return findAnimalSex.length;
};

console.log(countAnimals({ species: 'giraffes' }));
module.exports = countAnimals;
