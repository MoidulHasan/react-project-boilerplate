export interface ICourse {
	_id: number;
	title: string;
	category: string;
	coverImage: string;
	time: string;
	lessons: number;
	ratting: string;
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
		category: "Programming Interview",
		coverImage: "course-1.svg",
		time: "1:20 hrs",
		lessons: 10,
		ratting: "5.0",
		prices: {
			regularPrice: 200,
			discountPrice: 100,
		},
		discount: 50,
	},
	{
		_id: 2,
		title: "C++ Preparation Qn and Answers",
		category: "Programming Interview",
		coverImage: "course-1.svg",
		time: "1:20 hrs",
		lessons: 10,
		ratting: "5.0",
		prices: {
			regularPrice: 200,
			discountPrice: 100,
		},
		discount: 50,
	},
	{
		_id: 3,
		title: "C++ Preparation Qn and Answers",
		category: "Programming Interview",
		coverImage: "course-1.svg",
		time: "1:20 hrs",
		lessons: 10,
		ratting: "5.0",
		prices: {
			regularPrice: 200,
			discountPrice: 100,
		},
		discount: 50,
	},
	{
		_id: 4,
		title: "C++ Preparation Qn and Answers",
		category: "Programming Interview",
		coverImage: "course-1.svg",
		time: "1:20 hrs",
		lessons: 10,
		ratting: "5.0",
		prices: {
			regularPrice: 200,
			discountPrice: 100,
		},
		discount: 50,
	},
	{
		_id: 5,
		title: "C++ Preparation Qn and Answers",
		category: "Programming Interview",
		coverImage: "course-1.svg",
		time: "1:20 hrs",
		lessons: 10,
		ratting: "5.0",
		prices: {
			regularPrice: 200,
			discountPrice: 100,
		},
		discount: 50,
	},
	{
		_id: 6,
		title: "C++ Preparation Qn and Answers",
		category: "Programming Interview",
		coverImage: "course-1.svg",
		time: "1:20 hrs",
		lessons: 10,
		ratting: "5.0",
		prices: {
			regularPrice: 200,
			discountPrice: 100,
		},
		discount: 50,
	},
	{
		_id: 7,
		title: "C++ Preparation Qn and Answers",
		category: "Programming Interview",
		coverImage: "course-1.svg",
		time: "1:20 hrs",
		lessons: 10,
		ratting: "5.0",
		prices: {
			regularPrice: 200,
			discountPrice: 100,
		},
		discount: 50,
	},
	{
		_id: 8,
		title: "C++ Preparation Qn and Answers",
		category: "Programming Interview",
		coverImage: "course-1.svg",
		time: "1:20 hrs",
		lessons: 10,
		ratting: "5.0",
		prices: {
			regularPrice: 200,
			discountPrice: 100,
		},
		discount: 50,
	},
	{
		_id: 9,
		title: "C++ Preparation Qn and Answers",
		category: "Programming Interview",
		coverImage: "course-1.svg",
		time: "1:20 hrs",
		lessons: 10,
		ratting: "5.0",
		prices: {
			regularPrice: 200,
			discountPrice: 100,
		},
		discount: 50,
	},
	{
		_id: 10,
		title: "C++ Preparation Qn and Answers",
		category: "Programming Interview",
		coverImage: "course-1.svg",
		time: "1:20 hrs",
		lessons: 10,
		ratting: "5.0",
		prices: {
			regularPrice: 200,
			discountPrice: 100,
		},
		discount: 50,
	},
];

export const categorys = [
	"Programming Interview",
	"OOPS",
	"Programing",
	"C++",
	"Medidation",
	"DBMS",
];
