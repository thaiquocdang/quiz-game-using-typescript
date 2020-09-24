import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import { fetchQuizQuestions, Difficulty, QuestionState} from './API'

const TOTAL_QUESTION = 2;

type AnswerObject = {
  question: string;
  userAnswer: string;
  correct: boolean;
  correctAnswer: string;
}

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // console.log(fetchQuizQuestions(TOTAL_QUESTION, Difficulty.HARD));
  console.log(questions);
  
  //trigger the game
  const startQuestion = async () => {
    console.log('start question');

    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTION,
      Difficulty.MEDIUM
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('user chose an answer');
  }

  const nextQuestion = () => {
    if (number < TOTAL_QUESTION){
      setNumber(number+1)
    }
  }

  return (
    <div className="App">
      <h1>QUIZZZ</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTION ? (
        <button className='start' onClick={startQuestion}>Start</button>
      ) : null}

      {!gameOver ? <p className='score'>Score:</p> : null}
      {loading ? <p className='loading'>Loading questions</p> : null}
      
      { !loading && !gameOver && (
        <QuestionCard
           questionNumber = { number + 1 }
           totalQuestion = {TOTAL_QUESTION}
           question = { questions[number].question }
           answers = { questions[number].answers } 
           userAnswer = { userAnswers ? userAnswers[number] : undefined }
           callback = { checkAnswer }
        />
      )}
      { number < TOTAL_QUESTION-1 ? <button className='next' onClick={nextQuestion}>Next Question</button> : null}
      

    </div>
  );
}

export default App;
