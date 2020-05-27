module.exports = {
    scoreFrame: scoreFrame
  }

  

  function scoreFrame (frame, nextFrame, thirdFrame) {
      
    let ballOne = frame[0]
    let ballTwo = frame[1]
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

    if (isSpare(ballOne, ballTwo)) {
        frameScore += nextBallOne
    }

    if (isSingleStrike(ballOne, nextBallOne)) {
        frameScore += nextBallOne + nextBallTwo
    }

    if (isDoubleStrike(ballOne, nextBallOne)) {
        frameScore += nextBallOne + thirdBallOne + thirdBallTwo
    }

    return frameScore
}

function isSpare(ballOne, ballTwo) {
    if (ballOne + ballTwo == 10 && ballOne != 10) {
        return true
    }
}

function isSingleStrike (ballOne, nextBallOne) {
    if (ballOne == 10 && nextBallOne != 10)  {
        return true
    }
}

function isDoubleStrike (ballOne, nextBallOne) {
    if (ballOne == 10 && nextBallOne == 10)  {
        return true
    }
}
