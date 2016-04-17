/**
 * @author Vitor
 */
var gerenciador_waves = function(){
	var dificuldade_atual;
	var lista_waves= [];
	var tempo_inicio_ultima_wave;
	var wave_atual;
	var tempo_entre_waves;
};
gerenciador_waves.prototype.iniciar = function(){
	//contagem inicial para começar
	
	//inicia a primeira wave
	this.inicia_wave(0);
};
gerenciador_waves.prototype.verificarWave = function(){
	//atualizar o tempo atual
	var tempo_atual;
	if(tempo_atual>=tempo_inicio_utlima_wave+tempo_entre_waves){
		this.inicia_wave(wave_atual+1);
	}
};
gerenciador_waves.prototype.inicia_wave = function(numero_wave){
	wave_atual=numero_wave;
	//pega no vetor de waves as unidades correspondentes ao numero
};
