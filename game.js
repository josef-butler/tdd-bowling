module.exports = {
    scoreFrame: scoreFrame
  }

  

  function scoreFrame (frame, nextFrame) {
    let ballOne = frame[0]
    let ballTwo = frame[1]
    let nextBallOne = null
    let nextBallTwo = null
    if (nextFrame) {
    nextBallOne = nextFrame[0]
    nextBallTwo = nextFrame[1]
    }

    let frameScore = ballOne + ballTwo;
    if (isSpare(ballOne, ballTwo)) {
        frameScore += nextBallOne
    }
    if (ballOne == 10) {
        
        frameScore += nextBallOne + nextBallTwo
    }
    return frameScore
}

function isSpare(ballOne, ballTwo) {
    if (ballOne + ballTwo == 10 && ballOne != 10) {
        return true
    }
}
