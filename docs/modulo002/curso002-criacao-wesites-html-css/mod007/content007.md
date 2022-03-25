# Estilizando elementos
Agora que entendemos o box-model podemos focar em deixar nosso site mais bonito, 
então vamos repassar pelas propriedades já citadas:

**Padding e Margin**
Anteriormente usamos o padding e o margin da forma mais básica, com apenas um valor,
 mas eles são mais poderosos que isso. Se quisermos atribuir tamanhos diferentes para cada 
 lado do box nós podemos, e vamos ver três formas de fazer isso.

 

A primeira é colocando um valor para as partes superior e inferior e 
depois para os lados esquerdo e direito.

O valor de 10 pixels se refere ao eixo Y, ou partes superior e inferior, 
e os 5 pixels se referem aos lados esquerdo e direito.

 

A segunda forma é dando valores para cada lado do box.

Então começamos pelo topo com 15 pixels, passamos o lado direito com 10 pixels, 
depois para a parte inferior com 5 pixels e por último o lado esquerdo com 0, e sempre nessa ordem.

Uma boa dica também é que quando o valor for 0 não precisamos não precisamos colocar a unidade.

 

A terceira forma é com as propriedades específicas para cada lado, até agora tínhamos visto atalhos para 
essas propriedades.

Essa opção é mais usada quando temos o mesmo valor para 3 lados, e o quarto precisa ter um valor diferente, 
então usamos o padding com apenas um valor e uma dessas opções para representar o lado diferente.

 

**Background**
A propriedade background também é um atalho para várias propriedades, mas isso vocês podem absorver
aos poucos, e uma boa opção de leitura é a documentação do MDN.

Por enquanto veremos apenas como mudar a cor de fundo.

 

E aqui temos 3 formas de colocar uma cor de fundo, e ainda existem outras.

A primeira é pelo nome da cor em inglês, a segunda é pelo 
código hexadecimal e a terceira é usando apenas o atalho background.

 

**Border**
Vimos que a propriedade border pode ter 3 valores: a largura, a cor e o estilo,
mas existem algumas particularidades nisso.

A largura pode ser usada com várias unidades, como px, em e mm. 
A cor pode ser atribuída pelo nome ou por um código 
hexadecimal, assim como fizemos com o background, e o estilo é representada 
por palavras-chave, vamos ver algumas delas:

 

solid: mostra uma borda simples e reta;

dotted: são bolinhas com um pequeno espaçamento entre elas;

dashed: forma uma linha tracejada.

E aproveitando que mostrei esse código temos que falar sobre 
como separar a estilização dos lados de uma borda.

E se você não quiser usar a propriedade border existem as propriedade 
específicas para cada aspecto de uma borda, são elas **border-width** para 
a largura, **border-color** para a cor e **border-style** para o estilo.

Aqui temos o mesmo código anterior de duas formas diferentes, a primeira
com o atalho border e a segunda com cada propriedade específica.

E depois disso podemos juntar os lados com os aspectos de uma 
borda e criar uma regra mais específica ainda.

 

**Border-radius**

E a última propriedade é o border-radius, ele permite arredondar os cantos de um
elemento. Podemos usar várias unidades, mas as mais comuns são os pixels e a porcentagem.

Colocando apenas um valor mudamos todos os cantos do elemento, mas seguindo aquela 
mesma ordem que vimos no padding e margin - topo, direita, inferior e esquerda -
conseguimos alterar cada canto separadamente.
 

## Estilizando textos
Já sabemos que podemos mudar cor e tamanho de algumas fontes, e agora vamos nos aprofundar nisso.

 

**font-family**
Com o **font-family** podemos alterar a fonte dos nossos textos, como uma fonte da internet 
ou uma que esteja instalada no nosso computador, mas vamos nos ater às fontes seguras, 
chamadas de web safe fonts.

Essas fontes são chamadas assim pois são encontradas em quases todos os sistemas e 
podem ser usadas sem preocupação.

 

**font-size**
O font-size nos ajuda a mudar o tamanho do texto, existem algumas unidades de medida 
para ele mas por enquanto os pixels são suficientes para nós.

 

**font-style**
Usamos o font-style para tornar um texto itálico, na maioria das vezes você usará 
apenas o valor italic para ele, mas se precisar tirar o itálico de um texto você pode usar o valor normal.

 