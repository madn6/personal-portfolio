import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export default function Hero() {
	const { isDarkMode } = useContext(ThemeContext);

	return (
		<div className="lg:px-7 lg:py-8 md:px-7 md:py-8 px-4 py-5 flex flex-col gap-6 ">
			<div className="description  font-normal lg:max-w-[60vw] md:max-w-[70vw] max-w-[100vw] lg:text-xl  md:text-xl text-lg">
				I create fast and user-friendly web apps. With years of full-stack experience, I build
				scalable and high-performance solutions.
			</div>
			<div className="buttons flex items-center gap-4 text-base ">
				<a className="" href="mailto:msoffl0404@gmail.com">
					<button
						className={`${
							isDarkMode
								? ' bg-gray-200 border-gray-300 border text-light-100 border-opacity-50'
								: 'bg-[#ebebeb]  border border-gray-100 text-[#212121] border-opacity-30'
						} flex items-center gap-1 opacity-100 hover:opacity-75  px-3 py-2 rounded-lg transition-all duration-500 `}
					>
						<svg
							width="20"
							height="20"
							viewBox="0 0 16 17"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2.66683 3.16675H13.3335C14.0668 3.16675 14.6668 3.76675 14.6668 4.50008V12.5001C14.6668 13.2334 14.0668 13.8334 13.3335 13.8334H2.66683C1.9335 13.8334 1.3335 13.2334 1.3335 12.5001V4.50008C1.3335 3.76675 1.9335 3.16675 2.66683 3.16675Z"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M14.6668 4.5L8.00016 9.16667L1.3335 4.5"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						Email
					</button>
				</a>
				<a target='_blank' href="https://github.com/madn6">
					<button
						className={`${
							isDarkMode
								? ' border-gray-300 border  text-light-100 border-opacity-50'
								: 'border border-gray-100 text-[#212121] border-opacity-30'
						} flex items-center opacity-100 hover:opacity-75 gap-1 px-3 py-2 rounded-lg transition-all duration-500 `}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							className="w-5 h-5 transition-all duration-500"
							fill={isDarkMode ? '#f6f6f6' : '#212121'}
						>
							<path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.82 11.82 0 0 0 9 11.5v-3h-1c-2.62 0-3.54-4-5-4 2.79 0 3.33 2 5 2a.89.89 0 0 0 1-1v-.35c-2.91-.82-5-3-5-5.65a5.26 5.26 0 0 1 1.57-3.66A3.16 3.16 0 0 1 6.5 4.5 5.26 5.26 0 0 1 8.88 6a9.14 9.14 0 0 1 6.24 0 5.26 5.26 0 0 1 2.38-1.5 3.16 3.16 0 0 1 .43 3.34 5.26 5.26 0 0 1 1.57 3.66c0 2.74-2.29 5-5.42 5.76a4.68 4.68 0 0 1 .42 2.24v4a11.82 11.82 0 0 0 9-11.5A11.5 11.5 0 0 0 12 .5Z"></path>
						</svg>
						Github
					</button>
				</a>
			</div>
		</div>
	);
}
