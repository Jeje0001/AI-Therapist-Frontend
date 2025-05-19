import React from "react";

import '../styles/FeatureVisuals.css'


function Feature4(){
    return (
        <>
        <section className="feature-section feature-visuals" id="features">
            <div className="feature-container">
            <div className="feature-card">
           
            <div className="feature-text" >
                <h2>Mood-Based Visuals</h2>
                <p>	MindHaven adapts to how you feel. Whether you’re up or down, the background reflects your mood—bringing a calming, personalized experience.</p>
            </div>
            <div className="feature-image">
                <img src= '/assets/Illustrations/mood-visuals.png' alt="" />

            </div>
            </div>
            </div>
        </section>

        </>
    )
}

export default Feature4