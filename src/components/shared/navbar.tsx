import { BiCartAlt } from 'react-icons/bi';

const Navbar = () => {
	return (
		<div className='flex items-center justify-between w-full'>
			<p className='font-bold text-xl text-foreground'>Nezerdo Farms</p>
			<div className='hidden md:flex space-x-4 text-black'>
				<a href='#' className='font-bold tracking-wide'>
					Home
				</a>
				<a href='#' className='font-bold tracking-wide'>
					About
				</a>
				<a href='#' className='font-bold tracking-wide'>
					Testimonials
				</a>
				<a href='#' className='font-bold tracking-wide'>
					Jobs
				</a>
				<a href='#' className='font-bold tracking-wide'>
					Contact
				</a>
			</div>
			<div>
				<BiCartAlt size={30} />
			</div>
		</div>
	);
};

export default Navbar;
