//variáveis de controle do framework
var story;
var instrucoes = false;
var creditos = false;
var master = false;

//variável de controle do item
var item = false;

//função que retorna dados das escolhas
function getStory () {
	return{

	currentScene: "introducao", 
	introducao: {
		title: "Primeiro Dia",
		image: "img/image-eric.gif",
		story: "<h3>Este é o primeiro texto da narrativa interativa. Aqui você deve apresentar o cenário e o personagem.</h3><h3>Abaixo estão as duas escolhas possíveis:</h3>",
		choices: [
	 	{
			choice: "Opção 1",
			destination: 'opcao01'
	 	},
		{
			choice: "Opção 2",
			destination: 'opcao02'
	 	}
	 	]
	},

	opcao01: {
		title: "Primeira Opção",
		image: "",
		story: "<h3>Neste trecho é exemplificado como salvar itens e escolhas.</h3><h3> No código, verifique a função renderScene()</h3>",
		choices: [
	 	{
			choice: "Pegar item secreto...",
			destination: 'pegaritem'
	 	}, 
		{
			choice: "Não pegar secreto...",
			destination: 'naopegaritem'
		}
	 	]
	},

	opcao02: {
		title: "Segunda Opção",
		image: "",
		story: "<h3>Esta opção está aqui apenas para exemplificação.</h3>",
		choices: [
	 	{
			choice: "Avançando...",
			destination: 'opcao01'
		}
	 	]
	},

	pegaritem: {
		title: "Pegar Item",
		image: "",
		story: "<h3 >Você pegou o item secreto item; para isso ver validado, é necessário mudar o valor da variável [item] no código, na função renderScene().</h3>",
		choices: [
		{
			choice: "Seguir Adiante",
			destination: "testaritem"
		}
		]
	},

	naopegaritem: {
		title: "Não Pegar Item",
		image: "",
		story: "<h3 >Você não pegou um item; nada precisa ser alterado no código.</h3>",
		choices: [
		{
			choice: "Seguir Adiante",
			destination: "testaritem"
		}
		]
	},

	//trecho em branco para criar se o item está no inventário
	testaritem: {
		title: "",
		story: "",
		choices: [
		{
			choice: "",
			destination: ""
		}
		]
	},

	finalbom: {
		title: "Final Bom",
		image: "",
		story: "<h3 >Você pegou o item e concluiu sua aventura!</h3>",
		choices: [
		{
			choice: "Introdução",
			destination: "introducao"
		}
		]
	},

	finalruim: {
		title: "Final Ruim",
		image: "",
		story: "<h3 >Você não pegou o item... Tente novamente!</h3>",
		choices: [
		{
			choice: "Introdução",
			destination: "introducao"
		}
		]
	},

	instrucoes: {
		title: "Instruções",
		story: "<h3><center>Recomendação Etária: Livre</center></h3><h3>Para jogar uma aventura-solo, basta ler o texto apresentado, e no final, clicar sobre a decisão escolhida. Como exemplo, temos 2 opções:</h3><h3>- A primeira delas é a opção de 'Começar a Aventura', onde você irá ler o trecho introdutório do texto, identificando o personagem que você irá interpretar;</h3><h3>- A segunda opção é a de retornar a 'Tela Inicial' do jogo.</h3><h3>No caso dessa aventura-solo, é utilizado o sistema de regras <a href='https://operarpg.com.br' class='classe1' target='blank'>OPERA RPG</a>; caso queira ler um resumos das regras, consulte o <a href='https://operarpg.com.br/opereta/' class='classe1' target='blank'>OPEReta</a>.</h3><h3>Existe um botão flutuante no canto inferior da tela. Ele permite ver a ficha de personagem na mesma ou em outra janela.</h3><h3>Existe mais de um final possível deste jogo, por isso você poder jogar novamente escolhendo opções diferentes das anteriormente escolhidas.</h3><h3>Após as opções de escolha da narrativa, existe o controle (de 4 botões) de uma trilha sonora; recomendamaos escutá-la, caso seja possível.</h3>",
		// Ass. O Falcão
		choices: [
		{
			choice: "Começar a Aventura!",
			destination: "introducao"
		},
		{
			choice: "Tela Inicial",
			destination: "inicio"
		}
		]
	},

	creditos: {
		title: "Créditos",
		story: "<p><b>Autor:</b> (colocar seu nome aqui) <p><b>Programação:</b> (colocar seu nome aqui) e Leonardo Antônio de Andrade</p><p><b>Trilha Sonora: </b></p>&nbsp;&nbsp;<a href='https://www.jamendo.com/track/1273567/espionage' target='blank' class='classe1'>Trecho da Faixa Espionage, de FOX & MEW</a></h3>",
		choices: [
		{
			choice: "Começar a Aventura!",
			destination: "introducao"
		},
		{
			choice: "Tela Inicial",
			destination: "inicio"
		}
		]
	},
	
	inicio: {
		title: "Inicio",
		story: "<h3></h3>",
		choices: [
		{
			choice: ".",
			destination: "inicio"
		}
		]
	}
	
	}
}

//Programação dos Botões e Seleção das Opções Inciais (Iniciar a aventura, Nova janela com site, Instruções e Créditos)
document.addEventListener ('DOMContentLoaded', function() {
	story = getStory();
	renderScene();
});

//Programação para Atualização do códigu HTML, Controle de Aletoriedade e de Itens
function renderScene() {
	//Renderização do texto
	document.getElementById("content").innerHTML = `
		<p>${story[story.currentScene].story}</p>
		${getInputs()}
	`;
	
	var button0 = document.querySelector("#button0");
	var button1 = document.querySelector("#button1");
	var button2 = document.querySelector("#button2");
	var button3 = document.querySelector("#button3");

	//Programação dos botões
	button0.addEventListener('click', function() {
		getInputValue(0);
	})

	if (button1 != null)
	{
		button1.addEventListener('click', function (){
			getInputValue(1);
		})
	}
	if (button2 != null)
	{
		button2.addEventListener('click', function (){
			getInputValue(2);
		})
	}
	if (button3 != null)
	{
		button3.addEventListener('click', function (){
			getInputValue(3);
		})
	}

	switch (story.currentScene ) {
		case ('introducao'):
			item = false;
		break;
		
		case ('pegaritem'): 
			item = true; 
		break;
		
		case ('testaritem'):
			if (item) 
				story.currentScene = 'finalbom';
			else
				story.currentScene = 'finalruim';
			renderScene();
		break;

	}
}

//Função de Seleção de Destino
function getInputValue (x) {
	const inputs = document.querySelectorAll('input[type="button"]');
	const destination = inputs[x].getAttribute('data-destination');

	if (destination.includes('http://')) {
		window.open(destination, '_blank');
	} else {
		story.currentScene = destination;
		renderScene();
	}
}

//Função de Captura da Seleção
function getInputs() {
	var input = ""
	if (!story[story.currentScene].choices){
		return ""
	}
	for(var i = 0; i < story[story.currentScene].choices.length; i++)
	{
		input += `
		<div>
			<center><input type="button" id="button${i}" data-destination=${story[story.currentScene].choices[i].destination} name="choices" class="button button${i}" value="${story[story.currentScene].choices[i].choice}"></center>
		</div>`
	}
	return input;
}