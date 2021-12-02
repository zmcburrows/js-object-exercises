/** @typedef {{ title: string, desc: string, callback, conditions: [A, B][] }[]} LevelData  */
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
      [userA, 'pancakes'],
      [userB, 'asd09an21a0-89d21'],
      [userC, 'passw0rd']
    ]
  },
  {
    title: 'Combining Properties',
    desc: 'Use the object data to return the full name for the user',
    callback: level1exercise2,
    conditions: [
      [userA, 'Jeanette Marshall'],
      [userB, 'Sally Smith'],
      [userC, 'Sharon Stevens']
    ]
  },
  {
    title: 'Combining Properties with more data',
    desc: 'use the object data to return a string "Hello, FirstName LastName!"',
    callback: level1exercise3,
    conditions: [
      [userA, 'Hello, Jeanette Marshall!'],
      [userB, 'Hello, Sally Smith!'],
      [userC, 'Hello, Sharon Stevens!']
    ]
  },
  {
    title: 'Calculating data from properties',
    desc: "use the object data to calculate the user's age and return it",
    callback: level1exercise4,
    conditions: [
      [userA, new Date().getFullYear() - userA.birthYear],
      [userB, new Date().getFullYear() - userB.birthYear],
      [userC, new Date().getFullYear() - userC.birthYear]
    ]
  },
  {
    title: 'Combining and modifying properties (part 1)',
    desc: "use the object data to return the user's full name in all uppercase letters",
    callback: level1exercise5,
    conditions: [
      [userA, 'JEANETTE MARSHALL'],
      [userB, 'SALLY SMITH'],
      [userC, 'SHARON STEVENS']
    ]
  },
  {
    title: 'Combining and modifying properties (part 2)',
    desc: "use the object data to return the user's initials  (i.e. AL from Ada Lovelace)",
    callback: level1exercise6,
    conditions: [
      [userA, 'JM'],
      [userB, 'SS'],
      [userC, 'SS']
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
      [level2userA, 'pancakes'],
      [level2userB, 'asd09an21a0-89d21'],
      [level2userC, 'passw0rd']
    ]
  },
  {
    title: 'Combining with Nested Object Properties',
    desc: 'Use the object data to return the user\'s full name',
    callback: level2exercise2,
    conditions: [
      [level2userA, 'Jeanette Marshall'],
      [level2userB, 'Sally Smith'],
      [level2userC, 'Sharon Stevens']
    ]
  },
  {
    title: 'Combining with Nested Object Properties (part 2)',
    desc: 'Use the object data to return the user\'s initials',
    callback: level2exercise3,
    conditions: [
      [level2userA, 'JM'],
      [level2userB, 'SS'],
      [level2userC, 'SS']
    ]
  },
  {
    title: 'Validating properties',
    desc: 'Use the object data to return true if the user has a password that is at least 8 characters long, otherwise return false',
    callback: level2exercise4,
    conditions: [
      [level2userA, true],
      [level2userB, true],
      [level2userC, true]
    ]
  },
  {
    title: 'Validating properties (part 2)',
    desc: 'Use the object data to return true if the has logged in in the last 30 days, otherwise return false',
    callback: level2exercise5,
    conditions: [
      [level2userA, true],
      [level2userB, false],
      [level2userC, false]
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
      [products1, 699 + 799 + 599],
      [products2, 19.99 + 17.99 + 14.99]
    ]
  },
  {
    title: 'Highest priced product',
    desc: 'Use the products array to loop through the array and return the product with the highest price',
    callback: level3exercise2,
    conditions: [
      [products1, 'iPhone'],
      [products2, 'Metallica T-Shirt']
    ]
  },
  {
    title: 'Lowest priced product',
    desc: 'Use the products array to loop through the array and return the name of the product with the lowest price',
    callback: level3exercise3,
    conditions: [
      [products1, 'Samsung Galaxy S10'],
      [products2, 'Google T-Shirt']
    ]
  },
  {
    title: 'Average price of products',
    desc: 'Use the products array to loop through the array and return the average price of all products',
    callback: level3exercise4,
    conditions: [
      [products1, (699 + 799 + 599) / 3],
      [products2, (19.99 + 17.99 + 14.99) / 3]
    ]
  },
  {
    title: 'Format price and name',
    desc: 'Use the products array to loop through the array and return the name and price of the product with the lowest price',
    callback: level3exercise5,
    conditions: [
      [products1, 'Samsung Galaxy S10: $699'],
      [products2, 'Google T-Shirt: $17.99']
    ],
  },
  {
    title: 'Filter by stock',
    desc: 'Use the products array to loop through the array and return an array of products that are in stock',
    callback: level3exercise6,
    conditions: [
      [products1, [{
        name: 'iPhone',
        price: 699,
        color: 'white',
        stock: 10
      }, {
        name: 'Samsung Galaxy S10',
        price: 799,
        color: 'black',
        stock: 5
      }]],
      [products2, [{
        name: 'Metallica T-Shirt',
        price: 19.99,
        color: 'black',
        stock: 10
      }, {
        name: 'Google T-Shirt',
        price: 17.99,
        color: 'green',
        stock: 5
      }]]
      ]
    },
    // {
    //   title: 'Filter by color',
    //   desc: 'Use the products array to loop through the array and return an array of products that match the color parameter',
    //   callback: level3exercise7,
    //   conditions: [
    //     [[products1, 'white'], [{
    //       name: 'iPhone',
    //       price: 699,
    //       color: 'white',
    //       stock: 10
    //     }]],
    //     [[products2, 'black'], [{
    //       name: 'Metallica T-Shirt',
    //       price: 19.99,
    //       color: 'black',
    //       stock: 10
    //     }]]
    //   ]
    // },
]

const levelData = [
  level1,
  level2,
  level3
];