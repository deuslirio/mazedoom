draw_walls = function() {
  limit_array = [0, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  //
  switch (vision_indice) {
    case 0:
      for (var i = 9; i >= 0; i--) {
        for (var j = 0; j < 10; j++) {
          if (limit_array[vision_d[i][j]] > 0) {
            if (vision_v[i][j] == 1) {
              // console.log(vision_d[i][j])

              let rect = new fabric.Rect({

                left: (canvas.width / ((2 * vision_d[i][j]) + 1)) * (((2 * vision_d[i][j]) + 1)-(limit_array[vision_d[i][j]])),
                top: canvas.height / 2,
                fill: 'rgb('+255/vision_d[i][j]+',0,0)',

                width: canvas.width / ((2 * vision_d[i][j]) + 1),
                height: canvas.height / vision_d[i][j],
                originY: 'center',
                centeredScaling: true
              });

              canvas.add(rect);
            }
            limit_array[vision_d[i][j]]--;
            // console.log(limit_array[vision_d[i][j]])
          }
        }
      }
      break;
    case 1:
      break;
    case 2:
      for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
          if (limit_array[vision_d[i][j]] > 0) {
            if (vision_v[i][j] == 1) {
              // console.log(vision_d[i][j])

              let rect = new fabric.Rect({
                left: (canvas.width / ((2 * vision_d[i][j]) + 1)) * (((2 * vision_d[i][j]) + 1)-(limit_array[vision_d[i][j]])),

                top: canvas.height / 2,
                fill: 'rgb('+255/vision_d[i][j]+',0,0)',

                width: canvas.width / ((2 * vision_d[i][j]) + 1),
                height: canvas.height / vision_d[i][j],
                originY: 'center',
                centeredScaling: true
              });

              canvas.add(rect);
            }
            limit_array[vision_d[i][j]]--;
            // console.log(limit_array[vision_d[i][j]])
          }
        }
      }
      break;
    case 3:
      break;
    case 4:
    for (var i = 9; i >= 0; i--) {
      for (var j = 0; j < 10; j++) {
        if (limit_array[vision_d[i][j]] > 0) {
          if (vision_v[i][j] == 1) {
            // console.log(vision_d[i][j])

            let rect = new fabric.Rect({

              left: (canvas.width / ((2 * vision_d[i][j]) + 1)) * (((2 * vision_d[i][j]) + 1)-(limit_array[vision_d[i][j]])),
              top: canvas.height / 2,
              fill: 'rgb('+255/vision_d[i][j]+',0,0)',

              width: canvas.width / ((2 * vision_d[i][j]) + 1),
              height: canvas.height / vision_d[i][j],
              originY: 'center',
              centeredScaling: true
            });

            canvas.add(rect);
          }
          limit_array[vision_d[i][j]]--;
          // console.log(limit_array[vision_d[i][j]])
        }
      }
    }
      // for (var i = 0; i < 10; i++) {
      //   for (var j = 9; j >= 0; j--) {
      //     if (limit_array[vision_d[i][j]] > 0) {
      //       if (vision_v[i][j] == 1) {
      //         // console.log(vision_d[i][j])
      //
      //         let rect = new fabric.Rect({
      //
      //           // left: (canvas.width / ((2 * vision_d[i][j]) + 1)) * (limit_array[vision_d[i][j]] - 1),
      //            left: (canvas.width / ((2 * vision_d[i][j]) + 1)) * (((2 * vision_d[i][j]) + 1)-(limit_array[vision_d[i][j]])),
      //
      //           top: canvas.height / 2,
      //           fill: 'rgb('+255/vision_d[i][j]+',0,0)',
      //
      //           width: canvas.width / ((2 * vision_d[i][j]) + 1),
      //           height: canvas.height / vision_d[i][j],
      //           originY: 'center',
      //           centeredScaling: true
      //         });
      //
      //         canvas.add(rect);
      //       }
      //       limit_array[vision_d[i][j]]--;
      //       // console.log(limit_array[vision_d[i][j]])
      //     }
      //   }
      // }
      break;
    case 5:
      break;
    case 6:

    for (var i = 9; i >= 0; i--) {
      for (var j = 9; j >= 0; j--) {
        if (limit_array[vision_d[i][j]] > 0) {
          if (vision_v[i][j] == 1) {
            // console.log(vision_d[i][j])

            let rect = new fabric.Rect({

              left: (canvas.width / ((2 * vision_d[i][j]) + 1)) * (((2 * vision_d[i][j]) + 1)-(limit_array[vision_d[i][j]])),
              top: canvas.height / 2,
              fill: 'rgb('+255/vision_d[i][j]+',0,0)',
              width: canvas.width / ((2 * vision_d[i][j]) + 1),
              height: canvas.height / vision_d[i][j],
              originY: 'center',
              centeredScaling: true
            });

            canvas.add(rect);
          }
          limit_array[vision_d[i][j]]--;
          // console.log(limit_array[vision_d[i][j]])
        }
      }
    }
      break;
    case 7:
      break;
    default:


  }

}
