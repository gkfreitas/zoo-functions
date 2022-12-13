const data = require('../data/zoo_data');

const { species } = data;
const animalLoc = { NE: '', NW: '', SE: '', SW: '' };
const locations = Object.keys(animalLoc);

const verifyOptions = (options) => {
  let parameter = options;
  if (options === undefined) parameter = {};
  if (Object.keys(parameter).includes('includeNames')) {
    return false;
  }
  return true;
};

const animalMapParameters = (options, e) => {
  const filterLocation = species.filter(({ location }) => location === e);
  animalLoc[e] = filterLocation.map(({ name, residents }) => {
    const objKeys = Object.keys(options);
    let resP = residents;
    if (objKeys.includes('sex')) resP = residents.filter((sex) => sex.sex === options.sex);
    const residentsMapName = resP.map((names) => names.name);
    const newObj = { [name]: residentsMapName };
    if (objKeys.includes('sorted')) residentsMapName.sort();
    return newObj;
  });
};

const getAnimalMap = (options) => {
  // seu código aqui
  locations.forEach((e) => {
    const filterLocation = species.filter(({ location }) => location === e);
    if (verifyOptions(options)) animalLoc[e] = filterLocation.map(({ name }) => name);
    if (!verifyOptions(options)) {
      animalMapParameters(options, e);
    }
  });
  return animalLoc;
};
console.log(getAnimalMap({ includeNames: true, sorted: true, sex: 'male' }));
module.exports = getAnimalMap;
