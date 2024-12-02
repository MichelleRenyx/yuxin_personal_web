import React from "react";
import css from "./Experties.module.scss";
import { projectExperience, WhatDoIHelp } from "../../utils/data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";

const Experties = () => {
    return (
        <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.25}}
    
        className={`paddings ${css.wrapper}`}>
            <a className="anchor" id="expertises"></a>
            <div className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>
                <div className={css.leftside}>
                    {
                        projectExperience.map((exp, i) => {
                            return(
                                <motion.div 
                                variants={fadeIn("right", "tween", (i+1)*0.2, 1)}
                                className={css.exp} key={i}>
                                    <div className="flexcenter" style={{background: exp.bg}}>
                                        <exp.icon size={25} color = "white"/>
                                    </div>

                                    <div>
                                        <span>{exp.name}</span>
                                        <span className="secondaryText">{exp.projects} Projects</span>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </div>

                <motion.div 
                variants={textVariant(0.5)}
                className={css.rightside}>
                    <span className="primaryText">What I Excel At? </span>
                    {
                        WhatDoIHelp.map((paragraph, i) => {
                            return <span className="secondaryText" key={i}>{paragraph}</span>
                        })
                    }

                    <div className={`flexCenter ${css.stats}`}>
                        <div className={`flexCenter ${css.stat}`}>
                            <span className="primaryText">666+</span>
                            <span className="secondaryText">第一个量化</span>
                        </div>
                        <div className={`flexCenter ${css.stat}`}>
                            <span className="primaryText">888+</span>
                            <span className="secondaryText">第二个量化</span>
                        </div>
                    </div> 
                </motion.div>
            
            </div>
        </motion.section>
    )
}

export default Experties;