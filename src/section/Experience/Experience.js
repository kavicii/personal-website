import './Experience.css';
import * as logo from '../../image/logos';
import { useContext } from 'react';
import { AnchorContext } from '../../context/AnchorContext';

function Experience() {
    const sectionRefs = useContext(AnchorContext);
    const experienceSectionRef = (el) => sectionRefs.current["experience_ref"] = el;
    return (
        <div className='experience-section' ref={experienceSectionRef}>
            <div className='experience-content-container'>
                <h1>
                    I have experience with ...
                </h1>
                <div className='logo-group-container'>
                    <div className='logo-container'>
                        <img className='logo' alt='JavaScript Logo' src={logo.logo_js} />
                        <span className='tooltip'>JavaScript</span>
                    </div>

                    <div className='logo-container'>
                        <img className='logo' alt='CSS Logo' src={logo.logo_css} />
                        <span className='tooltip'>CSS</span>
                    </div>

                    <div className='logo-container'>
                        <img className='logo' alt='HTML Logo' src={logo.logo_html5} />
                        <span className='tooltip'>HTML</span>
                    </div>

                    <div className='logo-container'>
                        <img className='logo' alt='Python Logo' src={logo.logo_python} />
                        <span className='tooltip'>Python</span>
                    </div>

                    <div className='logo-container'>
                        <img className='logo' alt='React Logo' src={logo.logo_react} />
                        <span className='tooltip'>React</span>
                    </div>

                    <div className='logo-container'>
                        <img className='logo' alt='OpenCV Logo' src={logo.logo_opencv} />
                        <span className='tooltip'>OpenCV</span>
                    </div>

                    <div className='logo-container'>
                        <img className='logo' alt='Pytorch Logo' src={logo.logo_pytorch} />
                        <span className='tooltip'>Pytorch</span>
                    </div>

                    <div className='logo-container'>
                        <img className='logo' alt='Apache Airflow Logo' src={logo.logo_airflow} />
                        <span className='tooltip'>Apache Airflow</span>
                    </div>

                    <div className='logo-container'>
                        <img className='logo' alt='Docker Logo' src={logo.logo_docker} />
                        <span className='tooltip'>Docker</span>
                    </div>

                    <div className='logo-container'>
                        <img className='logo' alt='Amazon Web Services Logo' src={logo.logo_aws} />
                        <span className='tooltip'>Amazon Web Services</span>
                    </div>

                    <div className='logo-container'>
                        <img className='logo' alt='Adobe PhotoShop Logo' src={logo.logo_photoshop} />
                        <span className='tooltip'>Adobe PhotoShop</span>
                    </div>

                    <div className='logo-container'>
                        <img className='logo' alt='Figma Logo' src={logo.logo_figma} />
                        <span className='tooltip'>Figma</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Experience;