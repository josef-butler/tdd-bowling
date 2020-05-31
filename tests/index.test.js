const game = require('../game')

test('Test Jest is working', () => {
  expect(true).toBeTruthy()
})

test('Scores a gutterball frame correctly', () => {
  const frame = [0, 0]
  const expected = 0
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('Scores a standard frame correctly', () => {
  const frame = [2, 3]
  const expected = 5
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('Scores a spare frame correctly', () => {
  const frame = [7, 3]
  const nextFrame = [4, 5]
  const expected = 14
  const actual = game.scoreFrame(frame, nextFrame)
  expect(actual).toBe(expected)
})

test('Scores a single strike frame correctly', () => {
    const frame = [10, 0]
    const nextFrame = [4, 5]
    const expected = 19
    const actual = game.scoreFrame(frame, nextFrame)
    expect(actual).toBe(expected)
})

test('Scores a double strike frame correctly', () => {
    const frame = [10, 0]
    const nextFrame = [10, 0]
    const thirdFrame = [5, 3]
    const expected = 25
    const actual = game.scoreFrame(frame, nextFrame, thirdFrame)
    expect(actual).toBe(expected)
})

test('Scores a mixed game correctly', () => {
    const gameFrames = [
        [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
      ]
    const expected = 119
    const actual = game.scoreGame(gameFrames)
    expect(actual).toBe(expected);
})

test('Scores a game with a spare in the 10th frame correctly', () => {
    const gameFrames = [
      [1, 2], [2, 3], [5, 4], [1, 7], [7, 2], [4, 3], [2, 1], [5, 2], [7, 0], [6, 4, 3]
    ]
    const expected = 71
    const actual = game.scoreGame(gameFrames)
    expect(actual).toBe(expected);
})

test('Scores a game with a single strike in the 10th frame correctly', () => {
  const gameFrames = [
    [1, 2], [2, 3], [5, 4], [1, 7], [7, 2], [4, 3], [2, 1], [5, 2], [7, 0], [10, 7, 0]
  ]
  const expected = 75
  const actual = game.scoreGame(gameFrames)
  expect(actual).toBe(expected);
})

test('Scores a game with a double strike in the 10th frame correctly', () => {
  const gameFrames = [
    [1, 2], [2, 3], [5, 4], [1, 7], [7, 2], [4, 3], [2, 1], [5, 2], [7, 0], [10, 10, 3]
  ]
  const expected = 81
  const actual = game.scoreGame(gameFrames)
  expect(actual).toBe(expected);
})

test('Scores a perfect game correctly', () => {
  const gameFrames = [
    [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]
  ]
  const expected = 300
  const actual = game.scoreGame(gameFrames)
  expect(actual).toBe(expected);
})