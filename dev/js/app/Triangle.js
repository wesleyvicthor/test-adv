define(['../app/Polygon'], function (Polygon) {
    function Triangle(contextId) {
        Polygon.call(this, contextId);
        this.sides(3);
    }

    Triangle.prototype = Object.create(Polygon.prototype);
    Triangle.prototype.constructor = Triangle;

    return Triangle;
});
