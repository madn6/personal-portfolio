import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

import { skillsData } from '../constants/constants.js';

export default function TechStack() {
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
						Tech Stack
					</h1>
					<h1 className="text-base">Tools & languages i work with daily</h1>
				</div>
				<div className="techs grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
					{skillsData.map((skill) => {
						return (
							<div key={skill.id} className="html flex items-center gap-2">
								<div
									className={`${
										isDarkMode
											? ' bg-gray-200 px-2 py-2 rounded-lg border-gray-300 border border-opacity-50 '
											: 'bg-[#ebebeb] px-2 py-2 rounded-lg  border-gray-100 border border-opacity-30 '
									}transition-all duration-500 w-[48px] h-[48px]`}
								>
									{/* Render SVG as an img */}
									<img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
								</div>
								<div className="group text-base">
									<h1 className={`${isDarkMode ? ' text-light-100' : ''} font-semibold`}>
										{skill.name}
									</h1>
									<p>{skill.description}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
