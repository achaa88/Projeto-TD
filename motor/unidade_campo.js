/**
 * @author Vitor
 */
var unidade_campo = function(){
	var esta_construido=false;
	var esta_bloqueado=false;
	var torre= new torre_base();
	
};
unidade_campo.prototype.onClick = function(){
	//mostra as opçoes e executa a clicada
};
unidade_campo.prototype.construir = function(torre){
	//constroi a torre selecionada
	torre.construir();
	//altera imagem do campo
	
	//inicializa o objeto da torre
	
	esta_construido=true;
	
};
unidade_campo.prototype.demolir = function(){
	//demoli a torre
	torre.demolir();
	//altera imagem do campo
	
	esta_construido=false;
};
unidade_campo.prototype.bloquear = function(){
	if(esta_construido==false){
		esta_bloqueado=true;
	}
};
