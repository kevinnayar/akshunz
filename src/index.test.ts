import { capitalize } from 'index'

describe('basic tests', () => {
  it('test string', () => {
    expect(capitalize('yolo is not fomo')).toEqual('Yolo Is Not Fomo')
  })
})