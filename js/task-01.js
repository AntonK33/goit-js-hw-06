const body = document.body;

const list = document.querySelector("#categories");
const categoriesName = document.querySelectorAll(".item h2");
const listChild = list.children;
const listChildLength = listChild.length;

function amountCategoty(value) {    
    console.log(`Number of categories: ${value}`);   
};
amountCategoty(listChildLength);

 categoriesName.forEach((element) => {
     console.log('Category:', element.textContent);
     console.log('Elements:',element.nextElementSibling.childElementCount);
});

