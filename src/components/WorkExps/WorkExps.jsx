import React, { useState } from "react";
import css from "./WorkExps.module.scss";
import { motion } from "framer-motion";
import {fadeIn, staggerChildren, textVariant2, zoomIn} from "../../utils/motion";
import { workExp } from "../../utils/data";

const WorkExps = () => {
    const [awardsExpanded, setAwardsExpanded] = useState(
    Array(workExp.length).fill(false)
    );

    const toggleAwards = (index) => {
    const newState = [...awardsExpanded];
    newState[index] = !newState[index];
    setAwardsExpanded(newState);
    };
    return(
        <motion.section 
        id="workexps"
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`paddings ${css.wrapper}`}
        style={{ 
            scrollMarginTop: '160px',
            position: 'relative',
            zIndex: 1
        }}>

            <div className={`flexCenter innerWidth ${css.container}`}>
                <span className="primaryText">Work Experience</span>
                <div className={`flexCenter ${css.experience}`}>
                    {
                        workExp.map((exp, i) => {
                            return (
                                <motion.div className={`flexCenter ${css.exp}`} 
                                variants={textVariant2}
                                key={i}>
                                <div className={css.post}>
                                    <h1>
                                        <a
                                        href={exp.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={css.companyLink}
                                        >
                                        {exp.place}
                                        </a>
                                    </h1>
                                    <p>{exp.tenure}</p>
                                </div>

                                <div className={css.role}>
                                    <h1>{exp.role}</h1>
                                    <p>{exp.detail}</p>
                                    <div className={css.techStack}>
                                        <p>{exp.techStack}</p>
                                    </div>
                                    {/* <div className={css.awardsText}>
                                        {exp.awards.split('\n').map((item, index) => (
                                        <p key={index}>{item}</p>
                                        ))}
                                    </div> */}
                                    <div className={css.awardsText}>
                                        {awardsExpanded[i]
                                        ? exp.awards.split("\n").map((item, index) => <p key={index}>{item}</p>)
                                        : <p>{exp.awards.split("\n")[0]}...</p>
                                        }
                                    </div>
                                    <button
                                        className={css.viewDetailBtn}
                                        onClick={() => toggleAwards(i)}
                                    >
                                        {awardsExpanded[i] ? "Hide Details" : "View Details"}
                                    </button>
                                </div>
                            </motion.div>
                            ) 
                        })
                    }
                    
                    <motion.div variants={zoomIn(1,1)} className={css.progressBar}>
                        <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className={css.line}></motion.div>
                        <div><div className={css.circle} style={{background: "#286F6C"}}></div></div>
                        <div><div className={css.circle} style={{background: "#F2704E"}}></div></div>
                        <div><div className={css.circle} style={{background: "#EEC048"}}></div></div>
                    </motion.div>

                </div>
            </div>
        </motion.section>
    )
}

export default WorkExps;