import { capitalize, replaceInText } from 'index'

describe('basic tests', () => {
  it('capitalized', () => {
    expect(capitalize('yolo is not fomo')).toEqual('Yolo Is Not Fomo')
  })

  it('', () => {
    const replaceTuples: Array<[string, string]> = [
      ['foo', 'bar'],
      ['Alice', 'Bob'],
    ]
    expect(replaceInText('Alice is foo', replaceTuples)).toEqual('Bob is bar')
  })
})