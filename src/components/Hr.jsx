import React, { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";

const Hr = () => {
  const questions = [
    { ques: "Introduece yourself", ans: "dummy ans" },
    { ques: "What are your strengths", ans: "dummy ans" },
    { ques: "What are your weakness", ans: "dummy ans" },
    { ques: "Why do you want to work for our company", ans: "dummy ans" },
    { ques: "How did you hear about the position", ans: "dummy ans" },
    { ques: "What is your career objective", ans: "dummy ans" },
    { ques: "Where do you see yourself after 5 years", ans: "dummy ans" },
    {
      ques: "What is your greatest personal/professional achievement",
      ans: "dummy ans",
    },
    {
      ques: "Tell me about a team project you build? your role and achievement",
      ans: "dummy ans",
    },
    {
      ques: "How does your perfect day/work day look like? Take me through it",
      ans: "dummy ans",
    },
    { ques: "Why you join masai school", ans: "dummy ans" },
    { ques: "Your experience at masai school", ans: "dummy ans" },
    {
      ques: "Why should we hire you? How will you be an asset for our company?",
      ans: "dummy ans",
    },
    { ques: "Why did you leave previous job", ans: "dummy ans" },
    { ques: "Why gap in employment/ education", ans: "dummy ans" },
    { ques: "Why changed career path", ans: "dummy ans" },
    { ques: "How other people would describe you", ans: "dummy ans" },
    { ques: "How you deal with pressure", ans: "dummy ans" },
    { ques: "Tell me a challenge you faced at work", ans: "dummy ans" },
    {
      ques: "Your salary expectation and why you deserve it",
      ans: "dummy ans",
    },
    {
      ques: "What are other companies you are interviewing with?",
      ans: "dummy ans",
    },
    { ques: "What are your hobbies & leisure interest", ans: "dummy ans" },
    {
      ques: "What are the 3 most important thing for you in a job",
      ans: "dummy ans",
    },
    { ques: "Do you know anyone who work for us?", ans: "dummy ans" },
    { ques: "Any question for us?", ans: "dummy ans" },
  ];
  const [i, setI] = useState(0);
  const [rem, setRem] = useState(60);
  const initQues = {
    ques: "dumy question",
    ans: "dumy question",
  };
  const [question, setQuestion] = useState(initQues);
  useEffect(() => {
    const interval = setInterval(() => {
      setI((prev) => prev + 1);
      setRem(60);
    }, 60000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setRem((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (i > 24) {
      setI(0);
    }

    setQuestion(questions[i]);
  }, [i]);
  return (
    <div>
      time rem {rem}
      <QuestionCard no={i} question={question.ques} answer={question.ans} />
    </div>
  );
};

export default Hr;
