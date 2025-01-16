import React, { useState } from "react";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren } from "../../utils/motion";
import { motion } from "framer-motion";

const Portfolio = () => {
    const [showAll, setShowAll] = useState(false);

    const handleToggleShowAll = () => {
        setShowAll(!showAll);
    };
    return (
        <motion.section 
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`paddings ${css.wrapper}`}>

            <a className="anchor" id="portfolio"></a>
            
            <div className={`innerWidth flexCenter ${css.container}`}>
                <div className={`flexCenter ${css.heading}`}>
                    <div>
                        <span className="primaryText">My Projects</span>
                        <p style={{marginTop: "10px"}}>The code-driven adventures in my professional odyssey.</p>
                    </div>
                    <span className="secondaryText"  onClick={handleToggleShowAll}>Explore More</span>
                </div>

                <div className={`flexCenter ${css.showcase}`}>
                    <motion.img 
                    variants={fadeIn("up", "tween", 0.5, 0.6)}
                    src="./OrderDash_Demo.png" 
                    alt="project"
                    />
                    <motion.img 
                    variants={fadeIn("up", "tween", 0.7, 0.6)}
                    src="./club-event_management.png" 
                    alt="project"
                    />
                    {showAll && (
                        <motion.img 
                            // variants={fadeIn("up", "tween", 0.9, 0.6)}
                            src="./shared-whiteBoard.png" 
                            alt="project"
                        />
                    )}
                </div>
            </div>
        </motion.section>
    )
}

export default Portfolio;
