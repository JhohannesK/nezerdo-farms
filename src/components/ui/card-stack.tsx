/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BsStarFill } from 'react-icons/bs';

let interval: any;

type Card = {
	id: number;
	name: string;
	content: string;
	icon?: React.ReactNode;
	rate: number;
};

export const CardStack = ({
	items,
	offset,
	scaleFactor,
}: {
	items: Card[];
	offset?: number;
	scaleFactor?: number;
}) => {
	const CARD_OFFSET = offset || 10;
	const SCALE_FACTOR = scaleFactor || 0.06;
	const [cards, setCards] = useState<Card[]>(items);

	useEffect(() => {
		startFlipping();

		return () => clearInterval(interval);
	}, []);
	const startFlipping = () => {
		interval = setInterval(() => {
			setCards((prevCards: Card[]) => {
				const newArray = [...prevCards]; // create a copy of the array
				newArray.unshift(newArray.pop()!); // move the last element to the front
				return newArray;
			});
		}, 5000);
	};

	return (
		<div className='relative  h-60 w-60 md:h-60 md:w-96'>
			{cards.map((card, index) => {
				return (
					<motion.div
						key={card.id}
						className='absolute dark:bg-black bg-white h-60 w-60 md:h-60 md:w-96 rounded-3xl p-6 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col gap-y-5'
						style={{
							transformOrigin: 'top center',
						}}
						animate={{
							top: index * -CARD_OFFSET,
							scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
							zIndex: cards.length - index, //  decrease z-index for the cards that are behind
						}}
					>
						<div className='flex gap-5 items-center'>
							<div className='h-10 w-10 rounded-full bg-zinc-200 items-center justify-center flex'>
								EE
							</div>
							<div>
								<p className='font-bold'>{card.name}</p>
								<div className='flex gap-1 text-yellow-400'>
									{Array(5)
										.fill(0)
										.map((_, i) => (
											<BsStarFill key={i} />
										))}
								</div>
							</div>
						</div>
						<div>
							<p className='text-sm opacity-30'>{card.content}</p>
						</div>
					</motion.div>
				);
			})}
		</div>
	);
};
