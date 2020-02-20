let list = [
  { name: 'Pikachu', id: 20002500, characterId: 18000000000 },
  { name: 'Torkoal', id: 20032401, characterId: 10029000000 },
  { name: 'Infernape', id: 20039200, characterId: 10006000000 },
  { name: 'Dewgong', id: 20008700, characterId: 10032000000 },
  { name: 'Haxorus', id: 20061201, characterId: 10092000000 },
  { name: 'Kingdra', id: 20038400, characterId: 10028000000 },
  { name: 'Serperior', id: 20049701, characterId: 10101000000 },
  { name: 'Vileplume', id: 20004501, characterId: 10008000000 },
  { name: 'Mew', id: 20000600, characterId: 10137000000 },
  { name: 'Metagross', id: 20037600, characterId: 10090000000 },
  { name: 'Charizard', id: 20015111, characterId: 10000000000 },
  { name: 'Palossand', id: 20082301, characterId: 10007000000 },
];

let pokemonList = list.map((obj, index) => {
  return {
    ...obj,
    key: index,
    value: obj.name,
    id: obj.id
  };
});

export default pokemonList;
