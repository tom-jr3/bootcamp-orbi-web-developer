# CSS 3
**Definição e seletores**
Após a criação do HTML a necessidade de formatar as páginas ficou evidente, assim, em 1996,
 foi criada a linguagem de estilo que conhecemos por **CSS**.

A sintaxe é bem simples e pode ser explicada com a frase "você cria regras de estilo para 
elementos ou grupos de elementos".

Vamos usar um elemento HTML que vimos anteriormente, a âncora \<a\>, para exemplificar.

Uma regra CSS é representada por um seletor ou um grupo de seletores, no nosso caso é 
o **\<a\>**, então dentro de um par de chaves adicionamos as declarações, no exemplo 
acima estamos alterando cor e tamanho da fonte dessa âncora, as declarações são formadas 
por uma propriedade e um valor.

![](/docs/assets/img/exe_css_001.png)

Percebam que podemos colocar vários seletores em uma regra separando-os por vírgula.

E há um último detalhe nesse exemplo: a pseudo-classe. Elementos HTML sofrem alterações
causadas pela interação do usuário, como mover o mouse por cima ou clicar nesse elemento.

O **a:hover** do exemplo significa que a âncora também terá essa aparência quando o usuário
passar o mouse por cima de um hyperlink.

 

**ID x Classe**
No exemplo anterior criamos uma regra que altera um elemento HTML diretamente, mas isso significa 
que todos os elementos **\<a\>** ficarão com aquela aparência, e normalmente temos sites mais 
complexos que precisam de várias regras diferentes para elementos iguais.

Para ficar mais tangível vamos relembrar um pouco o site que começamos a fazer no módulo passado,
ele tinha vários elementos header, mas não vamos querer que o header principal tenha a mesma 
formatação que o header de uma postagem, é aí que entram os IDs e Classes.

O seletor que vimos no primeiro exemplo é um seletor de tipo, pois ele representa um elemento HTML,
e com IDs e Classes podemos representar qualquer tipo de elemento mas há algumas diferenças entre eles:

**ID**: é representado pelo símbolo # (hash) seguido de um nome para esse ID.

**Classe**: a classe é representada de forma parecida do ID, mas é precedida por um ponto em vez do hash.

E a diferença mais importante entre eles é a forma como devem ser usados: o ID só pode ser usado uma
 vez em uma página HTML enquanto a classe não tem restrições.

 
**Box-model**
Quando estamos criando o layout de um site o navegador representa cada elemento HTML  como uma caixa retangular, isso é o 
box-model. E com CSS nós alteramos a aparência dessa caixa (largura, altura, cor de fundo, etc.).
Essa caixa é composta por 4 áreas: o **conteúdo**, o **padding**, a **borda** e a **margem**.

![](/docs/assets/img/exe_css_002.png)


As margens (margin) são espaçamentos entre elementos;
As bordas (border) ;
O padding é um espaçamento entre as bordas e o conteúdo, a diferença para as margens é que declarações de imagem de fundo funcionam nele;
O conteúdo (content) é o que o seu bloco representa, um texto, uma imagem, um vídeo;
 
