import React from 'react'
import QuestionCard from './QuestionCard'

const Hr = () => {
    const questions=['Introduece yourself','What are your strengths','What are your weakness','Why do you want to work for our company','How did you hear about the position','What is your career objective','Where do you see yourself after 5 years','What is your greatest personal/professional achievement','Tell me about a team project you build? your role and achievement','How does your perfect day/work day look like? Take me through it','Why you join masai school','Your experience at masai school','Why should we hire you? How will you be an asset for our company?','Why did you leave previous job','Why gap in employment/ education','Why changed career path','How other people would describe you','How you deal with pressure','Tell me a challenge you faced at work','Your salary expectation and why you deserve it','What are other companies you are interviewing with?','What are your hobbies & leisure interest','What are the 3 most important thing for you in a job','Do you know anyone who work for us?','Any question for us?']
    return (
        <div>
            {questions.map((question,i)=>{
                return <QuestionCard key={i} no={i} question={question}/>
            })}
        </div>
    )
}

export default Hr
