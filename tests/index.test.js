test('test setup working', () => {
    expect(true).toBeTruthy()
  })
    
  const game = require('../game')

  test('scores a gutterball frame', () => {
    const frame = [0, 0]
    const expected = 0
    const actual = game.scoreFrame(frame)
    expect(actual).toBe(expected)
  })

  test('scores a normal frame', () => {
    const frame = [2, 3]
    const expected = 5
    const actual = game.scoreFrame(frame)
    expect(actual).toBe(expected)
  })