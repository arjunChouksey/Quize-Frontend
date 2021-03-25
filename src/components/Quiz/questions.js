export const fetchQuestions = (name, flag) => {
	return [
		{
			id: 0,
			question: `What will ${flag ? name : `you`} do after lockdown?`,
			options: [
				{
					id: 1,
					option: "Study",
				},
				{
					id: 2,
					option: "Play",
				},
				{
					id: 3,
					option: "Watch TV",
				},
				{
					id: 4,
					option: "kill Someone",
				},
			],
		},
		{
			id: 1,
			question: `What music artist ${flag ? name : `you`} likes?`,
			options: [
				{
					id: 1,
					option: "Tame Impala",
				},
				{
					id: 2,
					option: "Divine",
				},
				{
					id: 3,
					option: "Emiway Bantai",
				},
				{
					id: 4,
					option: "Peter From Family Man",
				},
			],
		},
		{
			id: 2,
			question: `What country will ${flag ? name : `you`} go after lockdown ?`,
			options: [
				{
					id: 1,
					option: "America",
				},
				{
					id: 2,
					option: "Canada",
				},
				{
					id: 3,
					option: "Germany",
				},
				{
					id: 4,
					option: "Norway",
				},
			],
		},
		{
			id: 3,
			question: `What cuisine will ${flag ? name : `you`} eat after lockdown ?`,
			options: [
				{
					id: 1,
					option: "Chinese",
				},
				{
					id: 2,
					option: "Italian",
				},
				{
					id: 3,
					option: "Indian",
				},
				{
					id: 4,
					option: "Thai",
				},
			],
		},
		{
			id: 4,
			question: `What memes do ${flag ? name : `you`} likes to watch ?`,
			options: [
				{
					id: 1,
					option: "Normie",
				},
				{
					id: 2,
					option: "Dank",
				},
				{
					id: 3,
					option: "Dark",
				},
				{
					id: 4,
					option: "Classics",
				},
			],
		},
	];
};
