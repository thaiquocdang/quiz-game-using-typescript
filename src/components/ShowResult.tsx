import React from 'react'

type Props = {
    number: number;
    question: string;
    userAnswer: string;
    correctAnswer: string;
    result: boolean;

}

const ShowResult: React.FC<Props> = ({ number, question, userAnswer, correctAnswer, result }) => {
    return (
        <div >
            <div>Question {number}: <span dangerouslySetInnerHTML={{ __html: question}} /></div>
            <div>Your Answer: <span dangerouslySetInnerHTML={{ __html: userAnswer}} /></div>
            <div>Correct answer: <span dangerouslySetInnerHTML={{ __html: correctAnswer}}/> </div>
            <div>Score: {result ? '1' : '0'}</div>
        </div>
    )
}

export default ShowResult
