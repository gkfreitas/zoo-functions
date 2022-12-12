const data = require('../data/zoo_data');

const { employees, species } = data;

const verifyEmployeed = (object) => {
  if (object === undefined) {
    return undefined;
  }
  const arrayIds = employees.map((e) => e.id);
  const arrayFirstNames = employees.map((e) => e.firstName);
  const arrayLastNames = employees.map((e) => e.lastName);
  const allArrays = arrayIds.concat(arrayFirstNames, arrayLastNames);
  const objectValue = Object.values(object);
  const checkTrueOrFalse = allArrays.some((e) => e === objectValue[0]);
  return checkTrueOrFalse;
};

const findEmployeed = (object) => {
  // Encontrar a pessoa pelo id, nome ou sobrenome;
  const employeed = employees.find((idName) => {
    const valueObject = Object.values(object);
    const verifyIdName = Object.values(idName).includes(valueObject[0]);
    return verifyIdName;
  });
  return employeed;
};

const employeedInfo = (object) => {
  // Encontrar os animais que esta pessoa é responsável.
  const findInfo = findEmployeed(object);
  const animalResponsible = findInfo.responsibleFor;
  const animalFiltered = animalResponsible.map((e) => species.filter((id) => id.id === e));
  const animals = [];
  const locations = [];
  animalFiltered.forEach((e) => e.forEach((e2) => animals.push(e2.name)));
  animalFiltered.forEach((e) => e.forEach((e2) => locations.push(e2.location)));
  const objectInfos = {
    id: findInfo.id,
    fullName: `${findInfo.firstName} ${findInfo.lastName}`,
    species: animals,
    locations,
  };
  return objectInfos;
};

const mapId = employees.map((element) => element.id);
const objectId = {};
const getEmployeesCoverage = (object) => {
  if (verifyEmployeed(object) === false) {
    throw new Error('Informações inválidas');
  }
  if (verifyEmployeed(object)) {
    try {
      verifyEmployeed(object);
      return employeedInfo(object);
    } catch (error) {
      return error.message;
    }
  }
  if (verifyEmployeed(object) === undefined) {
    const loopId = mapId.map((e) => {
      objectId.id = e;
      return employeedInfo(objectId);
    });
    return loopId;
  }
};

console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
