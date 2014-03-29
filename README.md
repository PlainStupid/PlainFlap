#Programming assignment 4

In this assignment, your task is to write a video game, using JavaScript and HTML5. It should use transformed DOM elements, and use object-oriented design for the JavaScript code.

The game should play mostly the same as Flappy Bird. Try it to see how it should work. Some implementation details that you should emulate.

* The player character always stays in the same x position. Clicking space bar, clicking or tapping the screen makes the character jump up by a small amount, otherwise it falls down. 20%
* Pipes and the ground slowly move to the left. 10%
* If the player collides with the ground or a pipe, he loses instantly. Player character has a large collision box and his flapping barely fit the gaps, making the game very difficult. 10%
* Gets one point for every gap that the player successfully passes. 5%
* If a player loses he should see his score and a button which starts the game again. 10%

Additional requirements.

* All moving elements should be hardware accelerated. 10%
* There should be a background element moving in paralax to the foreground, f.ex. a repeating cloud image. 10%
* The character rotates into his direction. The player should either have a sprite animation or some element (like a wing) which animates when flapping.  10%
* Background music and sound effects for flapping and colliding. Mute support. 15%

Bonus points.

* The game is responsive, scales down and playable on mobile and tablets. 20%
* Other gameplay innovations are rated by the complexity of implementation.

##Hand-in

Hand in a single archive file containing all files necessary to run the application (i.e. all .html, .js, .css and others (images/fonts etc.)).

## Setup

```
npm install
bower install
grunt server
```
