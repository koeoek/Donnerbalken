var gameOverFall = function(game){}

gameOverFall.prototype = {
  	create: function(){
		this.game.add.image(0, 0, 'logo_gameover_fall');
  		play = this.game.add.button(420, 275, "buttonimg", this.playTheGame, this);
  		this.game.add.button(420, 350, "buttonimg", this.showInstructions, this);
	},
	playTheGame: function(){
		stringCurrentLevel = currentLevel.toString();
		this.game.state.start('Level' + currentLevel);
	},
	showInstructions: function(){
		this.game.state.start("Menu");
	},
}