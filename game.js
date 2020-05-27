module.exports = {
    scoreFrame: scoreFrame
  }

  

  function scoreFrame (frame, nextFrame) {
    let frameScore = frame[0] + frame[1];
    if (frameScore == 10) {
        frameScore += nextFrame[0]
    }
    return frameScore
}


