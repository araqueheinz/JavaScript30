const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeRed() {
    const p = document.querySelector('p');
    p.style.color = 'red';
    p.style.fontSize = '50px';
}

const carColor = "green"

// Regular
console.log('Regular')
console.log('Hello\n')

// Interpolated
console.log('Interpolated\n')
console.log('The car is %s', carColor)
console.log(`The car is ${carColor}\n`)

// Styled
console.log('Styled')
console.log('%c This text can be styled', 'font-size:14px; color: cyan; border: 1px solid black;')


// Warning
console.log('Warning!\n')
console.warn('Oh nooo!')

// Error
console.log('Error :|\n')
console.error('No bueno!');

// Info
console.log('Info\n')
console.info('Info here')

// Testing
console.log('Testing\n')
console.assert(1 === 2, "This will only display if the assertion is wrong!")

// clearing
console.log('clearing\n')
//console.clear();

// Viewing DOM Elements
console.log('Viewing DOM Elements\n')
console.dir(document.querySelector('.example'));

// Grouping together
console.log('Grouping together\n')
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`) // or
    //console.group(`${dog.name}`)
    console.log(`This is ${dog.name}`)
    console.log(`${dog.name} is ${dog.age} years old`)
    console.log(`${dog.name} is ${dog.age * 7} dog years old`)
    console.groupEnd(`${dog.name}`)
});

// counting
console.log('counting\n')
console.count('Heinz')
console.count('Heinz')
console.count('Heinz')
console.count('Heinz')

// timing
console.log('timing\n')
console.time('fetching data')
const cities = [];
fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
.then(blob => blob.json())
.then(data => {
    cities.push(...data)
    console.timeEnd('fetching data')
});