import { useLocation, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useLayoutEffect } from 'react';

//pages
import Home from '../../pages/home/Home'
import Sobre from '../../pages/sobre/Sobre'
import Portfolio from '../../pages/portfolio/Portfolio'

const routeOrder = ['/', '/sobre', '/portfolio'];

const variants = {
    enter: (direction) => ({
        y: direction > 0 ? '100%' : '-100%',
        opacity: 0,
    }),
    center: {
        y: 0,
        opacity: 1,
    },
    exit: (direction) => ({
        y: direction > 0 ? '-100%' : '100%',
        opacity: 0,
    }),
};

export default function AnimatedRoutes() {
    const location = useLocation();
    const prevPathRef = useRef(location.pathname);

    const currentIndex = routeOrder.indexOf(location.pathname);
    const prevIndex = routeOrder.indexOf(prevPathRef.current);
    const direction = currentIndex >= prevIndex ? 1 : -1;

  // só grava o novo path DEPOIS do commit, uma única vez — nunca durante o render
    useLayoutEffect(() => {
    prevPathRef.current = location.pathname;
    }, [location.pathname]);

    return (
        <AnimatePresence mode="wait" custom={direction} initial={false}>
        <motion.div
            key={location.pathname}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            style={{ position: 'absolute', width: '100%' }}
        >
            <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </motion.div>
        </AnimatePresence>
    );    
}