const express = require("express");

const userController = require("../controller/users.js");

const router = express.Router();

// Create - Post
router.post("/", userController.createnewUser);

//Read - Get
router.get("/", userController.getAllUsers);

// Update - Patch
router.patch("/:idUser", userController.updateUser);

//Delete - Delete
router.delete("/:idUser",userController.deleteUser);

module.exports = router;
