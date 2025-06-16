class HashTable {
  constructor(size = 10) {
    this.table = new Array(size);
    this.size = size;
    this.count = 0;
    this.loadFactorThreshold = 0.7;
  }

  // Primary hash function
  hash1(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  // Secondary hash function (must not return 0)
  hash2(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    // Pick a prime smaller than table size (e.g., 7) to avoid clustering
    return 7 - (total % 7) || 1; // Avoid 0 step
  }

  set(key, value) {
    if (this.loadFactor() > this.loadFactorThreshold) {
      this.rehash();
    }

    let index1 = this.hash1(key);
    let index2 = this.hash2(key);

    let i = 0;
    let index;

    // Double hashing probe: index = (h1 + i * h2) % size
    while (
      this.table[(index = (index1 + i * index2) % this.size)] &&
      this.table[index][0] !== key
    ) {
      i++;
    }

    if (!this.table[index]) {
      this.count++;
    }

    this.table[index] = [key, value];
  }

  get(key) {
    let index1 = this.hash1(key);
    let index2 = this.hash2(key);

    let i = 0;
    let index;

    while (this.table[(index = (index1 + i * index2) % this.size)]) {
      if (this.table[index][0] === key) {
        return this.table[index][1];
      }
      i++;
    }

    return undefined;
  }

  loadFactor() {
    return this.count / this.size;
  }

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

// 🧪 Example Usage
const ht = new HashTable(5);
ht.set("apple", 100);
ht.set("banana", 200);
ht.set("grapes", 300);
ht.set("orange", 400);
ht.set("kiwi", 500); // Triggers rehashing

console.log(ht.get("apple"));   // 100
console.log(ht.get("banana"));  // 200
console.log(ht.get("kiwi"));    // 500

console.log(ht.table); // View internal structure
