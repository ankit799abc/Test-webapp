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

router.get("/allStudent",authMiddelware, allController);

router.post("/addStudent",authMiddelware, addController);

router.put("/update/:_id",authMiddelware, updateController);

router.delete("/delete/:_id",authMiddelware, deleteController);

router.get("/:_id", singleController);

module.exports = router;