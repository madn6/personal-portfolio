import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

export default function Header() {
	return (
		<div>
			<header>
				<Navbar />
				<Hero />
			</header>
		</div>
	);
}
