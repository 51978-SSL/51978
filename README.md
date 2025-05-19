# Ejecución del Analizador
## REQUISITOS IMPORTANTES
Para ejecutar el programa debe tener instalado lo siguiente:

-Visual Studio Code

-Node js

-Java

-GitHub

-Por último la extensión ANTLR4 en VS CODE

## Ejecutar el Proyecto

Desde el repositorio de GitHub hacer click en <> code y en Download ZIP

   
 Si todo esta correcto, deberías ver el proyecto en VS Code.

 (FOTO)

5. Ahora debe ingresar en el input.txt el ejemplo que está en el archivo InputCorrecto1.txt y presionar F5.
6. Luego aparecerá un terminal donde debe ejecutar con:
   
   node index.js

   Esto nos generará la tabla de tokens y lexema, el árbol de derivación y el código fuente traducido a JavaScript junto a su resultado.

7. Repita los mismos pasos para el otro ejemplo en el archivo InputCorrecto2.txt

8. Al repetir los pasos con el ejemplo en el archivo InputIncorrecto.1.txt , vemos que nos indica un error en una línea y la causa del problema.

   frase = mayusculas(25);

   En este ejemplo vemos que 25 no es un valor esperado ya que la transformación 'mayusculas' solo reconoce variables como TEXTO o NOMBRE, no NUMERO.

9. Repita los mismos pasos con el último ejemplo en InputIncorrecto2.txt , vemos que nos indica un error en una línea y la causa del problema.

   mensaje = "Hola" + "25" ;

   Acá vemos un error similar al anterior, ya que cadena solo deriva en TEXTO y NOMBRE, no en NUMERO.


ARRIBA ESPECIFICA MODIFICACIONES EN TU GRMATICA
