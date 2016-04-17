/*
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
*/
var janela;
janela = Ti.UI.createWindow({
	backgroundColor:'black',
	title:'Projeto TD',
});
var visao_inicial = Ti.UI.createView({
	width:Ti.UI.SIZE,
	height:Ti.UI.SIZE,
	layout: 'vertical',
	backgroundColor: 'red',
	top: 10,
});
janela.add(visao_inicial);
var etiqueta = Ti.UI.createLabel({
	color: 'black',
	text: 'Projeto TD',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width: Ti.UI.SIZE,
	height: Ti.UI.SIZE,
	top: 100,
});
var botao_iniciar;
botao_iniciar = Ti.UI.createButton({
	color: 'black',
	width: Ti.UI.SIZE,
	height: Ti.UI.SIZE,
	title: 'Iniciar',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	text:'Iniciar',
	top: 100,
	
});
var botao_opcoes = Ti.UI.createButton({
	color: 'black',
	width: Ti.UI.SIZE,
	height: Ti.UI.SIZE,
	title: 'Opções',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	text:'Opções',
	top: 10,
	
});
botao_iniciar.addEventListener('click',function (){
	var campoUI = require('ui/campo');
	campo = new campoUI();
});
visao_inicial.add(etiqueta);
visao_inicial.add(botao_iniciar);
visao_inicial.add(botao_opcoes);
janela.open();
