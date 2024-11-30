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
                        一句话简介
                    </motion.span>
                </div>

                <motion.div 
                variants={fadeIn("up", "tween", 0.3, 1)}
                className={css.person}>
                    <motion.img 
                    variants={slideIn("up", "tween", 0.5, 1.3)}
                    src="./person111.png" alt="" style={{ width: '612px', height: '410px' }} />
                </motion.div>
                
                <a className={css.linkedIn} href="https://www.linkedin.com/in/yuxin-michelle-ren">
                    LinkedIn Page
                </a>

                <div className={css.lowerElements}>
                    <motion.div 
                    variants={fadeIn("right", "tween", 0.3, 1)}
                    className={css.experience}>
                        <div className="primaryText">0</div>
                        <div className="secondaryText">
                            <div>Years</div>
                            <div>Experience</div>
                        </div>
                    </motion.div>
                    <motion.div 
                    variants={fadeIn("left", "tween", 0.3, 1)}
                    className={css.certificate}>
                        <img src="./certificate.png" alt="" />
                        <span>Graduate Student in Software Engineering</span>
                        <span>The University of Melbourne</span>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;