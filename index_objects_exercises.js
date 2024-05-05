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