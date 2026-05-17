import React, { useState, useEffect } from "react";
import css from "./Hero.module.scss";
import {motion} from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";

const Hero = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const onResize = () => setIsDesktop(window.innerWidth > 768);
        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const CERTIFICATES = [
        { text: '💻 Full-Stack Software Developer', delay: 0.5 },
        { text: '📚 Self-driven Learner', delay: 0.7 },
        { text: '🤝 Trustworthy Teammate', delay: 0.9 },
        { text: '🏋️ Part-time Gym Buddy', delay: 1.1 },
        { text: '🌱 Balcony Gardener', delay: 1.3 },
    ];

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
                        Hi, <br/> I'm Michelle.
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
                            variants={slideIn("up", "tween", 0.5, 1)}
                            src="./yuxin_2.png" alt="Yuxin Michelle Ren" />
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
                                    {...(isDesktop ? { download: "Yuxin_CV.pdf" } : {})}
                                >
                                    My CV
                                </a>
                            </div>
                            </div>
                    </motion.div>
                    <motion.div 
                    variants={fadeIn("left", "tween", 0.3, 1)}
                    className={css.certificate}>
                        {CERTIFICATES.map(({text, delay}, idx) => (
                            <motion.span
                                key={idx}
                                className={css.certificateText}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay, duration: 0.6 }}
                                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            >
                                {text}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;