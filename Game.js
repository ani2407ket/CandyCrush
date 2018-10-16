
var Game = {
	grid : [],
	row : 5,
	cols : 5,
	init : function(){
		for(let i = 0; i < this.row; i++){
			this.grid[i] = [];
			for(let j = 0; j < this.cols; j++){
				this.grid[i][j] = 0;
			}
		}
	},
};
Game.init();
console.log(Game);
