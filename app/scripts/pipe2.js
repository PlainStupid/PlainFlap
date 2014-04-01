window.Pipe2 = (function() {
    'use strict';

    var INITIAL_FIRSTX_POS = 163.6;
    var INITIALX_POS = 102.4;
    var INITIALY_POS = 0;
    var SPEED = 0;
    var COUNT = 0;

    var Pipe2 = function(el, game) {
        this.el = el;
        this.game = game;
        this.pos = { x: 0, y: 0 };
    };
    Pipe2.prototype.reset = function() {
        this.pos.x = INITIAL_FIRSTX_POS;
        this.pos.y = INITIALY_POS;
        this.el.css('transform', 'translateZ(0) translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');
    };

    Pipe2.prototype.onFrame = function() {
		if(COUNT <= SPEED)
		{
			COUNT++;
		}
		else
		{
			this.pos.x -= 1;
			COUNT = 0;
		}

		if(this.pos.x <= -20)
		{
			this.pos.x = INITIALX_POS;
		}

		// Update UI
		this.el.css('transform', 'translateZ(0) translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');
    };
    return Pipe2;
})();