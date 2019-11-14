const express = require("express");

const router = express.Router();

const userController = require("../controllers/user");

router.get("/login", userController.getUserLogin);

router.post("/login", userController.postUserLogin);

// router.get("/add_dummy_user", userController.getAddDummyUser);

module.exports = router;
