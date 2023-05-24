import { Box, CircularProgress } from '@mui/material';
import  { useEffect, useState } from 'react'
import Question from '../../components/Question/Question';
import "./Quiz.css"
const Quiz = ({name, score, questions, setQuestions, setScore}) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
  const [timerDuration, setTimerDuration]= useState(10);
  const [timeRemaining, setTimeRemaining]= useState(timerDuration);



  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);

  console.log(questions);

  const handleShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  };
  return (
    <Box className="quiz">
      <span className="subtitle">Welcome, {name}</span>

      {questions ? (
        <>
          <Box className="quizInfo" fontSize={26} pl={5} pr={5}>
            <span>{questions[currQues].category}</span>
            <span >
              {/* {questions[currQues].difficulty} */}
              Score : {score} | Timer Duration {timeRemaining} seconds
            </span>
          </Box>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </Box>
  );
};

export default Quiz








