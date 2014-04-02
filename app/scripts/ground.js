window.Ground = (function() {
    'use strict';
    var INITIALX_POS = 0;
    var INITIALY_POS = 50;
    var SPEED = 1;
    var COUNT = 0;

    var Ground = function(el, game) {
        this.el = el;
        this.game = game;
        this.pos = { x: 0, y: 0 };
    };
    Ground.prototype.reset = function() {
        this.pos.x = INITIALX_POS;
        this.pos.y = INITIALY_POS;
        this.el.css('transform', 'translateZ(0) translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');
    };

    Ground.prototype.onFrame = function() {
        this.pos.x -= 1;

        if(this.pos.x <= -100)
        {
            this.pos.x = INITIALX_POS;
        }

        // Update UI
        this.el.css('transform', 'translateZ(0) translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');
    };
    return Ground;
})();

