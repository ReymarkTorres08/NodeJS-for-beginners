function User() {
	this.name = "";
	this.life = 100;
	this.giveLife = function(targetPlayer) {
		targetPlayer.life += 1;
		console.log(this.name + " gave 1 life to " + targetPlayer.name);
	};
}

var R = new User();
var L = new User();

R.name = "Reymark";
L.name = "Lady";

R.giveLife(L);
console.log(R.name + ': ' + R.life);
console.log(L.name + ': ' + L.life);

User.prototype.uppercut = function uppercut(targetPlayer){
	targetPlayer.life -= 3;
	console.log(this.name + " just hurted " + targetPlayer.name + " by an uppercut");
};

L.uppercut(R);
console.log(R.name + ': ' + R.life);
console.log(L.name + ': ' + L.life);

//  You can add properties to all objects
User.prototype.magic = 60;
console.log(R.magic);
console.log(L.magic);