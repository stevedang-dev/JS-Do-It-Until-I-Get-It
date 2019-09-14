// =============== filter() Array Method in JavaScript ===============
const numbers = [1, 3, 6, 8, 11];
const result = numbers.filter(num => num > 7);
// Lucky numbers:  [ 8, 11 ]

const heroes = [
  { name: "Batman", franchise: "DC" },
  { name: "Ironman", franchise: "Marvel" },
  { name: "Thor", franchise: "Marvel" },
  { name: "Superman", franchise: "DC" }
];

const marvelHeroes = heroes.filter(hero => {
  return hero.franchise == "Marvel";
});

// [
//   { name: "Ironman", franchise: "Marvel" },
//   { name: "Thor", franchise: "Marvel" }
// ];

// =============== map() Array Method in JavaScript ===============

const drinks = ["coffee soda", "tea", "whiskey"];

const coldDrinks = drinks.map(function(drink) {
  return "iced " + drink;
});

// console.log(coldDrinks);
// [‘iced coffee soda’, ‘iced coffee’, ‘iced whiskey’]
