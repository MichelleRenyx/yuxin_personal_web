import React from "react";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from "../../utils/motion";
import { BiPhone, BiPhoneCall, BiEnvelope, BiMap } from "react-icons/bi";

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
                    Let’s create something remarkable together.
                    </span>
                    <span className="secondaryText">"If you are interested in my profile and would like to discuss potential opportunities, please feel free to <a href="mailto: micheren1@outlook.com">leave me a message</a>. I am eager to connect and explore how I can contribute to your team.".</span>
                </div>    
                <div className={css.right}>
                    <div className={css.contactInfo}>
                        <span className="secondaryText">Contact Information</span>
                        
                        <div className={css.contactItem}>
                            <BiMap size={20} />
                            <p>Melbourne, VIC, Australia</p>
                        </div>

                        <div className={css.contactItem}>
                            <BiPhoneCall size={20} />
                            <p>+61 0459216814</p>
                        </div>

                        <div className={css.contactItem}>
                            <BiPhone size={20} />
                            <p>+86 18192812085</p>
                        </div>

                        <div className={css.contactItem}>
                            <BiEnvelope size={20} />
                            <p>
                                <a href="mailto:micheren1@outlook.com">
                                    micheren1@outlook.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
}
export default Footer;