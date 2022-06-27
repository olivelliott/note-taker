const fs = require("fs");
const path = require("path");

function filterByQuery(query, notes) {
  let filteredResults = notes;

//   if (query.age) {
//     filteredResults = filteredResults.filter(
//       (zookeeper) => zookeeper.age === Number(query.age)
//     );
//   }
//   if (query.favoriteAnimal) {
//     filteredResults = filteredResults.filter(
//       (zookeeper) => zookeeper.favoriteAnimal === query.favoriteAnimal
//     );
//   }
//   if (query.name) {
//     filteredResults = filteredResults.filter(
//       (zookeeper) => zookeeper.name === query.name
//     );
//   }
  return filteredResults;
}

module.exports = {filterByQuery}