/**
 * @author Vitor
 */
var unidade = function() {
	var modificador_dificuldade;
	var pontos_vida_total;
	var pontos_vida_atual;
	var quant_defesa;
	var tipo_defesa;
	var vel_movimento;
	var surgiu=false;
};

unidade.prototype.alteraDificuldade = function (nova_dificuldade){
	
};
unidade.prototype.morrer = function (){
	
};
unidade.prototype.andar = function (){
	
};
unidade.prototype.surgir = function (local,dificuldade){
	this.alteraDificuldade(dificuldade);
	
};
unidade.prototype.manutencao = function (local){
	if(surgiu===true){
		if(pontos_vida_atual<=0) morrer();
		else{
			andar();
		}
	}
};