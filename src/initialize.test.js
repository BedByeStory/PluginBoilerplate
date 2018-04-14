describe('initialize', () => {
  test('Should warn if interactionLoaded method not found', () => {
    console.warn = jest.fn().mockName('console.warn')
    require('./')
    expect(console.warn).toBeCalledWith('interactionLoaded callback is not defined')
  })
})
