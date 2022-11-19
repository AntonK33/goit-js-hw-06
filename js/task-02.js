const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const body = document.body;
const item1 = document.createElement("li");
item1.classList.add("item");
item1.textContent = ingredients[0];

const item2 = document.createElement("li");
item2.classList.add("item");
item2.textContent = ingredients[1];

const item3 = document.createElement("li");
item3.classList.add("item");
item3.textContent = ingredients[2];

const item4 = document.createElement("li");
item4.classList.add("item");
item4.textContent = ingredients[3];

const item5 = document.createElement("li");
item5.classList.add("item");
item5.textContent = ingredients[4];

const item6 = document.createElement("li");
item6.classList.add("item");
item6.textContent = ingredients[5];

console.log(item1);
const list = document.querySelector("#ingredients");
console.log(list);
list.append(item1, item2, item3, item4, item5, item6);