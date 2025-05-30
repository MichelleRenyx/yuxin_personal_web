import React, { useState, useEffect } from "react";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren } from "../../utils/motion";
import { motion, AnimatePresence } from "framer-motion";

const Portfolio = () => {
    const [showAll, setShowAll] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleToggleShowAll = () => {
        setShowAll(!showAll);
    };

    const handleImageClick = (imageData) => {
        setSelectedImage(imageData);
    };

    const handleCloseFullscreen = () => {
        setSelectedImage(null);
    };

    // 滚动监听，自动关闭弹窗
    useEffect(() => {
        const handleScroll = () => {
            if (selectedImage) {
                handleCloseFullscreen();
            }
        };

        // 只在有弹窗时添加滚动监听
        if (selectedImage) {
            window.addEventListener('scroll', handleScroll);
        }

        // 清理函数
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [selectedImage]);

    return (
        <motion.section 
        id="portfolio"
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`paddings ${css.wrapper}`} 
        style={{ scrollMarginTop: '160px' }}>
            
            <div className={`innerWidth flexCenter ${css.container}`}>
                <div className={`flexCenter ${css.heading}`}>
                    <div>
                        <span className="primaryText">My Projects</span>
                        <p style={{marginTop: "10px"}}>The code-driven adventures in my professional odyssey.</p>
                    </div>
                    <span className="secondaryText" onClick={handleToggleShowAll}>
                        {showAll ? "Show Less" : "Explore More"}
                    </span>
                </div>

                <div className={`flexCenter ${css.showcase}`}>
                    <motion.img 
                        variants={fadeIn("up", "tween", 0.5, 0.6)}
                        src="./OrderDash_Demo.png" 
                        alt="OrderDash Demo"
                        onClick={() => handleImageClick({ src: "./OrderDash_Demo.png", title: "OrderDash Demo" })}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    />
                    <motion.img 
                        variants={fadeIn("up", "tween", 0.6, 0.6)}
                        src="./Intelligent Form File Processor.png" 
                        alt="Intelligent Form Processor"
                        onClick={() => handleImageClick({ src: "./Intelligent Form File Processor.png", title: "Intelligent Form Processor" })}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    />
                    
                    {/* Show All 时显示额外的图片 */}
                    {showAll && (
                        <>
                            <motion.img 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                src="./club-event_management.png" 
                                alt="Club Event Management"
                                onClick={() => handleImageClick({ src: "./club-event_management.png", title: "Club Event Management" })}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            />
                            <motion.img 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                src="./shared-whiteBoard.png" 
                                alt="Shared WhiteBoard"
                                onClick={() => handleImageClick({ src: "./shared-whiteBoard.png", title: "Shared WhiteBoard" })}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            />
                        </>
                    )}
                </div>
            </div>

            {/* 简洁的图片放大展示 */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className={css.imageOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={handleCloseFullscreen}
                    >
                        <motion.img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className={css.enlargedImage}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    )
}

export default Portfolio;