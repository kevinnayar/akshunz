export function capitalize(text: string) {
  const newWords: string[] = []
  const words = text.split(' ')

  for (const word of words) {
    const newWord = `${word[0].toUpperCase()}${word.substring(1)}`
    newWords.push(newWord)
  }

  return newWords.join(' ')
}