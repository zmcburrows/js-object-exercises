/** @typedef {{ title: string, desc: string, callback, conditions: {arguments: any[] expected: B}[] }[]} LevelData  */
const userA = {
  first: 'Jeanette',
  last: 'Marshall',
  password: 'pancakes',
  birthYear: 1990
};
const userB = {
  first: 'Sally',
  last: 'Smith',
  password: 'asd09an21a0-89d21',
  birthYear: 1980
};
const userC = {
  first: 'Sharon',
  last: 'Stevens',
  password: 'passw0rd',
  birthYear: 1978
};
/** @type {LevelData[]} */
const level1 = [
  {
    title: 'Accessing Properties',
    desc: 'Use the object data to return the password for the user',
    callback: level1exercise1,
    conditions: [
      {arguments: [userA], expected: 'pancakes'},
      {arguments: [userB], expected: 'asd09an21a0-89d21'},
      {arguments: [userC], expected: 'passw0rd'}
    ]
  },
  {
    title: 'Combining Properties',
    desc: 'Use the object data to return the full name for the user',
    callback: level1exercise2,
    conditions: [
      { arguments: [userA], expected: 'Jeanette Marshall'},
      { arguments: [userB], expected: 'Sally Smith'},
      { arguments: [userC], expected: 'Sharon Stevens'}
    ]
  },
  {
    title: 'Combining Properties with more data',
    desc: 'use the object data to return a string "Hello, FirstName LastName!"',
    callback: level1exercise3,
    conditions: [
      { arguments: [userA], expected: 'Hello, Jeanette Marshall!'},
      { arguments: [userB], expected: 'Hello, Sally Smith!'},
      { arguments: [userC], expected: 'Hello, Sharon Stevens!'}
    ]
  },
  {
    title: 'Calculating data from properties',
    desc: "use the object data to calculate the user's age and return it",
    callback: level1exercise4,
    conditions: [
      { arguments: [userA], expected: new Date().getFullYear() - userA.birthYear},
      { arguments: [userB], expected: new Date().getFullYear() - userB.birthYear},
      { arguments: [userC], expected: new Date().getFullYear() - userC.birthYear}
    ]
  },
  {
    title: 'Combining and modifying properties (part 1)',
    desc: "use the object data to return the user's full name in all uppercase letters",
    callback: level1exercise5,
    conditions: [
      { arguments: [userA], expected: 'JEANETTE MARSHALL'},
      { arguments: [userB], expected: 'SALLY SMITH'},
      { arguments: [userC], expected: 'SHARON STEVENS'}
    ]
  },
  {
    title: 'Combining and modifying properties (part 2)',
    desc: "use the object data to return the user's initials  (i.e. AL from Ada Lovelace)",
    callback: level1exercise6,
    conditions: [
      { arguments: [userA], expected: 'JM'},
      { arguments: [userB], expected: 'SS'},
      { arguments: [userC], expected: 'SS'}
    ]
  },
]

/** @type {UserData} */
const level2userA = {
  name: {
    first: 'Jeanette',
    last: 'Marshall',
  },
  security: {
    password: 'pancakes',
    pin: '1234',
    lastLogin: new Date()
  },
  username: 'pcakes4life',
  email: 'jmarshall@gmail.com'
};

const level2userB = {
  name: {
    first: 'Sally',
    last: 'Smith',
  },
  security: {
    password: 'asd09an21a0-89d21',
    pin: '4444',
    lastLogin: new Date('2020-01-01')
  },
  username: 'sallys',
  email: 'smithsally@gmail.com'
}

const level2userC = {
  name: {
    first: 'Sharon',
    last: 'Stevens',
  },
  security: {
    password: 'passw0rd',
    pin: '4872',
    lastLogin: new Date('2002-08-18')
  },
  username: 'sharonstevens98',
  email: 'sstevens98@yahoo.com'
}

/** @type {LevelData[]} */
const level2 = [
  {
    title: 'Working with Nested Object Properties',
    desc: 'Use the object data to return the user\'s password',
    callback: level2exercise1,
    conditions: [
      { arguments: [level2userA], expected: 'pancakes'},
      { arguments: [level2userB], expected: 'asd09an21a0-89d21'},
      { arguments: [level2userC], expected: 'passw0rd'}
    ]
  },
  {
    title: 'Combining with Nested Object Properties',
    desc: 'Use the object data to return the user\'s full name',
    callback: level2exercise2,
    conditions: [
      { arguments: [level2userA], expected: 'Jeanette Marshall'},
      { arguments: [level2userB], expected: 'Sally Smith'},
      { arguments: [level2userC], expected: 'Sharon Stevens'}
    ]
  },
  {
    title: 'Combining with Nested Object Properties (part 2)',
    desc: 'Use the object data to return the user\'s initials',
    callback: level2exercise3,
    conditions: [
      { arguments: [level2userA], expected: 'JM'},
      { arguments: [level2userB], expected: 'SS'},
      { arguments: [level2userC], expected: 'SS'}
    ]
  },
  {
    title: 'Validating properties',
    desc: 'Use the object data to return true if the user has a password that is at least 8 characters long, otherwise return false',
    callback: level2exercise4,
    conditions: [
      { arguments: [level2userA], expected: true},
      { arguments: [level2userB], expected: true},
      { arguments: [level2userC], expected: true}
    ]
  },
  {
    title: 'Validating properties (part 2)',
    desc: 'Use the object data to return true if the has logged in in the last 30 days, otherwise return false',
    callback: level2exercise5,
    conditions: [
      { arguments: [level2userA], expected: true},
      { arguments: [level2userB], expected: false},
      { arguments: [level2userC], expected: false}
    ]
  }
]

