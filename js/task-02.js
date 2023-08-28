const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createLi = document.querySelector("#ingredients");

ingredients.forEach((element) => {
  const liItem = document.createElement("li");

  liItem.textContent = element;
  liItem.classList.add("item");
  createLi.append(liItem);
});
console.log(createLi);
