const categoriesList = document.querySelector("#categories");

const categoryItems = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(el=> {

    const categoryTitle = el.querySelector("h2").textContent;

    const categoryElementsCount = el.querySelectorAll("ul li").length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryElementsCount}`);
})