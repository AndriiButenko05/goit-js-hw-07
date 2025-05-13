const list = document.querySelector('#categories');
const item = list.querySelector('.item');
console.log(`Number of categories: ${list.childElementCount}`);
Array.from(list.children).forEach(element => {
    console.log(`Category: ${element.querySelector('.item-heading').textContent}`);
    console.log(`Elements:${element.querySelectorAll('.item-text').length}`);
});
