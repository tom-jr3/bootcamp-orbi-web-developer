# Reduce
Executa uma função em todos os elementos do array, retornando um valor único


## Sintaxe
~~~ javascript
array.filter(callback, initialValue)

callback(item,index,array)
~~~
***callback:*** função que vai ser executada dentro de  cada
elemento
***initialValue:*** valor sobre o qual o retorno final irá atuar.


~~~ javascript
cont callbackFn = function(acumulator, currentValue, index, array){}

array.reduce(callback,initialValue)
~~~

***Accumulator/prevValue:*** acumulador de todas as chamadas de callbackFn
***currentValue:*** Elemento atual sendo acessado na function.