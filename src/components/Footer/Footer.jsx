import React from "react";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from "../../utils/motion";

const Footer = () => {
    return (
        <motion.section 
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`paddings ${css.wrapper}`}>
            <motion.div 
            variants={footerVariants}
            className={`innerWidth yPaddings flexCenter ${css.container}`}>
                <div className={css.left}>
                    <span className="primaryText">
                    Offer me a chance,<br/>I'll prove my worth.
                    </span>
                    <span className="secondaryText">"If you are interested in my profile and would like to discuss potential opportunities, please feel free to <a href="mailto: micheren1@outlook.com">leave me a message</a>. I am eager to connect and explore how I can contribute to your team.".</span>
                </div>    
                {/* <div className={css.right}>
                    <div className={css.info}>
                        <span className="secondaryText">Contact Address</span>
                        <p>Melbourne, VIC</p>
                    </div>

                    <div className={css.menu}>
                        <li>Services</li>
                        <li>Works</li>
                        <li>Notes</li>
                        <li>Experience</li>
                    </div>
                </div> */}
            </motion.div>
        </motion.section>
    );
}
export default Footer;