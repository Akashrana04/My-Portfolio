import React from 'react';
import './Navbar.css';
import resume from '../resume/AKASH_RANA_CV_UPDATED-1.pdf';
import $ from 'jquery';

function Navbar() {

    var name = "<PortFolio > ";

    const about = () => {
        $('html,body').animate({
            scrollTop: $(".navbar").offset().top
        },
            'slow');
    };

    const tools = () => {
        $('html,body').animate({
            scrollTop: $(".techstack").offset().top
        },
            'slow');
    };

    const experience = () => {
        $('html,body').animate({
            scrollTop: $(".experience").offset().top
        },
            'slow');
    };

    const project = () => {
        $('html,body').animate({
            scrollTop: $(".projects").offset().top
        },
            'slow');
    };

    return (
        <div className="navbar">
            <div className="nav_left">
                <p>{name}</p>
            </div>
            <div className="nav_right">
                <p onClick={about}>About</p>
                <p onClick={tools}>Tools</p>
                <p onClick={experience}>Experience</p>
                <p onClick={project}>Projects</p>
                <p><a href={resume} download="AKASH_RANA_CV_UPDATED-1.pdf">Resume</a></p>
            </div>
        </div>

    )
}

export default Navbar;
