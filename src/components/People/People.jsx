import React, {useState, useEffect} from "react";
import css from "./People.module.scss";
import {motion} from "framer-motion";
import {footerVariants, staggerChildren} from "../../utils/motion";
import Slider from "react-slick";
import { comments, sliderSettings } from "../../utils/data";

const People = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [expandedItems, setExpandedItems] = useState(new Set());

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
        autoplay: false,
        // 滑动前的回调 - 收起所有展开的项目
        beforeChange: () => {
            if (isMobile) {
                setExpandedItems(new Set());
            }
        }
    };

    const handleItemToggle = (index) => {
        if (isMobile) {
            const newExpandedItems = new Set(expandedItems);
            if (newExpandedItems.has(index)) {
                newExpandedItems.delete(index);
            } else {
                newExpandedItems.clear(); // 只允许一个展开
                newExpandedItems.add(index);
            }
            setExpandedItems(newExpandedItems);
        }
    };

    const handleMouseEnter = (index) => {
        if (!isMobile) {
            const newExpandedItems = new Set(expandedItems);
            newExpandedItems.add(index);
            setExpandedItems(newExpandedItems);
        }
    };

    const handleMouseLeave = (index) => {
        if (!isMobile) {
            const newExpandedItems = new Set(expandedItems);
            newExpandedItems.delete(index);
            setExpandedItems(newExpandedItems);
        }
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
                    <span className="primaryText">Voices That Shaped My Journey</span>
                    <p style={{marginTop: "2rem"}}>
                        Words of warmth from those who've lit my path, lifted my spirit, and shared in my growth.
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
                                const isExpanded = expandedItems.has(i);
                                
                                return (
                                    <div 
                                        key={i}
                                        className={`flexCenter ${css.comment}`} 
                                        onMouseEnter={() => handleMouseEnter(i)} 
                                        onMouseLeave={() => handleMouseLeave(i)}
                                        onClick={() => handleItemToggle(i)}
                                    >
                                        <img src={comment.img} alt={comment.name} />
                                        
                                        <motion.div
                                            className={css.contentWrapper}
                                            initial={false}
                                            animate={{
                                                height: isExpanded ? 'auto' : '80px'
                                            }}
                                            transition={{
                                                duration: 0.6,
                                                ease: [0.25, 0.1, 0.25, 1] // 自定义贝塞尔曲线：开始慢、中间快、结束慢
                                            }}
                                            style={{
                                                overflow: 'hidden'
                                            }}
                                        >
                                            <motion.div
                                                initial={false}
                                                animate={{
                                                    opacity: isExpanded ? 1 : 1
                                                }}
                                                transition={{
                                                    duration: 0.4,
                                                    delay: isExpanded ? 0.2 : 0.2, // 展开时延迟显示，收起时立即隐藏
                                                    ease: "easeOut"
                                                }}
                                            >
                                                {isExpanded ? (
                                                    comment.comment.split('\n').map((para, index) => (
                                                        <motion.p 
                                                            key={index} 
                                                            className={css.paragraph}
                                                            initial={false}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0
                                                            }}
                                                            transition={{
                                                                duration: 0.4,
                                                                delay: 0.3 + index * 0.05, // 逐段出现
                                                                ease: "easeOut"
                                                            }}
                                                        >
                                                            {para.trim()}
                                                        </motion.p>
                                                    ))
                                                ) : (
                                                    <p>
                                                        {`${comment.comment.slice(0, 160)}${comment.comment.length > 160 ? '...' : ''}`}
                                                    </p>
                                                )}
                                            </motion.div>
                                        </motion.div>

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