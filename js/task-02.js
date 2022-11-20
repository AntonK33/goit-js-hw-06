const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const list = document.querySelector("#ingredients");
const ingredientsList = options => {
  return options.map(option => {
    const list = document.createElement('li');
    list.classList.add('item');
    list.textContent = option;
    return list;
  })
}
const elements = ingredientsList(ingredients);
list.append(...elements);