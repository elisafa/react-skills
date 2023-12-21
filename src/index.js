import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662ea",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#efd81d",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#c3dcaf",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#e84f33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60dafb",
  },

  {
    skill: "Java",
    level: "beginner",
    color: "#ff3b00",
  },
]

function App() {
  return (
    <div className="container">
      <Imagem src="rebeca.jpg" />
      <Content />
      <SkillList />
    </div>
  )
}

function Imagem(props) {
  return <img className="imagem" src={props.src} alt="Elisafa" />
}

function Content() {
  return (
    <div className="container-content">
      <h1 className="h1">Elisafá Junior</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or preparing a
        course, I like to play board games, to cook (and eat), or to just enjoy the
        Portuguese sun at the beach.
      </p>
    </div>
  )
}

function SkillList() {
  const skillsLevel = skills
  return (
    <div className="container-skills">
      {skillsLevel.map((skill) => (
        <Skills habilt={skill.skill} color={skill.color} level={skill.level} />
      ))}

      {/* <Skills habilt="HTML + CSS " skill="💪" color="blue" />
      <Skills habilt="JavaScript" skill="💪" color="orangered" />
      <Skills habilt="Web design " skill="👍🏾" color="yellow" />
      <Skills habilt="Git and GitHub " skill="👍🏾" color="orange" />
      <Skills habilt="React" skill="💪" color="red" />
      <Skills habilt="Java" skill="👌" color="green" /> */}
    </div>
  )
}

function Skills({ habilt, level, color }) {
  // const skill = skills
  // console.log(skill)
  return (
    <div className="skills" style={{ backgroundColor: color }}>
      <span>{habilt}</span>
      <span>
        {level === "advanced" && "💪"}
        {level === "intermediate" && "👌"}
        {level === "beginner" && "👶🏾"}
      </span>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
