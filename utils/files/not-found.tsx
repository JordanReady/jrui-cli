import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Error from '@/imgs/404.png';
import Reveal from '@/app/demo/components/Reveal';

const NotFoundPage = () => {
	return (
		<Reveal className="center flex-col h-full mt-10">
			<Reveal
				delay={0.2}
				className="text-4xl text-primary font-bold text-center mb-4"
			>
				Oops!
			</Reveal>
			<Reveal
				delay={0.4}
				className="text-2xl font-semibold text-center mb-4"
			>
				It seems you're lost in cyberspace...
			</Reveal>
			<Reveal delay={0.6} className="text-lg text-center mb-4">
				<div className="btn-hover border-gradient px-4 py-2">
					<Link href="/">Take me home</Link>
				</div>
			</Reveal>
			<Reveal delay={0.8}>
				<Image width={500} src={Error} alt="404 error message" />
			</Reveal>
		</Reveal>
	);
};

export default NotFoundPage;
