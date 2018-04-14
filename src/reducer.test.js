import reducer from './reducer'

describe('reducer', () => {
  test('Should be a function', () => {
    expect(reducer).toEqual(expect.any(Function))
  })

  test('Should return a default state', () => {
    expect(reducer()).toEqual(expect.any(Object))
  })

  // Add your own tests
})
