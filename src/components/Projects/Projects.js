import React from 'react';
import './Projects.css';
import Project from './Project';
import tsc from '../images/tsc.png';
import kcart from '../images/kcart.png';
import clg from '../images/clg.png';
import port from '../images/port.png';

function Projects() {
    return (
        <div className="projects">
            <div className="component_title">
                <p>Projects</p>
            </div>
            <div className="project_div">
                <Project 
                    image={tsc}
                    title="Interview-Meet Web Application"
                    line1="Host interactive coding session with candidates to accurately access thier technical skills."
                    line2="Here, this app chooses random question from our library."
                    line3="This provides the collabrative notepad for writing code"
                    line4="It also supports the Face to face video call."
                    line5="It's database is managed on Firestore and is hosted on Netlify. "
                    line6="Technologies - Reactjs, JavaScript, HTML, CSS, Firebase."
                    link="https://interview-meet.web.app/"
                />
                <Project 
                    image={kcart}
                    title="Myflix Web Application"
                    line1="A Web application made for entertainment purpose."
                    line2="This is the clone web application of very popular OTT platform- NETFLIX."
                    line3="This consist of some extra features to make it more user freindly."
                    line4="Reusable components are built to showcase different attributes."
                    line5="It's database is managed on Firestore and is hosted on Netlify."
                    line6="Technologies - Reactjs, JavaScript, HTML, CSS, Firebase."
                    link="https://silver-screen-76c12.web.app/"
                />
                <Project 
                    image={port}
                    title="My Portfolio (Responsive)"
                    line1="This Portfolio too is built using React."
                    line2="It is a website which answers to the question who am I?"
                    line3="And what have I done."
                    line4="It is hosted on Firebase."
                    line5="Have a look at it, and please feel free to contact anytime."
                    line6="Technologies - Reactjs, JavaScript, HTML, CSS, Firebase."
                    link="https://harshit-portfolio99.web.app/"
                />
                <Project 
                    image={clg}
                    title="College Website (Desktop Web App)"
                    line1="This was the first project that I created when I started development."
                    line2="This is a simple website where the students can see informations about"
                    line3="a number of different branches that are available in our college."
                    line4="This website is built on React using reusable components."
                    line5="It is hosted on Firebase."
                    line6="Technologies - Reactjs, JavaScript, HTML, CSS, Firebase."
                    link="https://taks-b7f55.web.app/"
                />
            </div>
        </div>
    )
}

export default Projects;
