import './Project.css';
import { useContext } from 'react';
import { AnchorContext } from '../../context/AnchorContext';
import Card from './component/Card';
import tnPW from '../../image/card_thumbnails/thumbnail_my_personal_website_1280x720.png'
import tnITI from '../../image/card_thumbnails/thumbnail_iti_1280x720.png'
import tnMER from '../../image/card_thumbnails/thumbnail_MER_1280x720.png'
import tnSR from '../../image/card_thumbnails/thumbnail_SR_1280x720.png'

function Project() {
    const sectionRefs = useContext(AnchorContext);
    const projectSectionRef = (el) => sectionRefs.current["project_ref"] = el;
    return (
        <div className='project-section' ref={projectSectionRef}>
            <h2 className='project-section-title'>My previous projects</h2>
            <div className='card-group'>
                <Card
                    thumbnail={tnPW}
                    content={{
                        title: 'My Personal Website',
                        subtitle: 'My first published website, that shares my stories and experience.',
                        url: 'https://github.com/kavicii/personal-website',
                        github_url: 'https://github.com/kavicii/personal-website',
                    }}
                />
                <Card
                    thumbnail={tnMER}
                    content={{
                        title: 'Mirco-expression Recognition',
                        subtitle: 'Using a Convolutional Neural Network for mirco-expression recognition.',
                        url: '',
                        github_url: 'https://github.com/kavicii/FYP_DSSN',
                    }}
                />
                <Card
                    thumbnail={tnITI}
                    content={{
                        title: 'Intelligent Traffic Intersection',
                        subtitle: 'A low-cost solution for enhancing road safety, applying object detection technology.',
                        url: '',
                        github_url: 'https://github.com/kavicii/Intelligent-traffic-intersection',
                    }}
                />
                <Card
                    thumbnail={tnSR}
                    content={{
                        title: 'Smart Retail',
                        subtitle: 'An Arduino project that aims to provide a safe shopping environment during COVID-19.',
                        url: '',
                        github_url: 'https://github.com/kavicii/Arduino-Project-Smart-Retail',
                    }}
                />
            </div>
        </div>
    )
}

export default Project;