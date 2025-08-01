import React, {useRef, useState, useEffect} from "react";
import css from "./Header.module.scss";
import {BiPhoneCall, BiEnvelope, BiLink, BiMenuAltRight, BiCloudDownload} from "react-icons/bi";
import {motion} from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const headerShadow = useHeaderShadow();
    const menuRef = useRef(null);

    // 检测屏幕尺寸变化
    useEffect(() => {
        const checkScreenSize = () => {
            // $md = 768px
            const isMobileSize = window.innerWidth <= 768;
            setIsMobile(isMobileSize);
            
            // 如果切换到桌面端，自动关闭菜单
            if (!isMobileSize && menuOpened) {
                setMenuOpened(false);
            }
        };

        // 初始检查
        checkScreenSize();

        // 监听窗口大小变化
        window.addEventListener('resize', checkScreenSize);
        
        // 清理事件监听器
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, [menuOpened]);

    // 只在移动端使用外部点击监听
    useOutsideAlerter(
        isMobile ? {
            menuRef,
            setMenuOpened,
        } : { menuRef: { current: null }, setMenuOpened: () => {} }
    );

    const handleMenuToggle = () => {
        setMenuOpened((prev) => !prev);
    };

    return (
        <motion.div 
            variants={headerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.25}}
            style={{boxShadow: headerShadow}}
            className={`bg-primary ${css.wrapper}`}
        >
            {/* 使用自定义的 paddings 和宽度控制 */}
            <div className={css.fullWidthContainer}>
                <div className={`innerWidth ${css.container}`}>
                    <div className={css.name}>
                        Yuxin Ren
                    </div>

                    <ul 
                        ref={menuRef}
                        style={isMobile ? getMenuStyles(menuOpened) : {}}
                        className={`${css.menu} ${menuOpened && isMobile ? css.menuOpen : ''}`}
                    >
                        <li>
                            <a href="#expertises" onClick={() => isMobile && setMenuOpened(false)}>
                                Professional Skills
                            </a>
                        </li>
                        <li>
                            <a href="#workexps" onClick={() => isMobile && setMenuOpened(false)}>
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href="#portfolio" onClick={() => isMobile && setMenuOpened(false)}>
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#people" onClick={() => isMobile && setMenuOpened(false)}>
                                Stories & Support
                            </a>
                        </li>
                        <li className={css.contact}>
                            <p><BiPhoneCall size={"30px"}/> +61 0459216814</p>
                            <p><BiEnvelope size={"30px"}/> 
                                <a href="mailto:micheren1@outlook.com"> 
                                    micheren1@outlook.com 
                                </a>
                            </p>
                            <p>
                                <BiLink size={"30px"}/> 
                                <a 
                                    href="https://www.linkedin.com/in/yuxin-michelle-ren" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                > 
                                    LinkedIn
                                </a>
                            </p>
                            <p>
                                <BiCloudDownload size={"30px"}/> 
                                <a 
                                    href="/CV.pdf" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    download="Yuxin_CV.pdf"
                                > 
                                    My CV
                                </a>
                            </p>
                        </li>
                    </ul>

                    {/* 菜单图标 - 只在移动端显示 */}
                    <div 
                        className={css.menuIcon}
                        onClick={handleMenuToggle}
                    >
                        <BiMenuAltRight size={30}/>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Header;