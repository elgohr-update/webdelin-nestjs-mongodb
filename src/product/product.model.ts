export class ProductModel {
	image: string;
	title: string;
	price: number;
	oldPrice: number;
	credit: number;
	calculateRating: number;
	description: string;
	advantages: string;
	disAdventages: string;
	categories: string[];
	tags: string;
	characteristics: {
		[key:string]:string;
	};
}
