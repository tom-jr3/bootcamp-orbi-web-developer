
## Assíncrono
Que não ocorre ou não se efetiva ao mesmo tempo. O Javascript por default
funciona de maneira síncrona.

![](/docs/assets/img/js_async_01.png)

## Promises

Objeto de processamento assíncrono. Inicialmente, seu valor é desconhecido. Ela 
pode, então, ser resolvida ou rejeitada.
 
![](/docs/assets/img/js_async_02.png)

A promise tem tres status

![](/docs/assets/img/js_async_03.png)

**Estrutura** 

~~~ javascript
const myPromise =  new Promise((resolve,reject)=>{
    window.setTimeout(()=>{
        resolve(console.log('Rsolvida'));
    }, 2000);
});

await myPromise
    .then((result) =>{ result  + 'passando pelo then'})
    .then((result) =>{ result  + 'agora acabou'})
    .catch((err)=> console.log(err.message));
~~~


## Async/Await

Funções assíncronas precisam dessas duas keywords

~~~ javascript
async function resolvePromise(){
    const myPromise =  new Promise((resolve, reject)=>{
        window.setTimeout(()=>{
            resolve('Resolvida')
        },3000);
    });

    const resolved = await myPromise;
    .then((result) =>{ result  + 'passando pelo then'})
    .then((result) =>{ result  + 'agora acabou'})
    .catch((err)=> console.log(err.message));
    return resolved;
}
~~~
**Utilizando o Try Catch**


~~~ javascript
async function resolvePromise(){
    const myPromise =  new Promise((resolve, reject) =>{
        window.setTimeout(()=>{
            resolve('Resolvida')
        },3000);
    });

let result;
try{
    result = await myPromise;
    .then((result) =>{ result  + 'passando pelo then'})
    .then((result) =>{ result  + 'agora acabou'})
}catch((err){
    result = err.message
}
    return result;
}
~~~
