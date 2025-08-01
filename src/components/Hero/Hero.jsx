import React from "react";
import css from "./Hero.module.scss";
import {motion} from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";

const Hero = () => {
    return (
        <section className={`paddings ${css.wrapper}`}>
            <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.25}}

            className={`innerWidth ${css.container}`}>

                <div className={css.upperElements}>
                    <motion.span 
                    variants={fadeIn("right", "tween", 0.3, 1)}
                    className="primaryText">
                        Hi, <br/> I'm Yuxin.
                    </motion.span>
                    <motion.span 
                    variants={fadeIn("left", "tween", 0.3, 1)} 
                    className="secondaryText">
                        You've just landed in - <br/> My little corner of the Internet 🪐
                    </motion.span>
                </div>

                <motion.div 
                variants={fadeIn("up", "tween", 0.3, 1)}
                className={css.person}>
                    <motion.img 
                    variants={slideIn("up", "tween", 0.5, 1.3)}
                    src="./yuxin.png" alt="" />
                </motion.div>
                
                

                <div className={css.lowerElements}>
                    <motion.div 
                    variants={fadeIn("right", "tween", 0.3, 1)}
                    className={css.experience}>
                        {/* <div className="primaryText">0</div> */}
                        {/* <div className="secondaryText">
                            <div>Years</div>
                            <div>Experience</div>
                        </div> */}
                        <div className="secondaryText">
                            <div>Let's connect and discover more:</div>

                            <div className={css.buttonGroup}>
                                <a
                                    className={`${css.button} ${css.linkedIn}`}
                                    href="https://www.linkedin.com/in/yuxin-michelle-ren"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    My LinkedIn
                                </a>
                                <a
                                    className={`${css.button} ${css.cv}`}
                                    href="/CV.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    {...(window.innerWidth > 768 ? { download: "Yuxin_CV.pdf" } : {})}
                                >
                                    My CV
                                </a>
                            </div>
                            </div>
                    </motion.div>
                    <motion.div 
                    variants={fadeIn("left", "tween", 0.3, 1)}
                    className={css.certificate}>
                        <img src="./certificate1.svg" alt="" />
                        <span>Master of Software Engineering<br /><br /></span>

                        <span> @ The University of Melbourne </span><br />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;