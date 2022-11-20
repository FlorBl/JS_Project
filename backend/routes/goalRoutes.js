// This is common JS Modoules syntax
const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");
// .get() because GET is the request we're listening for
// Then, 1st arg: Api url   2nd arg:a function that takes --> req(request) res(response) variables
//

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, setGoal);
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;
