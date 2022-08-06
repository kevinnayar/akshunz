export function capitalize(text: string) {
  const newWords: string[] = []
  const words = text.split(' ')

  for (const word of words) {
    const newWord = `${word[0].toUpperCase()}${word.substring(1)}`
    newWords.push(newWord)
  }

  return newWords.join(' ')
}

export function replaceInText(textIn: string, replaceTuples: Array<[string, string]>): string {
  const textOut = replaceTuples.reduce((text, [key, value]) => {
    text = text.replace(key, value)
    return text
  }, textIn)
  return textOut
}

function main() {
  const textIn = 'this is the secondary method'
  const replaceTuples: Array<[string, string]> = [
    ['secondary', 'primary'],
    ['method', 'function'],
  ]
  const textOut = replaceInText(textIn, replaceTuples)
  const capitalized = capitalize(textOut)
  return capitalized
}

main()

  
