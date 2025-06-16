class HashTable{
    constructor(size = 10){
        this.table = new Array(size);
        this.size = size;
        this.count = 0;
        this.loadFactorThreshold = 0.7;
    }
    hash(key){
        let total = 0;
        for(let i = 0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
      return total % this.size;
    }
    
    set(key,value){
        if(this.loadFactor() > this.loadFactorThreshold){
            this.rehash()
        }
        let index = this.hash(key);
        while(this.table[index] && this.table[index][0] !== key){
            index = (index + 1) % this.size
        }
        if(!this.table[index]){
            this.count++;
        }
        
        this.table[index] = [key,value];
    }
    get(key){
        let index = this.hash(key);
        while(this.table[index]){
            if(this.table[index][0] === key){
                return this.table[index][1];
            }
            index = (index + 1) % this.size;
        }
        return undefined 
    }
    loadFactor(){
        return this.count / this.size
    }
    
    rehash(){
        let oldTable = this.table;
        this.size *= 2;
        this.table = new Array(this.size);
        this.count = 0;
        
        for(let item of oldTable){
            if(item){
                this.set(item[0],item[1]);
            }
        }
    }
}

const ht = new HashTable(5);
ht.set("apple", 100);
ht.set("banana", 200);
ht.set("grapes", 300);
ht.set("orange", 400);
ht.set("kiwi", 500); // Triggers rehashing

console.log(ht.get("apple")); // 100
console.log(ht.get("banana")); // 200
console.log(ht.get("kiwi")); // 500
console.log(ht.table); // Should show a resized table with rehashed elements
