// Exercise 1: Address Object
let address = {
    street: '5',
    city: 'New York',
    zipCode: '2213'
};

function showAddress(address) {
    for (let key in address)
      console.log(key, address[key]);
}

showAddress(address);

// Exercise 2: Factory and Constructor Functions
// Factory Function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

const addr = createAddress('5', 'New York', '2213');
console.log(addr);

// Constructor Function
function Address(street, city, zipCode) {
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
}

const add = new Address('5', 'New York', '2213');
console.log(add);

// Exercise 3: Object Equality
let address1 = new Address('5', 'New York', '2213');
let address2 = new Address('5', 'New York', '2213');
let address3 = address1;

function areEqual(address1, address2) {
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode;
}

// they are different in memory, their references are different
function areSame(address1, address2) {
    return address1 === address2;
}

console.log(areEqual(address1, address2)); // true
console.log(areSame(address1, address2)); // false
console.log(areSame(address1, address3)); // true //they are pointing the same object in memory


// Exercise 4: Blog Post Object
const post = {
    title: 'title',
    body: 'body',
    author: 'author',
    views: 2,
    comments: [
      { author: 'author1', body: 'body1' },
      { author: 'author2', body: 'body2' }
    ],
    isLive: false
};

console.log(post);


// Exercise 5: Constructor Functions
let pst = new Post('title', 'body', 'author');
console.log(pst);

function Post(title, body, author) {
    this.title = title,
    this.body = body,
    this.author = author,
    this.views = 0,
    this.comments = [],
    this.isLive = false
}