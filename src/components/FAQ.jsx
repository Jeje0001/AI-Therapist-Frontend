import React from "react";

import "../styles/FAQ.css";

function FAQ(){
    return (
        <>
        <section className="faq-section" id="faq">

            <h2 className="faq-heading"> Got Questions? We've Got answers.</h2>
            <div className="faq-accordion">
            <details className="faq-item">
                <summary className="faq-question">What is MindHaven?</summary>
                <p className="faq-answer">MindHaven is your free AI companion for mental health, helping you vent, reflect, and journal with empathetic responses.</p>
            </details>
            <details className="faq-item">
                <summary className="faq-question">How does the AI help me?</summary>
                <p className="faq-answer">Our AI starts conversations, listens actively with cues like “Hmm, I hear you,” and offers guided journal prompts tailored to your mood.</p>
            </details>
            <details className="faq-item">
                <summary className="faq-question">Is MindHaven really free?</summary>
                <p className="faq-answer"> free?	Yes, it’s free while we grow! No hidden fees—just a safe space to support your mental health.</p>
            </details>
            <details className="faq-item">
                <summary className="faq-question">Can I use it on my phone?</summary>
                <p className="faq-answer">Absolutely! MindHaven works on any device—start chatting on your phone, tablet, or computer.</p>
            </details>
            
            </div>
        </section>
        </>
    )
}

export default FAQ