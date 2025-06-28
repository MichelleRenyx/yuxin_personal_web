// Portfolio.jsx
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren } from "../../utils/motion";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "../../utils/data";

const Portfolio = () => {
    const [showAll, setShowAll] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleToggleShowAll = () => {
        setShowAll(!showAll);
    };

    const handleProjectClick = (project) => {
        // 先滚动到 Portfolio 部分
        const portfolioElement = document.getElementById('portfolio');
        if (portfolioElement) {
            portfolioElement.scrollIntoView({ 
                behavior: 'instant',
                block: 'start'
            });
        }
        
        // 稍微延迟显示弹窗
        setTimeout(() => {
            setSelectedProject(project);
        }, 100);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    // 滚动监听，自动关闭弹窗
    useEffect(() => {
        const handleScroll = () => {
            if (selectedProject) {
                handleCloseModal();
            }
        };

        if (selectedProject) {
            window.addEventListener('scroll', handleScroll);
            // 阻止背景滚动
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = 'unset';
        };
    }, [selectedProject]);

    const displayedProjects = showAll ? projectsData : projectsData.slice(0, 2);

    return (
        <>
            <motion.section 
                id="portfolio"
                variants={staggerChildren}
                initial="hidden"
                whileInView="show"
                viewport={{once: false, amount: 0.25}}
                className={`paddings ${css.wrapper}`} 
                style={{ scrollMarginTop: '160px' }}
            >
                
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
                        {displayedProjects.map((project, index) => (
                            <motion.img 
                                key={project.id}
                                variants={fadeIn("up", "tween", 0.5 + index * 0.1, 0.6)}
                                src={project.image} 
                                alt={project.title}
                                onClick={() => handleProjectClick(project)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={css.projectImage}
                                initial={index >= 2 ? { opacity: 0, y: 20 } : {}}
                                animate={index >= 2 ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.3, delay: (index - 2) * 0.1 }}
                            />
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* 使用Portal将弹窗渲染到body */}
            {selectedProject && createPortal(
                <AnimatePresence>
                    <motion.div
                        className={css.modalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={handleCloseModal}
                    >
                        <motion.div
                            className={css.modalContent}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* 头部 */}
                            <div className={css.modalHeader}>
                                <div className={css.modalTitle}>
                                    <h2>{selectedProject.title}</h2>
                                </div>
                                <button className={css.closeButton} onClick={handleCloseModal}>
                                    ×
                                </button>
                            </div>

                            <div className={css.modalBody}>
                                {/* 左侧：项目图片和概览 */}
                                <div className={css.modalLeft}>
                                    <div className={css.modalImage}>
                                        <img src={selectedProject.image} alt={selectedProject.title} />
                                    </div>
                                    <div className={css.overview}>
                                        <h3>Overview</h3>
                                        <p>{selectedProject.description}</p>
                                    </div>
                                </div>

                                {/* 右侧：技术栈和功能 */}
                                <div className={css.modalRight}>
                                    <div className={css.technologiesSection}>
                                        <h3>Tech Stacks</h3>
                                        <div className={css.technologiesGrid}>
                                            {selectedProject.technologies.map((tech) => (
                                                <span key={tech} className={css.technologyTag}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={css.featuresSection}>
                                        <h3>Key Features</h3>
                                        <ul className={css.featuresList}>
                                            {selectedProject.features.map((feature, index) => (
                                                <li key={index}>
                                                    <span className={css.bulletPoint}></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>,
                document.body // 直接渲染到body
            )}
        </>
    )
}

export default Portfolio;