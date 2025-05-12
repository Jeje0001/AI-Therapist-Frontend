import React from 'react';

import '../styles/Hero.css';
// import heroImg from '';
function Hero(){
    return(
    <section className='hero-section'>
        <div className='hero-content'>
            <div className='hero-text'>
                <h1>Your space to breathe, speak, and feel better.</h1>
                <p>MindHaven is your personal AI therapist, always ready to listen, support, and grow with you. Whether you're feeling anxious, overwhelmed, or just need to talk, we’re here — day or night.</p>

                <div className="hero-buttons">
                <button className="btn outline">Login</button>
                <button className="btn solid">Sign up</button>

                </div>
            </div>
            <div className="hero-image">
            {/* <img src="/Users/jeje/Desktop/JavaProjects/Projects/AI-Therapist-Frontend/src/public/assets/Illustrations/hero-robot.png" alt="Hero Robot" /> */}
            <img src='/assets/Illustrations/hero-robot.png' alt="Hero robot" />
            </div>


        </div>
    </section>
    )

}

export default Hero