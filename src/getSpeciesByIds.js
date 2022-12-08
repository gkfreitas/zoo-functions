const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  // seu código aqui
  const loopId = ids.map((id) => {
    const { species } = data;
    const filterId = species.find((element) => element.id === id);
    return filterId;
  });
  return loopId;
};

module.exports = getSpeciesByIds;
