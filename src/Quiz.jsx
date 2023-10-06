
import React, { useRef, useState } from "react";
import "./quiz.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Quiz() {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState("");
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const inputRef = useRef(null);

  const questions = [
    "An astronomical phenomenon occurs when one spatial object comes within the shadow of another object",
    "How many types of lunar eclipse are there?",
    "What type of solar eclipse is the rarest of all?",
    "How does an eclipse occur?",
    "To be continued after nomination!"
  ];

  function handleChange(event) {
    setAnswer(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (answer.trim() === "") {
      toast.error('Answer is required', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    const checkAnswer = answer.toLowerCase();
    const currentQuestion = questions[currentContentIndex];
    
    if (currentContentIndex === 0) {
      if (checkAnswer === "eclipse") {
        handleCorrectAnswer();
      } else {
        handleIncorrectAnswer();
      }
    } else if (currentContentIndex === 1) {
      if (checkAnswer === "two") {
        handleCorrectAnswer();
      } else {
        handleIncorrectAnswer();
      }
    } else if (currentContentIndex === 2) {
      if (checkAnswer === "hybrid") {
        handleCorrectAnswer();
      } else {
        handleIncorrectAnswer();
      }
    } else if (currentContentIndex === 3) {
      if (checkAnswer === "alignment") {
        handleCorrectAnswer();
      } else {
        handleIncorrectAnswer();
      }
    } else {
      console.log('quiz ended')
    }
  }

  function handleCorrectAnswer() {
    toast.success('Correct Answer', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    setTimeout(() => {
      setCurrentContentIndex(currentContentIndex + 1);
      setAnswer("");
    }, 6000);
  }
  function handleIncorrectAnswer() {
    toast.error('Incorrect Answer', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    // You can handle other logic for incorrect answers here
    // For example, updating heart icons
    // if (currentContentIndex === 0) {
    //   icon1.current.style.color = "white";
    // } else if (currentContentIndex === 1) {
    //   icon2.current.style.color = "white";
    // }
  }

  function handleGoHome() {
    navigate("/");
  }

  return (
    <div className="quiz" style={{ color: "#fff" }}>
      <div className="content">
        <div className="home">
          <i className="fas fa-home" onClick={handleGoHome}></i>
        </div>
        <div className="d">
          <i className="fas fa-gem"></i>
          <h3>500</h3>
        </div>
        <div className="d">
          <i className="fas fa-coins" style={{ color: "gold" }}></i>
          <h3>5000</h3>
        </div>
        <h1 className="i">i</h1>
      </div>
      <div className="container">
        <div className="sub-container">
          <div className="container">
            <h1>Answer the Question</h1>
            <h3 id="question">{questions[currentContentIndex]}</h3>
            <div className="life_line_container">
              <p id="note">Provide a one-word answer:</p>
              <div className="life">
                {/* Add heart icons here */}
              </div>
            </div>
            <input
              type="text"
              id="answer"
              placeholder="Enter your answer"
              value={answer}
              onChange={handleChange}
              onFocus={(e) => {
                e.target.setAttribute("autocomplete", "off");
              }}
              ref={inputRef}
              autoComplete="off"
            />
            <button id="submit" onClick={handleSubmit}>
              Submit
            </button>
            <button id="hint">Hint</button>
            {/* <button id="result">Show Result</button>
            <button id="lifeline">Use Lifeline</button> */}
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default  Quiz;
