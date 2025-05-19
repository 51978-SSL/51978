import CalculatorLexer from "./generated/CalculatorLexer.js";
import CalculatorParser from "./generated/CalculatorParser.js";
import { CustomCalculatorVisitor } from "./CustomCalculatorVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

    // Leer entrada desde archivo o consola
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        input = await leerCadena(); // Entrada manual
        console.log(input);
    }

    // 1. TOKENIZACIÓN
    let inputStream = CharStreams.fromString(input);
    let lexer = new CalculatorLexer(inputStream);

    console.log("\n Tabla de Tokens y Lexemas:");
    const tokens = lexer.getAllTokens();
    if (tokens.length === 0) {
        console.error(" No se generaron tokens. Verifica la entrada.");
        return;
    }

    console.log("--------------------------------------------------");
    console.log("| LEXEMA         | TOKEN                          |");
    console.log("--------------------------------------------------");
    for (let token of tokens) {
        const tokenType = CalculatorLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
        const lexema = token.text;
        console.log(`| ${lexema.padEnd(14)} | ${tokenType.padEnd(30)}|`);
    }
    console.log("--------------------------------------------------");

    // 2. PARSEO
    inputStream = CharStreams.fromString(input); // Reiniciar el inputStream
    lexer = new CalculatorLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new CalculatorParser(tokenStream);

    const tree = parser.programa();

    // 3. VERIFICAR SINTAXIS
    if (parser._syntaxErrors > 0) {
        console.error("\n Se encontraron errores de sintaxis.");
        return;
    }

    console.log("\n Entrada válida.");
    const cadena_tree = tree.toStringTree(parser.ruleNames);
    console.log(`Árbol de derivación: ${cadena_tree}`);

    // 4. INTERPRETAR / TRADUCIR CON VISITOR
    // Visitamos el árbol: ejecuta e interpreta
    const visitor = new CustomCalculatorVisitor();
    const codigoTraducido = visitor.visit(tree);

    // Mostrar código traducido
    console.log("\nCódigo traducido a JavaScript:\n");
    console.log(codigoTraducido);

    // Simular ejecución en un entorno JS virtual
    console.log("\nEjecutando resultado:");
    const estado = {}; // estado real para ejecución del código traducido
    try {
        eval(codigoTraducido); // ejecuta el código generado 
    } catch (e) {
        console.error("Error al ejecutar el código traducido:", e.message);
    }   

}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

// Ejecutar
main();