import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
export default function Navbar() {
	const { toggleMode, isDarkMode } = useContext(ThemeContext);
	return (
		<div>
			<nav className="lg:px-7 lg:py-8 md:px-7 md:py-8 px-4 py-5 flex items-center justify-between">
				<div className="nav__left flex items-center gap-3 lg:gap-4 md:gap-4">
					<div className="logo">
						<img
							className={`${
								isDarkMode ? 'border-gray-300 border  border-opacity-50' : 'border-gray-100 border border-opacity-30'
							} rounded-lg aspect-square object-cover lg:w-[68px] md:w-[68px] w-[52px]  transition-all duration-500`}
							src="/images/m.webp"
						/>
					</div>
					<div className="names flex flex-col items-start ">
						<h1
							className={`${
								isDarkMode ? ' text-light-100' : ' text-[#212121]'
							} font-semibold lg:text-3xl md:text-3xl text-xl transition-all duration-500`}
						>
							Mathan Muthukani
						</h1>
						<div className="role   font-regular lg:text-xl  md:text-xl text-md ">
							Full Stack Web developer
						</div>
					</div>
				</div>
				<button
					onClick={toggleMode}
					id="mode__button border__button"
					style={{ borderWidth: '1px' }}
					className={`${
						isDarkMode
							? 'px-3 py-3 rounded-lg bg-gray-200  border-gray-300 border-opacity-50'
							: 'px-3 py-3 rounded-lg bg-[#ebebeb]  border-gray-100 border-opacity-30'
					} transition-all duration-500   `}
				>
					{isDarkMode ? (
						<div className="day__svg  text-light-100">
							<svg
								width="18"
								height="18"
								viewBox="0 0 18 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clipPath="url(#clip0_60_33)">
									<path
										d="M9 12.75C11.0711 12.75 12.75 11.0711 12.75 9C12.75 6.92893 11.0711 5.25 9 5.25C6.92893 5.25 5.25 6.92893 5.25 9C5.25 11.0711 6.92893 12.75 9 12.75Z"
										stroke="currentColor"
										strokeWidth="1.25"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M9 0.75V2.25"
										stroke="currentColor"
										strokeWidth="1.25"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M9 15.75V17.25"
										stroke="currentColor"
										strokeWidth="1.25"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M3.16504 3.16504L4.23004 4.23004"
										stroke="currentColor"
										strokeWidth="1.25"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M13.77 13.77L14.835 14.835"
										stroke="currentColor"
										strokeWidth="1.25"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M0.75 9H2.25"
										stroke="currentColor"
										strokeWidth="1.25"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M15.75 9H17.25"
										stroke="currentColor"
										strokeWidth="1.25"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M3.16504 14.835L4.23004 13.77"
										stroke="currentColor"
										strokeWidth="1.25"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M13.77 4.23004L14.835 3.16504"
										stroke="currentColor"
										strokeWidth="1.25"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</g>
							</svg>
						</div>
					) : (
						<div className="night__svg text-gray-200  ">
							<svg
								width="18"
								height="18"
								viewBox="0 0 18 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M15.7502 9.5925C15.6322 10.8692 15.1531 12.0858 14.3689 13.1001C13.5846 14.1144 12.5278 14.8843 11.3219 15.3199C10.1161 15.7555 8.81116 15.8386 7.5598 15.5596C6.30843 15.2805 5.16242 14.6509 4.25584 13.7443C3.34926 12.8378 2.71962 11.6917 2.4406 10.4404C2.16158 9.18901 2.24471 7.88406 2.68027 6.67822C3.11582 5.47238 3.88579 4.41552 4.90008 3.63131C5.91437 2.8471 7.13102 2.36798 8.40767 2.25C7.66023 3.2612 7.30056 4.50709 7.39407 5.76106C7.48758 7.01503 8.02807 8.19379 8.91722 9.08295C9.80638 9.9721 10.9851 10.5126 12.2391 10.6061C13.4931 10.6996 14.739 10.3399 15.7502 9.5925Z"
									stroke="currentColor"
									strokeWidth="1.25"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					)}
				</button>
			</nav>
		</div>
	);
}
