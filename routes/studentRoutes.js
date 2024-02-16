const express = require("express");
const router = express.Router();

const {
    allController,
    addController,
    updateController,
    deleteController,
    singleController
  } = require("../controllers/studentController");
const authMiddelware = require("../middlewares/authMiddlewares");

router.get("/allStudent", allController);

router.post("/addStudent", addController);

router.put("/update/:_id", updateController);

router.delete("/delete/:_id", deleteController);

router.get("/:_id", singleController);

module.exports = router;