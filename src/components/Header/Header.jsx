import React, {useRef, useState} from "react";
import css from "./Header.module.scss";
import {BiPhoneCall, BiEnvelope, BiPhone, BiMenuAltRight} from "react-icons/bi";
import {motion} from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const headerShadow = useHeaderShadow();
    const menuRef = useRef();
    useOutsideAlerter(
        {
            menuRef,
            setMenuOpened
        }
    );
    return (
        <motion.div 
        initial="hidden"
        whileInView="show"
        variants={headerVariants}
        viewport={{once: false, amount: 0.25}}
        className={`paddings ${css.wrapper}`}
        style = {{boxShadow: headerShadow}}
        >

            <div className={`flexCenter innerWidth ${css.container}`}>
                <div className={css.name}>
                    Yuxin Ren
                </div>

                <ul 

                ref={menuRef}

                className={`flexCenter ${css.menu}`}
                style={getMenuStyles(menuOpened)
                }>
                    <li><a href="#expertises">Professional Skills</a></li>
                    <li><a href="#work">Experience</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#people">Testimonials</a></li>
                    <li className={`flexCenter ${css.contact}`}>
                        <p><BiPhoneCall size={"30px"}/> +61 0459216814</p>
                        <p><BiPhone size={"30px"}/> +86 18192812085</p>
                        <a href="mailto:micheren1@outlook.com"> <BiEnvelope size={"30px"}/> micheren1@outlook.com </a>
                        {/* <p><BiEnvelope size={"30px"}/> micheren1@outlook.com</p> */}
                    </li>
                </ul>
                {/* Only for small or medium screens */}
                <div className={css.menuIcon}
                onClick={() => setMenuOpened((prev) => !prev)}
                >
                    <BiMenuAltRight size={30}/>
                </div>
            </div>
        </motion.div>
    )
}

export default Header;
