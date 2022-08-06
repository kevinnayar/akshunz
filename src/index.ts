export function capitalize(text: string) {
  const newWords: string[] = []
  const words = text.split(' ')

  for (const word of words) {
    const newWord = `${word[0].toUpperCase()}${word.substring(1)}`
    newWords.push(newWord)
  }

  return newWords.join(' ')
}

function main() {
  const text = 'this is the main function'
  const capitalized = capitalize(text)
  return capitalized
}

main()

  
