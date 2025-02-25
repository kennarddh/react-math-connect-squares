import {
	FC,
	ReactNode,
	createContext,
	useCallback,
	useEffect,
	useState,
} from 'react'

import GenerateRandomFromSubset from 'Utils/GenerateRandomFromSubset'

import Questions from 'Constants/Questions'

import {
	GameData,
	GameSettings,
	Question,
	QuestionDifficulty,
	Team,
} from 'Types/Types'

interface GameContextData {
	GameData: GameData
}

interface GameContextProvider {
	children: ReactNode
	settings: GameSettings
	teams: Team[]
}

export const GameContext = createContext<GameContextData>({} as GameContextData)

export const GameProvider: FC<GameContextProvider> = ({
	settings,
	teams,
	children,
}) => {
	const [GameData, SetGameData] = useState<GameData>(() => {
		const totalQuestions = settings.gridSize ** 2

		const questions: Question[] = []

		let index = 0

		for (const [difficulty, composition] of Object.entries(
			settings.questionDifficultyComposition,
		)) {
			const neededQuestions = totalQuestions - questions.length

			let amount = 0

			// Ensure the last difficulty gets all the remaining questions
			if (
				index ===
				Object.keys(settings.questionDifficultyComposition).length - 1
			) {
				amount = neededQuestions
			} else {
				amount = Math.round(totalQuestions * composition)
			}

			const result = GenerateRandomFromSubset(
				Questions.filter(
					question =>
						question.difficulty ===
						(difficulty as QuestionDifficulty),
				),
				amount,
			)

			questions.push(...result)

			index += 1
		}

		const cells = questions.map(question => ({
			id: crypto.randomUUID(),
			questionId: question.id,
			correctTeamId: null,
			opened: false,
		}))

		return {
			settings,
			startTime: Date.now(),
			cells,
			teams,
		}
	})

	return (
		<GameContext.Provider value={{ GameData }}>
			{children}
		</GameContext.Provider>
	)
}

export default GameContextData
