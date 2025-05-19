// Generated from Calculator.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class CalculatorParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, VARIABLE=5, IMPRIMIR=6, MAYUSCULAS=7, 
		MINUSCULAS=8, FUNCION=9, DEVOLVER=10, IGUAL=11, PUNTOYCOMA=12, LPAREN=13, 
		RPAREN=14, LBRACE=15, RBRACE=16, COMA=17, MAS=18, NOMBRE=19, NUMERO=20, 
		WS=21;
	public static final int
		RULE_programa = 0, RULE_ejecucion = 1, RULE_declaracion = 2, RULE_funcion = 3, 
		RULE_argumentos = 4, RULE_instrucciones = 5, RULE_operacion_texto = 6, 
		RULE_concatenar = 7, RULE_impresion = 8, RULE_retorno = 9, RULE_valor = 10, 
		RULE_cadena = 11, RULE_texto = 12, RULE_caracteres = 13, RULE_nombre = 14, 
		RULE_variable = 15;
	private static String[] makeRuleNames() {
		return new String[] {
			"programa", "ejecucion", "declaracion", "funcion", "argumentos", "instrucciones", 
			"operacion_texto", "concatenar", "impresion", "retorno", "valor", "cadena", 
			"texto", "caracteres", "nombre", "variable"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'longitud'", "'invertir'", "'reemplazar'", "'' '", "'variable'", 
			"'imprimir'", "'mayusculas'", "'minusculas'", "'funcion'", "'devolver'", 
			"'='", "';'", "'('", "')'", "'{'", "'}'", "','", "'+'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, "VARIABLE", "IMPRIMIR", "MAYUSCULAS", "MINUSCULAS", 
			"FUNCION", "DEVOLVER", "IGUAL", "PUNTOYCOMA", "LPAREN", "RPAREN", "LBRACE", 
			"RBRACE", "COMA", "MAS", "NOMBRE", "NUMERO", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Calculator.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public CalculatorParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramaContext extends ParserRuleContext {
		public List<DeclaracionContext> declaracion() {
			return getRuleContexts(DeclaracionContext.class);
		}
		public DeclaracionContext declaracion(int i) {
			return getRuleContext(DeclaracionContext.class,i);
		}
		public List<FuncionContext> funcion() {
			return getRuleContexts(FuncionContext.class);
		}
		public FuncionContext funcion(int i) {
			return getRuleContext(FuncionContext.class,i);
		}
		public List<EjecucionContext> ejecucion() {
			return getRuleContexts(EjecucionContext.class);
		}
		public EjecucionContext ejecucion(int i) {
			return getRuleContext(EjecucionContext.class,i);
		}
		public ProgramaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_programa; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).enterPrograma(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).exitPrograma(this);
		}
	}

	public final ProgramaContext programa() throws RecognitionException {
		ProgramaContext _localctx = new ProgramaContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_programa);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(37);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 560L) != 0)) {
				{
				setState(35);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case VARIABLE:
					{
					setState(32);
					declaracion();
					}
					break;
				case FUNCION:
					{
					setState(33);
					funcion();
					}
					break;
				case T__3:
					{
					setState(34);
					ejecucion();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(39);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EjecucionContext extends ParserRuleContext {
		public TextoContext texto() {
			return getRuleContext(TextoContext.class,0);
		}
		public EjecucionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ejecucion; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).enterEjecucion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).exitEjecucion(this);
		}
	}

	public final EjecucionContext ejecucion() throws RecognitionException {
		EjecucionContext _localctx = new EjecucionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_ejecucion);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(40);
			texto();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeclaracionContext extends ParserRuleContext {
		public TerminalNode VARIABLE() { return getToken(CalculatorParser.VARIABLE, 0); }
		public NombreContext nombre() {
			return getRuleContext(NombreContext.class,0);
		}
		public TerminalNode PUNTOYCOMA() { return getToken(CalculatorParser.PUNTOYCOMA, 0); }
		public TerminalNode IGUAL() { return getToken(CalculatorParser.IGUAL, 0); }
		public ValorContext valor() {
			return getRuleContext(ValorContext.class,0);
		}
		public DeclaracionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaracion; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).enterDeclaracion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).exitDeclaracion(this);
		}
	}

	public final DeclaracionContext declaracion() throws RecognitionException {
		DeclaracionContext _localctx = new DeclaracionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_declaracion);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(42);
			match(VARIABLE);
			setState(43);
			nombre();
			setState(46);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IGUAL) {
				{
				setState(44);
				match(IGUAL);
				setState(45);
				valor();
				}
			}

			setState(48);
			match(PUNTOYCOMA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FuncionContext extends ParserRuleContext {
		public TerminalNode FUNCION() { return getToken(CalculatorParser.FUNCION, 0); }
		public NombreContext nombre() {
			return getRuleContext(NombreContext.class,0);
		}
		public TerminalNode LBRACE() { return getToken(CalculatorParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CalculatorParser.RBRACE, 0); }
		public TerminalNode LPAREN() { return getToken(CalculatorParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CalculatorParser.RPAREN, 0); }
		public List<InstruccionesContext> instrucciones() {
			return getRuleContexts(InstruccionesContext.class);
		}
		public InstruccionesContext instrucciones(int i) {
			return getRuleContext(InstruccionesContext.class,i);
		}
		public ArgumentosContext argumentos() {
			return getRuleContext(ArgumentosContext.class,0);
		}
		public FuncionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funcion; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).enterFuncion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).exitFuncion(this);
		}
	}

	public final FuncionContext funcion() throws RecognitionException {
		FuncionContext _localctx = new FuncionContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_funcion);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(50);
			match(FUNCION);
			setState(51);
			nombre();
			{
			setState(52);
			match(LPAREN);
			setState(54);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==NOMBRE) {
				{
				setState(53);
				argumentos();
				}
			}

			setState(56);
			match(RPAREN);
			}
			setState(58);
			match(LBRACE);
			setState(62);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1486L) != 0)) {
				{
				{
				setState(59);
				instrucciones();
				}
				}
				setState(64);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(65);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArgumentosContext extends ParserRuleContext {
		public List<NombreContext> nombre() {
			return getRuleContexts(NombreContext.class);
		}
		public NombreContext nombre(int i) {
			return getRuleContext(NombreContext.class,i);
		}
		public List<TerminalNode> COMA() { return getTokens(CalculatorParser.COMA); }
		public TerminalNode COMA(int i) {
			return getToken(CalculatorParser.COMA, i);
		}
		public ArgumentosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argumentos; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).enterArgumentos(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).exitArgumentos(this);
		}
	}

	public final ArgumentosContext argumentos() throws RecognitionException {
		ArgumentosContext _localctx = new ArgumentosContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_argumentos);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(67);
			nombre();
			setState(72);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMA) {
				{
				{
				setState(68);
				match(COMA);
				setState(69);
				nombre();
				}
				}
				setState(74);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InstruccionesContext extends ParserRuleContext {
		public Operacion_textoContext operacion_texto() {
			return getRuleContext(Operacion_textoContext.class,0);
		}
		public ImpresionContext impresion() {
			return getRuleContext(ImpresionContext.class,0);
		}
		public RetornoContext retorno() {
			return getRuleContext(RetornoContext.class,0);
		}
		public InstruccionesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instrucciones; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).enterInstrucciones(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).exitInstrucciones(this);
		}
	}

	public final InstruccionesContext instrucciones() throws RecognitionException {
		InstruccionesContext _localctx = new InstruccionesContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_instrucciones);
		try {
			setState(78);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
			case T__1:
			case T__2:
			case MAYUSCULAS:
			case MINUSCULAS:
				enterOuterAlt(_localctx, 1);
				{
				setState(75);
				operacion_texto();
				}
				break;
			case IMPRIMIR:
				enterOuterAlt(_localctx, 2);
				{
				setState(76);
				impresion();
				}
				break;
			case DEVOLVER:
				enterOuterAlt(_localctx, 3);
				{
				setState(77);
				retorno();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Operacion_textoContext extends ParserRuleContext {
		public TerminalNode MAYUSCULAS() { return getToken(CalculatorParser.MAYUSCULAS, 0); }
		public TerminalNode MINUSCULAS() { return getToken(CalculatorParser.MINUSCULAS, 0); }
		public Operacion_textoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operacion_texto; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).enterOperacion_texto(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).exitOperacion_texto(this);
		}
	}

	public final Operacion_textoContext operacion_texto() throws RecognitionException {
		Operacion_textoContext _localctx = new Operacion_textoContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_operacion_texto);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(80);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 398L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConcatenarContext extends ParserRuleContext {
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public TerminalNode IGUAL() { return getToken(CalculatorParser.IGUAL, 0); }
		public List<CadenaContext> cadena() {
			return getRuleContexts(CadenaContext.class);
		}
		public CadenaContext cadena(int i) {
			return getRuleContext(CadenaContext.class,i);
		}
		public TerminalNode MAS() { return getToken(CalculatorParser.MAS, 0); }
		public TerminalNode PUNTOYCOMA() { return getToken(CalculatorParser.PUNTOYCOMA, 0); }
		public ConcatenarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_concatenar; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).enterConcatenar(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).exitConcatenar(this);
		}
	}

	public final ConcatenarContext concatenar() throws RecognitionException {
		ConcatenarContext _localctx = new ConcatenarContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_concatenar);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(82);
			variable();
			setState(83);
			match(IGUAL);
			setState(84);
			cadena();
			setState(85);
			match(MAS);
			setState(86);
			cadena();
			setState(87);
			match(PUNTOYCOMA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ImpresionContext extends ParserRuleContext {
		public TerminalNode IMPRIMIR() { return getToken(CalculatorParser.IMPRIMIR, 0); }
		public TerminalNode LPAREN() { return getToken(CalculatorParser.LPAREN, 0); }
		public ValorContext valor() {
			return getRuleContext(ValorContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(CalculatorParser.RPAREN, 0); }
		public TerminalNode PUNTOYCOMA() { return getToken(CalculatorParser.PUNTOYCOMA, 0); }
		public ImpresionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_impresion; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).enterImpresion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).exitImpresion(this);
		}
	}

	public final ImpresionContext impresion() throws RecognitionException {
		ImpresionContext _localctx = new ImpresionContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_impresion);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(89);
			match(IMPRIMIR);
			setState(90);
			match(LPAREN);
			setState(91);
			valor();
			setState(92);
			match(RPAREN);
			setState(93);
			match(PUNTOYCOMA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RetornoContext extends ParserRuleContext {
		public TerminalNode DEVOLVER() { return getToken(CalculatorParser.DEVOLVER, 0); }
		public ValorContext valor() {
			return getRuleContext(ValorContext.class,0);
		}
		public TerminalNode PUNTOYCOMA() { return getToken(CalculatorParser.PUNTOYCOMA, 0); }
		public RetornoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_retorno; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).enterRetorno(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).exitRetorno(this);
		}
	}

	public final RetornoContext retorno() throws RecognitionException {
		RetornoContext _localctx = new RetornoContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_retorno);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(95);
			match(DEVOLVER);
			setState(96);
			valor();
			setState(97);
			match(PUNTOYCOMA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ValorContext extends ParserRuleContext {
		public TextoContext texto() {
			return getRuleContext(TextoContext.class,0);
		}
		public TerminalNode NUMERO() { return getToken(CalculatorParser.NUMERO, 0); }
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public ValorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valor; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).enterValor(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).exitValor(this);
		}
	}

	public final ValorContext valor() throws RecognitionException {
		ValorContext _localctx = new ValorContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_valor);
		try {
			setState(102);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__3:
				enterOuterAlt(_localctx, 1);
				{
				setState(99);
				texto();
				}
				break;
			case NUMERO:
				enterOuterAlt(_localctx, 2);
				{
				setState(100);
				match(NUMERO);
				}
				break;
			case NOMBRE:
				enterOuterAlt(_localctx, 3);
				{
				setState(101);
				variable();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CadenaContext extends ParserRuleContext {
		public TextoContext texto() {
			return getRuleContext(TextoContext.class,0);
		}
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public CadenaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cadena; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).enterCadena(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).exitCadena(this);
		}
	}

	public final CadenaContext cadena() throws RecognitionException {
		CadenaContext _localctx = new CadenaContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_cadena);
		try {
			setState(106);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__3:
				enterOuterAlt(_localctx, 1);
				{
				setState(104);
				texto();
				}
				break;
			case NOMBRE:
				enterOuterAlt(_localctx, 2);
				{
				setState(105);
				variable();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TextoContext extends ParserRuleContext {
		public CaracteresContext caracteres() {
			return getRuleContext(CaracteresContext.class,0);
		}
		public TextoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_texto; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).enterTexto(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).exitTexto(this);
		}
	}

	public final TextoContext texto() throws RecognitionException {
		TextoContext _localctx = new TextoContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_texto);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(108);
			match(T__3);
			setState(109);
			caracteres();
			setState(110);
			match(T__3);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CaracteresContext extends ParserRuleContext {
		public TerminalNode NOMBRE() { return getToken(CalculatorParser.NOMBRE, 0); }
		public TerminalNode NUMERO() { return getToken(CalculatorParser.NUMERO, 0); }
		public CaracteresContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caracteres; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).enterCaracteres(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).exitCaracteres(this);
		}
	}

	public final CaracteresContext caracteres() throws RecognitionException {
		CaracteresContext _localctx = new CaracteresContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_caracteres);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(112);
			_la = _input.LA(1);
			if ( !(_la==NOMBRE || _la==NUMERO) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NombreContext extends ParserRuleContext {
		public TerminalNode NOMBRE() { return getToken(CalculatorParser.NOMBRE, 0); }
		public NombreContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nombre; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).enterNombre(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).exitNombre(this);
		}
	}

	public final NombreContext nombre() throws RecognitionException {
		NombreContext _localctx = new NombreContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_nombre);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(114);
			match(NOMBRE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VariableContext extends ParserRuleContext {
		public TerminalNode NOMBRE() { return getToken(CalculatorParser.NOMBRE, 0); }
		public VariableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variable; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).enterVariable(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalculatorListener ) ((CalculatorListener)listener).exitVariable(this);
		}
	}

	public final VariableContext variable() throws RecognitionException {
		VariableContext _localctx = new VariableContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_variable);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(116);
			match(NOMBRE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0015w\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0005\u0000$\b\u0000\n\u0000\f\u0000"+
		"\'\t\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0003\u0002/\b\u0002\u0001\u0002\u0001\u0002\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u00037\b\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0005\u0003=\b\u0003\n\u0003\f\u0003"+
		"@\t\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0005\u0004G\b\u0004\n\u0004\f\u0004J\t\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0003\u0005O\b\u0005\u0001\u0006\u0001\u0006\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\n\u0001\n\u0001\n\u0003\ng\b\n\u0001\u000b\u0001\u000b"+
		"\u0003\u000bk\b\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r"+
		"\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0000\u0000"+
		"\u0010\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018"+
		"\u001a\u001c\u001e\u0000\u0002\u0002\u0000\u0001\u0003\u0007\b\u0001\u0000"+
		"\u0013\u0014r\u0000%\u0001\u0000\u0000\u0000\u0002(\u0001\u0000\u0000"+
		"\u0000\u0004*\u0001\u0000\u0000\u0000\u00062\u0001\u0000\u0000\u0000\b"+
		"C\u0001\u0000\u0000\u0000\nN\u0001\u0000\u0000\u0000\fP\u0001\u0000\u0000"+
		"\u0000\u000eR\u0001\u0000\u0000\u0000\u0010Y\u0001\u0000\u0000\u0000\u0012"+
		"_\u0001\u0000\u0000\u0000\u0014f\u0001\u0000\u0000\u0000\u0016j\u0001"+
		"\u0000\u0000\u0000\u0018l\u0001\u0000\u0000\u0000\u001ap\u0001\u0000\u0000"+
		"\u0000\u001cr\u0001\u0000\u0000\u0000\u001et\u0001\u0000\u0000\u0000 "+
		"$\u0003\u0004\u0002\u0000!$\u0003\u0006\u0003\u0000\"$\u0003\u0002\u0001"+
		"\u0000# \u0001\u0000\u0000\u0000#!\u0001\u0000\u0000\u0000#\"\u0001\u0000"+
		"\u0000\u0000$\'\u0001\u0000\u0000\u0000%#\u0001\u0000\u0000\u0000%&\u0001"+
		"\u0000\u0000\u0000&\u0001\u0001\u0000\u0000\u0000\'%\u0001\u0000\u0000"+
		"\u0000()\u0003\u0018\f\u0000)\u0003\u0001\u0000\u0000\u0000*+\u0005\u0005"+
		"\u0000\u0000+.\u0003\u001c\u000e\u0000,-\u0005\u000b\u0000\u0000-/\u0003"+
		"\u0014\n\u0000.,\u0001\u0000\u0000\u0000./\u0001\u0000\u0000\u0000/0\u0001"+
		"\u0000\u0000\u000001\u0005\f\u0000\u00001\u0005\u0001\u0000\u0000\u0000"+
		"23\u0005\t\u0000\u000034\u0003\u001c\u000e\u000046\u0005\r\u0000\u0000"+
		"57\u0003\b\u0004\u000065\u0001\u0000\u0000\u000067\u0001\u0000\u0000\u0000"+
		"78\u0001\u0000\u0000\u000089\u0005\u000e\u0000\u00009:\u0001\u0000\u0000"+
		"\u0000:>\u0005\u000f\u0000\u0000;=\u0003\n\u0005\u0000<;\u0001\u0000\u0000"+
		"\u0000=@\u0001\u0000\u0000\u0000><\u0001\u0000\u0000\u0000>?\u0001\u0000"+
		"\u0000\u0000?A\u0001\u0000\u0000\u0000@>\u0001\u0000\u0000\u0000AB\u0005"+
		"\u0010\u0000\u0000B\u0007\u0001\u0000\u0000\u0000CH\u0003\u001c\u000e"+
		"\u0000DE\u0005\u0011\u0000\u0000EG\u0003\u001c\u000e\u0000FD\u0001\u0000"+
		"\u0000\u0000GJ\u0001\u0000\u0000\u0000HF\u0001\u0000\u0000\u0000HI\u0001"+
		"\u0000\u0000\u0000I\t\u0001\u0000\u0000\u0000JH\u0001\u0000\u0000\u0000"+
		"KO\u0003\f\u0006\u0000LO\u0003\u0010\b\u0000MO\u0003\u0012\t\u0000NK\u0001"+
		"\u0000\u0000\u0000NL\u0001\u0000\u0000\u0000NM\u0001\u0000\u0000\u0000"+
		"O\u000b\u0001\u0000\u0000\u0000PQ\u0007\u0000\u0000\u0000Q\r\u0001\u0000"+
		"\u0000\u0000RS\u0003\u001e\u000f\u0000ST\u0005\u000b\u0000\u0000TU\u0003"+
		"\u0016\u000b\u0000UV\u0005\u0012\u0000\u0000VW\u0003\u0016\u000b\u0000"+
		"WX\u0005\f\u0000\u0000X\u000f\u0001\u0000\u0000\u0000YZ\u0005\u0006\u0000"+
		"\u0000Z[\u0005\r\u0000\u0000[\\\u0003\u0014\n\u0000\\]\u0005\u000e\u0000"+
		"\u0000]^\u0005\f\u0000\u0000^\u0011\u0001\u0000\u0000\u0000_`\u0005\n"+
		"\u0000\u0000`a\u0003\u0014\n\u0000ab\u0005\f\u0000\u0000b\u0013\u0001"+
		"\u0000\u0000\u0000cg\u0003\u0018\f\u0000dg\u0005\u0014\u0000\u0000eg\u0003"+
		"\u001e\u000f\u0000fc\u0001\u0000\u0000\u0000fd\u0001\u0000\u0000\u0000"+
		"fe\u0001\u0000\u0000\u0000g\u0015\u0001\u0000\u0000\u0000hk\u0003\u0018"+
		"\f\u0000ik\u0003\u001e\u000f\u0000jh\u0001\u0000\u0000\u0000ji\u0001\u0000"+
		"\u0000\u0000k\u0017\u0001\u0000\u0000\u0000lm\u0005\u0004\u0000\u0000"+
		"mn\u0003\u001a\r\u0000no\u0005\u0004\u0000\u0000o\u0019\u0001\u0000\u0000"+
		"\u0000pq\u0007\u0001\u0000\u0000q\u001b\u0001\u0000\u0000\u0000rs\u0005"+
		"\u0013\u0000\u0000s\u001d\u0001\u0000\u0000\u0000tu\u0005\u0013\u0000"+
		"\u0000u\u001f\u0001\u0000\u0000\u0000\t#%.6>HNfj";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}