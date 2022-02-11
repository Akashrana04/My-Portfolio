import React from 'react';
import './Projects.css';
import Project from './Project';
import imeet from '../images/imeet.png';
import myflix from '../images/myflix.png';
import cov from '../images/cov.png';
import port from '../images/port.png';

function Projects() {
    return (
        <div className="projects">
            <div className="component_title">
                <p>Projects</p>
            </div>
            <div className="project_div">
                <Project 
                    image={imeet}
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
                    image={myflix}
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
                    image={cov}
                    title="Covid 19 Leads (Web Application)"
                    line1="A website where you can generate custom Twitter link of all the COVID-19 resources you want."
                    line2="The motivation behind this website is Covid period faced by us. "
                    line3="t also has a Vaccination Page where in you can search nearest vaccination centres."
                    line4="It is hosted on Firebase."
                    line5="It also make sure that avaiablity of the vaccination at that moment."
                    line6="Technologies - Reactjs, JavaScript, HTML, CSS, Firebase."
                    link="https://covid19leads.web.app/"
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
                    link="https://akashranaportfolio.web.app/"
                />
            </div>
        </div>
    )
}

export default Projects;

