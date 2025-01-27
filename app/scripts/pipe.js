window.Pipe = (function() {
    'use strict';
    var INITIALX_POS = 102.4;
    var SPEED = 0;
    var COUNT = 0;

    var Pipe = function(el, game) {
        this.el = el;
        this.game = game;
        this.pos = { x: 0, y: 0 };
    };
    Pipe.prototype.reset = function() {
        this.pos.x = INITIALX_POS;
        this.pos.y = -1 * (Math.floor(Math.random() * (93 - 75 + 1)) + 75);
        this.el.css('transform', 'translateZ(0) translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');
    };

    Pipe.prototype.onFrame = function() {

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
            this.pos.y = -1 * (Math.floor(Math.random() * (93 - 75 + 1)) + 75);
		}

		// Update UI
		this.el.css('transform', 'translateZ(0) translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');
    };
    return Pipe;
})();

