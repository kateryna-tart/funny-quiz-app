const qBank = [
  {
    question:
      "Are you capable of leaning new skill?   ",
    answers: [ "Maybe", "Not sure", "Oh yeah!","Too overwhelming"],
    correct: "Oh yeah!",
    questionId: "099099"
  },
  {
    question:
      'Will you be able to build your portfolio?',
    answers: [ "Maybe", "Oh yeah!", "Not sure", "Too overwhelming"],
    correct: "Oh yeah!",
    questionId: "183452"
  },
  {
    question:
      "Can you learn React.js?",
    answers: ["Oh yeah!", "Not sure", "Maybe", "Too overwhelming"],
    correct: "Oh yeah!",
    questionId: "267908"
  },
  {
    question: "Can you build an amazing app?",
    answers: ["Not sure", "Maybe", "Too overwhelming","Oh yeah!"],
    correct: "Oh yeah!",
    questionId: "333247"
  },
  {
    question: "Do you enjoy coding daily?",
    answers: ["Oh yeah!", "Maybe", "Not sure", "Too overwhelming"],
    correct: "Oh yeah!",
    questionId: "496293"
  },
  {
    question:
      "Are you going to be an awesome coder?",
    answers: ["Not sure","Oh yeah!", "Maybe",  "Too overwhelming"],
    correct: "Oh yeah!",
    questionId: "588909"
  }
 
];

export default (n = 3) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
