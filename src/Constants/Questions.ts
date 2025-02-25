import { Question, QuestionDifficulty } from 'Types/Types'

const EasyQuestions = [
	{
		id: '34b2e876-7177-4feb-a683-f67747fa5966',
		question: '2 + 2',
		answers: [4],
		difficulty: QuestionDifficulty.Hard,
	},
] as const satisfies Question[]

const MediumQuestions = [
	{
		id: '34b2e876-7177-4feb-a683-f67747fa5966',
		question: '2x + 2 = 10',
		answers: [4],
		difficulty: QuestionDifficulty.Hard,
	},
] as const satisfies Question[]

const HardQuestions = [
	{
		id: '34b2e876-7177-4feb-a683-f67747fa5966',
		question: '2x^2 - 2x - 4 = 0',
		answers: [-1, 2],
		difficulty: QuestionDifficulty.Hard,
	},
] as const satisfies Question[]

const Questions = [
	...EasyQuestions,
	...MediumQuestions,
	...HardQuestions,
] as const satisfies Question[]

export default Questions
