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
				<p className="mb-7">2023 - 2024</p>
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
							Oct 2024
						</div>
						<div className="w-full  h-full overflow-hidden  ">
							<a href="m6blog.onrender.com" target='_blank'>
								<img
									src="/images/collage.png"
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
								Luna
							</h1>
							<p className="text-base">Strategic design for health care brand.</p>
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
							Oct 2024
						</div>
						<div className="w-full  h-full overflow-hidden  ">
							<img
								src="/images/dummy5.webp"
								alt="Project Image"
								className="w-full h-full object-contain rounded-sm"
							/>
						</div>
						{/* Content */}
						<div className="">
							<h1
								className={`${
									isDarkMode ? ' text-light-100' : ' text-[#212121]'
								} transition-all duration-500 mt-2 text-lg font-semibold`}
							>
								Luna
							</h1>
							<p className="text-base">Strategic design for health care brand.</p>
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
							Oct 2024
						</div>
						<div className="w-full  h-full overflow-hidden  ">
							<img
								src="/images/dummy5.webp"
								alt="Project Image"
								className="w-full h-full object-contain rounded-sm"
							/>
						</div>
						{/* Content */}
						<div className="">
							<h1
								className={`${
									isDarkMode ? ' text-light-100' : ' text-[#212121]'
								} transition-all duration-500 mt-2 text-lg font-semibold`}
							>
								Luna
							</h1>
							<p className="text-base">Strategic design for health care brand.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
