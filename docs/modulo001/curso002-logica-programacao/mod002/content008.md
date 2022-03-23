# Desvio de condicional
 É utilizada a palavra reservada ***se***, a condição a ser testada
 entre parenteses e as instruções que devem ser executadas entre 
 chaves caso o desvio seja **verdadeiro**.

 Exemplo:

**Java**
~~~java
 if(media >= 7){
     System.out.println("Parabéns! voce foi aprovado!")
 }
~~~
**JavaScript**
~~~javascript
 if(media >= 7){
     console.log("Parabéns! voce foi aprovado!")
 }
~~~

## Se senão (if else)
o **senão**, dispara caso desejarmos que um diferente bloco de comando
execute caso a condição do ***if*** não for satisfeita.
*Java*
~~~**java**
 if(media >= 7){
     System.out.println("Parabéns! voce foi aprovado!")
 } else{
     System.out.println("Lamento! voce foi  reprovado!")

 }
~~~
**JavaScript**
~~~javascript
 if(media >= 7){
     console.log("Parabéns! voce foi aprovado!")
 }else{
     console.log("Lamento! voce foi  reprovado!")

 }
~~~


## Caso(switch case)
Este comando é similar aos comando if e else, e reduz a complexidade na escolha de
diversas opções. Apensar de suas similaridades com ***if***, ele possui suas diferenças.
Neste comando não é possível o uso de operadores lógicos. Apenas trabalhando
com valores definidos.

**Java**
~~~ java
public static void main(String[] args) {
  Scanner entrada = new Scanner(System.in);
  System.out.println("Entre com um número entre 1 e 4:");
  int num = entrada.nextInt();
  switch (num) {
     case 1:
       System.out.println("Você escolheu 1");
       break;
     case 2:
       System.out.println("Você escolheu 2");
       break;
     case 3:
       System.out.println("Você escolheu 3");
       break;
     case 4:
       System.out.println("Você escolheu 4");
       break;
     default:
       System.out.println("Número inválido");
  }
}
~~~
**javascript**
~~~ javascript
mes = "Maio";

switch (mes) {
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log("Verão!");
        break;
    case "Abril":
    case "Maio":
    case "Junho":
        console.log("Outono!");
        break;
    case "Julho":
    case "Agosto":
    case "Setembro":
        console.log("Inverno!");
        break;
    case "Outubro":
    case "Novembro":
    case "Dezembro":
        console.log("Primavera!");
}
~~~