// Accessing the html elements

// const myBody = document.body;
// // myBody.style.backgroundColor="red";
// console.log(myBody);

// const box2 = document.getElementById('box-2');
// console.log(box2);

// const divs = document.getElementsByTagName('div');
// console.log(divs);

// const boxes = document.getElementsByClassName('box');
// console.log(boxes);

// const random = document.querySelector('.container');
// console.log(random);


// MODIFYING in the html elements

const box1=document.getElementById('box-1');
box1.innerHTML = "Hello World";

// box1.classList.add('round-border');

const boxes = document.getElementsByClassName('box');

for(let i=0;i<boxes.length;i++){
    boxes[i].classList.add('round-border');
}

box1.classList.remove('round-border');

const newParagraph = document.createElement('p');
newParagraph.innerText = "This is brand new";
newParagraph.classList.add('box');

const container = document.getElementById('container');
container.appendChild(newParagraph);


