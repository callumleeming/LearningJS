var judgeCircle = function (moves) {
  let splitString = moves.split("").reduce((acc, val) => {
    if (val === "L") { acc.x -= 1 }
    else if (val === "R") { acc.x += 1 }
    else if (val === "U") { acc.y += 1 }
    else if (val === "D") { acc.y -= 1 }

    return acc;
  }, { x: 0, y: 0 });

  return splitString.x === 0 && splitString.y === 0;
};

console.log(judgeCircle("LRLR"));
