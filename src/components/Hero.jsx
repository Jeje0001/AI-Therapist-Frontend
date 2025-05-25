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
              <Link to="/login"><button className="btn login">Login</button></Link>
             <Link to="/signup"><button className="btn signup">Sign up</button></Link>


                </div>
            </div>
            <div className="hero-image">
            <img src='/assets/Illustrations/hero-img.png' alt="Hero robot" />
            </div>


        </div>
    </section>
    )

}

export default Hero