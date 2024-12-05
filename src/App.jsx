import { useState } from 'react';
import { Header, Projects, AboutMe, TechStack, Recommendation, Footer } from './sections/index.js';
import { useEffect, useRef } from 'react';
import { ThemeContext } from './ThemeContext.js';

import Preloader from './components/Preloader.jsx';

import Lenis from '@studio-freight/lenis';

import gsap from 'gsap';

export default function App() {
	const [isLoading, setIsLoading] = useState(true); // State to control preloader visibility
	// Function to handle preloader completion and hide the preloader
	const handlePreloaderComplete = () => {
		setIsLoading(false); // Hide the preloader and show the main content
	};

	const lenisRef = useRef(null);
	const [lenis, setLenis] = useState(null);

	useEffect(() => {
		const lenisInstance = new Lenis({
			smooth: true,
			duration: 1.5,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			direction: 'vertical',
			smoothTouch: true,
			touchMultiplier: 1.5
		});

		lenisRef.current = lenisInstance; // Store in ref
		setLenis(lenisInstance); // Update state so Footer receives it

		// Animation loop for Lenis
		const raf = (time) => {
			lenisInstance.raf(time);
			requestAnimationFrame(raf);
		};
		requestAnimationFrame(raf);

		return () => {
			lenisInstance.destroy(); // Clean up Lenis on unmount
		};
	}, []);

	const [isDarkMode, isSetDarkMode] = useState(true);

	//toggle day and night mode
	const toggleMode = () => {
		isSetDarkMode((prev) => !prev);
	};

	// Check if dark mode preference is saved in localStorage
	useEffect(() => {
		const saveMode = localStorage.getItem('darkMode');
		if (saveMode) {
			isSetDarkMode(saveMode === 'true');
		}
	}, []);

	// Store the mode in localStorage when it changes
	useEffect(() => {
		localStorage.setItem('darkMode', isDarkMode);
	}, [isDarkMode]);

	// useEffect to apply GSAP transition for background color change
	useEffect(() => {
		const mainElement = document.querySelector('#main');
		gsap.to(mainElement, {
			duration: 0.5,
			backgroundColor: isDarkMode ? '#121212' : '#f6f6f6',
			color: isDarkMode ? '#a4a4a6' : '#232323',
			ease: 'power2.inOut'
		});
	}, [isDarkMode]);

	return (
		<>
			{isLoading && <Preloader onComplete={handlePreloaderComplete} />}
			<ThemeContext.Provider value={{ isDarkMode, toggleMode }}>
				<div id="main" className="min-h-screen font-interDisplay">
					<Header />
					<Projects />
					<AboutMe />
					<TechStack />
					<Recommendation />
					{lenis && <Footer lenis={lenis} />}
				</div>
			</ThemeContext.Provider>
		</>
	);
}
