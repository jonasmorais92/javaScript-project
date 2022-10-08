function somarXmenosY() {
      x = 20;
      y = 10;
      return function() {
        return x-y;
      }
}

var x=50;
var y=10;

var sub = somarXmenosY();
console.log(sub());