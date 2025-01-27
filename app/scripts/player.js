window.Player = (function() {
    'use strict';

    var Controls = window.Controls;
    //var is_touch_device = 'ontouchstart' in document.documentElement;

    // All these constants are in em's, multiply by 10 pixels
    // for 1024x576px canvas.
    var HEIGHT = 20;
    var GRAVITYSPEED = 1;
    var INITIAL_POSITION_X = 30;
    var INITIAL_POSITION_Y = 10;
    //var OPEN = false;


    var Player = function(el, game) {
        this.el = el;
        this.game = game;
        this.pos = {
            x: 0,
            y: 0
        };
    };

    /**
     * Resets the state of the player for a new game.
     */
    Player.prototype.reset = function() {
        GRAVITYSPEED = 1;
        this.pos.x = INITIAL_POSITION_X;
        this.pos.y = INITIAL_POSITION_Y;
    };

    Player.prototype.onFrame = function(delta) {



        if (Controls.didJump()) {
            GRAVITYSPEED = -50;
            this.pos.y += delta * GRAVITYSPEED;
            this.el.toggleClass('jump', true);
            document.getElementById('bird').play();
        } else {
            //document.getElementById('Dabs').style.backgroundImage="url(../images/daniel.png)";
            this.el.toggleClass('jump', false);
            GRAVITYSPEED += 3;
            this.pos.y += delta * GRAVITYSPEED;
        }

        //if(Controls.)

        this.checkCollisionWithBounds();
        //this.checkCollisionWithPipes();

        // Update UI
        this.el.css('transform', 'translateZ(0) translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');
    };

    Player.prototype.checkCollisionWithBounds = function() {
        if (this.pos.y + HEIGHT > this.game.WORLD_HEIGHT) {
            return this.game.gameover();
        }
        if (this.pos.y <= 0) {
            this.pos.y = 0;
            GRAVITYSPEED = 0;
        }
    };

    return Player;

})();
