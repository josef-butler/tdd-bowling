module.exports = {
  scoreFrame: scoreFrame,
  scoreGame: scoreGame,
}

function scoreGame(gameFrames) {
  let gameScore = 0

  for (i = 0; i < gameFrames.length; i++) {
    gameScore += scoreFrame(gameFrames[i], gameFrames[i + 1], gameFrames[i + 2]);
  }

  return gameScore
}

function scoreFrame(frame, nextFrame, thirdFrame) {

  let ballOne = frame[0]
  let ballTwo = frame[1]
  let ballThree = frame[2]

  let nextBallOne = null
  let nextBallTwo = null

  let thirdBallOne = null
  let thirdBallTwo = null

  if (nextFrame) {
    nextBallOne = nextFrame[0]
    nextBallTwo = nextFrame[1]
  }

  if (thirdFrame) {
    thirdBallOne = thirdFrame[0]
    thirdBallTwo = thirdFrame[1]
  }

  let frameScore = ballOne + ballTwo;

  if (isSpare(frame, ballOne, ballTwo)) {
    frameScore += nextBallOne
  }

  if (isSingleStrike(frame, ballOne, nextBallOne)) {
    frameScore += nextBallOne + nextBallTwo
  }

  if (isDoubleStrike(frame, ballOne, nextBallOne)) {
    frameScore += nextBallOne + thirdBallOne
  }

  if (isStrikeOrSpareLastFrame(frame, ballOne, ballTwo)) {
    frameScore += ballThree;
  }

  return frameScore
}

function isSpare(frame, ballOne, ballTwo) {
  if (ballOne + ballTwo == 10 && ballOne != 10 && frame.length != 3) {
    return true
  }
}

function isSingleStrike(frame, ballOne, nextBallOne) {
  if (ballOne == 10 && nextBallOne != 10 && frame.length != 3) {
    return true
  }
}

function isDoubleStrike(frame, ballOne, nextBallOne) {
  if (ballOne == 10 && nextBallOne == 10 && frame.length != 3) {
    return true
  }
}

function isStrikeOrSpareLastFrame(frame, ballOne, ballTwo) {
  if (frame.length == 3 && (ballOne == 10 || ballOne + ballTwo == 10)) {
    return true
  }
}