# Estrutura

*Características*
- Uma coleção de arrays no formato de [**chave** e **valor**]
- Podendo iterar por um loop ***for***... ***of***

~~~javascript
const myMap = new Map();
~~~

## Métodos

**Adicionar,ler e deletar**

~~~ javascript
> const myMap =  new Map();  //instancia
undefined
> myMap.set('apple','fruit');  //adiciona
// Map(1) { 'apple' => 'fruit' }

> myMap.get('apple'); // ler|busca
// 'fruit'
> myMap.delete('apple'); //deleta
// true
> myMap.get('apple'); // busca, mas retorna undefined por ja ter sido deletado
// undefined

~~~

## Map vs Objeto

- Os dois são do tipo __chave__ e **valor**
- Maps podem ter chaves de qualquer tipo. Objetos sempre é chave de **strings**
- Maps possui a propriedade size
- Maps são mais fáceis de iterar
- Utilizado quando valor das chaves é desconhecido
- Os valores tem o mesmo tipo