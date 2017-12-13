// // Meteor.startup(() => {
//   // code to run on server at startup
//   // constantes
COLS = 15; // numero de colunas
ROWS = 15; // numero de linhas
SIZE = 30; // tamanho de cada tile

function maze(x, y) {
  // return new Promise((resolve, reject) => {
  let n = x * y - 1;
  if (n < 0) {
    //  reject(new Error(`illegal maze dimensions (${x} x ${y} < 1)`));
  } else {
    let horiz = [];
    for (let j = 0; j < x + 1; j++) horiz[j] = [];
    let verti = [];
    for (let j = 0; j < x + 1; j++) verti[j] = [];
    let here = [Math.floor(Math.random() * x), Math.floor(Math.random() * y)];
    let path = [here];
    let unvisited = [];
    for (let j = 0; j < x + 2; j++) {
      unvisited[j] = [];
      for (let k = 0; k < y + 1; k++)
        unvisited[j].push(j > 0 && j < x + 1 && k > 0 && (j != here[0] + 1 || k != here[1] + 1));
    }
    while (0 < n) {
      let potential = [
        [here[0] + 1, here[1]],
        [here[0], here[1] + 1],
        [here[0] - 1, here[1]],
        [here[0], here[1] - 1]
      ];
      let neighbors = [];
      for (let j = 0; j < 4; j++)
        if (unvisited[potential[j][0] + 1][potential[j][1] + 1])
          neighbors.push(potential[j]);
      if (neighbors.length) {
        n = n - 1;
        let next = neighbors[Math.floor(Math.random() * neighbors.length)];
        unvisited[next[0] + 1][next[1] + 1] = false;
        if (next[0] == here[0])
          horiz[next[0]][(next[1] + here[1] - 1) / 2] = true;
        else
          verti[(next[0] + here[0] - 1) / 2][next[1]] = true;
        path.push(here = next);
      } else
        here = path.pop();
    }
    return ({
      x: x,
      y: y,
      horiz: horiz,
      verti: verti
    });
  }

}

/**
* A mere way of generating text.
* The text (Since it can be large) is generated in a non-blocking way.

*/
generate = function() {
  m = maze(COLS, ROWS);
  let text = [];
  for (let j = 0; j < m.x * 2 + 1; j++) {
    text[j] = [];
    if (0 == j % 2)
      for (let k = 0; k < m.y * 4 + 1; k++)
        if (0 == k % 4)
          text[j][k] = 1;
          // text[j][k] = 0;

        else
    if (j > 0 && m.verti[j / 2 - 1][Math.floor(k / 4)])
      text[j][k] = 0;
    else
      text[j][k] = 1;
      // text[j][k] = 0;

    else
      for (let k = 0; k < m.y * 4 + 1; k++)
        if (0 == k % 4)
          if (k > 0 && m.horiz[(j - 1) / 2][k / 4 - 1])
            text[j][k] = 0;
          else
            text[j][k] = 1;
            // text[j][k] = 0;

    else
      text[j][k] = 0;
    // Meteor.call('log', text.length, function(error, result) {});

    // if (0 == j) text[j][1] = text[j][2] = text[j][3] = 0;
    // if (m.x*2-1 == j) line[4*m.y]= 0;
    // text.push(line.join('')+'\r\n');
  }
  // Meteor.call('log', text[0].length, function(error, result) {});
  // console.log(text)
  text[1][1] = 'P';
  text[text.length - 2][text[text.length - 2].length-2] = '3';

  // text[43][70] = 3;
  // Meteor.call('log', [text.length-2,text[text.length - 2].length-2], function(error, result) {});

  return text
  // const OUTPUT = text.join('');
  // if (typeof writeTo === 'function')
  // 	writeTo(OUTPUT);
  // resolve(OUTPUT);

}
