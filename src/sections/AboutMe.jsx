import Lottie from 'lottie-react';
import animationData from '../../src/assets/animations/man-and-dog.json';

import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export default function AboutMe() {
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
			<div className="about__me lg:px-7 lg:py-8 md:px-7 md:py-8 px-4 py-5">
				<h1
					className={`${
						isDarkMode ? ' text-light-100' : ' text-[#212121]'
					} font-semibold lg:text-3xl md:text-3xl text-xl transition-all duration-500`}
				>
					About Me
				</h1>
				<div className=" flex items-center   justify-between ">
					<div className="flex mt-2  flex-col text-left gap-2 text-base md:text-lg lg:text-xl lg:w-[80vw] md:w-[70vw] w-full">
						<span className="">
							Hi, <span className="text-green-500">I&apos;m Mathan,</span> a self-taught full-stack
							web developer who loves using technology to solve problems. My journey began in college
							when I built my first website, and I&apos;ve been hooked on creating cool and meaningful
							digital experiences ever since.
						</span>
						<span className="">
							Over time, I&apos;ve taught myself how to build web applications that are not only
							functional but also user-friendly and scalable. I enjoy turning ideas into real-world
							solutions, and I&apos;m always excited to work on projects that challenge me to learn and
							grow.
						</span>
					</div>
					<div className="lottie ">
						<Lottie
							
							className={`${!isDarkMode ?' border-gray-100 border border-opacity-30':'' } rounded-full overflow-hidden lg:w-[250px] md:w-[200px] md:flex ml-4 lg:flex  hidden`}
							animationData={animationData}
							autoplay
							loop
							rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
