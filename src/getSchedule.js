const data = require('../data/zoo_data');

const { species } = data;

// Filtra semanas que estão disponível.
const weeks = species.map((element) => element.availability);
const weeksArray = weeks.reduce((acc, cur) => acc.concat(cur));
const weeksFilter = weeksArray.filter((element, index) => {
  const takeRepeated = weeksArray.indexOf(element) === index;
  return takeRepeated;
});

const getSchedule = (scheduleTarget) => {
  // seu código aqui
  const findSpecies = species.find((element) => {
    const findTarget = element.name === scheduleTarget;
    return findTarget;
  });
  const arrayAvailability = findSpecies.availability;
  return arrayAvailability;
};
console.log(weeksFilter);
console.log(getSchedule('lions'));

module.exports = getSchedule;
