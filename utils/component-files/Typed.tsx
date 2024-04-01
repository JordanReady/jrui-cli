'use client';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

interface Props {
	strings?: string[];
	startDelay?: number;
	typeSpeed?: number;
	backSpeed?: number;
	backDelay?: number;
	loop?: boolean;
	className?: string;
}

export default function TypedComponent({
	strings = [
		'Full-Stack Developer',
		'Keyboard Warrior',
		'Software Engineer',
		'Coding Enthusiast',
		'Problem Solver'
	],
	startDelay = 1000,
	typeSpeed = 100,
	backSpeed = 50,
	backDelay = 500,
	loop = true,
	className
}: Props) {
	// Create Ref element.
	const el = useRef(null);

	useEffect(() => {
		const typed = new Typed(el.current, {
			// Strings to display
			strings,
			// Speed settings, try diffrent values untill you get good results
			startDelay: startDelay,
			typeSpeed: typeSpeed,
			backSpeed: backSpeed,
			backDelay: backDelay,
			loop: loop
		});

		// Destroying
		return () => {
			typed.destroy();
		};
	}, []);

	return <span className={className} ref={el}></span>;
}
