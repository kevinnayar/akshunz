import { capitalize } from './strings'

describe('basic tests', () => {
  it('capitalized', () => {
    expect(capitalize('yolo is not fomo')).toEqual('Yolo Is Not Fomo')
  })
})
