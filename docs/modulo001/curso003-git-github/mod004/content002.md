# Ciclo de Vida

![](/docs/assets/img/exe_ciclo_vida_git_01.png)

### Untracked
 Git não tem ciência desses arquivos no repositório git.

### Tracked
quando criamos o diretório git e rodamos o comando ***git add **** nos
modificamos o status dos arquivos que estavam untracked para tracked.
E os unmodified para modified.
E o status inicial dos arquivos adicionados é **stage**
O status **stage** esta preparado para fazer parte dwe um commit.
Assim que o comando de **commit** for rodado no comandeLine o arquivo
em stage e vai para ***unmodified***.  Assim fazendo parte de uma versão
do git.

~~~ bash
$ git status # retorna o status do diretório git
~~~