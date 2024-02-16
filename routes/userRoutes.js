const express = require("express");
const router = express.Router();

const {
    registerController,
    loginController,
    currentUserController,
  } = require("../controllers/userController");

  const authMiddelware = require("../middlewares/authMiddlewares");

router.post("/register", registerController);

router.post("/login", loginController);

router.get("/current-user",  currentUserController);

module.exports = router;