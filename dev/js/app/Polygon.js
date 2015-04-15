define(function () {
    function Polygon(contextId) {
        var context  = document.getElementById(contextId);

        if (null === context) {
            throw new Error('Element not found for id ' + contextId);
        }

        context = context.getContext('2d');
        context.strokeStyle = '#ff0';
        context.beginPath();

        this.context = context;
    }

    Polygon.prototype.sides = function (n) {

        if (n < 3 || undefined === n) {
            throw new Error('A Polygon can not have less than 3 sides!');
        }

        var angle = ((Math.PI * 2) / n);
        this.context.translate(100, 100);
        this.context.moveTo(50, 0);

        for (var i = 1; i < n; i++) {
            this.context.lineTo(50*Math.cos(angle*i), 50*Math.sin(angle*i));
        }

        this.context.closePath();
        this.context.fill();
    }

    return Polygon;
});
