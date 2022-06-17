import React from 'react';
import './Services.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from './resume.pdf';
import { motion } from 'framer-motion';

import Card from '../Card/Card';

const Services = () => {
    const transition = {duration: 1, type: 'spring'}
    return (
        <div className='services' id='services'>
            {/* left side */}
            <div className='awesome'>
                <span>My Awesome</span>
                <span>services</span>
                <spane>
                    Lorem isoum is sumpley dummy text of printing of printing Lorem
                    <br />
                    ispum is simpley dummy text of printing
                </spane>

                {/* <a href={Resume} download></a> */}

                <button className='button s-button'>Download</button>

                <button className='button s-button'>
                    Download CV
                </button>
                <div className='blur s-blurl' style={{ background: "#ABF1FF94" }}>

                </div>
            </div>

            {/* right side */}
            <div className='cards'>
                <motion.div 
                    whileInView={{left: '25rem'}}
                    initial={{left: '25%'}}
                    transition={transition}
                    style={{ left: '14rem' }} >
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Figma, Sketch, Photoshop, Adobe XD"}
                    />
                </motion.div>
                <motion.div 
                    initial={{left:"-11rem", top:"12rem"}}
                    whileInView={{left: "-4rem"}}
                    transition= {transition}
                    style={{ top: "12rem", left: "-4rem" }}>
                    <Card
                        emoji={Glasses}
                        heading={"Developer"}
                        detail={"Html, css, Javascript, React"}
                    />
                </motion.div>
                <motion.div 
                initial ={{top:"19rem", left:"25rem"}}
                whileInView={{left:"12rem"}}
                transition={{transition}}
                    style={{ top: "19rem", left: "12rem" }}
                    >
                    <Card
                        emoji={Humble}
                        heading={"UI/UX"}
                        detail={"Html, css, Javascript, React"}
                    />
                </motion.div>

                <div className='blur s-blur2' style={{background: "var(--purple)"}}>

                </div>
            </div>
        </div>
    )
}

export default Services