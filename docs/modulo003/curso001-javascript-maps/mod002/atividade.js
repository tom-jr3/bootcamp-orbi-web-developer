

function getAdmins(map)
{
    let admins = [];
    for (const [key, value] of map) // remember this
     {
        if(value == 'Admin')
        {
            admins.push(key);
        }
        
    }
    return admins;
}

const users =  new Map();
users.set('Luiz','Admin');
users.set('Stephanie','Admin');
users.set('Georges','User');
users.set('Natally','Admin');

// console.log(getAdmins(users));


let myArray = [30, 30, 40, 5, 223, 3034, 5]

const mySet = new Set();
myArray.forEach(i => mySet.add(i));
myArray = [];

mySet.forEach(i=>myArray.push(i));

console.log(myArray);
console.log(mySet.size)