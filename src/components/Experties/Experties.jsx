import React, {useState} from "react";
import css from "./Experties.module.scss";
import { projectExperience, WhatDoIHelp, boldWords } from "../../utils/data";
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
                        // WhatDoIHelp.map((paragraph, i) => {
                        //     return <span className="smText" key={i}>{paragraph}</span>
                        // })
                        WhatDoIHelp.map((paragraph, i) => {
                            const regex = new RegExp(`(${boldWords.join('|')})`, 'gi');
                            const parts = paragraph.split(regex);
            
                            return <span className="smText" key={i}>
                                {parts.map((part, index) => 
                                    boldWords.some(word => new RegExp(word, 'i').test(part))
                                    ? <strong key={index}>{part}</strong>
                                    : part
                                )}
                            </span>
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
                            <img src="./java.svg" alt="java-icon" className={css.techIcon} />
                            <img src="./javascript.svg" alt="js-icon" className={css.techIcon} />
                            <img src="./typescript.svg" alt="typescript-icon" className={css.techIcon} />
                            <img src="./python.svg" alt="python-icon" className={css.techIcon} />
                            <img src="./django.svg" alt="django-icon" className={css.techIcon} />
                            <img src="./react.svg" alt="react-icon" className={css.techIcon} />
                            <img src="./mysql.svg" alt="mysql-icon" className={css.techIcon} />
                            <img src="./postgresql.svg" alt="postgresql-icon" className={css.techIcon} />
                            <img src="./mongodb.svg" alt="mongoDB-icon" className={css.techIcon} />
                            <img src="./redis.svg" alt="redis-icon" className={css.techIcon} />
                            <img src="./git.svg" alt="git-icon" className={css.techIcon} />
                            <img src="./github.svg" alt="github-icon" className={css.techIcon} />
                            <img src="./springboot.svg" alt="springboot-icon" className={css.techIcon} />
                            <img src="./maven.svg" alt="maven-icon" className={css.techIcon} />
                            <img src="./docker.svg" alt="docker-icon" className={css.techIcon} />
                            <img src="./nginx.svg" alt="nginx-icon" className={css.techIcon} />
                            <img src="./aws.svg" alt="aws-icon" className={css.techIcon} />
                            <img src="./html.svg" alt="html-icon" className={css.techIcon} />
                            <img src="./css.svg" alt="css-icon" className={css.techIcon} />
                            <img src="./tailwind.svg" alt="tailwind-icon" className={css.techIcon} />
                            <img src="./vite.svg" alt="vite-icon" className={css.techIcon} />
                            <img src="./auth0.svg" alt="auth0-icon" className={css.techIcon} />
                            <img src="./stripe.svg" alt="stripe-icon" className={css.techIcon} />
                            <img src="./swagger.svg" alt="swagger-icon" className={css.techIcon} />

                        </div>
                    
                    </div> 
                </motion.div>
            
            </div>
        </motion.section>
    )
}

export default Experties;