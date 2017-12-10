function filtro_curvo(m) {
  m = m.map(function(arr) {
    return arr.slice(0);
  });
  var x1, y1;
  for (var i = 0; i < m.length; i++) {
    for (var j = 0; j < m[i].length; j++) {
      if (m[i][j] == 'P') {
        x1 = i;
        y1 = j;
      }
    }
  }
  aux = new Array(m.length)
  for (i = 0; i < m.length; i++) {
    aux[i] = new Array(m[i].length).fill(0)
  }

  for (i = 0; i < m.length; i++) {
    for (j = 0; j < m[i].length; j++) {
      // console.log(x1 - j + i);
      if ((x1 - j + i) >= 0 && (x1 - j + i)<m.length) {
        aux[i][j] = m[x1 - j + i][Math.max(i, j)];
      }
    }
  }
  //  Meteor.call('log', aux, function(error, result) {});
  return aux;
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
      // if (vision_indice % 2 == 0) {
        if (Math.abs(i) > Math.abs(j)) {

          m_aux[i][j] = Math.abs(y) - Math.abs(j)

        } else {

          m_aux[i][j] = Math.abs(x) - Math.abs(i)

          // m_aux[i][j] = Math.floor( Math.sqrt(  Math.pow(x - i, 2) + Math.pow(y - j, 2) )  );
        }
      // } else {
      //   if (vision_indice == 3 || vision_indice == 7)
      //     m_aux[i][j] = Math.abs(Math.abs(y) - Math.abs(j));
      //   else if (vision_indice == 1 || vision_indice == 5)
      //     m_aux[i][j] = Math.abs(Math.abs(x) - Math.abs(i));
      //
      // }
    }
  }

  return m_aux;
}

function transposta(m) {
  // console.log(m);
  m = m.map(function(arr) {
    return arr.slice(0);
  });
  // Meteor.call('log', m, function(error, result) {});

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
      result_matriz = transposta(m)
      result_matriz = refletida(result_matriz)
      result_matriz = filtro_curvo(result_matriz);

      result_matriz = refletida(result_matriz)
      result_matriz = transposta(result_matriz)
      result_matriz = refletida(result_matriz)
      break;
    case 2:
      // result_matriz = m;

      result_matriz = refletida(m)
      // result_matriz = refletida(result_matriz)
      break;
    case 3:
    result_matriz = filtro_curvo(m);

    result_matriz = refletida(result_matriz)
    result_matriz = transposta(result_matriz)
    result_matriz = refletida(result_matriz)
      break;
    case 4:
      result_matriz = refletida(m)
      result_matriz = transposta(result_matriz)
      result_matriz = refletida(result_matriz)
      break;
    case 5:
    result_matriz = transposta(m)
    result_matriz = filtro_curvo(result_matriz);

    result_matriz = refletida(result_matriz)
    result_matriz = transposta(result_matriz)
    result_matriz = refletida(result_matriz)
      break;
    case 6:
      result_matriz = transposta(m);
      result_matriz = refletida(result_matriz)

      break;
    case 7:
    result_matriz = refletida(m)
    result_matriz = filtro_curvo(result_matriz);

    result_matriz = refletida(result_matriz)
    result_matriz = transposta(result_matriz)
    result_matriz = refletida(result_matriz)
      break;
    default:

  }

  result_matriz_dist = matriz_dist(result_matriz);
  // Meteor.call('log', result_matriz_dist, function(error, result) {});
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
