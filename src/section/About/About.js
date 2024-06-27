import './About.css';
import myImg from '../../image/about_kin.jpg';
import { useContext } from 'react';
import { AnchorContext } from '../../context/AnchorContext';


function About() {
    const sectionRefs = useContext(AnchorContext);
    const aboutSectionRef = (el) => sectionRefs.current["about_ref"] = el;
    return (
        <div className='about-section' ref={aboutSectionRef}>
            <div className='about-content-container'>
                <img src={myImg} alt='taken by my friend Jesse ^v^' />
                <div className='text-container'>
                    <h1>
                        My name is ... <br/>
                        Kin Chan!
                    </h1>
                    <p>
                        I recently graduated from <b>City University of Hong Kong</b> and I am thrilled to embark on the next chapter of my journey as a <b>front-end developer</b>.
                    </p>
                    <p>
                        On this website, you will find examples of my work, showcasing my <b>creativity</b> and <b>technical expertise</b>. I am excited about the prospect of collaborating with like-minded individuals and organizations that share my passion for <b>front-end development</b>.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About;