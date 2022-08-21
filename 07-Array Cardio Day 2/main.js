const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older? // Checks if ONE is older
console.log(`\n Array.prototype.some() // is at least one person 19 or older?`)
const isAdult = people.some(person => {
const currentYear = (new Date()).getFullYear();
    if(currentYear - person.year >= 19) {
        return true
    }
}); // False

const isAdultRefactor = people.some(person => {
    return (new Date()).getFullYear() - person.year >= 19;
}); // True

console.log({isAdult});

// Array.prototype.every() // is everyone 19 or older? Checks if ALL are older
console.log(`\n Array.prototype.every() // is everyone 19 or older?`);
const allAdults = people.every(person => {
const currentYear = (new Date()).getFullYear();
    if(currentYear - person.year >= 19) {
        return true
    }
}); // False

const allAdultsRefactor = people.every(person => {
    return (new Date()).getFullYear() - person.year >= 19;
}); // False

console.log({allAdults});

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
console.log(`\n Array.prototype.find() // find the comment with the ID of 823423`);
const comment = comments.find( comment => comment.id === 823423);
console.log({comment})

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
console.log(`\n Array.prototype.findIndex() // delete the comment with the ID of 823423`);
console.table(comments)
const indexToDelete = comments.findIndex( comment => comment.id === 823423);
comments.splice(indexToDelete, 1);
console.table(comments)
// or

const newArrayOfComments = [
    ...comments.slice(0, indexToDelete),
    ...comments.slice(indexToDelete + 1)
]

console.log('New Array:', {newArrayOfComments})