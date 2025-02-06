// Framework de Combate Novo 

//variáveis de controle do framework
var story;
var cont = 0;
var instrucoes = false;
var creditos = false;
var master = false;
var especial = 0;

//variáveis de controle do ponto de salvamento
sessionStorage.setItem('savepoint', 0);
sessionStorage.setItem('sairsala', 0);

//dados iniciais do personagem
sessionStorage.setItem('nome', 'o Toriel');
sessionStorage.setItem('vida', 6);
sessionStorage.setItem('iniciativa', 7);
sessionStorage.setItem('esquiva', 9);
sessionStorage.setItem('absorcao', 0);
sessionStorage.setItem('arma0_nome', 'Desarmado');
sessionStorage.setItem('arma0_golpe', 8);
sessionStorage.setItem('arma0_aparo', 8);
sessionStorage.setItem('arma0_danoa', 0);
sessionStorage.setItem('arma0_danof', 1);
sessionStorage.setItem('arma1_nome', 'Espada');
sessionStorage.setItem('arma1_golpe', 10);
sessionStorage.setItem('arma1_aparo', 10);
sessionStorage.setItem('arma1_danoa', 3);
sessionStorage.setItem('arma1_danof', 0);

sessionStorage.setItem('escudo', 0);


//dados do ponto de salvamento
sessionStorage.setItem('nome_', 'o Toriel');
sessionStorage.setItem('vida_', 6);
sessionStorage.setItem('bencao_', 0);
sessionStorage.setItem('iniciativa_', 7);
sessionStorage.setItem('esquiva_', 9);
sessionStorage.setItem('absorcao_', 0);
sessionStorage.setItem('arma0_nome_', 'Desarmado');
sessionStorage.setItem('arma0_golpe_', 8);
sessionStorage.setItem('arma0_aparo_', 8);
sessionStorage.setItem('arma0_danoa_', 0);
sessionStorage.setItem('arma0_danof_', 1);
sessionStorage.setItem('arma1_nome_', 'Espada');
sessionStorage.setItem('arma1_golpe_', 10);
sessionStorage.setItem('arma1_aparo_', 10);
sessionStorage.setItem('arma1_danoa_', 3);
sessionStorage.setItem('arma1_danof_', 0);
sessionStorage.setItem('escudo_', 0);



sessionStorage.setItem('combate1', 0);
sessionStorage.setItem('combate2', 0);

