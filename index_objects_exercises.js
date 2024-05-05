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