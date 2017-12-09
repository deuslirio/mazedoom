// Meteor.startup(() => {
  // code to run on server at startup
  // constantes
  COLS = 26; // numero de colunas
  ROWS = 19; // numero de linhas
  SIZE = 30; // tamanho de cada tile
  // tiles matriz
  var tiles = [];
  // função para buscar os vizinhos disponíveis da posição informada
  // função para buscar os vizinhos disponíveis da posição informada
function getAvailable(i,j) {
    var available = [];
    var len = tiles[i][j].neighbours.length;
    for (var ix=0; ix<len; ix++) {
        var t = tiles[i][j].neighbours[ix];
        if (!t.visited)
            available.push( t );
    }
    return available;
}

// função para criar as conexões das posições
function maze(i,j) {
    // define a posição atual como visitada
    tiles[i][j].visited = true;

    // busca os vizinho disponíveis
    var available = getAvailable(i,j);

    // enquanto houver vizinhos disponíveis
    while (available.length>0) {
        // escolhe um vizinho aleatório
        var neighbor = available[Math.floor(Math.random() * available.length)];

        // remove o vizinho da lista de vizinhos da posição atual
        tiles[i][j].neighbours.splice( tiles[i][j].neighbours.indexOf(neighbor), 1 );

        // remove a posição atual da lista do vizinho
        neighbor.neighbours.splice( neighbor.neighbours.indexOf(tiles[i][j]), 1 );

        // executa o processo no vizinho
        maze(neighbor.col,neighbor.row);

        // busca os vizinhos que ainda estão disponíveis
        available = getAvailable(i,j);
    }
}

// função para gerar o labirinto
generate=function() {
    // cria os tiles com sua posição, lista de vizinhos e se ele foi visitado
    for (var i=0; i<COLS; i++) {
        tiles[i] = [];
        for (var j=0; j<ROWS; j++) {
            tiles[i][j] = {row:j,col:i,visited:false,neighbours:[]}
        }
    }

    // adiciona os vizinhos nas listas
    for (var i=0; i<COLS; i++) {
        for (var j=0; j<ROWS; j++) {
            if (i>0) tiles[i][j].neighbours.push(tiles[i-1][j]); // a oeste
            if (j>0) tiles[i][j].neighbours.push(tiles[i][j-1]); // ao norte
            if (i<COLS-1) tiles[i][j].neighbours.push(tiles[i+1][j]); // ao leste
            if (j<ROWS-1) tiles[i][j].neighbours.push(tiles[i][j+1]); // sao sul
        }
    }

    // inicio o processo de criação a partir do primeira posição
    maze(0,0);
    var maze_map = new Array(COLS);

    for (var i = 0; i < COLS; i++) {
      maze_map[i] = new Array(ROWS);
    }
    // desenha o labirinto
    // var canvas = document.getElementById("gameCanvas");
    // var ctx = canvas.getContext("2d");
    // ctx.clearRect(0,0,800,600);

    for (var i=0; i<COLS; i++) {
        for (var j=0; j<ROWS; j++) {
            // var px = i*SIZE+10;
            // var py = j*SIZE+15;
            var tile = tiles[i][j];
            //
            // ctx.beginPath();
            // ctx.moveTo(px,py);


          // norte
          if (j > 0 && tile.neighbours.indexOf(tiles[i][j - 1]) < 0)
            // ctx.moveTo(px+SIZE,py);
            maze_map[i][j - 1] = 0;
          else
            // ctx.lineTo(px+SIZE,py);
            maze_map[i][j - 1] = 1;

          // leste
          if (i < COLS - 1 && tile.neighbours.indexOf(tiles[i + 1][j]) < 0)
            // ctx.moveTo(px+SIZE,py+SIZE);
            maze_map[i][j] = 0;
          else
            // ctx.lineTo(px+SIZE,py+SIZE);
            maze_map[i][j] = 1;

          // sul
          if (j < ROWS - 1 && tile.neighbours.indexOf(tiles[i][j + 1]) < 0)
            // ctx.moveTo(px,py+SIZE);
            maze_map[i][j + 1] = 0;
          else

            // ctx.lineTo(px,py+SIZE);
            maze_map[i][j + 1] = 1;

          // oeste
          if (i > 0 && tile.neighbours.indexOf(tiles[i - 1][j]) < 0)
            // ctx.moveTo(px,py);
            maze_map[i][j] = 0;
          else
            // // ctx.lineTo(px,py);
            //
            maze_map[i][j] = 1;
          // // ctx.stroke();
        }
      }
      //  console.log(maze_map);
      maze_map[1][1]='P';
      return maze_map;
    }

// });
