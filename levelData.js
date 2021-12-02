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
    desc: 'use the object data to return a string "Hello, FIRSNAME LASTNAME!"',
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

const levelData = [
  level1
];