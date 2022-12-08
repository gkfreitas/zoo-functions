const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }

  const { employees } = data;
  const findEmployees = employees.find((element) => {
    const { firstName, lastName } = element;
    const verifyNames = firstName.includes(employeeName) || lastName.includes(employeeName);
    return verifyNames;
  });
  return findEmployees;
};

console.log(getEmployeeByName('Nelson'));

module.exports = getEmployeeByName;
