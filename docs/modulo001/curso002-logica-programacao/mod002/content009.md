# Vetores e matrizes
Uma matriz é uma coleção de variáveis de um mesmo tipo.(Em javascript é aceito tipos diferentes)
acessíveis com um único nome e armazenados contiguamente
na memoria.
A individualização de cada variável de um vetor é feita
através do uso de **índices**.
Os **Vetores** são matrizes de uma so dimensão.
**Vetor**
~~~ java
 meuArray = new int[10];

        meuArray [0] = 100;
        meuArray [1] = 85;
        meuArray [2] = 88;
        meuArray [3] = 93;
        meuArray [4] = 123;
        meuArray [5] = 952;
        meuArray [6] = 344;
        meuArray [7] = 233;
        meuArray [8] = 622;
        meuArray [9] = 8522;
~~~

**Multidimensional**
~~~ java
  int[][] myarray = new int[2][2];
        myarray[0][0] = 1;
        myarray[0][1] =  myarray[1][0] =  0;
        myarray[1][1] = 1;
        System.out.println("Array elements are:");
        System.out.println(myarray[0][0] + " " +myarray[0][1]);
        System.out.println(myarray[1][0] + " " +myarray[1][1]);
    }
~~~