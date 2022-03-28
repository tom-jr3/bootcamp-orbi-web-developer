## O que são APIs
  Application Programming Interface
Uma API é uma forma de intermediar os resultados do back-end com o que é
apresentado no front-end. Conseguindo acessa-las por meio de URLs

![](/docs/assets/img/js_async_04.png)

**JSON** Javascript Object Notation
É muito comum que as APIs retornem seus dados no formato.json, portanto precisamos 
tratar esses dados quando os recebemos.

![](/docs/assets/img/js_async_05.png)

## Fetch

Consumindo APIs

~~~ javascript
fetch(url, options)
.then(response => response.json())
.then(json=> console.log(json))
~~~

Operações no banco (POST, GET, PUT, DELETE, etc...)

![](/docs/assets/img/js_async_06.png)

## Exemplo

~~~ javascript
const BASE_URL = 'https://thatcopy.pw/catpi/rest/';
const catBtn = document.getElementById('change-cat');

const getCats = async ()=>
{
    try
    {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.webpurl;
    }
    catch(e)
    {
        console.log(e);
    }
};

const loadImg = async ()=>{
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
}

catBtn.addEventListener('click',loadImg);

loadImg();
~~~
