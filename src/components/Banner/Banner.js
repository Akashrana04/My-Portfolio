import React from 'react';
import './Banner.css';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
// import Typewriter from 'typewriter-effect/dist/core';


function Banner() {
    return (
        <div className="banner">
            <div className="banner_title1">
                <p><span className="emerge">Hello,</span> My name is</p>
            </div>
            <div className="banner_title2">
                <p>Akash Rana</p>
            </div>
            <div className="banner_desc1">
                <p>I am a Software development Engineer 1 at <span className="emerge">Ula</span>.</p>
                {/* <p>a passionate web developer, fascinated by the tech world.</p> */}
                {/* <p>I am a passionate web developer, fascinated by the tech world.</p> */}
                {/* <p>I am
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("an SDE intern at Swiggy")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("a web developer")
                                .start();
                        }}
                    />
                </p> */}
            </div>
            <div className="banner_desc2">
                <p>
                    I am a 22'Graduate in major of Electrical and Electronics Communication Engineering.<br />
                    I have prior 6 months internship Experince at Cognizant as SDET intern.<br />
                    Also have 4 months experience at IBM as Frontend developer intern.<br />
                    I love working on Backend related development and projects.<br />
                    I have developed <span className="emerge">3 real world websites</span> till now that are
                    currently being <span className="emerge">used by the people </span>.<br />
                    I love solving Date structure and Algorithm problems using C++ and Java. 
                </p>
            </div>
            <div className="social_logo">
                <div className="social_logo1">
                    <a href="https://www.linkedin.com/in/akash-rana-31aa141a2/" target="_blank" rel="noreferrer">
                        <img className="social_logo_image" src={linkedin} alt="" />
                    </a>
                </div>
                <div className="social_logo1">
                    <a href="https://github.com/Akashrana04" target="_blank" rel="noreferrer">
                        <img className="social_logo_image" src={github} alt="" />
                    </a>
                </div>
            </div>
            <div className="mail_btn">
                <a href="mailto: akashranam48@gmail.com">
                    <button className="mail_btnn">Get in Touch</button>
                </a>
            </div>
        </div>
    )
}

export default Banner;
