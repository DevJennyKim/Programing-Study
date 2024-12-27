// ================== tennisPoints ======================

// Question:
// Your friend has invited you to watch a tennis match at a local sports club. Since tennis isn't your favorite sport, you get bored right at the start of the first game and start looking for something to keep yourself entertained. Noticing the scoreboard, you realize you don't even know how many points have been won since the game started.

// If you are not familiar with tennis rules, here's a short description of its scoring system. Score calling is unique in tennis: each point has a corresponding call that is different from its point value. The table of points won and corresponding calls is given below.

// +----------------------+--------------------+
// | Number of points won | Corresponding call |
// +----------------------+--------------------+
// |          0           |      "love"        |
// +----------------------+--------------------+
// |          1           |       "15"         |
// +----------------------+--------------------+
// |          2           |       "30"         |
// +----------------------+--------------------+
// |          3           |       "40"         |
// +----------------------+--------------------+
// There's an additional rule to remember: when players are tied by one or two points, the score is described as "15-all" and "30-all", respectively.

// A string in the format <p1>-<p2> representing a valid score, where <p1> is the first player's score, and <p2> is the second player's score. "15-all" or "40-love".

// Create a function that will calculate the number of points won in the game given the current score.

// ======================================================

function tennis(score) {
  const points = { love: 0, 15: 1, 30: 2, 40: 3 };

  if (score.include('all')) {
    const [due] = score.sprit('-');
    return points[due] * 2;
  } else {
    [player1, player2] = score.split('-');
    return point[p1] + point[p2];
  }
}
