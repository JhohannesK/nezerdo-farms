import { FocusCards } from '../ui/focus-cards';

const Products = () => {
	const cards = [
		{
			title: 'White Eggs',
			src: '/white-eggs.jpg',
		},
		{
			title: 'Brown Eggs',
			src: '/brown-eggs.jpg',
		},
		{
			title: 'Blue-green eggs',
			src: '/blue-green eggs.jpg',
		},
		{
			title: 'Layers',
			src: '/layers.jpg',
		},
		{
			title: 'Guinea Fowls',
			src: '/guinea fowl.jpg',
		},
		{
			title: 'Cattles',
			src: '/cattle.jpg',
		},
	];
	return (
		<div className='mt-24 flex flex-col gap-5 w-full'>
			<h1 className='text-center text-5xl font-bold'>Products</h1>
			<FocusCards cards={cards} />
		</div>
	);
};

export default Products;
