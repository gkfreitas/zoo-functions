const data = require('../data/zoo_data');

const { employees } = data;
const isManager = (id) => {
  // seu código aqui
  const arrayManagers = employees.map((element) => element.managers);
  const concatManagers = arrayManagers.reduce((acc, cur) => acc.concat(cur), []);
  const filterManagers = concatManagers.filter((e, index) => concatManagers.indexOf(e) === index);
  const verifyManagers = filterManagers.some((element) => element === id);
  return verifyManagers;
};

const getRelatedEmployees = (managerId) => {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  try {
    const findResponsable = employees.filter((element) => element.managers.includes(managerId));
    const responsableNames = findResponsable.map((name) => `${name.firstName} ${name.lastName}`);
    return responsableNames;
  } catch (error) {
    return error.message;
  }
};

module.exports = { isManager, getRelatedEmployees };
