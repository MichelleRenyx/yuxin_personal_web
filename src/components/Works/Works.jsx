import React from "react";
import css from "./Works.module.scss";
import { motion } from "framer-motion";
import {fadeIn, staggerChildren, textVariant2, zoomIn} from "../../utils/motion";
import { works } from "../../utils/data";

const Works = () => {
    return(
        <motion.section 
        id="work"
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`paddings ${css.wrapper}`} 
        style={{ scrollMarginTop: '160px' }}>

            <div className={`flexCenter innerWidth ${css.container}`}>
                <span className="primaryText">Extracurricular Activities</span>
                <div className={`flexCenter ${css.experience}`}>
                    {
                        works.map((exp, i) => {
                            return (
                                <motion.div className={`flexCenter ${css.exp}`} 
                                variants={textVariant2}
                                key={i}>
                                <div className={css.post}>
                                    <h1>{exp.place}</h1>
                                    <p>{exp.tenure}</p>
                                </div>
                                <div className={css.role}>
                                    <h1>{exp.role}</h1>
                                    <p>{exp.detail}</p>
                                    <p>{exp.awards}</p>
                                </div>
                            </motion.div>
                            ) 
                        })
                    }
                    
                    <motion.div variants = {zoomIn(1,1)} className={css.progressBar}>
                        <motion.div variants = {fadeIn("down", "tween", 2, 1.5)} className={css.line}></motion.div>
                        <div><div className={css.circle} style={{background: "#286F6C"}}></div></div>
                        <div><div className={css.circle} style={{background: "#F2704E"}}></div></div>
                        <div><div className={css.circle} style={{background: "#EEC048"}}></div></div>
                    </motion.div>

                </div>
            </div>
        </motion.section>
    )
}

export default Works;