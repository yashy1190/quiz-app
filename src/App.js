import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
import { Box } from '@mui/material';

function App() {

  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);


  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`);
    setQuestions(data.results);
  }
  return (
    <BrowserRouter>
      <Box className="app" height={800} p={2} style={{ background: 'linear-gradient(to bottom, #2196F3, #4CAF50)' }}>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions} />} />
          <Route path='/quiz' element={<Quiz name={name}
            questions={questions} score={score} setScore={setScore} setQuestions={setQuestions}
          />} />
          <Route path='/result' element={<Result name={name} score={score} />} />
        </Routes>
      </Box>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
