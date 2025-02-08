const quizData = [
    {
      question: "Which song was at the top of the Billboard Hot 100 chart on February 8, 1997?",
      options: ["Wannabe by Spice Girls", "I Believe I Can Fly by R. Kelly", "Un-Break My Heart by Toni Braxton", "Ain't Nobody by LL Cool J"],
      answer: "Un-Break My Heart by Toni Braxton"
    },
    {
      question: "Which movie was at the top of the box office on February 8, 1997?",
      options: ["Titanic", "Men in Black", "The Lost World: Jurassic Park", "Jerry Maguire"],
      answer: "Jerry Maquire"
    },
    {
      question: "Which British Prime Minister was in office on February 8, 1997?",
      options: ["Tony Blair", "John Major", "Margaret Thatcher", "David Cameron"],
      answer: "John Major"
    },
    {
        question: "Which American President was in office on February 8, 1997?",
        options: ["George H. W. Bush", "Bill Clinton", "George W. Bush", "Barack Obama"],
        answer: "Bill Clinton"
    },
    {
        question: "Which fashion trend was popular in 1997?",
        options: ["Grunge", "Bright and metallic colors", "Punk", "Minimalism"],
        answer: "Bright and metallic colors"
    },
    {
        question: "Which video game console was released in 1997?",
        options: ["PlayStation", "Nintendo 64", "Sega Dreamcast", "Game Boy Color"],
        answer: "Game Boy Color"
    },
    {
        question: "Who won the Academy Award for Best Picture in 1997?",
        options: ["The English Patient", "Fargo", "Shine", "Jerry Maguire"],
        answer: "The English Patient"
    },
    {
        question: "Which TV show premiered in 1997 and became an instant hit?",
        options: ["Friends", "Buffy the Vampire Slayer", "ER", "The X-Files"],
        answer: "Buffy the Vampire Slayer"
    },
    {
        question: "Which celebrity couple got married in 1997?",
        options: ["Brad Pitt and Jennifer Aniston", "Tom Cruise and Nicole Kidman", "David Beckham and Victoria Adams", "Johnny Depp and Winona Ryder"],
        answer: "David Beckham and Victoria Adams"
    },
    {
        question: "Which artist released the album 'OK Computer' in 1997?",
        options: ["Radiohead", "Nirvana", "Pearl Jam", "Oasis"],
        answer: "Radiohead"
    }
    // Add more questions here...
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();