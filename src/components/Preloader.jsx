import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// eslint-disable-next-line react/prop-types
const Preloader = ({ onComplete }) => {
	const timelineRef = useRef(null); // Store the GSAP timeline in a ref

	useEffect(() => {
		if (timelineRef.current) return; // Prevent re-running the animation if it has already run

		// Create a GSAP timeline
		const tl = gsap.timeline({
			onComplete: onComplete // Call onComplete when the entire timeline is done
		});

		// Text reveal with 3D effect and masking
		tl.fromTo(
			'.letter', // Target each letter
			{
				rotationX: 90, // Start each letter rotated in 3D space
				opacity: 0, // Initially invisible
				scale: 0, // Start letters at 0 scale
				transformOrigin: 'center' // Rotate around the center
			},
			{
				rotationX: 0, // Final rotation (normal position)
				opacity: 1, // Final opacity (fully visible)
				scale: 1, // Final scale (normal size)
				duration: 0.7, // Duration of each letter animation
				ease: 'power4.out', // Smooth easing for the animation
                stagger: 0.2, // Delay between each letter's animation
                delay:0.4,
			}
		)
			// Slide-up preloader smoothly after text animation
			.to('.preloader', {
				y: '-100%', // Slide-up to hide preloader
				duration: 1, // Duration of slide-up
				ease: 'power2.inOut' // Smooth transition
			});

		// Store the timeline reference to prevent running the animation again
		timelineRef.current = tl;
	}, [onComplete]); // Only run once when component mounts

	return (
		<div className="preloader fixed top-0 left-0 w-full h-full bg-[#121212] flex justify-center items-center z-50">
			<div className="text-4xl md:text-6xl lg:text-8xl font-Taruno font-bold text-light-100 flex space-x-2">
				{/* Wrap each letter in a span for animation */}
				{[...'Mathan'].map((letter, index) => (
					<span key={index} className="letter opacity-0">
						{letter}
					</span>
				))}
			</div>
		</div>
	);
};

export default Preloader;
