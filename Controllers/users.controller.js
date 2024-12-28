let users = require("../Models/users.model");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const root = path.join(__dirname, "../views/");
console.log(root)
const readUsers = (req, res) => {
  res.status(200).json(users);
};

const createUser = (req, res) => {
  const { name, email } = req.body;
  const num = Number(req.body.num);
  const newUser = {
    id: new Date().getTime(),
    name: name,
    email: email,
    num: num,
  };
  users.push(newUser);
  res.status(201).json({ message: "User created succefully" });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const num = Number(req.body.num);
  users
    .filter((user) => user.id === +id)
    .map((selectedUser) => {
      selectedUser.name = name;
      selectedUser.email = email;
      selectedUser.num = selectedUser.num + num;
    });
  res.status(200).json(users);
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== +id);
  res.status(200).json(users);
};
const homeRoute = (req, res) => {
  res.status(200).sendFile(root + "/index.html");
};

module.exports = {
  readUsers,
  createUser,
  updateUser,
  deleteUser,
  homeRoute,
};
