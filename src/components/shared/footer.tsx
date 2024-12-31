import { BiMailSend } from 'react-icons/bi';
import { BsInstagram, BsTwitterX } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { FaFacebook } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';

const Footer = () => {
	return (
		<footer className='relative p-5 text-sm flex flex-col gap-y-5 mt-10 '>
			<div className="relative md:bg-[#bcd7ab] rounded-[80px] p-10 flex flex-col gap-5 md:flex-row items-start justify-between z-0 after:absolute after:content-[''] after:h-full  after:w-full after:-top-[30px]  after:left-0 md:after:bg-[#bcd7ab] after:rounded-[80px] after:-skew-y-2 after:-z-10">
				<div className='flex flex-col gap-y-4'>
					<h1 className='font-bold text-xl text-foreground'>
						Nezerdo Farms
					</h1>
					<p className='text-sm opacity-30 md:w-60'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Repellat autem similique assumenda perspiciatis! Quasi?
					</p>
					<div className='flex gap-x-5 text-lg text-foreground'>
						<BsTwitterX />
						<BsInstagram />
						<FaFacebook />
					</div>
				</div>
				<div className='flex gap-x-10 text-sm opacity-70'>
					<ul className='flex flex-col gap-y-4'>
						<li>Home</li>
						<li>Recent poultry</li>
						<li>Most Popular</li>
						<li>Most Sold</li>
						<li>New</li>
					</ul>
					<ul className='flex flex-col gap-y-4'>
						<li>Home</li>
						<li>Recent poultry</li>
						<li>Most Popular</li>
						<li>Most Sold</li>
						<li>New</li>
					</ul>
				</div>
				<div className='flex flex-col gap-y-4'>
					<h1 className='font-bold'>Contact</h1>
					<div className='flex gap-x-2 items-center'>
						<CiLocationOn />
						<p>Ada, Accra</p>
					</div>
					<div className='flex gap-x-2 items-center'>
						<MdCall />
						<div>(+233) 244 476 123</div>
					</div>
					<div className='flex gap-x-2 items-center'>
						<BiMailSend />
						<p>Nezerdofarms@gmail.com</p>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-6 mt-8'>
				<p className='text-5xl lg:text-[10rem] text-center text-foreground mt-3'>
					Nerzedo Farms
				</p>
				<p className='text-center text-foreground mt-9'>
					&copy; {new Date().getFullYear()} Nezerdo Farms. All Rights
					Reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
