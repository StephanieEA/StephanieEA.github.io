var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function Block (x, y, width, height){
  this.x = x
  this.y = y
  this.width = width
  this.height = height
}

Block.prototype.draw = function (){
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Block.prototype.moveDown = function (){
  this.y++;
  if (this.y > 280) {
  return this.moveUp();
  }
  else {
  return this;
}}

Block.prototype.moveUp = function (){
  this.y--;
  return this;
}

var blocks = [];
blocks.push(new Block(50, 50, 20, 20));
blocks.push(new Block(100, 50, 20, 20));

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  blocks.forEach(function (block) {
    block.draw().moveDown();
  });
  requestAnimationFrame(gameLoop);
  });

canvas.addEventListener('click', function (event) {
  var click = getClickPosition(event);
  blocks.push(new Block(click.x, click.y, 10, 10));
});



//  Starting Example
// var x = 50;
// var y = 50;
// var width = 10;
// var height = 10;
//
//
//
// requestAnimationFrame(function gameLoop() {
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   context.fillRect(x, y++, width, height);
//   requestAnimationFrame(gameLoop);
// });
