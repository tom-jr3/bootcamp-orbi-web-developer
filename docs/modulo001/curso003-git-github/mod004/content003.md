# Git Hub

O ideal é adicionar o mesmo user e email que configuramos no github
~~~ bash
$ git config --global --unset user.email|name|core-editor # para remover a configuração
~~~
Quando desejarmos adicionar um repositório local para o o gitHub, criamos um repositório
vazio no git hub, de preferencia com o mesmo nome do repositório git local. Assim que 
criado o github apresentara a url de acesso remoto do repositório. 
No repositório git local adicionamos o url. que é chamada de remote

~~~ bash
$ git remote add {url} # adiciona o repositório remoto no repositório local
$ git remote -v # mostrar a url do remote adicionado  
~~~
assim os arquivos commitados podem ser enviados para o git hub com o comando
~~~ bash
git push origin main # push ira empurrar o commit para o repositório remoto
~~~
***origin*** é o nome default da url remota  

~~~ bash
git clone {url_repositório_github} # clona um repositório existente no github
git pull origin main # busca commits que estão no remote e adiciona no local, caso existir conflitos, é necessário corrigir manualmente
~~~


