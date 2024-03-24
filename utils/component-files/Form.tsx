'use client';
import React, { useState } from 'react';
import Jrui from '@/imgs/JRuiLogo.png';
import Image from 'next/image';
import Reveal from '@/components/Reveal';

const Form = () => {
	// State to manage form input values
	const [ideaName, setIdeaName] = useState('');
	const [ideaDescription, setIdeaDescription] = useState('');
	const [submitted, setSubmitted] = useState(false);

	// Function to handle form submission
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Your form logic here
		setSubmitted(true); // Temporary logic to simulate submission
	};

	return (
		<Reveal className="center mt-10">
			<div className="w-max flex">
				<Reveal className="center">
					<Image
						src={Jrui}
						width={300}
						height={300}
						alt="It's Jrui the mascot!!"
						className="hidden md:flex"
						priority={true}
					/>
				</Reveal>

				{/* Conditional rendering based on submission status */}
				<Reveal>
					{submitted ? ( // If idea has been submitted
						// Reveal animation for thank you message
						<Reveal className="md:w-[512px] mx-auto p-4 md:pr-14 ">
							<h1 className="text-primary mb-4 text-3xl font-semibold">
								Thank you!
							</h1>
							<p>
								Your idea has been submitted. I will look into
								it as soon as possible.
							</p>
						</Reveal>
					) : (
						// If idea has not been submitted
						// Form for submitting ideas
						<form
							className="md:w-[512px] mx-auto p-4"
							onSubmit={handleSubmit}
						>
							<h1 className="text-primary mb-4 text-3xl font-semibold">
								Share your Ideas!
							</h1>
							{/* Input field for idea name */}
							<div className="mb-4">
								<label
									htmlFor="ideaName"
									className="block font-medium"
								>
									What is your idea about?
								</label>
								<input
									type="text"
									id="ideaName"
									value={ideaName}
									onChange={e => setIdeaName(e.target.value)}
									required
									className="mt-1 p-2 w-full border "
									placeholder="Component, Section, Feature, Template"
								/>
							</div>

							{/* Textarea for idea description */}
							<div className="mb-4">
								<label
									htmlFor="ideaDescription"
									className="block font-medium"
								>
									Give a detailed description:
								</label>
								<textarea
									id="ideaDescription"
									value={ideaDescription}
									onChange={e =>
										setIdeaDescription(e.target.value)
									}
									required
									className="mt-1 p-2 w-full border "
									rows={4}
									placeholder="Let's hear this amazing idea!"
								/>
							</div>

							{/* Submit button */}
							<button
								type="submit"
								className="w-full px-4 py-2 border border-gradient btn-hover"
							>
								Submit Idea
							</button>
						</form>
					)}
				</Reveal>
			</div>
		</Reveal>
	);
};

export default Form;
