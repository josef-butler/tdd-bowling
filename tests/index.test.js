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

  test('scores a spare frame', () => {
    const frame = [7, 3]
    const nextFrame = [4, 5]
    const expected = 14
    const actual = game.scoreFrame(frame, nextFrame)
    expect(actual).toBe(expected)
})

test('scores a single strike frame', () => {
    const frame = [10, 0]
    const nextFrame = [4, 5]
    const expected = 19
    const actual = game.scoreFrame(frame, nextFrame)
    expect(actual).toBe(expected)
})

test('scores a double strike frame', () => {
    const frame = [10, 0]
    const nextFrame = [10, 0]
    const thirdFrame = [5, 3]
    const expected = 25
    const actual = game.scoreFrame(frame, nextFrame, thirdFrame)
    expect(actual).toBe(expected)
})

test('scores a game', () => {
    const gameFrames = [
        [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
      ]
    const expected = 119
    const actual = game.scoreGame(gameFrames)
    expect(actual).toBe(expected);
})

test('scores a spare in the 10th frame', () => {
    const gameFrames = [
      [1, 2], [2, 3], [5, 4], [1, 7], [7, 2], [4, 3], [2, 1], [5, 2], [7, 0], [6, 4, 3]
    ]
    const expected = 71
    const actual = game.scoreGame(gameFrames)
    expect(actual).toBe(expected);
})

// test('scores a single strike in the 10th frame', () => {
//   const gameFrames = [
//     [1, 2], [2, 3], [5, 4], [1, 7], [7, 2], [4, 3], [2, 1], [5, 2], [7, 0], [10, 7, 0]
//   ]
//   const expected = 
//   const actual = game.scoreGame(gameFrames)
//   expect(actual).toBe(expected);
// })

// test('scores a double strike in the 10th frame', () => {
//   const gameFrames = [
//     [1, 2], [2, 3], [5, 4], [1, 7], [7, 2], [4, 3], [2, 1], [5, 2], [7, 0], [10, 10, 3]
//   ]
//   const expected = 71
//   const actual = game.scoreGame(gameFrames)
//   expect(actual).toBe(expected);
// })

test('scores a perfect game', () => {
  const gameFrames = [
    [10, 10], [10, 10], [10, 10], [10, 10], [10, 10], [10, 10], [10, 10], [10, 10], [10, 10], [10, 10, 10]
  ]
  const expected = 300
  const actual = game.scoreGame(gameFrames)
  expect(actual).toBe(expected);
})