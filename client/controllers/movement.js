m_direita = function(m) {

  m = m.map(function(arr) {
    return arr.slice(0);
  });

  for (var i = 0; i < m.length; i++) {
    for (var j = 0; j < m[i].length; j++) {
      if (m[i][j] == 'P') {
        x = i;
        y = j;
      }
    }
  }
  // console.log(x,y);
  switch (vision_indice) {
    case 0:
      if (m[x - 1][y + 1] == 0) {
        m[x][y] = 0;
        m[x - 1][y + 1] = 'P';
      }

      break;
    case 1:
      if (m[x][y + 1] == 0) {
        m[x][y] = 0;
        m[x][y + 1] = 'P';
      }

      break;
    case 2:
      if (m[x + 1][y + 1] == 0) {
        m[x][y] = 0;
        m[x + 1][y + 1] = 'P';
      }
      break;
    case 3:
      if (m[x + 1][y] == 0) {
        m[x][y] = 0;
        m[x + 1][y] = 'P';
      }
      break;
    case 4:
      if (m[x + 1][y - 1] == 0) {
        m[x][y] = 0;
        m[x + 1][y - 1] = 'P';
      }
      break;
    case 5:
      if (m[x][y - 1] == 0) {

        m[x][y] = 0;
        m[x][y - 1] = 'P';
      }
      break;
    case 6:
      if (m[x - 1][y - 1] == 0) {

        m[x][y] = 0;
        m[x - 1][y - 1] = 'P';
      }
      break;
    case 7:
      if (m[x - 1][y] == 0) {

        m[x][y] = 0;
        m[x - 1][y] = 'P';
      }
      break;
    default:
  }

  return m;
}
m_esquerda = function(m) {

  m = m.map(function(arr) {
    return arr.slice(0);
  });

  for (var i = 0; i < m.length; i++) {
    for (var j = 0; j < m[i].length; j++) {
      if (m[i][j] == 'P') {
        x = i;
        y = j;
      }
    }
  }
  // console.log(x,y);
  switch (vision_indice) {
    case 0:
      if (m[x + 1][y - 1] == 0) {

        m[x][y] = 0;
        m[x + 1][y - 1] = 'P';
      }
      break;
    case 1:
      if (m[x][y - 1] == 0) {

        m[x][y] = 0;
        m[x][y - 1] = 'P';
      }
      break;
    case 2:
      if (m[x - 1][y - 1] == 0) {

        m[x][y] = 0;
        m[x - 1][y - 1] = 'P';
      }
      break;
    case 3:
      if (m[x - 1][y] == 0) {

        m[x][y] = 0;
        m[x - 1][y] = 'P';
      }
      break;
    case 4:
      if (m[x - 1][y + 1] == 0) {

        m[x][y] = 0;
        m[x - 1][y + 1] = 'P';
      }
      break;
    case 5:
      if (m[x][y + 1] == 0) {

        m[x][y] = 0;
        m[x][y + 1] = 'P';
      }
      break;
    case 6:
      if (m[x + 1][y + 1] == 0) {

        m[x][y] = 0;
        m[x + 1][y + 1] = 'P';
      }
      break;
    case 7:
      if (m[x + 1][y] == 0) {

        m[x][y] = 0;
        m[x + 1][y] = 'P';
      }
      break;
    default:
  }

  return m;
}
m_frente = function(m) {
  m = m.map(function(arr) {
    return arr.slice(0);
  });

  for (var i = 0; i < m.length; i++) {
    for (var j = 0; j < m[i].length; j++) {
      if (m[i][j] == 'P') {
        x = i;
        y = j;
      }
    }
  }
  switch (vision_indice) {
    case 0:
      if (m[x - 1][y - 1] == 0) {

        m[x][y] = 0;
        m[x - 1][y - 1] = 'P';
      }
      break;
    case 1:
      if (m[x - 1][y] == 0) {

        m[x][y] = 0;
        m[x - 1][y] = 'P';
      }
      break;
    case 2:
      if (m[x - 1][y + 1] == 0) {

        m[x][y] = 0;
        m[x - 1][y + 1] = 'P';
      }
      break;
    case 3:
      if (m[x][y + 1] == 0) {

        m[x][y] = 0;
        m[x][y + 1] = 'P';
      }
      break;
    case 4:
      if (m[x + 1][y + 1] == 0) {

        m[x][y] = 0;
        m[x + 1][y + 1] = 'P';
      }
      break;
    case 5:
      if (m[x + 1][y] == 0) {

        m[x][y] = 0;
        m[x + 1][y] = 'P';
      }
      break;
    case 6:
      if (m[x + 1][y - 1] == 0) {

        m[x][y] = 0;
        m[x + 1][y - 1] = 'P';
      }
      break;
    case 7:
      if (m[x][y - 1] == 0) {

        m[x][y] = 0;
        m[x][y - 1] = 'P';
      }
      break;
    default:
  }

  return m;

}
m_tras = function(m) {
  m = m.map(function(arr) {
    return arr.slice(0);
  });

  for (var i = 0; i < m.length; i++) {
    for (var j = 0; j < m[i].length; j++) {
      if (m[i][j] == 'P') {
        x = i;
        y = j;
      }
    }
  }
  switch (vision_indice) {
    case 0:
      if (m[x + 1][y + 1] == 0) {

        m[x][y] = 0;
        m[x + 1][y + 1] = 'P';
      }
      break;
    case 1:
      if (m[x + 1][y] == 0) {

        m[x][y] = 0;
        m[x + 1][y] = 'P';
      }
      break;
    case 2:
      if (m[x + 1][y - 1] == 0) {

        m[x][y] = 0;
        m[x + 1][y - 1] = 'P';
      }
      break;
    case 3:
      if (m[x][y - 1] == 0) {

        m[x][y] = 0;
        m[x][y - 1] = 'P';
      }
      break;
    case 4:
      if (m[x - 1][y + 1] == 0) {

        m[x][y] = 0;
        m[x - 1][y + 1] = 'P';
      }
      break;
    case 5:
      if (m[x - 1][y] == 0) {

        m[x][y] = 0;
        m[x - 1][y] = 'P';
      }
      break;

    case 6:
    if (m[x - 1][y + 1]== 0) {

      m[x][y] = 0;
      m[x - 1][y + 1] = 'P';
    }
      break;
    case 7:
    if (m[x][y + 1]== 0) {

      m[x][y] = 0;
      m[x][y + 1] = 'P';
    }
      break;
    default:
  }

  return m;
}
