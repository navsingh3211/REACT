import React from "react";
import ReactDom from "react-dom/client";

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
    console.log(props);
    return(
        <div>
            <img src={props.photoName} alt={props.name}/>
        </div>
    );
}

function SkillList(){
    return(
        <div>
            <Skill skillName="PHP" />
            <Skill skillName="CSS" />
            <Skill skillName="HTML" />
            <Skill skillName="JAVA" />
            <Skill skillName="C++" />
        </div>
        
    );
}
function Skill(props){
    return(
        <div>
            <h2>{props.skillName}</h2>
        </div>
    )
}

function About(){
    return <h1>Meta Platforms, Inc., doing business as Meta, and formerly named Facebook, Inc., and TheFacebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California</h1>
}


const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
