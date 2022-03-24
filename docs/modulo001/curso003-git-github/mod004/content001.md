# Primeiros Comandos

~~~bash
$ git init # inicia um repositório git vazio
$ git add {arq_nome|.|*} # adiciona mudanças e adições nos arquivos do diretório git
$ git commit # cria o sha de identificação da versão 
~~~

O **git init** cria uma pasta oculta no diretório onde o comando foi rodado .git.

Os commits precisam de informações especificas como vitas nos tópicos anteriores
Uma delas é o autor do commit, então configuramos o nome do autor e email do autor
para que possa realizar os commits que desejar.

~~~ bash
$ git config --global user.name "name_user" # adiciona de forma global (--global) o nome de usuário
$ git config --global user.email "user_email@..." # adiciona de forma global (--global) o e-mail de usuário
$ git config --global user.core-editor "editor_name" # adiciona de forma global (--global) o editor para adicionar infos de commits
~~~

Pronto para fazer os commits

Podemos adicionar um novo commit com uma mensagem direta
~~~ bash
$ git commit -m "first commit"
~~~

ou digitamos git commit e o comandeLine exibira o editor
configurado para adicionar a mensagem do commit.

