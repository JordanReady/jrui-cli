'use client';
import React, { ReactNode, useState } from 'react';
import Reveal from './Reveal';

interface TooltipProps {
	tip: string;
	width?: 'max-content' | number;
	offset?: '50%' | number;
	animationDirection?: 'up' | 'down' | 'left' | 'right';
	delayIn?: number;
	delayOut?: number;
	animationDuration?: number;
	className?: string;
	children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
	tip,
	className,
	width = 'max-content',
	offset = '50%',
	animationDirection = 'up',
	animationDuration = 0.2,
	delayIn = 200,
	delayOut = 200,
	children
}) => {
	const [isHovered, setHovered] = useState(false);

	return (
		<div
			className="relative z-[999] inline-block"
			onMouseEnter={() => setTimeout(() => setHovered(true), delayIn)}
			onMouseLeave={() => setTimeout(() => setHovered(false), delayOut)}
		>
			{children}
			{isHovered && (
				<Reveal
					direction={animationDirection}
					duration={animationDuration}
				>
					<div
						className={` ${className} mt-1 absolute top-full transform -translate-x-1/2 bg-white border border-gradient z-[999] left-[50%]`}
						style={{
							width: width + 'rem',
							left: `calc(50% + ${offset}rem)`
						}}
					>
						<p className="p-1 text-[14px] text-center m-0">{tip}</p>
					</div>
				</Reveal>
			)}
		</div>
	);
};

export default Tooltip;
