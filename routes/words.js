const { Router } = require("express");

const wordController = require("../controllers/words");

const router = Router();

// GET /word
router.get("/word", wordController.getWord);

// POST /word
router.post("/word", wordController.checkAnswer);

module.exports = router;
