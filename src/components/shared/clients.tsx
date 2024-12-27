import { CardStack } from '../ui/card-stack';

const Clients = () => {
	return (
		<div className=' relative mt-20 bg-[#bcd7ab]/30 rounded-[80px] flex-col md:px-16 py-20 p-5 flex items-center justify-center w-full gap-5 shadow-md'>
			<h1 className='text-3xl font-bold'>
				Let's see what our client say about us
			</h1>
			<div className=' absolute top-32 left-[25rem] h-10 w-10 rounded-full bg-zinc-200 items-center justify-center hidden md:flex'>
				EE
			</div>
			<div className=' absolute top-[14rem] left-[20rem] h-14 w-14 rounded-full bg-zinc-200 items-center justify-center hidden md:flex'>
				EE
			</div>
			<div className=' absolute top-[20rem] left-[25rem] h-10 w-10 rounded-full bg-zinc-200 items-center justify-center hidden md:flex'>
				EE
			</div>
			<div className=' absolute top-32 right-[25rem] h-10 w-10 rounded-full bg-zinc-200 items-center justify-center hidden md:flex'>
				EE
			</div>
			<div className=' absolute top-[14rem] right-[20rem] h-14 w-14 rounded-full bg-zinc-200 items-center justify-center hidden md:flex'>
				EE
			</div>
			<div className=' absolute top-[20rem] right-[25rem] h-10 w-10 rounded-full bg-zinc-200 items-center justify-center hidden md:flex'>
				EE
			</div>
			<div className='mt-5'>
				<CardStack items={cards} />
			</div>
		</div>
	);
};

export default Clients;

const cards = [
	{
		id: 1,
		name: 'Kofi',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aperiam repellat dicta ipsum voluptatem labore qui reprehenderit aliquam? Voluptatum, dicta?',
		rate: 4,
	},
	{
		id: 2,
		name: 'Ama',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aperiam repellat dicta ipsum voluptatem labore qui reprehenderit aliquam? Voluptatum, dicta?',
		rate: 5,
	},
	{
		id: 3,
		name: 'Kwame',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aperiam repellat dicta ipsum voluptatem labore qui reprehenderit aliquam? Voluptatum, dicta?',
		rate: 3,
	},
	{
		id: 4,
		name: 'Akosua',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aperiam repellat dicta ipsum voluptatem labore qui reprehenderit aliquam? Voluptatum, dicta?',
		rate: 2,
	},
];
