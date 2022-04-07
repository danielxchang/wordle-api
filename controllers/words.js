exports.getWord = (req, res, next) => {
  // Access MongoDB db and retrieve a random word
  res.status(200).json({ word: "IRATE" });
};

exports.checkAnswer = (req, res, next) => {
  const { answer, guess } = req.body;
  const responseData = {
    isCorrect: answer.join("") === guess.join(""),
    validGuess: true, // Implement validity check once set up MongoDB
    letters: guess.map((letter, idx) => ({
      letter,
      status: compareLetters(answer, answer[idx], letter),
    })),
  };
  res.status(200).json(responseData);
};

const compareLetters = (answer, answerLetter, guessLetter) => {
  if (answerLetter === guessLetter) return "correct";
  if (answer.includes(guessLetter)) return "present";
  return "absent";
};
