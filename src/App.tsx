import Benefit from './components/shared/benefits';
import Clients from './components/shared/clients';
import Footer from './components/shared/footer';
import Hero from './components/shared/hero';
import Navbar from './components/shared/navbar';
import Newsletter from './components/shared/newsletter';
import Products from './components/shared/products';

function App() {
	return (
		<div className='max-w-[1500px] mx-auto p-5 md:px-10 w-full flex flex-col gap-5'>
			<Navbar />
			<Hero />
			<Benefit />
			<Products />
			<Clients />
			<Newsletter />
			<Footer />
		</div>
	);
}

export default App;
