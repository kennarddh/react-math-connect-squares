export enum QuestionDifficulty {
	Easy = 'Easy',
	Medium = 'Medium',
	Hard = 'Hard',
}

export interface Question {
	id: string
	question: string
	answers: number[]
	difficulty: QuestionDifficulty
}

export interface GridCell {
	id: string
	questionId: string
	correctTeamId: string | null
	opened: boolean
}

export interface Team {
	id: string
	name: string
}

export interface GameSettings {
	maximumDuration: number
	connectNToWin: number
	gridSize: number
	questionDifficultyComposition: Record<QuestionDifficulty, number>
}

export interface GameData {
	cells: GridCell[]
	teams: Team[]
	settings: GameSettings
	startTime: number
}
