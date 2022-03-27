## ECMAScript Error e DOMException

**ECMAScript** Erro é um erro que ocorre em **tempo de execução**(**Runtime**)

Composto por:f
- Mensagem
- Nome
- Linha
- Call Stack

**DOMException**

Erros relacionados ao  Document Object Model(DOM). Elementos
da estrutura da pagina WEB. Quando o JS esta relacionado a uma
pagina WEB



**Throw**

Quando se usa o Throw ele instancia automaticamente um erro. Caso apos o 
throw adicionarmos uma string essa String sera adicionada ao erro. A assinatura
do erro fica como anonymous devido ser uma instancia automática. 

![](/docs/assets/img/erros_001.png)

**Try Catch**
Quando desejamos verificar um erro dentro de um trecho de código especifico utilizamos
try catch. Dentro do escopo do try colocamos o trecho. Se disparar erro na sua 
execução o Catch ira tratar o mesmo lançando com o throw.

![](/docs/assets/img/erros_002.png)

**Finally**

No finally é um escopo que é executado mesmo que o erro não ocorro. Ele é opcional
porém pode ser muito util.

![](/docs/assets/img/erros_003.png)


## Objeto Error

O erro, em sua instancia aceita os parâmetros de  **mensagem, fileNme, lineNumber**.
Mas fileNme e lineNumber tem o perigo de não funcionar em alguns navegadores. Então
normalmente está sendo adicionado apenas o parâmetro de mensagem.

Instanciação do Erro
~~~ javascript
const MyError =  new Error('Message Invalid!');

throw MyError;
~~~
o erro lançado de cara apresenta a mensagem e a linha do erro.
Para adicionar um nome ao erro basta chamar a property name do objeto erro
e popular com o nome que desejar, assim o erro apresentara o nome e depois a
mensagem

  
![](/docs/assets/img/erros_004.png)
