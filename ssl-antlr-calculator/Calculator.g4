grammar Calculator;

//Gramatica
programa 
    : (declaracion | funcion | ejecucion)*  ; 
declaracion 
    : 'variable' nombre ('=' valor)? ';' ; 
funcion 
    : 'funcion' nombre '(' argumentos? ')' '{' instrucciones '}' ; 
argumentos 
    : variable (',' argumentos)?  ; 
instrucciones 
    : (operacion_texto | impresion | retorno)*  ; 
operacion_texto 
    : variable  '=' transformacion '(' cadena ')' ';'; 
transformacion
    : 'mayusculas' | 'minusculas' | 'longitud' | 'invertir' | 'reemplazar' ;
concatenar  
    : variable '=' cadena '+' cadena ';' ; 
impresion 
    : 'imprimir' '(' valor ')' ';' ;  
retorno  
    : 'devolver' valor ';'  ; 
valor 
    : TEXTO | NUMERO | variable ; 
cadena  
    : TEXTO  | variable ; 
texto 
    : '\' 'caracteres '\' ' ; 
caracteres 
    : NOMBRE | NUMERO ; 
ejecucion
    : concatenar | impresion | retorno | operacion_texto;
nombre 
    : NOMBRE ; 
variable 
    : NOMBRE ;
numero
    : NUMERO ; 
/// TOKENS ///
// Palabras clave
VARIABLE     : 'variable' ;
IMPRIMIR     : 'imprimir' ;
MAYUSCULAS   : 'mayusculas' ;
MINUSCULAS   : 'minusculas' ;
FUNCION      : 'funcion' ;
DEVOLVER     : 'devolver' ;
// Símbolos
IGUAL        : '=' ;
PUNTOYCOMA   : ';' ;
LPAREN       : '(' ;
RPAREN       : ')' ;
LBRACE       : '{' ;
RBRACE       : '}' ;
COMA         : ',' ;
MAS          : '+' ;
TEXTO 
    : '\'' (~['\r\n])* '\'' 
    ; // texto entre comillas simples
NOMBRE 
    : [a-zA-Z_][a-zA-Z0-9_]* 
    ; 
NUMERO 
    : [0-9]+ 
    ;
WS  
    : [ "\r\n]+ -> skip;