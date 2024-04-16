//-----------if...else---------------

// if (condition) {
//     statement
// }
// else if (anotherCondition) {
//     statement
// }
// else if (yetAnotherCondition)
//     statement
// else
//     statement

// Hour
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!
let hour = 10;

if (hour >= 6 && hour < 12) {
    console.log('Good morning');
}
else if (hour <= 12 && hour < 18) {
    console.log('Good afternoon');
}
else
    console.log('Good evening');

//-----------Switch...case----------
let role = 'guest';

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;

    default:
        console.log('Unknown User');
}

//or with if...else
if (role === 'guest') console.log('Guest User');
else if (role === 'moderator') console.log('Moderator User');
else console.log('Unknown User');

//------------For-------------------

// for (initialExpression; condition; incrementExpression) {
//     statement
// }

for (let i = 0; i < 5; i++) {
    console.log('Hello World', i);
}

for (let i = 1; i <= 5; i++) {
    // remainder of the devision of i by 2 is not 0
    if (i % 2 !== 0) console.log(i);
}

for (let i = 5; i >= 1; i--) {
    if (i % 2 !== 0) console.log(i);
}