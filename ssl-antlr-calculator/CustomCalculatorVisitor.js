import CalculatorVisitor from './generated/CalculatorVisitor.js';

export class CustomCalculatorVisitor extends CalculatorVisitor {
    constructor() {
        super();
        this.resultado = '';
    }

    visitPrograma(ctx) {
        for (const hijo of ctx.children) {
            const linea = this.visit(hijo);
            if (linea) {
                this.resultado += linea + '\n';
            }
        }
        return this.resultado;
    }

    visitDeclaracion(ctx) {
        const nombre = ctx.nombre().getText();
        if (ctx.valor()) {
            const valor = this.visit(ctx.valor());
            return `let ${nombre} = ${valor};`;
        } else {
            return `let ${nombre};`;
        }
    }

    visitEjecutar(ctx) {
        return this.visit(ctx.children[0]); // puede ser una impresión, operación, etc.
    }

    visitValor(ctx) {
        if (ctx.TEXTO()) return ctx.TEXTO().getText().replace(/'/g, '"');
        if (ctx.NUMERO()) return ctx.NUMERO().getText();
        return ctx.variable().getText();
    }

    visitCadena(ctx) {
        if (ctx.TEXTO()) return ctx.TEXTO().getText().replace(/'/g, '"');
        return ctx.variable().getText();
    }

    visitOperacion_texto(ctx) {
        const variable = ctx.variable().getText();
        const trans = ctx.transformacion().getText();
        const arg = this.visit(ctx.cadena());

        let expr;
        switch (trans) {
            case 'mayusculas':
                expr = `${arg}.toUpperCase()`;
                break;
            case 'minusculas':
                expr = `${arg}.toLowerCase()`;
                break;
            case 'longitud':
                expr = `${arg}.length`;
                break;
            case 'invertir':
                expr = `${arg}.split('').reverse().join('')`;
                break;
            case 'reemplazar':
                expr = `${arg}.replace('a', 'b')`; // simplificado
                break;
            default:
                expr = arg;
        }
        return `${variable} = ${expr};`;
    }

    visitImpresion(ctx) {
        const valor = this.visit(ctx.valor());
        return `console.log(${valor});`;
    }

    visitConcatenar(ctx) {
        const nombre = ctx.variable().getText();
        const izquierda = this.visit(ctx.cadena(0));
        const derecha = this.visit(ctx.cadena(1));
        return `let ${nombre} = ${izquierda} + ${derecha};`;
    }

    visitRetorno(ctx) {
        const valor = this.visit(ctx.valor());
        return `return ${valor};`;
    }

    visitFuncion(ctx) {
        const nombre = ctx.nombre().getText();
        const args = ctx.argumentos() ? this.visit(ctx.argumentos()) : '';
        const cuerpo = this.visit(ctx.instrucciones());
        return `function ${nombre}(${args}) {\n${cuerpo}\n}`;
    }

    visitArgumentos(ctx) {
        const actual = ctx.variable().getText();
        const resto = ctx.argumentos() ? ',' + this.visit(ctx.argumentos()) : '';
        return actual + resto;
    }

    visitInstrucciones(ctx) {
        return ctx.children.map(child => this.visit(child)).filter(Boolean).join('\n');
    }
}
