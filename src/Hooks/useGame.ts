import { useContext } from 'react'

import { GameContext } from 'Contexts/GameContext'

const useGame = () => {
	return useContext(GameContext)
}

export default useGame
