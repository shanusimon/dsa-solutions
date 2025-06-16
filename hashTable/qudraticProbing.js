class HashTable {
  constructor(size = 10) {
    this.table = new Array(size);
    this.size = size;
    this.count = 0;
    this.loadFactorThreshold = 0.7;
  }

  // Basic hash function: sum of char codes mod size
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  // Insert a key-value pair using quadratic probing
  set(key, value) {
    if (this.loadFactor() > this.loadFactorThreshold) {
      this.rehash();
    }

    let index = this.hash(key);
    let i = 0;

    while (
      this.table[(index + i * i) % this.size] &&
      this.table[(index + i * i) % this.size][0] !== key
    ) {
      i++;
    }

    let newIndex = (index + i * i) % this.size;

    if (!this.table[newIndex]) {
      this.count++;
    }

    this.table[newIndex] = [key, value];
  }

  // Retrieve value by key
  get(key) {
    let index = this.hash(key);
    let i = 0;

    while (this.table[(index + i * i) % this.size]) {
      let currentIndex = (index + i * i) % this.size;
      if (this.table[currentIndex][0] === key) {
        return this.table[currentIndex][1];
      }
      i++;
    }

    return undefined;
  }

  // Calculate current load factor
  loadFactor() {
    return this.count / this.size;
  }

  // Resize and rehash the table
  rehash() {
    const oldTable = this.table;
    this.size *= 2;
    this.table = new Array(this.size);
    this.count = 0;

    for (let item of oldTable) {
      if (item) {
        this.set(item[0], item[1]);
      }
    }
  }
}

// 🧪 Example Usage:
const ht = new HashTable(5);
ht.set("apple", 100);
ht.set("banana", 200);
ht.set("grapes", 300);
ht.set("orange", 400);
ht.set("kiwi", 500); // Triggers rehashing

console.log(ht.get("apple"));   // 100
console.log(ht.get("banana"));  // 200
console.log(ht.get("kiwi"));    // 500

console.log(ht.table); // View internal table structure
