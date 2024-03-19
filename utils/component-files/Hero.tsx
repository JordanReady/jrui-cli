import React from 'react';
import Reveal from './Reveal';
import HeroImg from '@/imgs/JRuiLogo.png';
import Image from 'next/image';

const Hero = () => {
	return (
		<div className="container h-[80dvh] w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-center">
			<div className="text-center md:text-left">
				<Reveal direction="up">
					<h1 className=" text-6xl sm:text-9xl font-bold mb-4">
						JR
						<span className="bg-black text-primary font-normal">
							ui
						</span>
					</h1>
				</Reveal>
				<Reveal direction="left" delay={0.6}>
					<p className="text-sm md:text-base lg:text-lg mb-4">
						Introducing Jrui, the lovable mascot of our component
						library! With a penchant for mischief, Jrui keeps us on
						our toes, from turning CSS into spaghetti code to
						causing bugs that only appear on Fridays. But amidst the
						chaos, Jrui brings humor and charm to our coding
						adventures. So when you need a laugh or a reminder that
						coding is never dull, just look to Jrui!
					</p>
				</Reveal>

				<div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
					<Reveal delay={0.8}>
						<button className="border-gradient btn-hover py-2 px-4 ">
							Ooo ooo click me!
						</button>
					</Reveal>
					<Reveal delay={0.8}>
						<button className="border-gradient btn-hover py-2 px-4 ">
							No click me!
						</button>
					</Reveal>
				</div>
			</div>
			<div>
				<Reveal className="flex justify-center" duration={1} delay={0}>
					<Image
						placeholder="blur"
						objectFit="fill"
						priority
						className="w-[300px] md:w-[420px]"
						src={HeroImg}
						alt="Jordan Ready AI created animated logo"
					/>
				</Reveal>
			</div>
		</div>
	);
};

export default Hero;
