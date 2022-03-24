
## Chave SSH
Forma de estabelecer conexão segura e encriptada

Comando para criar uma chave encriptada para gitHub
~~~ bash
ssh-keygen -t ed25519 -c {your_e-mail}
~~~
Assim, basta buscar a chave no diretório que ira printer no fim do
processo. e adicionar em settings ssh-key no github

## Tokens

Nas configurações do github é possível criar tokens de acesso
para que possa dar autorização via http.
