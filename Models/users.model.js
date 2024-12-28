const { v4: uuidv4 } = require("uuid");

const userData = [
  { id: uuidv4(), name: "Sajib Hossen", email: "sajib@gmail.com", num: 2 },
  { id: uuidv4(), name: "Laila Akter", email: "lailaakter@gmail.com", num: 2 },
  { id: uuidv4(), name: "Dildar Ali", email: "dildar@google.com", num: 2 },
];

module.exports = userData;