const products1 = [
  {
    name: 'iPhone',
    price: 699,
    color: 'white',
    stock: 10
  },
  {
    name: 'Samsung Galaxy S10',
    price: 799,
    color: 'black',
    stock: 5
  },
  {
    name: 'Google Pixel 3',
    price: 599,
    color: 'black',
    stock: 0
  },
]
const products2 = [
  {
    name: 'Metallica T-Shirt',
    price: 19.99,
    color: 'black',
    stock: 10
  },
  {
    name: 'Google T-Shirt',
    price: 17.99,
    color: 'green',
    stock: 5
  },
  {
    name: 'Apple T-Shirt',
    price: 14.99,
    color: 'red',
    stock: 0
  },
]


/** @type {LevelData[]} */
const level3 = [
  {
    title: 'Sum of Object Properties in Array',
    desc: 'Use the products array to loop through the array and return the sum of all prices',
    callback: level3exercise1,
    conditions: [
      { arguments: [products1], expected: 699 + 799 + 599 },
      { arguments: [products2], expected: 19.99 + 17.99 + 14.99 }
    ]
  },
  {
    title: 'Highest priced product',
    desc: 'Use the products array to loop through the array and return the name of product with the highest price',
    callback: level3exercise2,
    conditions: [
      { arguments: [products1], expected: 'Samsung Galaxy S10' },
      { arguments: [products2], expected: 'Metallica T-Shirt' }
    ]
  },
  {
    title: 'Lowest priced product',
    desc: 'Use the products array to loop through the array and return the name of the product with the lowest price',
    callback: level3exercise3,
    conditions: [
      { arguments: [products1], expected: 'Google Pixel 3' },
      { arguments: [products2], expected: 'Apple T-Shirt' }
    ]
  },
  {
    title: 'Average price of products',
    desc: 'Use the products array to loop through the array and return the average price of all products',
    callback: level3exercise4,
    conditions: [
      { arguments: [products1], expected: (699 + 799 + 599) / 3 },
      { arguments: [products2], expected: (19.99 + 17.99 + 14.99) / 3 }
    ]
  },
  {
    title: 'Format price and name of lowest priced product',
    desc: 'Use the products array to loop through the array and return the name and price of the product with the lowest price',
    callback: level3exercise5,
    conditions: [
      { arguments: [products1], expected: 'Google Pixel 3: $599' },
      { arguments: [products2], expected: 'Apple T-Shirt: $14.99' }
    ],
  },
  {
    title: 'Filter by stock',
    desc: 'Use the products array to loop through the array and return an array of products that are in stock',
    callback: level3exercise6,
    conditions: [
      { arguments: [products1], expected: [{
        name: 'iPhone',
        price: 699,
        color: 'white',
        stock: 10
      }, {
        name: 'Samsung Galaxy S10',
        price: 799,
        color: 'black',
        stock: 5
      }]},
      { arguments: [products2], expected: [{
        name: 'Metallica T-Shirt',
        price: 19.99,
        color: 'black',
        stock: 10
      }, {
        name: 'Google T-Shirt',
        price: 17.99,
        color: 'green',
        stock: 5
      }]}
    ]
  },
  {
    title: 'Filter by color',
    desc: 'Use the products array to loop through the array and return an array of products that match the color parameter',
    callback: level3exercise7,
    conditions: [
      { arguments: [products1, 'white'], expected: [{
        name: 'iPhone',
        price: 699,
        color: 'white',
        stock: 10
      }]},
      { arguments: [products2, 'black'], expected: [{
        name: 'Metallica T-Shirt',
        price: 19.99,
        color: 'black',
        stock: 10
      }]}
    ]
  },
  {
    title: 'Format prices and names',
    desc: 'Use the products array to loop through the array and return an array of strings with the name and price of each product',
    callback: level3exercise8,
    conditions: [
      { arguments: [products1], expected: ['iPhone: $699', 'Samsung Galaxy S10: $799', 'Google Pixel 3: $599'] },
      { arguments: [products2], expected: ['Metallica T-Shirt: $19.99', 'Google T-Shirt: $17.99', 'Apple T-Shirt: $14.99'] }
    ]
  },
]

const levelData = [
  level1,
  level2,
  level3
];