// Generated from Calculator.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link CalculatorParser}.
 */
public interface CalculatorListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(CalculatorParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(CalculatorParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#ejecucion}.
	 * @param ctx the parse tree
	 */
	void enterEjecucion(CalculatorParser.EjecucionContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#ejecucion}.
	 * @param ctx the parse tree
	 */
	void exitEjecucion(CalculatorParser.EjecucionContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#declaracion}.
	 * @param ctx the parse tree
	 */
	void enterDeclaracion(CalculatorParser.DeclaracionContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#declaracion}.
	 * @param ctx the parse tree
	 */
	void exitDeclaracion(CalculatorParser.DeclaracionContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#funcion}.
	 * @param ctx the parse tree
	 */
	void enterFuncion(CalculatorParser.FuncionContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#funcion}.
	 * @param ctx the parse tree
	 */
	void exitFuncion(CalculatorParser.FuncionContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#argumentos}.
	 * @param ctx the parse tree
	 */
	void enterArgumentos(CalculatorParser.ArgumentosContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#argumentos}.
	 * @param ctx the parse tree
	 */
	void exitArgumentos(CalculatorParser.ArgumentosContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void enterInstrucciones(CalculatorParser.InstruccionesContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void exitInstrucciones(CalculatorParser.InstruccionesContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#operacion_texto}.
	 * @param ctx the parse tree
	 */
	void enterOperacion_texto(CalculatorParser.Operacion_textoContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#operacion_texto}.
	 * @param ctx the parse tree
	 */
	void exitOperacion_texto(CalculatorParser.Operacion_textoContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#concatenar}.
	 * @param ctx the parse tree
	 */
	void enterConcatenar(CalculatorParser.ConcatenarContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#concatenar}.
	 * @param ctx the parse tree
	 */
	void exitConcatenar(CalculatorParser.ConcatenarContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#impresion}.
	 * @param ctx the parse tree
	 */
	void enterImpresion(CalculatorParser.ImpresionContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#impresion}.
	 * @param ctx the parse tree
	 */
	void exitImpresion(CalculatorParser.ImpresionContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#retorno}.
	 * @param ctx the parse tree
	 */
	void enterRetorno(CalculatorParser.RetornoContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#retorno}.
	 * @param ctx the parse tree
	 */
	void exitRetorno(CalculatorParser.RetornoContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#valor}.
	 * @param ctx the parse tree
	 */
	void enterValor(CalculatorParser.ValorContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#valor}.
	 * @param ctx the parse tree
	 */
	void exitValor(CalculatorParser.ValorContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#cadena}.
	 * @param ctx the parse tree
	 */
	void enterCadena(CalculatorParser.CadenaContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#cadena}.
	 * @param ctx the parse tree
	 */
	void exitCadena(CalculatorParser.CadenaContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#texto}.
	 * @param ctx the parse tree
	 */
	void enterTexto(CalculatorParser.TextoContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#texto}.
	 * @param ctx the parse tree
	 */
	void exitTexto(CalculatorParser.TextoContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#caracteres}.
	 * @param ctx the parse tree
	 */
	void enterCaracteres(CalculatorParser.CaracteresContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#caracteres}.
	 * @param ctx the parse tree
	 */
	void exitCaracteres(CalculatorParser.CaracteresContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#nombre}.
	 * @param ctx the parse tree
	 */
	void enterNombre(CalculatorParser.NombreContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#nombre}.
	 * @param ctx the parse tree
	 */
	void exitNombre(CalculatorParser.NombreContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#variable}.
	 * @param ctx the parse tree
	 */
	void enterVariable(CalculatorParser.VariableContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#variable}.
	 * @param ctx the parse tree
	 */
	void exitVariable(CalculatorParser.VariableContext ctx);
}