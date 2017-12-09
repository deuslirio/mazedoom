function transposta(m) {
  // console.log(m);
  m = m.map(function(arr) {
    return arr.slice(0);
  });

  for (i = 0; i < m.length; i++) {
    for (j = i + 1; j < m[i].length; j++) {
      if (j != i) {
        aux = m[i][j];
        m[i][j] = m[j][i];
        m[j][i] = aux;
      }
    }
  }
  return m;
}

function refletida(m) {
  // console.log(m);
  m = m.map(function(arr) {
    return arr.slice(0);
  });

  for (i = 0; i < m.length; i++) {
    m[i] = m[i].reverse();

  }
  return m;
}

matriz_f_n = function(m) {
  // console.log(m);
  m = m.map(function(arr) {
    return arr.slice(0);
  });

  var result_matriz
  switch (vision_indice) {
    case 0:
      //  result_matriz = get_sub_matriz(m, x - 9, y - 9, x + 1, y + 1);

      result_matriz = m;

      // result_matriz = refletida(m)
      // result_matriz = transposta(result_matriz)
      // result_matriz = refletida(result_matriz)
      break;
    case 1:
      // break;
    case 2:
    // result_matriz = m;

      result_matriz = refletida(m)
      // result_matriz = refletida(result_matriz)
      break;
    case 3:
      break;
    case 4:
    result_matriz = refletida(m)
    result_matriz = transposta(result_matriz)
    result_matriz = refletida(result_matriz)
      break;
    case 5:
      break;
    case 6:
       result_matriz = transposta(m);
       result_matriz = refletida(result_matriz)

      break;
    case 7:
      break;
    default:

  }

  result_matriz_dist = vision_dist(result_matriz);
// Meteor.call('log', result_matriz, function(error, result) {});
// Meteor.call('log', result_matriz_dist, function(error, result) {});

  final_vision = new Array(10)
  for (var i = 0; i < COLS; i++) {
    final_vision[i] = []
  }

  for (var i = 9; i >= 0; i--) {
    // final_vision[i]=new Array(11)
    for (var j = 0; j < 10; j++) {

      if (result_matriz_dist[i][j] < 10)
        final_vision[result_matriz_dist[i][j]].push(result_matriz[i][j])
    }
  }

  // Meteor.call('log')
  // result_matriz_dist = vision_dist(result_matriz);
  // // console.log(result_matriz_dist)
  // final_vision = new Array(10)
  // for (var i = 0; i < COLS; i++) {
  //   final_vision[i] = new Array(10)
  // }
  //
  // for (var i = 9; i >= 0; i--) {
  //   // final_vision[i]=new Array(11)
  //   for (var j = 0; j < 10; j++) {
  //
  //     if (result_matriz_dist[i][j] < 10)
  //       final_vision[result_matriz_dist[i][j]].push(result_matriz[i][j])
  //   }
  // }
  // Meteor.call('log', final_vision, function(error, result) {});

  console.log(final_vision);
  return final_vision;
}
