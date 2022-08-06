import { capitalize } from 'index'

describe('basic tests', () => {
  it('capitalized', () => {
    expect(capitalize('yolo is not fomo')).toEqual('Yolo Is Not Fomo')
  })
})
