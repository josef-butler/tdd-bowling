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

  let frameScore = 0
  
  let ballOne = frame[0]
  let ballTwo = frame[1]
  let ballThree = frame[2]

  let nextBallOne = null
  let nextBallTwo = null

  if (nextFrame) {
    nextBallOne = nextFrame[0]
    nextBallTwo = nextFrame[1]
  }

  let thirdBallOne = null
  let thirdBallTwo = null

  if (thirdFrame) {
    thirdBallOne = thirdFrame[0]
    thirdBallTwo = thirdFrame[1]
  }

  frameScore += isStandardFrame(frame, ballOne, ballTwo)
  frameScore += isSpare(frame, ballOne, ballTwo, nextBallOne)
  frameScore += isSingleStrike(frame, ballOne, nextBallOne, nextBallTwo)
  frameScore += isDoubleStrike(frame, ballOne, nextBallOne, nextBallTwo, thirdBallOne)
  frameScore += isLastFrame(frame, ballOne, ballTwo, ballThree)

  return frameScore
}

function isStandardFrame(frame, ballOne, ballTwo) {
  if (frame.length != 3 && ballOne + ballTwo != 10) {
    return ballOne + ballTwo
  } else {
    return 0
  }
}


function isSpare(frame, ballOne, ballTwo, nextBallOne) {
  if (frame.length != 3 && ballOne + ballTwo == 10 && ballOne != 10) {
    return ballOne + ballTwo + nextBallOne
  } else {
    return 0
  }
}

function isSingleStrike(frame, ballOne, nextBallOne, nextBallTwo) {
  if (frame.length != 3 && ballOne == 10 && nextBallOne != 10) {
    return ballOne + nextBallOne + nextBallTwo
  } else {
    return 0;
  }
}

function isDoubleStrike(frame, ballOne, nextBallOne, nextBallTwo, thirdBallOne) {
  if (frame.length != 3 && ballOne == 10 && nextBallOne == 10 && thirdBallOne != null) {
    return ballOne + nextBallOne + thirdBallOne
  } else if (frame.length != 3 && ballOne == 10 && nextBallOne == 10 && thirdBallOne == null) {
    return ballOne + nextBallOne + nextBallTwo
  } else {
    return 0;
  }
}

function isLastFrame(frame, ballOne, ballTwo, ballThree) {
  if (frame.length == 3) {
    return ballOne + ballTwo + ballThree
  } else {
    return 0
  }
}