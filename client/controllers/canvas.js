import {
  Template
} from 'meteor/templating';
// import {
//   ReactiveVar
// } from 'meteor/reactive-var';
//
// import {
//   Random
// } from 'meteor/random'
// import '/client/templates/canvas.html';




import '/client/controllers/maze_gen.js';

// import '/server/maze_gen.js';

import '/client/controllers/player_vision.js';
import '/client/controllers/matriz_forma_normal.js';
import '/client/controllers/movement.js';


// console.log(map_vision);

// console.log(vision_d);



Template.canvas.onCreated(function canvasOnCreated() {
  document.title = 'MooDDaB';
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  map = generate();


  //  console.log(map);


});


Template.canvas.onRendered(function canvasOnRendered() {
  //  console.log(vision_d);
  // console.log(vision_v);
  canvas = new fabric.StaticCanvas('c', {
    backgroundColor: 'rgb(100,100,200)',
    selectionColor: 'black',
    // selectionLineWidth: 2,
    height: 600,
    width: 800
  });
  // draw_walls();
  update_canvas();
  // for (let i = map_vision.length - 1; i > 0; i--) {
  //   for (let j = 0; j < map_vision[i].length; j++) {
  //     if (map_vision[i][j] == 2) {
  //       let rect = new fabric.Rect({
  //         left: (canvas.width / map_vision[i].length) * ((map_vision[i].length - 1) - j),
  //         top: canvas.height / 2,
  //         fill: 'green',
  //         width: canvas.width / map_vision[i].length,
  //         height: canvas.height / i,
  //
  //         originY: 'center',
  //         centeredScaling: true
  //       });
  //       canvas.add(rect);
  //     }
  //   }
  // }

});

Template.canvas.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.body.events({
  "keypress": function(e, data, tpl) {
    console.log(e);
    if (e.keyCode === 37) {
      vision_indice = (vision_indice + 7) % 8;
      console.log(vision_indice);
      update_canvas();
      return false;

    }
    if (e.keyCode === 38) {
      vision_indice = 2;
      update_canvas();

      return false;
    }
    if (e.keyCode === 39) {

      vision_indice = (vision_indice + 1) % 8;
      console.log(vision_indice);
      update_canvas();
      return false;
    }
    if (e.keyCode === 40) {
      vision_indice = 6;

      update_canvas();
      return false;
    }
    if (e.key == "d"||e.key == "D") {
      // console.log(map)
      map=m_direita(map);
      Meteor.call('log', map, function(error, result) {});

      update_canvas();
      return false;

    }
    if (e.key == "w"||e.key == "W") {
      // console.log(map)
      map=m_frente(map);
      Meteor.call('log', map, function(error, result) {});

      update_canvas();
      return false;

    }
    if (e.key == "a"||e.key == "A") {
      // console.log(map)
      map=m_esquerda(map);
      Meteor.call('log', map, function(error, result) {});

      update_canvas();
      return false;

    }
    if (e.key == "s"||e.key == "S") {
      // console.log(map)
      map=m_tras(map);
      Meteor.call('log', map, function(error, result) {});

      update_canvas();
      return false;

    }
    // e -> jquery event
    // data -> Blaze data context of the DOM element triggering the event handler
    // tpl -> the parent template instance for the target element
  }
})

// Template.canvas.events({
//   'keypress canvas': function(e) {
//     console.log('key', e);
//   },
//   'keyup input': function(event) {
//       if (event.which === 13) {
//          alert('you hit enter');
//          event.stopPropagation();
//          return false;
//       }
//    },
//
// });
update_canvas = function() {
  //console.log(vision_indice)
  // Meteor.call('log', map, function(error, result) {});
  canvas.clear();



  let roof = new fabric.Rect({
    left: 0,
    top: 0,
    fill: '#aaaaaa',
    width: canvas.width,
    height: canvas.height / 2,
    centeredScaling: true,
    strokeWidth: 0
  });

  roof.setGradient('fill', {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 1 + canvas.height / 2,
    colorStops: {
      0: '#001528',
      1: '#000'
    }
  });
  canvas.add(roof);


  let floor = new fabric.Rect({
    left: 0,
    top: canvas.height / 2,
    fill: '#aaaaaa',
    width: canvas.width,
    height: canvas.height / 2,
    centeredScaling: true,
    strokeWidth: 0

  });

  floor.setGradient('fill', {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: canvas.height,
    colorStops: {
      0: '#000',
      1: '#001528'
    }
  });

  // function loadPattern(url) {
  //   fabric.util.loadImage(url, function(img) {
  //     floor.set('fill', new fabric.Pattern({
  //       source: img,
  //       repeat: 'repeat'
  //     }));
  //     canvas.renderAll();
  //   });
  // }
  // loadPattern('/images/grass_pattern.jpg');
  // loadPattern('/images/stonesmin.png')
  canvas.add(floor);

  // map[COLS/2][ROWS/2]='P';

  // mp2=map.slice()


  vision_v = vision(map);
  // console.log(vision_v);
  vision_d = vision_dist(vision_v);
  // Meteor.call('log', vision_d, function(error, result) {});

  vision_v = matriz_f_n(vision_v);
  vision_d = vision_dist(vision_v);
  for (let i = vision_v.length - 1; i > 0; i--) {
    for (let j = 0; j < vision_v[i].length; j++) {


      if (vision_v[i][j] == 1) {


        let rect = new fabric.Rect({
          left: (canvas.width / vision_v[i].length) * j,
          top: canvas.height / 2,
          fill: 'rgb(' + 255 / i + ',0,0)',
          width: canvas.width / vision_v[i].length,
          height: canvas.height / i,
          originY: 'center',
          centeredScaling: true,
          strokeWidth: 0
        });
        canvas.add(rect);
      }
    }
  }
}
