import React from 'react'
import './About.css' 


function About() {
    return (
        <div className="About">
            <h1>About Page</h1>

            <div className="About_us">

                <div className="About_us_details">
                   <h2>Tamrat Bayeh</h2>
                   <img src="/1580998798234הורדה.png" alt="tamrat"/>
                   <h3>Full Stack Web Developer</h3>

                   <div className="About_us_details_link">
                       <a href="https://www.facebook.com/tamrat.bayeh" target="_blank" rel="noopener noreferrer"> <i className="fa fa-facebook"> </i> </a>
                       <a href="https://linkedin.com/in/tamrat-bayeh-6b1b53192" target="_blank" rel="noopener noreferrer"> <i className="fa fa-linkedin"> </i> </a>
                       <a href="https://github.com/tamrat-bay" target="_blank" rel="noopener noreferrer"> <i className="fa fa-github"> </i> </a>
                   </div>
                </div>

                <div className="About_us_details">

                </div>

            </div>
        </div>
    )
}
export default About;