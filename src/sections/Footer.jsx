import { useContext, useState, useEffect, useRef } from 'react';
import { ThemeContext } from '../ThemeContext';

// eslint-disable-next-line react/prop-types
export default function Contact({ lenis }) {
	const { isDarkMode } = useContext(ThemeContext);

	const [isFooterVisible, setIsFooterVisible] = useState(false);
	const footerRef = useRef(null);

	const currentDate = new Date();
	const formattedDate = `${currentDate.toLocaleString('default', {
		month: 'long'
	})} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

	const scrollToTop = () => {
		if (lenis) {
			// eslint-disable-next-line react/prop-types
			lenis.scrollTo(0, { duration: 1.5 }); // Scroll to the top of the page
		}
	};

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsFooterVisible(entry.isIntersecting);
			},
			{ threshold: 0.1 }
		);

		if (footerRef.current) {
			observer.observe(footerRef.current);
		}

		return () => {
			if (footerRef.current) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				observer.unobserve(footerRef.current);
			}
		};
	}, []);

	return (
		<div ref={footerRef} className="">
			<div
				className={`${
					isDarkMode
						? 'border border-gray-200  border-opacity-40 lg:mx-[28px] md:mx-[28px] mx-[16px]  '
						: 'border border-gray-100 border-opacity-20 lg:mx-[28px] md:mx-[28px] mx-[16px] '
				}`}
			></div>
			<div className="lg:px-7 lg:py-8 md:px-7 md:py-8 px-4 py-5">
				<div
					className={`${
						isDarkMode ? ' text-gray-100' : '  text-[#212121]'
					} flex text-base items-center justify-between transition-all duration-500`}
				>
					<div className="copy">&copy;Mdnkani</div>
					{/* <span className="opacity-30 lg:hidden md:hidden ">|</span> */}
					<p className="">{formattedDate}</p>
					{/* <span className="opacity-30 lg:hidden md:hidden">|</span> */}
					<div className="">
						<a target="_blank" href="https://github.com/madn6">
							<div
								className={`${
									isDarkMode ? ' text-gray-100' : ' text-[#212121]'
								}  text-base  flex items-center gap-1`}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									className="w-5 h-5 transition-all duration-500"
									fill={isDarkMode ? '#a4a4a4' : '#212121'}
								>
									<path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.82 11.82 0 0 0 9 11.5v-3h-1c-2.62 0-3.54-4-5-4 2.79 0 3.33 2 5 2a.89.89 0 0 0 1-1v-.35c-2.91-.82-5-3-5-5.65a5.26 5.26 0 0 1 1.57-3.66A3.16 3.16 0 0 1 6.5 4.5 5.26 5.26 0 0 1 8.88 6a9.14 9.14 0 0 1 6.24 0 5.26 5.26 0 0 1 2.38-1.5 3.16 3.16 0 0 1 .43 3.34 5.26 5.26 0 0 1 1.57 3.66c0 2.74-2.29 5-5.42 5.76a4.68 4.68 0 0 1 .42 2.24v4a11.82 11.82 0 0 0 9-11.5A11.5 11.5 0 0 0 12 .5Z"></path>
								</svg>
								<p>Github</p>
							</div>
						</a>
					</div>
					<button
						onClick={scrollToTop}
						className={`fixed p-3 rounded-full shadow-md bottom-[70px] right-8 lg:bottom-24 lg:right-12 md:bottom-24 md:right-12 ${
							isDarkMode
								? 'bg-gray-200 text-light-100 border-gray-300 border border-opacity-50'
								: 'bg-gray-200 text-white'
						} transition-all duration-500 ease-in-out ${
							isFooterVisible
								? 'opacity-100 transition-all duration-150 ease-in  pointer-events-auto'
								: 'opacity-0 transition-all duration-150 ease-in  pointer-events-none'
						}`}
						title="Go to top"
					>
						↑
					</button>
				</div>
			</div>
		</div>
	);
}
