# Funcionamento do GIT

## SHA
A Sigla SHA significa Secure Hash Algorithm, é um conjunto de 
funções hash criptográficas projetadas pela NSA (National Security Agency) 

A encriptação gera conjunto de caracteres identificador de 40 dígitos.

É uma forma curta de representar um arquivo.

~~~ bash
$ echo "hello world" | openssl sha1
> (stdin)= 22596363b3de40b06f981fb85d82312e8c0ed511
~~~

Esse conjunto de caracteres mudam a **qualquer** alteração que modificar 
no arquivo|código
E caso retorna ao estado exato que estava antes, volta a gerar o mesmo **SHA**.
