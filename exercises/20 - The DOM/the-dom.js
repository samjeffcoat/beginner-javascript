// const p = document.querySelector('p');

// const div = document.querySelectorAll('div');
// const item2 = document.querySelector('.item2');

// const heading = document.querySelector('h2');
// // heading.textContent = 'Sam is cool';
// // console.dir(heading.textContent);
// // console.dir(heading.innerText);

// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList);
// //pizzaList.textContent = `${pizzaList.textContent}🍕`;
// pizzaList.insertAdjacentText('beforeend', '🍕');

//Classes!
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.toggle('round');
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}
pic.addEventListener('click', toggleRound);

pic.alt = 'cute pup';
pic.width = 200;

// window.addEventListener('load', function () {
//   console.log(pic.naturalWidth);
// });
const custom = document.querySelector('.custom');
console.log(custom.dataset);
custom.addEventListener('click', function () {
  alert(`Welcome${custom.dataset.name}${custom.dataset.last}`);
});
