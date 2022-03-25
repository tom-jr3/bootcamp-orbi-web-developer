


Prática
Dando continuidade ao nosso site iremos montar sua estrutura. Pensei em adicionarmos um cabeçalho com nosso nome, uma lista de posts (como um blog) e um rodapé para nossos contatos.

Vamos abrir nosso arquivo index.html e começar pelo cabeçalho: criamos um \<header\> logo abaixo do \<body\> e colocamos o título da nossa página dentro de um \<h1\>.

Depois criaremos a lista de postagens: abrimos um elemento section e dentro dele adicionamos outro \<header\> contendo um \<h2\>. Notem que eu posso ter mais de um \<header\> na página.

Para criar nossa postagem adicionamos um \<article\> com um \<header\> e um \<h3\>.

O último passo desta etapa é criar um rodapé para nossas informações de contato: crie um elemento footer antes de fechar o \</body\>.

Não se preocupe com o layout e com conteúdo da página, nós vamos tratar isso mais a frente.

Textos e links
A criação do HTML foi motivada pela necessidade de compartilhar textos e documentos, e mesmo depois de quase 30 anos, com toda a evolução da web, isso ainda representa uma boa parte do conteúdo da web.

Já falamos anteriormente sobre os elementos h1-h6 e, eles são essenciais para nos indicar visualmente a importância e localização de seções de texto na página, mas para textos maiores e mais densos usamos o elemento p.

O \<p\> representa um parágrafo, mas ele não suporta apenas texto, podemos adicionar imagens, código, vídeos e vários outros tipos de conteúdo dentro dele.

Um outro elemento interessante e extremamente necessário na web é o \<a\> - que significa anchor/âncora, ele representa um hyperlink, é ele que interliga vários conteúdos e páginas na web.

O elemento a tem vários atributos, mas vamos focar em dois, o href e o target.

O href representa o hyperlink para onde sua âncora aponta, pode ser uma página do seu ou de outro site, um e-mail e até mesmo um telefone, os dois últimos precisam dos prefixos mailto: e tel:, respectivamente.

O target neste momento vai servir para nos ajudar a abrir nossos links em outra aba do navegador usando o valor _blank.

Prática
Vamos adicionar um texto fictício a nossa postagem: logo após o fechamento do \</header\> vamos adicionar um elemento p e inserir um texto que vamos retirar do site lipsum.com

E em alguma parte deste texto vamos adicionar um hiperlink para outra página e um para nosso e-mail.

Criarei um hyperlink para meu perfil no LinkedIn: adicione o hyperlink no atributo href e o valor _blank no atributo target, assim o link será aberto em outra aba. E em algum outro lugar do texto adicionarei meu e-mail e um link para ele, desta forma: \<a href="mailto:lucas@vilaboim.com" target="_blank"\>lucas@vilaboim.com\</a\>

Imagens
A web também é feita de imagens e para representá-las temos o elemento \<img\>, ele é um daqueles elementos sem tag de fechamento.

O elemento img é bem simples, contendo apenas 2 atributos próprios, o src e o alt.

O src é obrigatório e guarda o caminho para a imagem que você quer mostrar na página.

O alt não é obrigatório mas é altamente recomendado por melhorar a acessibilidade, ele mostra a descrição da imagem caso ela não carregue e leitores de tela usam esse atributo para descrever a imagem para o usuário saber o que ela significa.

Prática
Vamos adicionar uma imagem ao cabeçalho da página e uma imagem a postagem.

Primeiro vamos colocar as imagens na pasta do nosso projeto. Para a imagem do cabeçalho eu escolhi uma foto minha com 100 pixels de largura e 100 pixels de altura e para a imagem da postagem eu procurei por html code no site Unsplash, escolhi uma das imagens e deixei ela com 960 pixels de largura por 322 pixels de altura.

Dentro do primeiro \<header\> da página e antes do \<h1\> iremos adicionar um elemento img e no atributo src colocamos o caminho para a nossa foto, /lucas-vilaboim.jpg, e o atributo alt deve conter um significado para a imagem, como no meu caso é uma ilustração, colocarei Ilustração do rosto de Lucas Vilaboim.

E dentro do \<header\> do \<article\> vamos fazer a mesma coisa, mas agora depois do \<h3\>, e no atributo alt colocaremos Editor de texto mostrando códigos HTML.

Listas
Os últimos elementos que veremos neste módulo são os relacionados a listas: \<ul\>, \<ol\> e \<li\>.

Listas servem para agrupar uma coleção de itens, como uma lista de ingredientes ou, como será no nosso caso, uma lista com contatos.

O elemento ul cria uma lista não ordenada, onde a ordem dos elementos não é importante, e é representada com pontos, círculos ou quadrados.

O \<ol\> serve para criar lista ordenadas, nessas a ordem importa, portanto elas são representadas com números, algarismos romanos ou letras.

E o elemento li é um item dentro de uma dessas listas. Um \<li\> pode conter vários tipos de conteúdos, como parágrafos, imagens e até outras listas.

Prática
Adicionaremos uma lista de contatos ao rodapé da nossa página, e para isso usaremos também o elemento a que vimos anteriormente.

Crie um elemento ul e dentro dele adicione um \<li\> com um elemento a, no atributo href adicione o link de alguma rede social que você mantenha e, no conteúdo da âncora coloque o nome dessa rede.

