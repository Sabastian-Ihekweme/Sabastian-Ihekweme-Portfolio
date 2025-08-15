import React, { useEffect, useRef } from 'react';
import './Styles/ContactMe.css';
import { useForm, ValidationError } from '@formspree/react';
import github from './assets/icons/github.png';
import linkdin from './assets/icons/linkdin.png';


function ContactMe() {

    const [state, handleSubmit] = useForm("xzzvwjok");

    const formRef = useRef(null);

    useEffect(() => {
        if (state.succeeded) {
            alert('Message sent successfully!');

        }
    }, [state.succeeded]);

    return (
        <>
        <div className="contact-me-container">
            <h2>Contact Me</h2>

            <div className="contact-me">
            <form
            onSubmit={handleSubmit} 
            className="contact-me-form">

                <div className="name-textbox textbox">
                <label htmlFor="email"><p>Name</p></label>
                <input 
                className="name-input" 
                type="text" 
                name="name"
                placeholder="Your Name" />
                </div>

                <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                />

                <div className="textbox">
                <label htmlFor="email"><p>Email</p></label>
                <input 
                className="email-input" 
                type="email" 
                name="email"
                placeholder="your.email@example.com" /> 
                </div>

                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />

                <div className="textbox">
                <label htmlFor="email"><p>Message</p></label>
                <textarea
                className="message-input"
                name="message"
                placeholder="Your message... " />
                </div>

                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />

                <button disabled={state.submitting} className="send-button" type="submit">
                    {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>

            <div className="summary">
                 Let’s work together or just say hello!
                 I'm always open to discussing new projects, 
                 creative ideas, or opportunities to be part of 
                 your vision. Feel free to reach out through any 
                 of the channels below.

                <div className="channels">
                    <a 
                    target="null"
                    href="https://github.com/Sabastian-Ihekweme">
                    <img className="channel-icon" src={github} />
                    </a>
                    
                    <a
                    target="null" 
                    href="https://www.linkedin.com/in/sabastian-fabian-ihekweme-5abb06302/">
                    <img className="channel-icon" src={linkdin} />
                    </a>
                </div>

            </div>


            </div>



        </div>
            <footer>
                <hr />

                <p>© 2025 Sabastian Ihekweme. All rights reserved.</p>
        
            </footer>

        </>
    )
}

export default ContactMe;