vision_indice = 6;
var x;
var y;

function get_sub_matriz(matriz, i1, j1, i2, j2) {
  max_i = i2 - i1;
  max_j = j2 - j1;
  // console.log(max_i,max_j)
  var result = new Array(max_i);
  for (var i = 0; i < max_i; i++) {
    result[i] = new Array(max_j);
  }
  for (var i = 0; i < max_i; i++) {
    for (var j = 0; j < max_j; j++) {

      if (i1 + i >= 0 && j1 + j >= 0) {
        result[i][j] = matriz[i1 + i][j1 + j];
      } else {
        result[i][j] = 0;
      }

    }
  }
  return result;
}

function matriz_dist(matriz) {
  // console.log(matriz);
  matriz = matriz.map(function(arr) {
    return arr.slice(0);
  });
  var m_aux = matriz.map(function(arr) {
    return arr.slice(0);
  });
  //
  for (var i = 0; i < matriz.length; i++) {
    for (var j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] == 'P') {
        x = i;
        y = j;
      }
    }
  }


  // console.log(x, y);
  for (var i = 0; i < m_aux.length; i++) {
    for (var j = 0; j < m_aux[i].length; j++) {
      if (Math.abs(i) > Math.abs(j))

        m_aux[i][j] = Math.abs(y) - Math.abs(j)

      else

        m_aux[i][j] = Math.abs(x) - Math.abs(i)

      // m_aux[i][j] = Math.floor( Math.sqrt(  Math.pow(x - i, 2) + Math.pow(y - j, 2) )  );
    }
  }

  return m_aux;
}

function matriz_vision(m) {
  // console.log(m);
  m = m.map(function(arr) {
    return arr.slice(0);
  });

  for (var i = 0; i < COLS; i++) {
    for (var j = 0; j < ROWS; j++) {
      if (m[i][j] == 'P') {
        x = i;
        y = j;
      }
    }
  }
  var result_matriz
  switch (vision_indice) {
    case 0:
      result_matriz = get_sub_matriz(m, x - 9, y - 9, x + 1, y + 1);
      break;
    case 1:
      break;
    case 2:
      result_matriz = get_sub_matriz(m, x - 9, y, x + 1, y + 10);
      break;
    case 3:
      break;
    case 4:
      result_matriz = get_sub_matriz(m, x, y, x + 10, y + 10);
      break;
    case 5:
      break;
    case 6:
      result_matriz = get_sub_matriz(m, x, y - 9, x + 10, y + 1);
      break;
    case 7:
      break;
    default:

  }
  // Meteor.call('log', result_matriz, function(error, result) {});

  return result_matriz;
}


vision_dist = function(mp) {
  // console.log(mp);
  var mp = mp.map(function(arr) {
    return arr.slice(0);
  });

  var aux_dist = matriz_dist(mp)

  return aux_dist;
}

vision = function(mp) {
  //  console.log(mp);
  var mp = mp.map(function(arr) {
    return arr.slice(0);
  });

  var aux_vision = matriz_vision(mp);


  return aux_vision;
}
