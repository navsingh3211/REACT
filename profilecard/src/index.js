import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
function App(){
    return(
        <div className="card">
            <Header photoName="pics/taj.jpg" name="photo"/>
            <div className="data">
                <About />
                <SkillList />
            </div>
        </div>
    );
}

function Header(props){
    return <img className="avatar" src={props.photoName} alt={props.name}/>
}

function SkillList(){
    return(
        <div className="skill-list">
            <Skill skillName="PHP" emoji="💪" color="blue" />
            <Skill skillName="CSS" emoji="💪" color="orange" />
            <Skill skillName="HTML" emoji="💪" color="yellow" />
            <Skill skillName="JAVA" emoji="👶" color="orangered" />
        </div>
        
    );
}
function Skill(props){
    return(
        <div className="skill" style={{ backgroundColor: props.color }}>
            <span>{props.skillName}</span>
            <span>{props.emoji}</span>
        </div>
    )
}

function About(){
    return <p>Meta Platforms, Inc., doing business as Meta,  <br />and formerly named Facebook, Inc.,and TheFacebook, Inc., <br />is an American multinational technology conglomerate <br />based in Menlo Park, California</p>
}


const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
