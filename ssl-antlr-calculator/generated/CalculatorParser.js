// Generated from c:/Users/Brisa/analizador/ssl-antlr-calculator/Calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CalculatorListener from './CalculatorListener.js';
import CalculatorVisitor from './CalculatorVisitor.js';

const serializedATN = [4,1,22,131,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,1,0,1,0,5,0,40,8,0,
10,0,12,0,43,9,0,1,1,1,1,1,1,1,1,3,1,49,8,1,1,1,1,1,1,2,1,2,1,2,1,2,3,2,
57,8,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,3,3,67,8,3,1,4,1,4,1,4,5,4,72,8,4,
10,4,12,4,75,9,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,
1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,3,10,
107,8,10,1,11,1,11,3,11,111,8,11,1,12,1,12,1,12,1,12,1,13,1,13,1,14,1,14,
1,14,1,14,3,14,123,8,14,1,15,1,15,1,16,1,16,1,17,1,17,1,17,0,0,18,0,2,4,
6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,0,2,2,0,1,3,7,8,1,0,20,21,127,
0,41,1,0,0,0,2,44,1,0,0,0,4,52,1,0,0,0,6,63,1,0,0,0,8,73,1,0,0,0,10,76,1,
0,0,0,12,84,1,0,0,0,14,86,1,0,0,0,16,93,1,0,0,0,18,99,1,0,0,0,20,106,1,0,
0,0,22,110,1,0,0,0,24,112,1,0,0,0,26,116,1,0,0,0,28,122,1,0,0,0,30,124,1,
0,0,0,32,126,1,0,0,0,34,128,1,0,0,0,36,40,3,2,1,0,37,40,3,4,2,0,38,40,3,
28,14,0,39,36,1,0,0,0,39,37,1,0,0,0,39,38,1,0,0,0,40,43,1,0,0,0,41,39,1,
0,0,0,41,42,1,0,0,0,42,1,1,0,0,0,43,41,1,0,0,0,44,45,5,5,0,0,45,48,3,30,
15,0,46,47,5,11,0,0,47,49,3,20,10,0,48,46,1,0,0,0,48,49,1,0,0,0,49,50,1,
0,0,0,50,51,5,12,0,0,51,3,1,0,0,0,52,53,5,9,0,0,53,54,3,30,15,0,54,56,5,
13,0,0,55,57,3,6,3,0,56,55,1,0,0,0,56,57,1,0,0,0,57,58,1,0,0,0,58,59,5,14,
0,0,59,60,5,15,0,0,60,61,3,8,4,0,61,62,5,16,0,0,62,5,1,0,0,0,63,66,3,32,
16,0,64,65,5,17,0,0,65,67,3,6,3,0,66,64,1,0,0,0,66,67,1,0,0,0,67,7,1,0,0,
0,68,72,3,10,5,0,69,72,3,16,8,0,70,72,3,18,9,0,71,68,1,0,0,0,71,69,1,0,0,
0,71,70,1,0,0,0,72,75,1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,0,74,9,1,0,0,0,75,
73,1,0,0,0,76,77,3,32,16,0,77,78,5,11,0,0,78,79,3,12,6,0,79,80,5,13,0,0,
80,81,3,22,11,0,81,82,5,14,0,0,82,83,5,12,0,0,83,11,1,0,0,0,84,85,7,0,0,
0,85,13,1,0,0,0,86,87,3,32,16,0,87,88,5,11,0,0,88,89,3,22,11,0,89,90,5,18,
0,0,90,91,3,22,11,0,91,92,5,12,0,0,92,15,1,0,0,0,93,94,5,6,0,0,94,95,5,13,
0,0,95,96,3,20,10,0,96,97,5,14,0,0,97,98,5,12,0,0,98,17,1,0,0,0,99,100,5,
10,0,0,100,101,3,20,10,0,101,102,5,12,0,0,102,19,1,0,0,0,103,107,5,19,0,
0,104,107,5,21,0,0,105,107,3,32,16,0,106,103,1,0,0,0,106,104,1,0,0,0,106,
105,1,0,0,0,107,21,1,0,0,0,108,111,5,19,0,0,109,111,3,32,16,0,110,108,1,
0,0,0,110,109,1,0,0,0,111,23,1,0,0,0,112,113,5,4,0,0,113,114,3,26,13,0,114,
115,5,4,0,0,115,25,1,0,0,0,116,117,7,1,0,0,117,27,1,0,0,0,118,123,3,14,7,
0,119,123,3,16,8,0,120,123,3,18,9,0,121,123,3,10,5,0,122,118,1,0,0,0,122,
119,1,0,0,0,122,120,1,0,0,0,122,121,1,0,0,0,123,29,1,0,0,0,124,125,5,20,
0,0,125,31,1,0,0,0,126,127,5,20,0,0,127,33,1,0,0,0,128,129,5,21,0,0,129,
35,1,0,0,0,10,39,41,48,56,66,71,73,106,110,122];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CalculatorParser extends antlr4.Parser {

    static grammarFileName = "Calculator.g4";
    static literalNames = [ null, "'longitud'", "'invertir'", "'reemplazar'", 
                            "'' '", "'variable'", "'imprimir'", "'mayusculas'", 
                            "'minusculas'", "'funcion'", "'devolver'", "'='", 
                            "';'", "'('", "')'", "'{'", "'}'", "','", "'+'" ];
    static symbolicNames = [ null, null, null, null, null, "VARIABLE", "IMPRIMIR", 
                             "MAYUSCULAS", "MINUSCULAS", "FUNCION", "DEVOLVER", 
                             "IGUAL", "PUNTOYCOMA", "LPAREN", "RPAREN", 
                             "LBRACE", "RBRACE", "COMA", "MAS", "TEXTO", 
                             "NOMBRE", "NUMERO", "WS" ];
    static ruleNames = [ "programa", "declaracion", "funcion", "argumentos", 
                         "instrucciones", "operacion_texto", "transformacion", 
                         "concatenar", "impresion", "retorno", "valor", 
                         "cadena", "texto", "caracteres", "ejecucion", "nombre", 
                         "variable", "numero" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalculatorParser.ruleNames;
        this.literalNames = CalculatorParser.literalNames;
        this.symbolicNames = CalculatorParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalculatorParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1050208) !== 0)) {
	            this.state = 39;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 5:
	                this.state = 36;
	                this.declaracion();
	                break;
	            case 9:
	                this.state = 37;
	                this.funcion();
	                break;
	            case 6:
	            case 10:
	            case 20:
	                this.state = 38;
	                this.ejecucion();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CalculatorParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(CalculatorParser.VARIABLE);
	        this.state = 45;
	        this.nombre();
	        this.state = 48;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 46;
	            this.match(CalculatorParser.IGUAL);
	            this.state = 47;
	            this.valor();
	        }

	        this.state = 50;
	        this.match(CalculatorParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcion() {
	    let localctx = new FuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CalculatorParser.RULE_funcion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(CalculatorParser.FUNCION);
	        this.state = 53;
	        this.nombre();
	        this.state = 54;
	        this.match(CalculatorParser.LPAREN);
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 55;
	            this.argumentos();
	        }

	        this.state = 58;
	        this.match(CalculatorParser.RPAREN);
	        this.state = 59;
	        this.match(CalculatorParser.LBRACE);
	        this.state = 60;
	        this.instrucciones();
	        this.state = 61;
	        this.match(CalculatorParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentos() {
	    let localctx = new ArgumentosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CalculatorParser.RULE_argumentos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.variable();
	        this.state = 66;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 64;
	            this.match(CalculatorParser.COMA);
	            this.state = 65;
	            this.argumentos();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CalculatorParser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1049664) !== 0)) {
	            this.state = 71;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 20:
	                this.state = 68;
	                this.operacion_texto();
	                break;
	            case 6:
	                this.state = 69;
	                this.impresion();
	                break;
	            case 10:
	                this.state = 70;
	                this.retorno();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 75;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operacion_texto() {
	    let localctx = new Operacion_textoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CalculatorParser.RULE_operacion_texto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.variable();
	        this.state = 77;
	        this.match(CalculatorParser.IGUAL);
	        this.state = 78;
	        this.transformacion();
	        this.state = 79;
	        this.match(CalculatorParser.LPAREN);
	        this.state = 80;
	        this.cadena();
	        this.state = 81;
	        this.match(CalculatorParser.RPAREN);
	        this.state = 82;
	        this.match(CalculatorParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	transformacion() {
	    let localctx = new TransformacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CalculatorParser.RULE_transformacion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 398) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	concatenar() {
	    let localctx = new ConcatenarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CalculatorParser.RULE_concatenar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.variable();
	        this.state = 87;
	        this.match(CalculatorParser.IGUAL);
	        this.state = 88;
	        this.cadena();
	        this.state = 89;
	        this.match(CalculatorParser.MAS);
	        this.state = 90;
	        this.cadena();
	        this.state = 91;
	        this.match(CalculatorParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	impresion() {
	    let localctx = new ImpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CalculatorParser.RULE_impresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.match(CalculatorParser.IMPRIMIR);
	        this.state = 94;
	        this.match(CalculatorParser.LPAREN);
	        this.state = 95;
	        this.valor();
	        this.state = 96;
	        this.match(CalculatorParser.RPAREN);
	        this.state = 97;
	        this.match(CalculatorParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retorno() {
	    let localctx = new RetornoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CalculatorParser.RULE_retorno);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this.match(CalculatorParser.DEVOLVER);
	        this.state = 100;
	        this.valor();
	        this.state = 101;
	        this.match(CalculatorParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, CalculatorParser.RULE_valor);
	    try {
	        this.state = 106;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 103;
	            this.match(CalculatorParser.TEXTO);
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 104;
	            this.match(CalculatorParser.NUMERO);
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 105;
	            this.variable();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, CalculatorParser.RULE_cadena);
	    try {
	        this.state = 110;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 108;
	            this.match(CalculatorParser.TEXTO);
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 109;
	            this.variable();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	texto() {
	    let localctx = new TextoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, CalculatorParser.RULE_texto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.match(CalculatorParser.T__3);
	        this.state = 113;
	        this.caracteres();
	        this.state = 114;
	        this.match(CalculatorParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caracteres() {
	    let localctx = new CaracteresContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, CalculatorParser.RULE_caracteres);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        _la = this._input.LA(1);
	        if(!(_la===20 || _la===21)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ejecucion() {
	    let localctx = new EjecucionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, CalculatorParser.RULE_ejecucion);
	    try {
	        this.state = 122;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 118;
	            this.concatenar();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 119;
	            this.impresion();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 120;
	            this.retorno();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 121;
	            this.operacion_texto();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombre() {
	    let localctx = new NombreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, CalculatorParser.RULE_nombre);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        this.match(CalculatorParser.NOMBRE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, CalculatorParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.match(CalculatorParser.NOMBRE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, CalculatorParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this.match(CalculatorParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CalculatorParser.EOF = antlr4.Token.EOF;
CalculatorParser.T__0 = 1;
CalculatorParser.T__1 = 2;
CalculatorParser.T__2 = 3;
CalculatorParser.T__3 = 4;
CalculatorParser.VARIABLE = 5;
CalculatorParser.IMPRIMIR = 6;
CalculatorParser.MAYUSCULAS = 7;
CalculatorParser.MINUSCULAS = 8;
CalculatorParser.FUNCION = 9;
CalculatorParser.DEVOLVER = 10;
CalculatorParser.IGUAL = 11;
CalculatorParser.PUNTOYCOMA = 12;
CalculatorParser.LPAREN = 13;
CalculatorParser.RPAREN = 14;
CalculatorParser.LBRACE = 15;
CalculatorParser.RBRACE = 16;
CalculatorParser.COMA = 17;
CalculatorParser.MAS = 18;
CalculatorParser.TEXTO = 19;
CalculatorParser.NOMBRE = 20;
CalculatorParser.NUMERO = 21;
CalculatorParser.WS = 22;

CalculatorParser.RULE_programa = 0;
CalculatorParser.RULE_declaracion = 1;
CalculatorParser.RULE_funcion = 2;
CalculatorParser.RULE_argumentos = 3;
CalculatorParser.RULE_instrucciones = 4;
CalculatorParser.RULE_operacion_texto = 5;
CalculatorParser.RULE_transformacion = 6;
CalculatorParser.RULE_concatenar = 7;
CalculatorParser.RULE_impresion = 8;
CalculatorParser.RULE_retorno = 9;
CalculatorParser.RULE_valor = 10;
CalculatorParser.RULE_cadena = 11;
CalculatorParser.RULE_texto = 12;
CalculatorParser.RULE_caracteres = 13;
CalculatorParser.RULE_ejecucion = 14;
CalculatorParser.RULE_nombre = 15;
CalculatorParser.RULE_variable = 16;
CalculatorParser.RULE_numero = 17;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_programa;
    }

	declaracion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaracionContext);
	    } else {
	        return this.getTypedRuleContext(DeclaracionContext,i);
	    }
	};

	funcion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncionContext);
	    } else {
	        return this.getTypedRuleContext(FuncionContext,i);
	    }
	};

	ejecucion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EjecucionContext);
	    } else {
	        return this.getTypedRuleContext(EjecucionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_declaracion;
    }

	VARIABLE() {
	    return this.getToken(CalculatorParser.VARIABLE, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	PUNTOYCOMA() {
	    return this.getToken(CalculatorParser.PUNTOYCOMA, 0);
	};

	IGUAL() {
	    return this.getToken(CalculatorParser.IGUAL, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterDeclaracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitDeclaracion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_funcion;
    }

	FUNCION() {
	    return this.getToken(CalculatorParser.FUNCION, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	LPAREN() {
	    return this.getToken(CalculatorParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(CalculatorParser.RPAREN, 0);
	};

	LBRACE() {
	    return this.getToken(CalculatorParser.LBRACE, 0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	RBRACE() {
	    return this.getToken(CalculatorParser.RBRACE, 0);
	};

	argumentos() {
	    return this.getTypedRuleContext(ArgumentosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterFuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitFuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitFuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_argumentos;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	COMA() {
	    return this.getToken(CalculatorParser.COMA, 0);
	};

	argumentos() {
	    return this.getTypedRuleContext(ArgumentosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterArgumentos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitArgumentos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitArgumentos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_instrucciones;
    }

	operacion_texto = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Operacion_textoContext);
	    } else {
	        return this.getTypedRuleContext(Operacion_textoContext,i);
	    }
	};

	impresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImpresionContext);
	    } else {
	        return this.getTypedRuleContext(ImpresionContext,i);
	    }
	};

	retorno = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RetornoContext);
	    } else {
	        return this.getTypedRuleContext(RetornoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Operacion_textoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_operacion_texto;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	IGUAL() {
	    return this.getToken(CalculatorParser.IGUAL, 0);
	};

	transformacion() {
	    return this.getTypedRuleContext(TransformacionContext,0);
	};

	LPAREN() {
	    return this.getToken(CalculatorParser.LPAREN, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	RPAREN() {
	    return this.getToken(CalculatorParser.RPAREN, 0);
	};

	PUNTOYCOMA() {
	    return this.getToken(CalculatorParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterOperacion_texto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitOperacion_texto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitOperacion_texto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TransformacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_transformacion;
    }

	MAYUSCULAS() {
	    return this.getToken(CalculatorParser.MAYUSCULAS, 0);
	};

	MINUSCULAS() {
	    return this.getToken(CalculatorParser.MINUSCULAS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterTransformacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitTransformacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitTransformacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConcatenarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_concatenar;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	IGUAL() {
	    return this.getToken(CalculatorParser.IGUAL, 0);
	};

	cadena = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CadenaContext);
	    } else {
	        return this.getTypedRuleContext(CadenaContext,i);
	    }
	};

	MAS() {
	    return this.getToken(CalculatorParser.MAS, 0);
	};

	PUNTOYCOMA() {
	    return this.getToken(CalculatorParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterConcatenar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitConcatenar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitConcatenar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_impresion;
    }

	IMPRIMIR() {
	    return this.getToken(CalculatorParser.IMPRIMIR, 0);
	};

	LPAREN() {
	    return this.getToken(CalculatorParser.LPAREN, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	RPAREN() {
	    return this.getToken(CalculatorParser.RPAREN, 0);
	};

	PUNTOYCOMA() {
	    return this.getToken(CalculatorParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterImpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitImpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitImpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RetornoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_retorno;
    }

	DEVOLVER() {
	    return this.getToken(CalculatorParser.DEVOLVER, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	PUNTOYCOMA() {
	    return this.getToken(CalculatorParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterRetorno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitRetorno(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitRetorno(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_valor;
    }

	TEXTO() {
	    return this.getToken(CalculatorParser.TEXTO, 0);
	};

	NUMERO() {
	    return this.getToken(CalculatorParser.NUMERO, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_cadena;
    }

	TEXTO() {
	    return this.getToken(CalculatorParser.TEXTO, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_texto;
    }

	caracteres() {
	    return this.getTypedRuleContext(CaracteresContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracteresContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_caracteres;
    }

	NOMBRE() {
	    return this.getToken(CalculatorParser.NOMBRE, 0);
	};

	NUMERO() {
	    return this.getToken(CalculatorParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterCaracteres(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitCaracteres(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitCaracteres(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EjecucionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_ejecucion;
    }

	concatenar() {
	    return this.getTypedRuleContext(ConcatenarContext,0);
	};

	impresion() {
	    return this.getTypedRuleContext(ImpresionContext,0);
	};

	retorno() {
	    return this.getTypedRuleContext(RetornoContext,0);
	};

	operacion_texto() {
	    return this.getTypedRuleContext(Operacion_textoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterEjecucion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitEjecucion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitEjecucion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_nombre;
    }

	NOMBRE() {
	    return this.getToken(CalculatorParser.NOMBRE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterNombre(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitNombre(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitNombre(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_variable;
    }

	NOMBRE() {
	    return this.getToken(CalculatorParser.NOMBRE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_numero;
    }

	NUMERO() {
	    return this.getToken(CalculatorParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CalculatorParser.ProgramaContext = ProgramaContext; 
CalculatorParser.DeclaracionContext = DeclaracionContext; 
CalculatorParser.FuncionContext = FuncionContext; 
CalculatorParser.ArgumentosContext = ArgumentosContext; 
CalculatorParser.InstruccionesContext = InstruccionesContext; 
CalculatorParser.Operacion_textoContext = Operacion_textoContext; 
CalculatorParser.TransformacionContext = TransformacionContext; 
CalculatorParser.ConcatenarContext = ConcatenarContext; 
CalculatorParser.ImpresionContext = ImpresionContext; 
CalculatorParser.RetornoContext = RetornoContext; 
CalculatorParser.ValorContext = ValorContext; 
CalculatorParser.CadenaContext = CadenaContext; 
CalculatorParser.TextoContext = TextoContext; 
CalculatorParser.CaracteresContext = CaracteresContext; 
CalculatorParser.EjecucionContext = EjecucionContext; 
CalculatorParser.NombreContext = NombreContext; 
CalculatorParser.VariableContext = VariableContext; 
CalculatorParser.NumeroContext = NumeroContext; 
