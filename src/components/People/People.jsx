import React, {useState} from "react";
import css from "./People.module.scss";
import {motion} from "framer-motion";
import {footerVariants, staggerChildren} from "../../utils/motion";
import Slider from "react-slick";
import { comments, sliderSettings } from "../../utils/data";

const People = () => {
    return(
        <motion.section 
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`paddings ${css.wrapper}`}>

        <a className="anchor" id="people"></a>
        
        <motion.div 
        variants={footerVariants}
        className={`yPaddings innerWidth ${css.container}`}>
            <div className={`flexCenter ${css.heading}`}>
                <span className="primaryText">My Supporters Say</span>
                <p style={{marginTop: "2rem"}}>Insights and endorsements from colleagues, friends, and mentors.</p>
                {/* <p>小标题第二行</p> */}
            </div>

            {/* carousal */}
            <div className={`yPaddings ${css.comments}`}>
                <Slider {...sliderSettings} className={css.slider}>
                    {
                        comments.map((comment, i) => {
                            const [showFull, setShowFull] = useState(false);
                            return (
                                <div className={`flexCenter ${css.comment}`} 
                                onMouseEnter={() => setShowFull(true)} 
                                onMouseLeave={() => setShowFull(false)}
                                >
                                    <img src={comment.img} alt="" />
                                    {showFull ? (
                                        comment.comment.split('\n').map((para, index) => (
                                            <p key={index} className={css.paragraph}>{para.trim()}</p>
                                        ))
                                    ) : (
                                        <p>{`${comment.comment.slice(0, 160)}${comment.comment.length > 160 ? '...' : ''}`}</p>
                                    )}

                                    <div className={css.line}></div>

                                    <div className={css.bio}>
                                        <span>{comment.name}</span>
                                        <span>{comment.post}</span>
                                    </div>

                                </div>
                            );
                        })
                    }
                </Slider>
            </div>
        </motion.div>
    </motion.section>
    );
}

export default People;