const myLi = document.querySelector("li.start-here");
console.log(myLi);

myLi.textContent = "main title";

const myLiNextSibling = myLi.nextElementSibling;
console.log(myLiNextSibling);

const myUl = myLiNextSibling.firstElementChild;
const newSubTitle = document.createElement("li");
const subTitleText = document.createTextNode("sub title 4");
newSubTitle.appendChild(subTitleText);
myUl.appendChild(newSubTitle);

myLiParent = myLi.parentElement;
myLiParent.lastElementChild.remove();

const head = document.querySelector("head");
const title = head.querySelector("title");
console.log(title.textContent);

const div = myLiParent.nextElementSibling;
const p = div.firstElementChild;
p.textContent = "Now I know how to traverse the DOM :D";
console.log(p.textContent);
