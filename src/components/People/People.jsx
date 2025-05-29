import React, {useState, useEffect} from "react";
import css from "./People.module.scss";
import {motion} from "framer-motion";
import {footerVariants, staggerChildren} from "../../utils/motion";
import Slider from "react-slick";
import { comments, sliderSettings } from "../../utils/data";

const People = () => {
    const [isMobile, setIsMobile] = useState(false);

    // 检测是否为移动设备
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    // 为移动端优化的slider设置
    const mobileSliderSettings = {
        ...sliderSettings,
        arrows: true,
        dots: true,
        centerMode: false,
        variableWidth: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false
    };

    return(
        <motion.section 
            id="people"
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amount: 0.25}}
            className={`paddings ${css.wrapper}`}
            style={{ scrollMarginTop: '160px' }}
        >
            <motion.div 
                variants={footerVariants}
                className={`yPaddings innerWidth ${css.container}`}
            >
                <div className={`flexCenter ${css.heading}`}>
                    <span className="primaryText">My Supporters Say</span>
                    <p style={{marginTop: "2rem"}}>
                        Insights and endorsements from colleagues, friends, and mentors.
                    </p>
                </div>

                {/* carousel */}
                <div className={`yPaddings ${css.comments}`}>
                    <Slider 
                        {...(isMobile ? mobileSliderSettings : sliderSettings)} 
                        className={css.slider}
                    >
                        {
                            comments.map((comment, i) => {
                                // 移动端默认显示完整内容，桌面端保持hover效果
                                const [showFull, setShowFull] = useState(isMobile);
                                
                                return (
                                    <div 
                                        key={i}
                                        className={`flexCenter ${css.comment}`} 
                                        onMouseEnter={() => !isMobile && setShowFull(true)} 
                                        onMouseLeave={() => !isMobile && setShowFull(false)}
                                        onClick={() => isMobile && setShowFull(!showFull)}
                                    >
                                        <img src={comment.img} alt={comment.name} />
                                        
                                        {showFull ? (
                                            comment.comment.split('\n').map((para, index) => (
                                                <p key={index} className={css.paragraph}>
                                                    {para.trim()}
                                                </p>
                                            ))
                                        ) : (
                                            <p>
                                                {`${comment.comment.slice(0, 160)}${comment.comment.length > 160 ? '...' : ''}`}
                                            </p>
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