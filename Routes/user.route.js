const express = require("express");
const {
  deleteUser,
  updateUser,
  createUser,
  readUsers,
} = require("../Controllers/users.controller");

const router = express.Router();
exports.Router = router;

router.get("/", readUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
