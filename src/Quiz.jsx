import React, { useState } from "react";
import "./quiz.css";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  function collectAnswer(event) {
    event.preventDefault();
    const chechAnswer = answer.toLowerCase();
    if (chechAnswer == "talha") {
      setResult("answer is corret");
    } else {
      setResult("answer is wrong");
    }
  }

  function view() {
    navigate("/");
  }

  return (
    <div className="quiz" style={{ color: "#fff" }}>
      <div className="content">
        <div className="home">
          <i class="fas fa-home" onClick={view}></i>
        </div>
        <div className="d">
          <i class="fas fa-gem"></i>
          <h3>500</h3>
        </div>
        <div className="d">
          <i class="fas fa-coins" style={{ color: "gold" }}></i>
          <h3>5000</h3>
        </div>
        <h1 className="i">i</h1>
      </div>
      {/* <div className="q">
        <div className="s">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rerum
            quas libero quam aliquam adipisci earum corrupti quod ab delectus
            nulla iure facere excepturi quasi, aperiam voluptatibus laudantium
            sint ex. Quam qui, architecto assumenda quos quo enim iure similique
            sint maiores minus. Rem ab eligendi minus incidunt nihil fugit vitae
            voluptatibus doloribus expedita aperiam, debitis maiores facere
            doloremque explicabo alias!
          </p>
          <form>
          <label className="label">Enter Your Answer</label>
            <div className="in">
            <input
              type="text"
              style={{ visibility: "visible" }}
              className="answer"
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
            />
            <input
              type="submit"
              style={{ visibility: "visible" }}
              className="submit"
              onClick={collectAnswer}
            />
          
            </div>
            
            <br />
            <br />
            <p>{result}</p>
          </form>
        </div>
      </div> */}
      <div class="container">
        <div className="sub-container">
        <div class="container">
        <h1>Answer the Question</h1>
        <p id="question">What is the capital of France?</p>
        <input type="text" id="answer" placeholder="Enter your answer"/>
        <button id="submit">Submit</button>
        <button id="hint">Hint</button>
        <button id="result">Show Result</button>
        <button id="lifeline">Use Lifeline</button>
    </div>
        </div>
    </div>
    </div>
  );
}

export default Quiz;
