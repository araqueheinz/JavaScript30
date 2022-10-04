console.log("Hello there!");

const pressed = [];
const secretCode = 'heinz';

window.addEventListener('keyup', (event) => {
    console.log(event.key);
    pressed.push(event.key);
    pressed.splice(-secretCode.length -1, pressed.length - secretCode.length);
    // Cheques is pressed match password
    if(pressed.join('').includes(secretCode)){
        console.log('Secret code match');
    }
    console.log(pressed);
});