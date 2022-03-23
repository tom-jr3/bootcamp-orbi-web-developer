
# Estrutura de repetição

## Definição
Dentro da logica de programação é uma estrutura que permite
executar mais de uma vez o mesmo bloco de comando, de acordo
com uma condição(**expressão**) ou um **contador**

exemplo em java:
~~~ java
int contador  = 0;
while(contador <= 100>){
System.out.println("Numero: " + contador);
contador = contador + 1; //ou contador += 1;
}
~~~
No exemplo demonstrado o programa ira executar o comando dentro do bloco {}
while ate que o contador chegue a um valor que seja maior que 100. 
Caso não fosse incrementado +1 em cada ciclo, o comando entraria em
loop infinito.
Na programação existe diversas formas de se criar laços de repetições, esse
é apenas um exemplo simples utilizando o **while**.