//função que define o conteúdo textual da narrativa
function getStory() {
    return {
        currentScene: "introducao",
        introducao: {
            title: "Primeiro Combate",
			image: "",
            story: "<h3>Você encontrou um inimigo! Agora, escolha sua ação de combate.</h3>",
            choices: [
                {
                    choice: "Atacar",
                    destination: 'ataque'
                }
            ]
        },

        ataque: {
            title: "Ataque!",
            image: "",
            story: "<h3>Você decidiu atacar! Prepare-se para o combate...</h3>",
            choices: [
                {
					choice: "Iniciar combate",
                    destination: 'combateGolemDeOsso'
                }
            ]
        },

        rolarDadoAtaque: {
            title: "Resultado do Ataque",
            image: "",
            story: "<h3>Se o resultado for maior que 3, você acerta o inimigo!</h3>",
            choices: [
                {
                    choice: "Ver Resultado",
                    destination: 'combateGolemDeOsso'
                }
            ]
        },

		combateGolemDeOsso: {
			title: "",
			story: "",
			choices: [
			{
				choice: "",
				destination: ""
			}
			]
		},

        resultadoAtaque: {
            title: "Resultado do Ataque",
            story: "",
            choices: [
			{
				choice: "",
				destination: ""	
			}
			]
        },

        turnoInimigo: {
            title: "Turno do Inimigo",
            image: "",
            story: "<h3>O inimigo está atacando!</h3>",
            choices: [
                {
                    choice: "Ver Resultado",
                    destination: 'resultadoInimigo'
                }
            ]
        },

        resultadoInimigo: {
            title: "Resultado do Ataque do Inimigo",
            story: "",
            choices: []
        },

		poscombateGolemDeOsso1: {
			title: "Pós Combate com o Golem de Ossos",
			story: "<h3>O último golpe foi desferido...</h3>",
			choices: [
			{
				choice: "Continuar",
				destination: "poscombateGolemDeOsso2"
			}
			]
		},

		poscombateGolemDeOsso2: {
			title: "",
			story: "",
			choices: [
			{
				choice: "",
				destination: ""
			}
			]
		},

		derrotaCombate: {
			title: "Morte por Derrota no Combate",
			story: "<h3>O combate foi mortal para Toriel. Tome fôlego e tente mais uma vez!</h3>",
			choices: [
			{
				choice: "Continuar",
				destination: 'introducao'
			}
			]
		},
	
		sucessoGolemDeOsso: {
			title: "Vitória sobre o Golem de Fogo",
			story: "<h3>Parabéns, você venceu seu primeiro inimigo e ganhou um escudo!</h3>",
			choices: [
			{
				choice: "Pegar escudo",
				destination: 'pegarEscudo'
			}
			]
		},
	


		pegarEscudo: {
			title: "Fim",
			story: "<h3>Esse foi um exemplo de combate e como adicionar itens no inventario usando esse framework.</h3>",
			choices: [
			{
				choice: "Continuar",
				destination: 'pularPilar'
			}
			]
		},


		pularPilar: {
			title: "Tentar pulo",
			story: "<h3>Toriel segue em frente, mas seu caminho é interrompido por um abismo onde a lava borbulhante se agita logo abaixo. Diante dele, um pilar solitário se ergue como a única passagem segura. Para atravessar, Toriel precisará confiar em sua agilidade. Faça um Teste de Acrobacia para ver se ele consegue alcançar o pilar.</h3>",
			choices: [
			{
				choice: "Rolar 2D6 para tentar pular para o pilar",
				destination: 'rolarDados01'
			}
			]
		},

		rolarDados01: {
			title: "",
			story: "",
			choices: [
			{
				choice: "",
				destination: ""
			}
			]
		},

		sucessorolarDados01: {
			title: "Sucesso no Teste de Destreza",
			story: "<h3>Toriel salta e, por um instante, sente o vazio sob seus pés. Mas seus dedos encontram a borda do pilar seguinte, e com um esforço tremendo, ele se puxa para cima. </h3><h3> A pedra treme, ameaçando ceder, mas se mantém firme o suficiente. </h3><h3> Toriel recupera o fôlego, sentindo o calor da lava abaixo. Ele está seguro... por enquanto.</h3>",
			choices: [
			{
				choice: "Continuar",
				destination: 'creditos'
				// destination: 'morrerQueimado'
			}
			]
		},

		morrerQueimado: {
			title: "Morrer Queimado",
			story: "<h3>Toriel salta, mas seus pés escorregam na beirada do pilar. O ar quente sobe com força enquanto ele perde o equilíbrio—e então despenca.</h3><h3>Em um instante, a lava o envolve, o calor insuportável consumindo tudo. </h3><h3>A dor é intensa, mas breve. Seu corpo desaparece nas chamas, reduzido a cinzas. Mas este não é o fim. Respire fundo. O passado se desfaz como fumaça, e uma nova chance se apresenta. </h3><h3> A história continua, e em uma realidade alternativa, Toriel pode tentar novamente.</h3>",
			choices: [
			{
				choice: "Voltar para o Ponto de Salvamento",
				destination: 'pontodeSalvamento'
			}
			]
		},

	
		pontodeSalvamento: {
			title: "",
			story: "",
			choices: [
			{
				choice: "",
				destination: ""
			}
			]
		},

		instrucoes: {
			title: "Instruções",
			story: "<h3><center>Recomendação Etária: Livre</center></h3><h3>Para jogar uma aventura-solo, basta ler o texto apresentado, e no final, clicar sobre a decisão escolhida. Como exemplo, temos 2 opções:</h3><h3>- A primeira delas é a opção de 'Começar a Aventura', onde você irá ler o trecho introdutório do texto, identificando o personagem que você irá interpretar;</h3><h3>- A segunda opção é a de retornar a 'Tela Inicial' do jogo.</h3><h3>No caso dessa aventura-solo, é utilizado o sistema de regras <a href='https://operarpg.com.br' class='classe1' target='blank'>OPERA RPG</a>; caso queira ler um resumos das regras, consulte o <a href='https://operarpg.com.br/opereta/' class='classe1' target='blank'>OPEReta</a>.</h3><h3>Existe um botão flutuante no canto inferior da tela. Ele permite ver a ficha de personagem na mesma ou em outra janela.</h3><h3>Existe mais de um final possível deste jogo, por isso você poder jogar novamente escolhendo opções diferentes das anteriormente escolhidas.</h3><h3>Após as opções de escolha narrativa, existe o controle (de 4 botões) de uma trilha sonora; recomendamaos escutá-la, caso seja possível.</h3>",
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
			story: "<h2 align='center'>Créditos</h2><h3>Esta é aventura-solo é parte do <a href='https://operarpg.com.br/arquivos/regras_e_fichas/ROPERAShareware.zip' target='blank' class='classe1'>OPERA Shareware Reload</a>, disponível no site do <a href='https://operarpg.com.br' target='blank' class='classe1'>OPERA RPG</a></p><p><b>Programação:</b> Leonardo Antônio de Andrade</p><p><b>Autores:</b></p><p>&nbsp;&nbsp;Leonardo Antônio de Andrade</p><p>&nbsp;&nbsp;Rogério de Mello Godoy</p><p><b>Trilha Sonora: </b><a href='https://jamendo.com/track/1802142/epic-medieval-music-battle' target='blank' class='classe1'>Epic medieval music battle, A|C</a></h3>",
			choices: [
			{
				choice: "Tela Inicial",
				destination: "introducao"
			}
			]
		}
		
		
    };
}

