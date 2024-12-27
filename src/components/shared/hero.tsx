import { Button } from '../ui/button';
import { BsInstagram, BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { Vortex } from '../ui/vortex';

const Hero = () => {
	return (
		<Vortex
			backgroundColor='transparent'
			baseHue={100}
			className='flex items-center flex-col justify-center px-2 md:px-10 py-4 h-full'
		>
			<section className="mt-5 lg:bg-secondary rounded-t-[80px] rounded-br-[80px] px-16 w-full relative py-20 p-5 flex flex-col-reverse md:flex-row items-center justify-between after:absolute after:content-[''] after:h-[40%] xl:after:h-[60%] after:w-full after:top-[300px] xl:after:top-[350px] after:left-0 lg:after:bg-secondary after:rounded-[80px] lg:after:shadow-md after:-skew-y-3 after:-z-10">
				<div className='flex flex-col gap-y-6'>
					<div className='capitalize text-black font-bold text-5xl'>
						Nezerdo farms
					</div>
					<div className='text-black'>
						We are a leading producer of high quality poultry products in
						Ghana.
					</div>
					<Button className='bg-foreground rounded-xl w-fit'>
						Get Started
					</Button>

					<div className='flex gap-x-5 text-lg text-foreground'>
						<BsTwitterX />
						<BsInstagram />
						<FaFacebook />
					</div>
				</div>
				<div>
					<img
						src='/chicken.jpg'
						className='rounded-[80px]'
						height={500}
						width={700}
						alt=''
					/>
				</div>
			</section>
		</Vortex>
	);
};

export default Hero;
