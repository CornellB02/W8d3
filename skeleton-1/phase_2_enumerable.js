Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}

function times2(num) {
  console.log(num * 2);
}

// let a = [14,31,123,22,2].myEach(times2)
// console.log(a)