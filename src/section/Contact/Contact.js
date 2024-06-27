import './Contact.css';
import { useContext, useRef } from 'react';
import { AnchorContext } from '../../context/AnchorContext';
import { ReactComponent as EmailLogo } from '../../image/svgs/email.svg';
import { ReactComponent as LinkedInLogo } from '../../image/svgs/linkin.svg';

function Contact() {
    const sectionRefs = useContext(AnchorContext);
    const toastRef = useRef(null);
    const contactSectionRef = (el) => sectionRefs.current["contact_ref"] = el;
    const copyToClipboard = () => {
        navigator.clipboard.writeText("kinchan.jobs@gmail.com");
        const toastEl = toastRef.current;
        console.log(toastEl)
        toastEl.className = "show";
        setTimeout(function(){ toastEl.className = toastEl.className.replace("show", ""); }, 3000);
    }

    return (
        <div className='contact-section' ref={contactSectionRef}>
            <div id='msg-toast' ref={toastRef} >Copied to clipboard.</div>
            <div className='contact-bg' />
            <div className='contact-banner-bg' />
            <div className='contact-content'>
                <h2 className='contact-content-title'>
                    Get in touch.
                </h2>
                <div className='contact-card-group'>
                    <div className='contact-card'>
                        <div className='contact-card-logo'>
                            <EmailLogo />
                        </div>
                        <div className='contact-card-content' onClick={() => copyToClipboard()}>
                            kinchan.jobs@gmail.com
                        </div>
                    </div>
                    <div className='contact-card'>
                        <div className='contact-card-logo'>
                            <LinkedInLogo />
                        </div>
                        <a className='contact-card-content' href={'https://www.linkedin.com/in/kinchan1997/'} target="_blank" rel="noopener noreferrer">
                            Kin Chan
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;