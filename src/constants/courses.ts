export interface ICourse {
	_id: number;
	title: string;
	coverImage: string;
	time: string;
	lessons: number;
	ratting: number;
	prices: {
		regularPrice: number;
		discountPrice: number;
	};
	discount: number;
}

export const courses: ICourse[] = [
	{
		_id: 1,
		title: "C++ Preparation Qn and Answers",
		coverImage: "course-1.svg",
		time: "1:20 hrs",
		lessons: 10,
		ratting: 5,
		prices: {
			regularPrice: 200,
			discountPrice: 100,
		},
		discount: 50,
	},
	{
		_id: 2,
		title: "C++ Preparation Qn and Answers",
		coverImage: "course-1.svg",
		time: "1:20 hrs",
		lessons: 10,
		ratting: 5,
		prices: {
			regularPrice: 200,
			discountPrice: 100,
		},
		discount: 50,
	},
];
