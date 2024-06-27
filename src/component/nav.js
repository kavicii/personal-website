import './nav.css';
import { useEffect, useRef, useState } from 'react';
import { AnchorContext } from '../context/AnchorContext';
import { ReactComponent as NavBarBtn } from '../image/svgs/btn_navbar.svg';
import { ReactComponent as BackBtn } from '../image/svgs/btn_back.svg';


function Nav(props) {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isSmartphone, setIsSmartphone] = useState(false);
    const [isBlurBg, setIsBlurBg] = useState(false);

    const sectionRefs = useRef({});
    const navRef = useRef(null);

    const scrollToSection = (key) => {
        const { current } = sectionRefs;
        if (current[key] !== null) {
            current[key].scrollIntoView({ behavior: "smooth" });
        }
    }

    const toggleNavbar = () => {
        setIsExpanded(!isExpanded);
        setIsBlurBg(true);
    };

    const handleResize = () => {
        if (window.innerWidth < 768) {
            setIsSmartphone(true);
            setIsExpanded(false);
        }
        else {
            setIsSmartphone(false);
            setIsExpanded(true);
            setIsBlurBg(false);
        }
    }

    const handleOutsideClick = (e) => {
        if (isSmartphone && isExpanded) {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setIsExpanded(false);
            }
        }
    }

    //do once on load.
    useEffect(() => {
        handleResize();
    }, []);

    //do when every render.
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    })

    return (
        <>
            <AnchorContext.Provider value={sectionRefs}>
                {props.children}
            </AnchorContext.Provider>
            <div ref={navRef}>
                <button className={`nav-toggle ${isSmartphone ? !isExpanded ? 'nav-toggle-open' : 'nav-toggle-hide' : 'nav-toggle-hide'}`} onClick={toggleNavbar}>
                    <NavBarBtn />
                </button>
                <div className={`nav-container ${isBlurBg ? 'blur-bg' : ''} ${isExpanded ? 'expanded' : 'collapsed'}`}>
                    <button className={isSmartphone ? isBlurBg ? 'nav-toggle-close' : 'hide' : 'hide'} onClick={toggleNavbar}>
                        <BackBtn />
                    </button>
                    <div className={isSmartphone ? 'hide' : 'nav-line'} />
                    <div className='nav-menu'>
                        <div className='nav-item' onClick={() => scrollToSection("about_ref")}>About me</div>
                        <div className='nav-item' onClick={() => scrollToSection("experience_ref")}>Experience</div>
                        <div className='nav-item' onClick={() => scrollToSection("project_ref")}>Projects</div>
                        <div className='nav-item' onClick={() => scrollToSection("contact_ref")}>Contact</div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Nav;