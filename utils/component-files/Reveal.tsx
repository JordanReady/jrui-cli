'use client';
import React, { FC, ReactNode, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface RevealProps {
	direction?: 'up' | 'down' | 'left' | 'right';
	delay?: number;
	duration?: number;
	children: ReactNode;
	className?: string;
}

const Reveal: FC<RevealProps> = ({
	direction = 'up',
	delay = 0.2,
	duration = 0.5,
	children,
	className
}) => {
	const controls = useAnimation();
	const [ref, inView] = useInView({
		triggerOnce: true
	});

	useEffect(() => {
		if (inView) {
			controls.start({
				opacity: 1,
				y: 0,
				x: 0,
				transition: { duration: duration, delay }
			});
		}
	}, [controls, inView, delay]);

	// Set initial styles before the animation
	const initialStyles = {
		opacity: 0,
		y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
		x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0
	};

	return (
		<motion.div
			className={className}
			ref={ref}
			initial={initialStyles}
			animate={controls}
		>
			{children}
		</motion.div>
	);
};

export default Reveal;
