import React from "react";
import css from "./Hero.module.scss";
import {motion} from "framer-motion";
import { staggerContainer } from "../../utils/motion";

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
                    <span className="primaryText">
                        Hi, <br/> I'm Yuxin.
                    </span>
                    <span className="secondaryText">
                    一句话简介
                    </span>
                </div>

                <div className={css.person}>
                    <img src="./person111.png" alt="" style={{ width: '612px', height: '410px' }} />
                </div>
                
                <a className={css.linkedIn} href="https://www.linkedin.com/in/yuxin-michelle-ren">
                    LinkedIn Page
                </a>

                <div className={css.lowerElements}>
                    <div className={css.experience}>
                        <div className="primaryText">0</div>
                        <div className="secondaryText">
                            <div>Years</div>
                            <div>Experience</div>
                        </div>
                    </div>
                    <div className={css.certificate}>
                        <img src="./certificate.png" alt="" />
                        <span>Graduate Student in Software Engineering</span>
                        <span>The University of Melbourne</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;