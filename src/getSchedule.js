const data = require('../data/zoo_data');

const { species, hours } = data;

// Filtra semanas que estão disponível.
const weeks = Object.keys(hours);
const weekHours = Object.values(hours);
// Mostra todos os animais do zoo
const animalNames = species.map((element) => element.name);

const verifyAnimals = (scheduleTarget) => {
// Verifica quais dias vão aparecer os animais indicados.
  const findSpecies = species.find((element) => {
    const findTarget = element.name === scheduleTarget;
    return findTarget;
  });
  const arrayAvailability = findSpecies.availability;
  return arrayAvailability;
};

const verifyAnimalsDays = (scheduleTarget) => {
  const indexWeek = weeks.indexOf(scheduleTarget);
  const message = weekHours[indexWeek];
  const filterAvalability = species.filter((e) => e.availability.includes(scheduleTarget));
  const animalsAvalability = filterAvalability.map((element) => element.name);
  if (scheduleTarget === 'Monday') {
    return {
      [scheduleTarget]: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      },
    };
  }
  return {
    [scheduleTarget]: {
      officeHour: `Open from ${message.open}am until ${message.close}pm`,
      exhibition: animalsAvalability,
    },
  };
};

const getSchedule = (scheduleTarget) => {
// seu código aqui
  if (animalNames.includes(scheduleTarget)) {
    return verifyAnimals(scheduleTarget);
  }
  // Verifica quais animais vão aparecer nos dias indicados
  if (weeks.includes(scheduleTarget)) {
    return verifyAnimalsDays(scheduleTarget);
  }
  // Retorna todos os dias dias horários e animais que irão aparecer.
  let allDays = {};
  weeks.forEach((element) => {
    allDays = Object.assign(allDays, verifyAnimalsDays(element));
  }, {});
  return allDays;
};

module.exports = getSchedule;
