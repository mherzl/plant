
var plant = {
  type: 'seed',
  height: 0,
  alive: true,
  water: function(){if(this.type==='seed'){
      this.type='plant'}
      else {this.height += 2;}
  },
  feed: function(food){
      if(food === 'anti-freeze'){this.alive = false;}
      else {this.height += 1;}
  }
};

console.log(plant.type);
plant.water();
console.log(plant.height);
console.log(plant.type);
plant.water()
console.log(plant.height);
plant.water()
console.log(plant.height);
plant.water()
console.log(plant.height);

console.log(plant.alive);
