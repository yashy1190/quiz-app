import { Button } from "@mui/material";
import { useEffect } from "react";
import {  useNavigate } from "react-router";
import "./Result.css";
import axios  from "axios";

const Result = ({ name, score }) => {
  const history = useNavigate();

  const submitReport = () => {
    axios.post('http://localhost:5000/user', {
      name: name,
      Score: score,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  useEffect(() => {
    if (!name) {
      history("/");
    }
  }, [name, history]);

  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
        onClick={submitReport}
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;