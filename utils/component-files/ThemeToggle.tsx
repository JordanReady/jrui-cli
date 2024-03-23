'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<button onClick={toggleTheme}>
			{theme === 'light' ? (
				<Sun
					className=" h-11 w-11 p-[.25rem] border-gradient card-hover"
					strokeWidth={1}
				/>
			) : (
				<Moon
					className="h-11 w-11 p-[.25rem] border-gradient card-hover"
					strokeWidth={1}
				/>
			)}
			<span className="sr-only">Toggle theme</span>
		</button>
	);
}
