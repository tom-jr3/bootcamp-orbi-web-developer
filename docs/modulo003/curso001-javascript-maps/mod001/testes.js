const myMap =  new Map();

for (let i = 0; i < 10; i++) {
    myMap.set(`key${i}`,`value${i}`);
}
console.log(myMap.size);

