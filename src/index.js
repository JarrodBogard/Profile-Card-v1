import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="assets/jarrod.jpeg" alt="Jarrod Bogard" />
  );
}
function Intro() {
  return (
    <div>
      <h1>Jarrod Bogard</h1>
      <p>
        Hello! I am Jarrod Bogard, a focused and driven web developer, currently
        located in the Raleigh-Durham area. With a strong affintiy for web
        development, I undertake coding projects equipped with a wide-array of
        skills and tools.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="rgb(97, 219, 251)" />
      <Skill skill="JavaScript" emoji="💪" color="rgb(240, 219, 79)" />
      <Skill skill="HTML+CSS" emoji="💪" color="#f06529" />{" "}
      {/* CSS color: #264de4 */}
      <Skill skill="Node.js" emoji="👍" color="rgb(104, 160, 99)" />
      <Skill skill="SQL" emoji="👌" color="#00758f" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