//Programação dos Botões e Seleção das Opções Inciais (Iniciar a aventura, Nova janela com site, Instruções e Créditos)
document.addEventListener ('DOMContentLoaded', function() {
	var button0 = document.querySelector('#button0');
	var button1 = document.querySelector('#button1');
	var button2 = document.querySelector('#button2');
	var button3 = document.querySelector('#button3');
	var content = document.querySelector('#content');

	//Iniciar a Aventura
	button0.addEventListener('click', function() {
		story = getStory ();
		renderScene ();
	})

	//Nova Janela com Site
	button1.addEventListener('click', function() {
		if (cont == 0)
		{
			window.open("https://operarpg.com.br", '_blank');
		}
		else
		{
			story = getStory ();
			renderScene ();
		}
	})

	//Instuções
	button2.addEventListener('click', function() {
		if (cont == 0)
		{
			instrucoes = true;
		}
		story = getStory ();
		renderScene ();
	})

	//Créditos
	button3.addEventListener('click', function() {
		if (cont == 0)
		{
			creditos = true;
		}
		story = getStory ();
		renderScene ();
	})
})


//Programação para Atualização do códigu HTML, Controle de Aletoriedade e de Itens
function renderScene()
{
	//verificacao de cenas
	var image = "";
	var titulo = "";

	if (instrucoes)
	{
		story.currentScene = "instrucoes";
		master = true;
		instrucoes = false;
	}

	if (creditos)
	{
		story.currentScene = "creditos";
		master = true;
		creditos = false;
	}

	//Renderização de Imagem
	if (!story[story.currentScene].image)
	{
		image = "<img></img>";
	}

	//Redenrização de Título
	if (story[story.currentScene].title == "Introdução")
	{
		titulo = story[story.currentScene].title;
	}

	//Variáveis de Aletoriedade
	dado1 = Math.floor(Math.random() * 6 + 1);
	dado2 = Math.floor(Math.random() * 6 + 1);
	dados = dado1 + dado2;

	//Controle de Aletoriedade
	switch (story.currentScene) {
		case ('introducao'):
			sessionStorage.setItem('savepoint', 0);
			sessionStorage.setItem('sairsala', 0);

			sessionStorage.setItem('vida', 6);
			sessionStorage.setItem('bencao', 0);
			sessionStorage.setItem('escudo', 0);
			sessionStorage.setItem('iniciativa', 9);
			sessionStorage.setItem('absorcao', 0);
			sessionStorage.setItem('arma0_nome', 'Desarmado');
			sessionStorage.setItem('arma0_golpe', 8);
			sessionStorage.setItem('arma0_aparo', 8);
			sessionStorage.setItem('arma0_danoa', 0);
			sessionStorage.setItem('arma0_danof', 1);
			sessionStorage.setItem('arma1_nome', 'Espada');
			sessionStorage.setItem('arma1_golpe', 10);
			sessionStorage.setItem('arma1_aparo', 10);
			sessionStorage.setItem('arma1_danoa', 3);
			sessionStorage.setItem('arma1_danof', 0);

			document.getElementById("rolar1").value = "Iniciar";
			document.getElementById("rolar2").value = "Iniciar";
			document.getElementById("chatStatus1").innerHTML = "<h4>COMBATE NÃO INICIADO</h4>";
			document.getElementById("chatStatus2").innerHTML = "<h4>COMBATE NÃO INICIADO</h4>";

		break;

		case ('combateGolemDeOsso'):
			if(parseInt(sessionStorage.getItem('bencao'), 10) == 1)
			{
				var resultado2 = 0;
				Swal.fire({
  					title: 'Você deseja utilizar a benção?',
  					showDenyButton: true,
					confirmButtonText: 'Sim',
					denyButtonText: 'Não',
				}).then((resultado2) => {
  				if (resultado2.isConfirmed) 
				{
					Swal.fire('A espada terá um brilho interno e um bônus de +1 para atacar, +1 para aparar e +1 de dano fixo neste combate.', '', 'success')
					sessionStorage.setItem('arma1_golpe', 11);
					sessionStorage.setItem('arma1_aparo', 11);
					sessionStorage.setItem('arma1_danof', 1);
					sessionStorage.setItem('bencao', 0);
  				}
				else if (resultado2.isDenied) 
				{
    					Swal.fire('Você poderá este item uma próxima vez.', '', 'info')
  				}
				})

			}
			story.currentScene = 'poscombateGolemDeOsso1';
			combate2.style.display = 'block';

		break;
		
		case ('pontodeSalvamento'):
			sessionStorage.setItem('vida', parseInt(sessionStorage.getItem('vida_'), 10));
			sessionStorage.setItem('bencao', parseInt(sessionStorage.getItem('bencao_'), 10));
			sessionStorage.setItem('escudo', parseInt(sessionStorage.getItem('escudo_'), 10));
			sessionStorage.setItem('iniciativa', parseInt(sessionStorage.getItem('iniciativa_'), 10));
			sessionStorage.setItem('absorcao', parseInt(sessionStorage.getItem('absorcao_'), 10));
			sessionStorage.setItem('arma0_nome', sessionStorage.getItem('arma0_nome_'));
			sessionStorage.setItem('arma0_golpe', parseInt(sessionStorage.getItem('arma0_golpe_'), 10));
			sessionStorage.setItem('arma0_aparo', parseInt(sessionStorage.getItem('arma0_aparo_'), 10));
			sessionStorage.setItem('arma0_danoa', parseInt(sessionStorage.getItem('arma0_danoa_'), 10));
			sessionStorage.setItem('arma0_danof', parseInt(sessionStorage.getItem('arma0_danof_'), 10));
			sessionStorage.setItem('arma1_nome', sessionStorage.getItem('arma1_nome_'));
			sessionStorage.setItem('arma1_golpe', parseInt(sessionStorage.getItem('arma1_golpe_'), 10));
			sessionStorage.setItem('arma1_aparo', parseInt(sessionStorage.getItem('arma1_aparo_'), 10));
			sessionStorage.setItem('arma1_danoa', parseInt(sessionStorage.getItem('arma1_danoa_'), 10));
			sessionStorage.setItem('arma1_danof', parseInt(sessionStorage.getItem('arma1_danof_'), 10));


			sessionStorage.setItem('combate1', 0);
			sessionStorage.setItem('combate2', 0);

			document.getElementById("rolar1").value = "Iniciar";
			document.getElementById("rolar2").value = "Iniciar";
			document.getElementById("chatStatus1").innerHTML = "<h4>COMBATE NÃO INICIADO</h4>";
			document.getElementById("chatStatus2").innerHTML = "<h4>COMBATE NÃO INICIADO</h4>";

			switch (parseInt(sessionStorage.getItem('savepoint'), 10))
			{
				case (1):
					story.currentScene = 'pegarEscudo';
				break;
			}
	
		break;

		case ('pegarEscudo'):
			Swal.fire({
  				icon: 'sucess',
  				title: 'Escudo de Pedra Benta',
  				text: sessionStorage.getItem('nome') + ' ganhou uma arma mágica que confere a seu possuidor e uma tênue aura branca que absorve 1 ponto de dano em todo o corpo de quem o carrega. Dados: +1 / +3 > 1'
			});
			sessionStorage.setItem('escudo', 1);
			sessionStorage.setItem('arma0_nome', 'Escudo de Pedra Branca');
			sessionStorage.setItem('arma0_aparo', 10);
			sessionStorage.setItem('absorcao', 1);

			// Salvando o savepoints
			sessionStorage.setItem('savepoint', 1);

		break;

		case ('combateGolemDeOsso'):
			if(parseInt(sessionStorage.getItem('bencao'), 10) == 1)
			{
				var resultado1 = 0;
				Swal.fire({
  					title: 'Você deseja utilizar a benção?',
  					showDenyButton: true,
					confirmButtonText: 'Sim',
					denyButtonText: 'Não',
				}).then((resultado1) => {
  				if (resultado1.isConfirmed)
				{
					Swal.fire('A espada terá um brilho interno e um bônus de +1 para atacar, +1 para aparar e +1 de dano fixo neste combate.', '', 'success')
sessionStorage.setItem('arma1_golpe', 11);
					sessionStorage.setItem('arma1_aparo', 11);
					sessionStorage.setItem('arma1_danof', 1);
					sessionStorage.setItem('bencao', 0);
  				} else if (resultado1.isDenied) {
    					Swal.fire('Você poderá este item uma próxima vez.', '', 'info')
  				}
				})

			}
			story.currentScene = 'poscombateGolemDeOsso1';
			combate1.style.display = 'block';

		break;

		case ('poscombateGolemDeOsso2'):
			if(parseInt(sessionStorage.getItem('vida'), 10) > 0)
			{
				sessionStorage.setItem('arma1_golpe', 10);
				sessionStorage.setItem('arma1_aparo', 10);
				sessionStorage.setItem('arma1_danof', 0);
				story.currentScene = 'sucessoGolemDeOsso';
			}
			else
				story.currentScene = 'derrotaCombate';
		break;

		
		case ('combateGolemDeOsso'):
			if(parseInt(sessionStorage.getItem('bencao'), 10) == 1)
			{
				var resultado2 = 0;
				Swal.fire({
  					title: 'Você deseja utilizar a benção?',
  					showDenyButton: true,
					confirmButtonText: 'Sim',
					denyButtonText: 'Não',
				}).then((resultado2) => {
  				if (resultado2.isConfirmed) 
				{
					Swal.fire('A espada terá um brilho interno e um bônus de +1 para atacar, +1 para aparar e +1 de dano fixo neste combate.', '', 'success')
					sessionStorage.setItem('arma1_golpe', 11);
					sessionStorage.setItem('arma1_aparo', 11);
					sessionStorage.setItem('arma1_danof', 1);
					sessionStorage.setItem('bencao', 0);
  				}
				else if (resultado2.isDenied) 
				{
    					Swal.fire('Você poderá este item uma próxima vez.', '', 'info')
  				}
				})

			}
			story.currentScene = 'poscombateGolemDeOsso1';
			combate2.style.display = 'block';

		break;

		case ('poscombateGolemDeOsso2'):
			if(parseInt(sessionStorage.getItem('vida'), 10) > 0)
			{
				sessionStorage.setItem('arma1_golpe', 10);
				sessionStorage.setItem('arma1_aparo', 10);
				sessionStorage.setItem('arma1_danof', 0);

				if (parseInt(sessionStorage.getItem('escudo'), 10) == 1)
					story.currentScene = 'sucessoGolemossos2';
				else
					story.currentScene = 'sucessoGolemossos1';
			}
			else
				story.currentScene = 'derrotaCombate';
		break;


		case ('rolarDados01'):
			if (dados <= 7)
			{
				Swal.fire({
  					icon: 'sucess',
  					title: 'Sucesso',
  					text: 'Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <= 7 (Sucesso)'
				});
				story.currentScene = 'sucessorolarDados01';
			}
			else
			{
				Swal.fire({
  					icon: 'error',
  					title: 'Falha',
  					text: 'Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 7 (Falha)'
				});
				story.currentScene = 'morrerQueimado';
			}

		break;
	}

	//Renderização do texto
	document.getElementById("content").innerHTML = `
	<center><h1>${titulo}</h1></center>
	<p>${story[story.currentScene].story}</p>
	${image}
	${getInputs()}
	`
	if (story[story.currentScene].image) {
		document.querySelector("img").src = `${story[story.currentScene].image}`
	}
	var button0 = document.querySelector("#button0");
	var button1 = document.querySelector("#button1");
	var button2 = document.querySelector("#button2");
	var button3 = document.querySelector("#button3");
	var button4 = document.querySelector("#button4");
	var button5 = document.querySelector("#button5");

	//Programação dos botões
	button0.addEventListener('click', function (){
		cont++;
		getInputValue(0);
	})

	if (button1 != null)
	{
		button1.addEventListener('click', function (){
			cont++;
			if (cont == 1 && master)
			{
				master = false;
				window.location.href='index.html';
			}
			getInputValue(1);
		})
	}
	if (button2 != null)
	{
		button2.addEventListener('click', function (){
			cont++;
			getInputValue(2);
		})
	}
	if (button3 != null)
	{
		button3.addEventListener('click', function (){
			cont++;
			getInputValue(3);
		})
	}
	if (button4 != null)
	{
		button4.addEventListener('click', function (){
			cont++;
			getInputValue(4);
		})
	}
	if (button5 != null)
	{
		button5.addEventListener('click', function (){
			cont++;
			getInputValue(5);
		})
	}
}

//Função de Seleção de Destino
function getInputValue (x) {
	var inputs = document.querySelectorAll('input[type="button"]');
	story.currentScene = inputs[x].getAttribute('data-destination');
	renderScene();
	return;

}

//Função de Captura da Seleção
function getInputs(){
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
