# JS practice:

## 1. filter() Array Method:

### Basic:

- Syntax

```
const newArray = array.filter((item) => {
  return condition;
});
```

- Example:

```
const numbers = [1, 3, 6, 8, 11];
const result = numbers.filter(num => num > 7);
console.log("Lucky numbers: ", result);
// Lucky numbers:  [ 8, 11 ]
```

### Filtering an array of objects:

```
const heroes = [
  { name: "Batman", franchise: "DC" },
  { name: "Ironman", franchise: "Marvel" },
  { name: "Thor", franchise: "Marvel" },
  { name: "Superman", franchise: "DC" }
];

const marvelHeroes = heroes.filter((hero) => {
  return hero.franchise == "Marvel";
});

console.log("MarvelHeroes: ", marvelHeroes);
// [
//   { name: "Ironman", franchise: "Marvel" },
//   { name: "Thor", franchise: "Marvel" }
// ];
```

---

## 2. map() Array Method:

- Syntax

```
const newArray = myArray.map(function);
```

- Example:

```
const drinks = [“coffee soda”, “tea”, “whiskey”];

const coldDrinks = drinks.map(function(drink) {
	return ‘iced ’ + drink;
});

// [‘iced coffee soda’, ‘iced coffee’, ‘iced whiskey’]
```
