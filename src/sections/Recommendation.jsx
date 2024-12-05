import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export default function Recommendation() {
	const { isDarkMode } = useContext(ThemeContext);

	return (
		<div>
			<div
				className={`${
					isDarkMode
						? 'border border-gray-200 border-opacity-40 lg:mx-[28px] md:mx-[28px] mx-[16px] my-[20px] '
						: 'border border-gray-100 border-opacity-20 lg:mx-[28px] md:mx-[28px] mx-[16px] my-[20px]'
				}`}
			></div>

			<div className="lg:px-7 lg:py-8 md:px-7 md:py-8 px-4 py-5 ">
				<div className="flex flex-col  items-start mb-4">
					<h1
						className={`${
							isDarkMode ? ' text-light-100' : ' text-[#212121]'
						} font-semibold lg:text-3xl md:text-3xl text-xl transition-all duration-500`}
					>
						Recommendations
					</h1>
					<h1 className="text-base"></h1>
				</div>

				<div className=" grid grid-cols-1   md:grid-cols-3   lg:grid-cols-3 gap-6">
					<div
						className={`${
							isDarkMode
								? ' border-gray-300 border border-opacity-50 hover:bg-opacity-30 '
								: 'border border-gray-100 hover:bg-opacity-10  border-opacity-30'
						} p-6 rounded-lg hover:bg-gray-200    cursor-pointer transition-all duration-300`}
					>
						<div
							className={`${
								isDarkMode ? ' text-light-100' : ''
							} flex  items-start  hover:text-blue-700 hover:underline    justify-between   text-base`}
						>
							<div className="rec__title font-semibold mr-2 mb-2">
								<a
									className=" "
									target="_blank"
									href="https://reactplay.hashnode.dev/how-to-escape-tutorial-hell-as-a-beginner-developer"
								>
									Stuck in Tutorial Hell? Here&apos;s Your Exit Plan
								</a>
							</div>
							<a
								target="_blank"
								href="https://reactplay.hashnode.dev/how-to-escape-tutorial-hell-as-a-beginner-developer"
							>
								<svg
									className="text-base font-normal w-5 h-5 "
									viewBox="0 0 18 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M13.5 9.75V14.25C13.5 14.6478 13.342 15.0294 13.0607 15.3107C12.7794 15.592 12.3978 15.75 12 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V6C2.25 5.60218 2.40804 5.22064 2.68934 4.93934C2.97064 4.65804 3.35218 4.5 3.75 4.5H8.25"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M11.25 2.25H15.75V6.75"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M7.5 10.5L15.75 2.25"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</a>
						</div>
						<div className="sub__title">
							stop watching, start building: a guide to gecoming self-sufficient
						</div>
					</div>

					<div
						className={`${
							isDarkMode
								? ' border-gray-300 border border-opacity-50 hover:bg-opacity-30'
								: 'border border-gray-100 hover:bg-opacity-10  border-opacity-30'
						} p-6 rounded-lg hover:bg-gray-200  cursor-pointer transition-all duration-300`}
					>
						<div
							className={`${
								isDarkMode ? ' text-light-100' : ''
							} flex items-start hover:underline hover:text-blue-700    justify-between    text-base`}
						>
							<div className="rec__title font-semibold mr-2 mb-2">
								<a target="_blank" href="https://zellwk.com/blog/think-like-a-programmer/">
									How to Think Like a Programmer: A Guide to Problem-Solving
								</a>
							</div>
							<a href="https://zellwk.com/blog/think-like-a-programmer/">
								<svg
									className="text-base font-normal w-5 h-5"
									viewBox="0 0 18 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M13.5 9.75V14.25C13.5 14.6478 13.342 15.0294 13.0607 15.3107C12.7794 15.592 12.3978 15.75 12 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V6C2.25 5.60218 2.40804 5.22064 2.68934 4.93934C2.97064 4.65804 3.35218 4.5 3.75 4.5H8.25"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M11.25 2.25H15.75V6.75"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M7.5 10.5L15.75 2.25"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</a>
						</div>
						<div className="sub__title">Lost with JavaScript? tackling blank screen rustration</div>
					</div>

					<div
						className={`${
							isDarkMode
								? ' border-gray-300 border border-opacity-50 hover:bg-opacity-30'
								: 'border border-gray-100 hover:bg-opacity-10 border-opacity-30'
						} p-6 rounded-lg hover:bg-gray-200  cursor-pointer transition-all duration-300  `}
					>
						<div
							className={`${
								isDarkMode ? ' text-light-100' : ''
							} flex items-start hover:underline hover:text-blue-700    justify-between   text-base`}
						>
							<div className="rec__title font-semibold mr-2 mb-2 ">
								<a
									target="_blank"
									href="https://jscrambler.com/blog/5-awesome-free-books-for-javascript-developers"
								>
									Awesome Books for JavaScript Developers
								</a>
							</div>
							<a
								target="_blank"
								href="https://jscrambler.com/blog/5-awesome-free-books-for-javascript-developers"
							>
								<svg
									className="text-base font-normal w-5 h-5"
									viewBox="0 0 18 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M13.5 9.75V14.25C13.5 14.6478 13.342 15.0294 13.0607 15.3107C12.7794 15.592 12.3978 15.75 12 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V6C2.25 5.60218 2.40804 5.22064 2.68934 4.93934C2.97064 4.65804 3.35218 4.5 3.75 4.5H8.25"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M11.25 2.25H15.75V6.75"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M7.5 10.5L15.75 2.25"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</a>
						</div>
						<div className="sub__title">
							Essential reads to master javaScript and level Up your coding skills
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
