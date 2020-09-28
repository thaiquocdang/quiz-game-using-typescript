import React from 'react'
import { AnswerObject } from '../App'
import { SecondButton } from '../styles/Button'
import { QuestionWrapper } from '../styles/Wrapper'

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
    totalQuestion: number;
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNumber, totalQuestion}) => {
    return (
        <QuestionWrapper>
            <p className='number'>
                Question: {questionNumber} / {totalQuestion}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question}}/>
            {/* <p>{question}</p> */}
            <div>
                {answers.map(answer => (
                    <div key={answer}>
                        <SecondButton disabled={userAnswer ? true : false} value={answer} onClick={callback} >
                            <span dangerouslySetInnerHTML={{ __html: answer}} />
                        </SecondButton>
                    </div>    
                ))}
            </div>
        </QuestionWrapper>
    )
}

export default QuestionCard
