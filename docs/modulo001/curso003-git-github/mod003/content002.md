# Objetos internos do Git

## Quais são os Objetos
- **BLOBS**
- **TREES**
- **COMMITS**

Utilizando hash do git e o openssl sh1
retornara o mesmo hash 

### BLOB
~~~ bash
echo 'content' | git hash-object --stdin # criando um hash do 'content'. --stdin(standard in: informa que sera passado um string ao invés de um arquivo)
> d95f3ad14dee633a758d2e331151e950dd13e4ed

echo -e 'blob 8\0content' | openssl sha1
> d95f3ad14dee633a758d2e331151e950dd13e4ed

~~~

Uma BLOB armazena o sh1 de um conteúdo mais os metadados 
que ele mesmo adiciona, sendo assim, quando criamos uma blob
ela adiciona o carter 'blob n\0' onde **n** é o numero de caracteres 
do arquivo que sera salvo


### TREE

Tree armazenam blobs, char, nome do arquivo. Ela monitora os
diretórios onde estão os arquivos
\0
blob  sha1  content.txt 

![](/docs/assets/img/exe_objeto_01_git.png)


### COMMIT

O commit ira comportar todos os objetos anteriores


![](/docs/assets/img/exe_objeto_02_git.png)


![](/docs/assets/img/exe_objeto_03_git.png)
