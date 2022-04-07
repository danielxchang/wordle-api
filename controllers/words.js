exports.getWord = (req, res, next) => {
  // Access MongoDB db and retrieve a random word
  res.status(200).json({ word: "SPANK" });
};

exports.checkAnswer = (req, res, next) => {
  console.log("Checking Word");
  res.status(200).json({ message: "Incorrect. Try again!" });
};
