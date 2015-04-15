'use strict';
define(
  ['../app/Polygon', '../app/Triangle', '../app/Square'],
  function (Polygon, Triangle, Square) {
    var polygon = new Polygon('polygon');
    polygon.sides(8);

    new Square('square');
    new Triangle('triangle');
});
