import { Input } from '../ui/input';
import { Button } from '../ui/button';

const Newsletter = () => {
	return (
		<div className='mt-20 md:bg-[#bcd7ab]/60 md:rounded-[80px] flex-col md:px-16 py-20 p-5 flex items-center justify-center w-full gap-5 shadow-md'>
			<h1 className='text-3xl font-bold'>Subscribe to our newsletter</h1>
			<div className='mt-3 w-full rounded-xl flex flex-col gap-5'>
				<div className='flex w-full flex-col md:flex-row gap-5 items-center justify-center'>
					<Input
						type='email'
						placeholder='Enter your email'
						className='w-full md:w-[50%] p-3 rounded-xl bg-white'
					/>
					<Button className='bg-foreground text-white px-5 rounded-xl'>
						Subscribe
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
