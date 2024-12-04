import React, {useState} from "react";
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
                            const [currentText, setCurrentText] = useState(exp.originText);
                            return(
                                <motion.div 
                                variants={fadeIn("right", "tween", (i+1)*0.2, 1)}
                                className={css.exp} key={i}
                                onMouseEnter={() => setCurrentText(exp.detailedText)} // 鼠标悬停时更改文字
                                onMouseLeave={() => setCurrentText(exp.originText)} // 鼠标离开时恢复原文字
                                >
                                    <div className="flexcenter" style={{background: exp.bg}}>
                                        <exp.icon size={25} color = "white"/>
                                    </div>

                                    <div>
                                        <span>{exp.name}</span>
                                        <span className="secondaryText">{currentText} </span>
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
                            return <span className="smText" key={i}>{paragraph}</span>
                        })
                    }

                    <div className={`flexCenter ${css.stats}`}>
                        {/* <div className={`flexCenter ${css.stat}`}>
                            <span className="primaryText">666+</span>
                            <span className="secondaryText">第一个量化</span>
                        </div>
                        <div className={`flexCenter ${css.stat}`}>
                            <span className="primaryText">888+</span>
                            <span className="secondaryText">第二个量化</span>
                        </div> */}
                        <div className={`flexCenter ${css.techStack}`}>
                            <img src="./java.png" alt="java-icon" className={css.techIcon} />
                            <img src="./python.png" alt="python-icon" className={css.techIcon} />
                            <img src="./react.png" alt="react-icon" className={css.techIcon} />
                            <img src="./mysql.png" alt="mysql-icon" className={css.techIcon} />
                            <img src="./postgresql.png" alt="postgresql-icon" className={css.techIcon} />
                            <img src="./git.png" alt="git-icon" className={css.techIcon} />
                            <img src="./github.png" alt="github-icon" className={css.techIcon} />
                            <img src="./springboot.png" alt="springboot-icon" className={css.techIcon} />
                            <img src="./maven.png" alt="maven-icon" className={css.techIcon} />
                            <img src="./docker.png" alt="docker-icon" className={css.techIcon} />
                        </div>
                    
                    </div> 
                </motion.div>
            
            </div>
        </motion.section>
    )
}

export default Experties;