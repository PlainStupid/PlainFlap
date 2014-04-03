window.Game = (function() {
    'use strict';

    var score = 0;
    var scorecount = 0;
    var begin = true;


    /**
     * Main game class.
     * @param {Element} el jQuery element containing the game.
     * @constructor
     */
    var Game = function(el) {
        this.el = el;
        this.player = new window.Player(this.el.find('.Player'), this);
        this.pipe = new window.Pipe(this.el.find('.Pipe'), this);
        this.pipe2 = new window.Pipe2(this.el.find('.Pipe2'), this);
        this.Canvas = this.el.find('.Sky');

        this.isPlaying = false;
        this.skyPos = 0;

        // Cache a bound onFrame since we need it each frame.
        this.onFrame = this.onFrame.bind(this);
    };

    /**
     * Runs every frame. Calculates a delta and allows each game
     * entity to update itself.
     */
    Game.prototype.onFrame = function() {
        // Check if the game loop should stop.
        if (!this.isPlaying) {
            return;
        }
        scorecount += 1;

        if (begin === true) {
            if (scorecount === 150) {
                score += 1;
                document.getElementById('score').innerHTML = score;
                scorecount = 0;
                begin = false;
            }
        } else {
            if (scorecount === 123) {
                score += 1;
                document.getElementById('score').innerHTML = score;
                scorecount = 0;
            }
        }

        // Calculate how long since last frame in seconds.
        var now = +new Date() / 1000,
            delta = now - this.lastFrame;
        this.lastFrame = now;


        // Update game entities.
        this.player.onFrame(delta);
        this.pipe.onFrame();
        this.pipe2.onFrame();

        // Request next frame.
        window.requestAnimationFrame(this.onFrame);
    };

    /**
     * Starts a new game.
     */
    Game.prototype.start = function() {
        this.reset();
        // Restart the onFrame loop
        this.lastFrame = +new Date() / 1000;
        window.requestAnimationFrame(this.onFrame);
        this.isPlaying = true;
        begin = true;
    };

    /**
     * Resets the state of the game so a new game can be started.
     */
    Game.prototype.reset = function() {
        scorecount = 0;
        score = 0;
        document.getElementById('sound').volume = 1;
        document.getElementById('score').innerHTML = score;
        document.getElementById('score').style.visibility = 'visible';
        this.player.reset();
        this.pipe.reset();
        this.pipe2.reset();
        begin = true;
        this.el.find('.Ground').css('-webkit-animation-play-state', 'running');

    };

    /**
     * Signals that the game is over.
     */
    Game.prototype.gameover = function() {
        this.isPlaying = false;
        document.getElementById('sound').volume = 0.3;
        document.getElementById('fail').play();
        // Should be refactored into a Scoreboard class.
        var that = this;
        this.el.find('.Ground').css('-webkit-animation-play-state', 'paused');
        var scoreboardEl = this.el.find('.Scoreboard');
        document.getElementById('MyScoreboard').innerHTML = 'Score: ' + score;
        document.getElementById('score').style.visibility = 'hidden';
        scoreboardEl
            .addClass('is-visible')
            .find('.Scoreboard-restart')
            .one('click', function() {
                scoreboardEl.removeClass('is-visible');
                that.start();
            });
    };

    /**
     * Some shared constants.
     */
    Game.prototype.WORLD_WIDTH = 102.4;
    Game.prototype.WORLD_HEIGHT = 59;

    return Game;
})();
