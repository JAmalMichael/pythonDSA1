class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.table = Array.from({ length: size }, () => []); //each bucket is an array of its own.
  }

  // return sum(ord(a) for a in str(key)) % self.size
  _hash(key) {
    key = key.toString();
    let sum = 0;
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }
    return sum % this.size;
  }

  _put(key, value) {
    const index = this._hash(key);
    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        pair[1] = value; //update value if key is same
        return;
      }
    }
    this.table[index].push([key, value]);
  }

  _get(key) {
    const index = this._hash(key);
    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        return pair[1];
      }
    }
    return null; //nothing found
  }

  _remove(key) {
    const index = this._hash(key);
    this.table[index] = this.table[index].filter((pair) => pair[0] !== key);
  }

  _display() {
    this.table.forEach((bucket, i) => {
      console.log(bucket, i);
    });
  }
}

const ht = new HashTable(10);
ht._put("apple", 10);
ht._put("banana", 20);
ht._put("orange", 30);

console.log("banana ->", ht._get("banana"));
ht._remove("apple");
ht._display();
