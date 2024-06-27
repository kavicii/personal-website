import './Hero.css';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero () {
    const titleRef = useRef();
    useEffect(() => {
        gsap.fromTo(
            titleRef.current,
          {
            autoAlpha: 0,
            y: -20,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 2,
            scrub: 1,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              toggleActions: "play none restart reverse",
            },
          }
        );
        return () => {};
      }, []);

    return(
        <div className='hero-img-container'>
            <div className='hero-img'>
                <div className='text' ref={titleRef}>Hi, I'm Kin.</div>
            </div>
            
        </div>
    )
}

export default Hero;