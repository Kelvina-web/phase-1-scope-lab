// Task 1: Declare customerName in global scope
var customerName = 'bob';

// Task 2: Write upperCaseCustomerName()
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Task 3: Write setBestCustomer()
function setBestCustomer() {
  bestCustomer = 'not bob'; // Implicitly creates a global variable
}

// Task 4: Write overwriteBestCustomer()
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Task 5: Declare leastFavoriteCustomer and write changeLeastFavoriteCustomer()
const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // This will throw an error
}
