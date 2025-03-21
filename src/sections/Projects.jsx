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
				{/* Project 1*/}
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
						<div className="w-full  bg-gray-100 rounded-sm  h-full overflow-hidden  ">
							<a href="https://m6blog.onrender.com" target="_blank">
								<img
									src="/images/dummy5.webp"
									alt="Project Image"
									className="w-full h-full object-contain rounded-sm"
								/>
								<img
									src="/images/desktop-post.png"
									alt="Overlay Image"
									className="absolute w-[95%] max-w-[400px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
								/>
							</a>
						</div>

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
			   {/* project 2 */}
				<div className="">
					<div className="card relative  ">
						<div
							className={`${
								isDarkMode
									? 'px-2 py-1 text-xs rounded-md text-gray-100 bg-gray-200 border  border-gray-300'
									: 'px-2 py-1 text-xs rounded-md text-gray-200 bg-[#ebebeb] border border-gray-100'
							} transition-all duration-500  absolute top-2 left-2`}
						>
							Feb 2025
						</div>
						<div className="w-full  bg-gray-100 rounded-sm  h-full overflow-hidden  ">
							<a href="https://fully-responsive-travel-website-j3bd.vercel.app" target="_blank">
								<img
									src="/images/dummy5.webp"
									alt="Project Image"
									className="w-full h-full object-contain rounded-sm"
								/>
								<img
									src="/images/travel-post.png"
									alt="Overlay Image"
									className="absolute w-[95%] max-w-[400px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
								/>
							</a>
						</div>

						<div className="">
							<h1
								className={`${
									isDarkMode ? ' text-light-100' : ' text-[#212121]'
								} transition-all duration-500 mt-2 text-lg font-semibold`}
							>
								Travelia UI
							</h1>
							<p className="text-base">Effortless booking, seamless experiences</p>
						</div>
					</div>
				</div>
				{/* project 3 */}
				<div className="">
					<div className="card relative  ">
						<div
							className={`${
								isDarkMode
									? 'px-2 py-1 text-xs rounded-md text-gray-100 bg-gray-200 border  border-gray-300'
									: 'px-2 py-1 text-xs rounded-md text-gray-200 bg-[#ebebeb] border border-gray-100'
							} transition-all duration-500  absolute top-2 left-2`}
						>
							Mar 2025
						</div>
						<div className="w-full  bg-gray-100 rounded-sm  h-full overflow-hidden  ">
							<a href="https://m6moviesearchapp.onrender.com" target="_blank">
								<img
									src="/images/dummy5.webp"
									alt="Project Image"
									className="w-full h-full object-contain rounded-sm"
								/>
								<img
									src="/images/movie-search.png"
									alt="Overlay Image"
									className="absolute w-[95%] max-w-[400px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
								/>
							</a>
						</div>

						<div className="">
							<h1
								className={`${
									isDarkMode ? ' text-light-100' : ' text-[#212121]'
								} transition-all duration-500 mt-2 text-lg font-semibold`}
							>
								Movie Search App (use vpn)
							</h1>
							<p className="text-base">Discover, Explore and Enjoy!</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
