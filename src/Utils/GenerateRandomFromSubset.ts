/* eslint-disable @typescript-eslint/no-non-null-assertion */

/**
 * Pick a random subset of a given size from a given array.
 * The result will contain unique elements as much as possible.
 * If the target size is greater than the source array length, the result will contain all elements of the source array.
 */
const GenerateRandomFromSubset = <T>(
	sourceArray: T[],
	targetSize: number,
): T[] => {
	if (!Array.isArray(sourceArray))
		throw new TypeError('sourceArray must be an array.')
	if (targetSize < 0)
		throw new TypeError('targetSize must be a non-negative integer.')

	const sourceLength = sourceArray.length

	if (targetSize === 0) return []
	if (sourceLength === 0) return []

	const result: T[] = []

	const availableIndices: number[] = Array.from(
		{ length: sourceLength },
		(_, i) => i,
	)

	// Fill the result with unique elements
	while (result.length < targetSize && availableIndices.length > 0) {
		const randomIndex = Math.floor(Math.random() * availableIndices.length)
		const selectedIndex = availableIndices[randomIndex]!

		result.push(sourceArray[selectedIndex]!)

		availableIndices.splice(randomIndex, 1)
	}

	// If it needs more elements, start repeating (randomly)
	while (result.length < targetSize) {
		const randomIndex = Math.floor(Math.random() * sourceLength)

		result.push(sourceArray[randomIndex]!)
	}

	return result
}

export default GenerateRandomFromSubset
