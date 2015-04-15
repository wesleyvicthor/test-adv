define(['../app/Polygon'], function (Polygon) {
    function Square(contextId) {
        Polygon.call(this, contextId);
        this.sides(4);
    }

    Square.prototype = Object.create(Polygon.prototype);
    Square.prototype.constructor = Square;

    return Square;
});
