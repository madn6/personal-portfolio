import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export default function Projects() {
	const { isDarkMode } = useContext(ThemeContext);

	return (
		<div className="lg:px-7 lg:py-8 md:px-7 md:py-8 px-4 py-5 ">
			<div className="projects__date">
				<h1
					className={`${
						isDarkMode ? ' text-light-100' : ' text-[#212121]'
					} font-semibold lg:text-3xl md:text-3xl text-xl transition-all duration-500`}
				>
					Featured Projects
				</h1>
				<p className="mb-7">2025 - 2026</p>
			</div>

			<div className="grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2 gap-6">
				{/* Project Card */}
				<div className="">
					<div className="card relative  ">
						<div
							className={`${
								isDarkMode
									? 'px-2 py-1 text-xs rounded-md text-gray-100 bg-gray-200 border  border-gray-300'
									: 'px-2 py-1 text-xs rounded-md text-gray-200 bg-[#ebebeb] border border-gray-100'
							} transition-all duration-500  absolute top-2 left-2`}
						>
							Jan 2025
						</div>
						<div
							className={`${
								isDarkMode ? 'border-gray-300 border-opacity-30 border-2' : 'border-none'
							} rounded-sm  overflow-hidden`}
						>
							{' '}
							<a href="https://m6blog.onrender.com" target="_blank">
								<img
									src="/images/m6blog.png"
									alt="Project Image"
									className="w-full h-full object-contain rounded-sm"
								/>
							</a>
						</div>
						{/* Content */}
						<div className="">
							<h1
								className={`${
									isDarkMode ? ' text-light-100' : ' text-[#212121]'
								} transition-all duration-500 mt-2 text-lg font-semibold`}
							>
								Blog Application
							</h1>
							<p className="text-base">A sleek platform for sharing insights and stories</p>
						</div>
					</div>
				</div>

				<div className="">
					<div className="card relative  ">
						<div
							className={`${
								isDarkMode
									? 'px-2 py-1 text-xs rounded-md text-gray-100 bg-gray-200 border  border-gray-300'
									: 'px-2 py-1 text-xs rounded-md text-gray-200 bg-[#ebebeb] border border-gray-100'
							} transition-all duration-500  absolute top-2 left-2 `}
						>
							Mar 2025
						</div>
						<div className="w-full  bg-gray-100 rounded-sm  h-full overflow-hidden  ">
							<img
								src="/images/dummy5.webp"
								alt="Project Image"
								className="w-full h-full object-contain rounded-sm"
							/>
							<img
								src="/images/cheems-meme.webp"
								alt="Overlay Image"
								className="absolute grayscale top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
							/>
						</div>
						{/* Content */}
						<div className="">
							<h1
								className={`${
									isDarkMode ? ' text-light-100' : ' text-[#212121]'
								} transition-all duration-500 mt-2 text-lg font-semibold`}
							>
								Stay tuned
							</h1>
							<p className="text-base">Something amazing is on its way!</p>
						</div>
					</div>
				</div>

				<div className="">
					<div className="card relative   ">
						<div
							className={`${
								isDarkMode
									? 'px-2 py-1 text-xs rounded-md text-gray-100 bg-gray-200 border  border-gray-300'
									: 'px-2 py-1 text-xs rounded-md text-gray-200 bg-[#ebebeb] border border-gray-100'
							} transition-all duration-500  absolute top-2 left-2`}
						>
							May 2025
						</div>
						<div className="w-full  h-full overflow-hidden  ">
							<img
								src="/images/dummy5.webp"
								alt="Project Image"
								className="w-full h-full object-contain rounded-sm"
							/>
							<img
								src="/images/cheems-meme.webp"
								alt="Overlay Image"
								className="absolute grayscale top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
							/>
						</div>
						{/* Content */}
						<div>
							<h1
								className={`${
									isDarkMode ? ' text-light-100' : ' text-[#212121]'
								} transition-all duration-500 mt-2 text-lg font-semibold`}
							>
								Stay tuned
							</h1>
							<p className="text-base">Something amazing is on its way!</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
