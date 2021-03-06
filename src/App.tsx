import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import { fetchQuizQuestions, Difficulty, QuestionState} from './API'
import ShowResult from './components/ShowResult';
import { GlobalStyle } from './styles/GlobalStyle'
import { MainButton } from './styles/Button'
import { ResultWrapper, Wrapper } from './styles/Wrapper'

const TOTAL_QUESTION = 10;

export type AnswerObject = {
  questionNumber: number;
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
  const [showResult, setShowResult] = useState(false)

  // console.log(fetchQuizQuestions(TOTAL_QUESTION, Difficulty.HARD));
  // console.log(questions);
  
  //trigger the game
  const handleStart = async () => {
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
    setShowResult(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    //user's answer
    const userAnswer = e.currentTarget.value;
    // console.log(answer);

    //check answer vs correct answer
    const correct = questions[number].correct_answer === userAnswer;
    // console.log(correct);

    //add score if correct
    if(correct){
      setScore(prev => prev + 1)
    }

    //save answer in user answers
    const answerObject = {
      questionNumber: number +1,
      question: questions[number].question,
      userAnswer: userAnswer, // or just simply type userAnswer if key & value are the same
      correct: correct,
      correctAnswer: questions[number].correct_answer
    }
    setUserAnswers((prev) => [...prev, answerObject])
  }

  const handleNextQuestion = () => {
    if (number < TOTAL_QUESTION){
      setNumber(number+1)
    } else{
      setGameOver(true)
    }
  }

  const handleShowResult = () => {
    setShowResult(true);
  }

  console.log(userAnswers, 'user answers');
  
  return (
    <>
      <GlobalStyle/>
      <Wrapper>
        <h1>QUIZ GAME FOR JESS</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTION ? (
          <MainButton onClick={handleStart}>{userAnswers.length === TOTAL_QUESTION ? 'Restart' : 'Start'}</MainButton>
        ) : null}

        {!gameOver ? <p className='score'>Score: {score}/{TOTAL_QUESTION}</p> : null}
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
        { !gameOver && !loading && userAnswers.length === number + 1 && number < TOTAL_QUESTION-1 ? <MainButton className='next' onClick={handleNextQuestion}>Next Question</MainButton> : null}
        {userAnswers.length === TOTAL_QUESTION ? <MainButton onClick={handleShowResult}>show result</MainButton> : null}
        {showResult ? <ResultWrapper>
        {showResult ? userAnswers.map((userAnswer) => (
          <ShowResult question={userAnswer.question} userAnswer={userAnswer.userAnswer} correctAnswer={userAnswer.correctAnswer} result={userAnswer.correct} number={userAnswer.questionNumber} key={userAnswer.questionNumber}/>
        )
        ) : null }

        </ResultWrapper>
        : null}
      </Wrapper>
    </>
  );
}

export default App;
