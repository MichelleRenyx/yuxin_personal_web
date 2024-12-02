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
                    <span className="secondaryText">My Inbox Awaits Your <a href="mailto: micheren1@outlook.com">SUMMON</a>.</span>
                </div>    
                <div className={css.right}>
                    <div className={css.info}>
                        <span className="secondaryText">联系地址</span>
                        <p>666 offer Street, Australia</p>
                    </div>

                    <div className={css.menu}>
                        <li>Services</li>
                        <li>Works</li>
                        <li>Notes</li>
                        <li>Experience</li>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
}
export default Footer;