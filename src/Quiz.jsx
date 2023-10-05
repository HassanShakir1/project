import React, { useRef, useState } from "react";
import "./quiz.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Quiz() {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const [value, setValue] = useState(0);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const inputRef = useRef(null);
  const icon1 = useRef(null);
  const icon2 = useRef(null);
  const icon3 = useRef(null);


  let question = [
    "An astronomical phenomenon occurs when one spatial object comes within the shadow of another object",
    "How many types of lunar eclipse are there?",
    "What type of solar eclipse is the rarest of all?",
    "How eclipse occur?",
  ];

  function change(event) {
    event.preventDefault();
    if(answer === ""){
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
    }
    if (currentContentIndex === 3) {
      setCurrentContentIndex(0);
    } else {
      const checkAnswer = answer.toLowerCase();
      if (currentContentIndex === 0 && checkAnswer === "eclipse") {
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
          setTimeout(()=>{
            setCurrentContentIndex(currentContentIndex + 1);
        inputRef.current.value = "";

          }, 6000)
        
      } else if (currentContentIndex === 0 && checkAnswer !== "eclipse" && checkAnswer!=="") {
        toast.error('iNCORREJSBDVBDHUSADVBU', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        inputRef.current.style.border = ".1rem solid red";
  
        if (value === 0) {
          icon1.current.style.color = "white";
          setValue(1);
        } else if (value === 1) {
          icon2.current.style.color = "white";
          setValue(2);
        }
        else if(value === 2){
          icon3.current.style.color = "white";
          
          // setValue(2);
        }
      }
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
      <div class="container">
        <div className="sub-container">
          <div class="container">
            <h1>Answer the Question</h1>
            <h3 id="question">{question[currentContentIndex]}</h3>
            <div className="life_line_container">
              <p id="note">Provide a one-word answer:</p>
              <div className="life">
                <i class="fas fa-heart" ref={icon1}></i>
                <i class="fas fa-heart" ref={icon2}></i>
                <i class="fas fa-heart" ref={icon3}></i>
              </div>
            </div>

            <input
              type="text"
              id="answer"
              placeholder="Enter your answer"
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
              onFocus={(e) => {
                e.target.setAttribute("autocomplete", "off");
              }}
              ref={inputRef}
              autocomplete="no-suggestions"
            />
            <button id="submit" onClick={change}>
              Submit
            </button>
            <button id="hint">Hint</button>
            <button id="result">Show Result</button>
            <button id="lifeline">Use Lifeline</button>
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

export default Quiz;
