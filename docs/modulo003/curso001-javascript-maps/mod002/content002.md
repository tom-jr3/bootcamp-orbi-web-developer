# Set
## Estrutura
Sets são estruturas que armazenam apenas **valores únicos**.

~~~ java
const myArray = [1,1,2,2,3,4,5,6,7,8,2,1];

const mySet =  new Set(myArray);
console.log(mySet);
// > Set(8) { 1, 2, 3, 4, 5, 6, 7, 8 }
~~~

## Métodos
**Adicionar, consultar e deletar**
~~~ javascript
> const mySet = new Set();
// undefined
> mySet.add(1);
// Set(1) { 1 }
> mySet.add(5);
// Set(2) { 1, 5 }
> mySet.has(1)
// true
> mySet.has(3)
// false
> mySet.has(5)
// true
> mySet.delete(5);
// true
> mySet.has(5);
// false
> 
~~~

## Set vs Arrays

- Possui valores únicos
- Em vez da propriedade length, consulta-se pelo size
- Não possui métodos **map, filter, reduce** etc







