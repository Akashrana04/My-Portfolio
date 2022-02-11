import React from 'react';
import './Experience.css';
import react from '../images/react.svg';
import html from '../images/html.svg';
import css from '../images/css.svg';

import bootstrap from '../images/bootstrap.svg';
import firebase from '../images/firebase.png';
import github from '../images/github.svg';
import js from '../images/js.png';
import material from '../images/material.svg';


import ExperienceCard from './ExperienceCard';

function Experience() {

    

    return (
        <div className="experience">
            <div className="component_title">
                <p>Experience</p>
            </div>


            <div className="ex_card">
                <ExperienceCard 
                    title="Cognizant Technologies"
                    line1="> Responsible for architecturing and building the responsive front end of 3 websites on react with the team of 2 from scratch."
                    line2="> In this website the user can find various NGO's listings and can apply after registering to the website."
                    line3="> The user can also see, what NGOs they have applied to, got selected, rejected or application still pending to be reviewed."
                    line4="> The website also has a user dashboard where they can upload their photo, resume and change their password, phone number or email."
                    line5="> Manually tested sites in various browsers and mobile devices to ensure cross-platform compatibility and responsiveness."
                    img1={js}
                    img2={react}
                    img3={html}
                    img4={css}
                    img5={firebase}
                    img6={bootstrap}
                    img7={github}
                    img8={material}
                />
                <ExperienceCard 
                    title="IBM"
                    line1="> Worked as front end developer intern."
                    line2="> Worked on an Web Applications based projects.."
                    line3="> Managed application flow and created various new features."
                    line4="> Fixed various bugs and worked on UI changes."
                    line5="> Project was is hosted on Firebase."
                    img1={js}
                    img2={react}
                    img3={html}
                    img4={css}
                    img5={firebase}
                    img6={bootstrap}
                    img7={github}
                    img8={material}
                />
                
            </div>

            
            {/* <div className="experience_show">
                <div className="experience1">
                    <div className="experience1_heading">
                        <p>VoluntHere</p>
    
                    </div>
                    <div className="experience1_desc">
                        <div className="exp_desc">
                            <p className="experience1_des"> {arrow}  Responsible for architecturing and building the responsive front end of 3 websites on react with the team of 2 from scratch.</p>
                            <p className="experience1_des"> {arrow}  In this website the user can find various NGO's listings and can apply after registering to the website.</p>
                            <p className="experience1_des"> {arrow} The user can also see, what NGOs they have applied to, got selected, rejected or application still pending to be reviewed.</p>
                            <p className="experience1_des"> {arrow} The website also has a user dashboard where they can upload their photo, resume and change their password, phone number or email.</p>
                            <p className="experience1_des"> {arrow} Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness</p>
                        </div>
                        <div className="tech_used">
                            <p>Tech Used </p>
                            <div className="tech_used_img">
                                <img src={js} alt="" />
                                <img src={react} alt="" />
                                <img src={html} alt="" />
                                <img src={css} alt="" />
                                <img src={firebase} alt="" />
                                <img src={bootstrap} alt="" />
                                <img src={github} alt="" />
                                <img src={material} alt="" />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="experience2">
                    <div className="experience1_heading">
                        <p>Scholarlys</p>
                    </div>
                    <div className="experience1_desc">
                        <div className="exp_desc">
                            <p className="experience1_des"> {arrow} Single handedly designing and building a responsive website from scratch.</p>
                            <p className="experience1_des"> {arrow} In this website the user can browse through research papers of their interest.</p>
                            <p className="experience1_des"> {arrow} The user can login through Firebase's Google Auth and then start adding the keywords of the research papers they would like to see.</p>
                            <p className="experience1_des"> {arrow} Firebase is used as the backend.</p>
                        </div>
                        <div className="tech_used">
                            <p>Tech Used </p>
                            <div className="tech_used_img2">
                                <img src={js} alt="" />
                                <img src={react} alt="" />
                                <img src={html} alt="" />
                                <img src={css} alt="" />
                                <img src={firebase} alt="" />
                                <img src={bootstrap} alt="" />
                                <img src={github} alt="" />
                                <img src={material} alt="" />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="experience3">
                    <div className="experience1_heading">
                        <p>Furnly</p>
                    </div>
                    <div className="experience1_desc">
                        <div className="exp_desc">
                            <p className="experience1_des"> {arrow} Single handedly designed and built a responsive ecommerce website from scratch on wordpress.</p>
                            <p className="experience1_des"> {arrow} In this website the user can browse and buy furnitures.</p>
                            <p className="experience1_des"> {arrow} Manually added Google Analytics on the website, and then analysed the user's data through it.</p>
                            <p className="experience1_des"> {arrow} Built and added various components by using html and css.</p>
                        </div>
                        <div className="tech_used">
                            <p>Tech Used </p>
                            <div className="tech_used_img3">
                                <img src={js} alt="" />
                                <img src={react} alt="" />
                                <img src={html} alt="" />
                                <img src={css} alt="" />
                                <img src={firebase} alt="" />
                                <img src={bootstrap} alt="" />
                                <img src={github} alt="" />
                                <img src={material} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            
                
            </div> */}
      
        </div>
    )
}

export default Experience;