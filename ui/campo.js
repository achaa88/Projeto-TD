/**
 * @author Vitor
 */
function campoUI(){
	var largura;
	var altura_barra_inf;
	var janela = Ti.UI.createWindow({
		layout:'vertical',
	});
	
	var vista_campo = Ti.UI.createView({
		width: 700,
		height: 700,
		backgroundColor: 'white',
		top: 20,
	});
	
	var vista_barra_inf = Ti.UI.createView({
		width: 700,
		height: 300,
		backgroundColor:'gray',
		top: 20,
	});
	
	janela.add(vista_campo);
	janela.add(vista_barra_inf);
	janela.open();
	this.open = function(){
		janela.open();
	};
	return janela;
};
module.exports = campoUI;