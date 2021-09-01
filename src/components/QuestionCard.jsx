import React from 'react'

const QuestionCard = ({question,no}) => {
    return (
        <div>
            <h6>Question {no+1}</h6>
            <h3>{question}</h3>
        </div>
    )
}

export default QuestionCard
