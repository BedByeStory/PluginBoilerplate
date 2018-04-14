describe('Required modules', () => {
  test('Should initialize interaction', () => {
    window.interactionLoaded = jest.fn().mockName('window.interactionLoaded')
    require('./')
    expect(window).toBe(global)
    expect(window.interactionLoaded).toBeCalledWith(
      expect.objectContaining({
        Component: expect.any(Function),
        actions: expect.any(Function),
        reducer: expect.any(Function)
      })
    )
  })
})
