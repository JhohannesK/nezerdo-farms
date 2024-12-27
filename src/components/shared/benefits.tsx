import { BiFoodMenu, BiFoodTag, BiPlanet } from 'react-icons/bi';

const Benefit = () => {
	return (
		<section>
			<div className='grid gap-5 md:grid-cols-3 md:mt-32'>
				{cards.map((card) => (
					<div className='flex gap-x-5'>
						<div className='rounded-full p-2 h-10 w-10 flex items-center justify-center bg-[#bcd7ab]/30 text-foreground'>
							{card.icon}
						</div>
						<div className='flex flex-col'>
							<p className='font-bold text-xl'>{card.title}</p>
							<p className='text-sm'>{card.description}</p>
						</div>
					</div>
				))}
			</div>

			<div className='text-5xl md:text-8xl mt-8'>
				<p>
					<span className='text-foreground'> Rooted in </span>Tradition,
				</p>
				<p>Growing for the</p>
				<p className='text-zinc-300'>Future</p>
			</div>

			<div className='mt-20 flex flex-col md:flex-row items-center justify-start gap-x-14 gap-y-5'>
				<img
					src='chicks.jpg'
					height={500}
					width={500}
					className='rounded-3xl'
					alt='chicks'
				/>
				<div className=' md:w-[30rem]'>
					<p className='text-3xl text-center md:text-left md:text-4xl font-bold'>
						Clean and Fragrant Farm
					</p>
					<p className='opacity-30 text-sm text-wrap'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam impedit iste blanditiis libero eum, beatae
						repellendus esse explicabo amet animi.
					</p>
				</div>
			</div>
		</section>
	);
};

const cards = [
	{
		title: 'Quality Products',
		description:
			'We have all certifications of confirmation of quality products',
		icon: <BiFoodMenu />,
	},
	{
		title: 'Sustainable Focus',
		description:
			'We are commited to sustainable farming and production practices, aiming to a healthier world',
		icon: <BiPlanet />,
	},
	{
		title: 'Fast Delivery',
		description: 'We deliver your orders within 3 days of purchase',
		icon: <BiFoodTag />,
	},
];

export default Benefit;
