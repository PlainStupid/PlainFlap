window.Player = (function() {
    'use strict';

    var Controls = window.Controls;

    // All these constants are in em's, multiply by 10 pixels
    // for 1024x576px canvas.
    var HEIGHT = 5;
    var JUMPHEIGHT = 10;
    var GRAVITYSPEED = 1;
    var INITIAL_POSITION_X = 30;
    var INITIAL_POSITION_Y = 25;

    var Player = function(el, game) {
        this.el = el;
        this.game = game;
        this.pos = { x: 0, y: 0 };
    };

    /**
     * Resets the state of the player for a new game.
     */
    Player.prototype.reset = function() {
        this.pos.x = INITIAL_POSITION_X;
        this.pos.y = INITIAL_POSITION_Y;
    };

    Player.prototype.onFrame = function(delta) {

        if (Controls.didJump()) {
            GRAVITYSPEED = -50;
            this.pos.y += delta * GRAVITYSPEED;
        }
        else
        {
            GRAVITYSPEED += 2;
            this.pos.y += delta * GRAVITYSPEED;
        }

        this.checkCollisionWithBounds();

        // Update UI
        this.el.css('transform', 'translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');
    };

    Player.prototype.checkCollisionWithBounds = function() {
        if (this.pos.y + HEIGHT > this.game.WORLD_HEIGHT) {
            return this.game.gameover();
        }
    };

    return Player;

})();
