function myFunction(){
    console.log("I was clicked");
}

const mouseOver = () => {
    console.log("mouse over");
}

function keyPressEvent() { 
    console.log("Key was Pressed");
}

function keyUpEvent() { 
    console.log("Key up was Pressed");
}

function keyDownEvent() { 
    console.log("Key down was Pressed");
}


//// Event Listener

const box1 = document.getElementById('box-1');
box1.addEventListener('click',() => {
    console.log('Click by event');
})

box1.addEventListener('mousemove',(e) => {
    console.log('event object',e.clientX, e.clientY);
})

const container = document.getElementById('container');
container.addEventListener('click', () => {
    console.log('clicked on container');
}, true) // here we have defined true because we want to do bubbling
// there are two ways of event propagation in dom i.e.. bubbling and capturing
// in bubbling the innermost element's event is handled first and then the outer
// in capturing the outermost element's event is handled first and then the inner

const nameInput = document.getElementById('nameInput');
nameInput.addEventListener('keydown',(e) => {
    console.log('key', e.key);
})

nameInput.addEventListener('focus', (e) => {
    console.log('key',e);
})
