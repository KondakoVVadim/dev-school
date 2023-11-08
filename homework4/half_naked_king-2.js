class Vector {
  constructor(arr) {
    this.arr = arr;
  }

  add(arr2) {
    if (this.arr.length === arr2.arr.length) {
      const sum = [];
      for (let i = 0; i < arr2.arr.length; i++) {
        sum[i] = this.arr[i] + arr2.arr[i];
      }
      return new Vector(sum);
    } else {
      console.log(error);
      return null;
    }
  }

  subtract(arr2) {
    if (this.arr.length === arr2.arr.length) {
      const sub = [];
      for (let i = 0; i < arr2.arr.length; i++) {
        sub[i] = this.arr[i] - arr2.arr[i];
      }
      return new Vector(sub);
    } else {
      console.log(error);
      return null;
    }
  }

  dot(arr2) {
    if (this.arr.length === arr2.arr.length) {
      let dot = 0;
      for (let i = 0; i < arr2.arr.length; i++) {
        dot += this.arr[i] * arr2.arr[i];
      }
      return dot;
    } else {
      console.log(error);
      return null;
    }
  }

  norm() {
    let norm = 0;
    for (let i = 0; i < this.arr.length; i++) {
      norm += this.arr[i] ** 2;
    }
    return Math.sqrt(norm);
  }

  equals(arr2) {
    if (this.arr.length !== arr2.arr.length) {
      return false;
    }
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] !== arr2.arr[i]) {
        return false;
      }
    }
    return true;
  }
  toString() {
    return '(' + this.arr.join(',') + ')';
  }
}

var a = new Vector([1,2]);
var b = new Vector([3,4]);
a.add(b).equals(new Vector([4,6]))