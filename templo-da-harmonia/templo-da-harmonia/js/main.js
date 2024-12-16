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
sessionStorage.setItem('bencao', 0);
sessionStorage.setItem('escudo', 0);
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
sessionStorage.setItem('estatuetaagua', 0);
sessionStorage.setItem('estatuetaar', 0);
sessionStorage.setItem('estatuetacarne', 1);
sessionStorage.setItem('estatuetafogo', 0);
sessionStorage.setItem('estatuetaterra', 0);
sessionStorage.setItem('punhadoterra', 0);

//dados do ponto de salvamento
sessionStorage.setItem('nome_', 'o Toriel');
sessionStorage.setItem('vida_', 6);
sessionStorage.setItem('bencao_', 0);
sessionStorage.setItem('escudo_', 0);
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
sessionStorage.setItem('estatuetaagua_', 0);
sessionStorage.setItem('estatuetaar_', 0);
sessionStorage.setItem('estatuetacarne_', 1);
sessionStorage.setItem('estatuetafogo_', 0);
sessionStorage.setItem('estatuetaterra_', 0);
sessionStorage.setItem('punhadoterra_', 0);

sessionStorage.setItem('combate1', 0);
sessionStorage.setItem('combate2', 0);

//função que define o conteúdo textual da narrativa
function getStory () {
	return{
	currentScene: "intro", 
	intro: {
		title: "Introdução",
		story: "<h3>Distéria, um mundo bem parecido com a Europa Medieval Terrestre, com seus castelos e cavaleiros, mas em Distéria, o nível de mana é bem maior que no mundo Terrestre, e isso proporciona uma participação bem maior da MAGIA, a ciência do impossível. Em Distéria, essa magia percebida a olhos vistos e ao toque das mãos, não existe apenas como instrumento de magos e bruxos, ou como materialização da fé dos sacerdotes, mas possibilitou o surgimento de outras raças fantásticas para dividir esse mundo com os Humanos, como Elfos, Anões, Dragões, Goblins, Grifos, e muitas outras, tantas quanto as estrelas que acompanham as seis luas de seu céu.</h3>",
		choices: [
	 	{
			choice: "Começar a Aventura!",
			destination: 'comecarAventura'
		}
		]
	},

	intro2: {
		title: "Introdução",
		image: "img/disteria.webp",
		story: "<h1>Introdução</h1><h3>Distéria, um mundo bem parecido com a Europa Medieval Terrestre, com seus castelos e cavaleiros, mas em Distéria, o nível de mana é bem maior que no mundo Terrestre, e isso proporciona uma participação bem maior da MAGIA, a ciência do impossível. Em Distéria, essa magia percebida a olhos vistos e ao toque das mãos, não existe apenas como instrumento de magos e bruxos, ou como materialização da fé dos sacerdotes, mas possibilitou o surgimento de outras raças fantásticas para dividir esse mundo com os Humanos, como Elfos, Anões, Dragões, Goblins, Grifos, e muitas outras, tantas quanto as estrelas que acompanham as seis luas de seu céu.</h3>",
		choices: [
		{
			choice: "Pular para o Ponto de Salvamento",
			destination: 'pontodeSalvamento'
		},
	 	{
			choice: "Reiniciar a Aventura",
			destination: 'comecarAventura'
		}
		]
	},

	limbo: {
		title: "",
		story: "",
		choices: [
		{
			choice: "",
			destination: ""
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

	comecarAventura: {
		title: "Começando a Aventura",
		story: "<h3>As terras férteis da cidade de Acorde são a base econômica do Reino da Estrela Opaca. Suas fazendas alimentam um comércio próspero e fortalecem o desenvolvimento social.</h3><h3>Porém, essa bênção tem um preço: Todo mês, um voluntário precisa entrar nas profundezas do Templo da Harmonia para realizar o ritual secreto.</h3><h3>Os registros da construção deste templo perderam-se com o tempo, mas todos sabem que, se o ritual mensal não for realizado, o solo da região se revolta com terremotos e o clima castiga com a seca.</h3><h3>Um complexo sistema de votação e recompensa familiar foi estabelecido para escolher os voluntários, e o escolhido da vez foi Toriel.</h3><h3>Sua família foi marcada pela tragédia, quando um ataque orc matou seus dois irmãos mais velhos. Ele se voluntariou como soldado, lutou contra as invasões orcs, e continuava a se esforçar no campo para ajudar no sustento da família.</h3><h3>Dívidas familiares e uma desilusão amorosa colaboraram para que Toriel fosse o escolhido, e aceitou com honra essa missão.</h3><h3>Acredita-se que o ritual é simples, pois, mesmo sem o retorno de nenhum voluntário, a fertilidade das terras se renova a cada mês. Especula-se que possa haver uma maneira de sair do templo após o ritual.</h3><h3>Contando com essa possibilidade de retorno, uma Espada Abençoada foi oferecida para Toriel, que a aceitou. Os Clérigos também ofereceram um pergaminho mágico.",
		choices: [
	 	{
			choice: "Aceitar Pergaminho",
			destination: 'aceitarPergaminho'
		},
		{
			choice: "Negar Pergaminho",
			destination: 'negarPergaminho'
		}
		]
	},

	aceitarPergaminho: {
		title: "Caminhando para o Templo",
		story: "<h3><h3>Com seu traje de soldado e duas novas medalhas, Toriel marcha solenemente entre a multidão que o acompanha pela rua que sai da torre de guarda e segue até o morro onde está o ancestral Templo da Harmonia.</h3><h3>Na borda da cidade, marcada pela cabine fiscal, a população não pode mais acompanhar o herói. Ele se despede com um longo abraço da mãe e do pai, e percebe Liliane, sua ex-namorada, entre as pessoas que testemunhavam sua partida. O olhar dela parecia ser de arrependimento, mas agora, era tarde demais.</h3><h3>Toriel anda sozinho, pela trilha calçada por largas pedras azuladas, e passa pela pequena entrada da construção piramidal. O interior do templo é iluminado por chamas brancas que saem de pias nas seis colunas que sustentam a grande câmara central.</h3><h3>Os bancos de madeira, que acomodavam o público durante os cultos semanais, foram retirados, e apenas cinco monges ocupam o centro da câmara, são os Cinco Desaparecidos</h3><h3>Desde o início desta religião, em determinados momentos, cinco monges entram em transe, e são capazes de “desaparecer” nas paredes do templo.</h3><h3>Enquanto Toriel andava, ele ouvia os monges repetirem o mantra: “As Estatuetas da Harmonia devem ser colocadas no Altar Mundial na ordem de importância dos elementos que representam”.</h3><h3>Os monges conduzem Toriel até a parede no fundo do salão, e apontam uma pequena estatueta presa nela: uma figura feminina, com ventre transparente e um coração dentro dele.</h3><h3>Toriel encosta na estatueta e percebe que ela está solta, e que aquela parede não existia. Ele pega a estatueta, atravessa a parede e a iluminação fica avermelhada. Ele está no topo de uma escadaria, em um túnel liso.</h3><h3>Ele recua, e encosta na parede, que ficou sólida novamente.</h3>",
		choices: [
	 	{
			choice: "Descer a Escadaria",
			destination: 'descerEscadaria'
		}
		]
	},

	negarPergaminho: {
		title: "Caminhando para o Templo",
		story: "<h3><h3>Com seu traje de soldado e sua nova arma, Toriel marcha solenemente entre a multidão que o acompanha pela rua que sai da torre de guarda e segue até o morro onde está o ancestral Templo da Harmonia.</h3><h3>Na borda da cidade, marcada pela cabine fiscal, a população não pode mais acompanhar o herói. Ele se despede com um longo abraço da mãe e do pai, e percebe Liliane, sua ex-namorada, entre as pessoas que testemunhavam sua partida. O olhar dela parecia ser de arrependimento, mas agora, era tarde demais.</h3><h3>Toriel anda sozinho, pela trilha calçada por largas pedras azuladas, e passa pela pequena entrada da construção piramidal. O interior do templo é iluminado por chamas brancas que saem de pias nas seis colunas que sustentam a grande câmara central.</h3><h3>Os bancos de madeira, que acomodavam o público durante os cultos semanais, foram retirados, e apenas cinco monges ocupam o centro da câmara, são os Cinco Desaparecidos</h3><h3>Desde o início desta religião, em determinados momentos, cinco monges entram em transe, e são capazes de “desaparecer” nas paredes do templo.</h3><h3>Enquanto Toriel andava, ele ouvia os monges repetirem o mantra: “As Estatuetas da Harmonia devem ser colocadas no Altar Mundial na ordem de importância dos elementos que representam”.</h3><h3>Os monges conduzem Toriel até a parede no fundo do salão, e apontam uma pequena estatueta presa nela: uma figura feminina, com ventre transparente e um coração dentro dele.</h3><h3>Toriel encosta na estatueta e percebe que ela está solta, e que aquela parede não existia. Ele pega a estatueta, atravessa a parede e a iluminação fica avermelhada. Ele está no topo de uma escadaria, em um túnel liso.</h3><h3>Ele recua, e encosta na parede, que ficou sólida novamente.</h3>",
		choices: [
	 	{
			choice: "Descer a Escadaria",
			destination: 'descerEscadaria'
		}
		]
	},

	descerEscadaria: {
		title: "Descer a Escadaria",
		story: "<h3>Enquanto desce essa escada irregular e natural de pedra, Toriel percebe que essa luminosidade e o calor estão aumentando; ele olha para baixo e percebe que seus pés se aproximam de uma grande câmara.</h3><h3>Finalmente, um espaço aberto, esse túnel estreito já está incomodando Toriel, o problema é que a passagem termina no teto dessa sala avermelhada e quente, e até o chão, a queda é de uns três metros.</h3><h3>Nada que um pouco de jeito resolva, pensa Toriel, é só descer as pernas primeiro e se pendurar na borda do túnel pelas mãos.</h3><h3>Toriel começa a descer, e conforme seu corpo começa a descer, ele percebe que seus braços estão ficando mais fortes, pois consegue segurar seu corpo com menos esforço, solta-se, cai lentamente até que não cai mais?!?!</h3><h3>Toriel parou de cair e está flutuando próximo ao teto, a dois metros de distância, está flutuando uma estatueta parecida com a sua Estatueta da Harmonia, mas a sua barriga de cristal não carrega um coração, como a sua; aparentemente, não existe nada dentro daquela estatueta.</h3><h3>Abaixo, existem duas passagens arredondadas, e as paredes dessa sala, ao contrário das do túnel, são lisas e de quinas arredondadas, e a iluminação avermelhada que vem de uma das passagens iluminas as escrituras que se repetem por todas as paredes:</h3><h2>VOCÊ PRECISA DE AR PARA RESPIRAR.</h2><h3>Toriel percebeu que os movimentos realizados por seus pulmões não estavam adiantando nada, ele estava começando a sufocar.</h3><h3>Toriel está sem ar, como ele sairá dessa?</h3>",
		choices: [
		{
				choice: "Voltando pelo Túnel",
				destination: "voltarTunel"
		},
		{
				choice: "Descendo até o Chão",
				destination: "voltarTunel"
		},
		{
				choice: "Pegando a Estatueta do Ar",
				destination: "voltarTunel"
		}
		]
	},

	voltarTunel: {
		title: "Voltar pelo Túnel",
		story: "<h3>Toriel tenta se mover mas não consegue sair do lugar, ele está distante das paredes e seus movimentos não encontram apoio, o sufocamento está insuportável, Toriel está perdendo o controle de seus movimentos, em breve, ele perderá sua vida se você não tomar a decisão correta, Toriel deverá:</h3>",
		choices: [
		{
			choice: "Tocar a estatueta com a Espada",
			destination: "espadaEstatueta"
		},
		{
			choice: "Rezar para a Harmonia",
			destination: "rezarHarmonia"
		},
		{
			choice: "Arremessar a Espada na Estatueta",
			destination: "arremessarEspada"
		},
		{
			choice: "Tentar se mover no Vácuo",
			destination: "moverVacuo"
		}
		]
	},

	espadaEstatueta: {
		title: "Arremessar a espada na Estatueta",
		story: "<h3>Segurando o cabo de sua espada na ponta de seus dedos esticados, Toriel consegue tocar a estatueta, afastando-a ainda mais de sua posição. Num último esforço...</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: "morrerAsfixia"
		}
		]
	},

	rezarHarmonia: {
		title: "Rezar para a Harmonia",
		story: "<h3>Toriel fecha seus olhos e pede com toda concentração que consegue para que a Harmonia o auxilie naquele momento de dificuldade, até que...</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'morrerAsfixia'
		}
		]
	},

	moverVacuo: {
		title: "Tentar se mover no Vácuo",
		story: "<h3>Mais uma vez, Toriel patina escorrega no vácuo sem sair do lugar, até que...</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'morrerAsfixia'
		}
		]
	},

	morrerAsfixia: {
		title: "Contar sobre a Conspiração",
		story: "<h3>Toriel leva as mãos à garganta, como se quisesse abri-la para que algum ar entrasse, seu corpo se contorce num espasmo brutal, e por fim, morre.</h3><h3>Eu também não gostei desse fim, justo agora que as coisas estavam esquentando; que tal tentar um novo caminho para a história de Toriel? Comece a história de novo, e quando chegar nessa parte, lembre-se das teorias físicas de ação e reação em ambientes sem atrito!</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'limbo'
		}
		]
	},

	arremessarEspada: {
		title: "Arremessar a Espada",
		story: "<h3>Como Toriel está flutuando no vácuo sem pontos de apoio, assim que ele arremessa a espada, ele é levemente arremessado para trás, a espada passa ao lado da estatueta e Toriel encosta no teto; Toriel sente os espasmos da asfixia chegando, qual será seu último esforço: irá tentar se segurar à parede para alcançar o túnel, arremessar sua Estatueta da Harmonia alvejando a outra estatueta ou irá usar a parede como apoio para se empurrar em direção à estatueta?</h3>",
		choices: [
		{
			choice: "Alcancar Tunel",
			destination: 'alcancarTunel'
		},
		{
			choice: "Arremessar a Estatueta",
			destination: 'arremessarEstatueta'
		},
		{
			choice: "Se Empurrar",
			destination: 'seEmpurrar'
		}
		]
	},

	alcancarTunel: {
		title: "Tentar alcançar o Túnel",
		story: "<h3>As fortes e desesperadas mãos de Toriel tentam agarrar a parede, mas ela é lisa, e Toriel acaba se empurrando mais uma vez para o vácuo sem apoio.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'morrerAsfixia'
			}
		]
	},

	arremessarEstatueta: {
		title: "Sucesso no Teste de Destreza",
		story: "<h3>Nem precisa fazer teste para conferir se Toriel acertou ou não a estatueta, agora é tarde...</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'morrerAsfixia'
		}
		]
	},

	seEmpurrar: {
		title: "Utilizar a Parede para se empurrar",
		story: "<h3>Os pés firmes no teto, os joelhos dobrados se esticam com toda a força, o corpo de Toriel atravessa a sala, sua mão direita segue na frente do corpo buscando a estatueta quando a dor da asfixia é fatal, o corpo que atravessa a sala se contorce e não sabe mais para onde vai; Toriel sente algo colidir com seu ombro, e num movimento desesperado, ele agarra esse objeto.</h3><h3>O vôo é interrompido e Toriel cai com a respiração ofegante, sentindo o calor da sala e escutando o tilintar de sua espada atingindo o solo.</h3><h3>Toriel fica deitado, buscando todo o ar que pode e observando a estatueta que pegou: é idêntica a sua, mas não tem o pequeno coração pulsante dentro de sua barriga, provavelmente, ela está cheia do precioso ar!</h3><h3>Você acha que Toriel deve:</h3>",
		choices: [
		{
				choice: "Pegar a Estatueta do Ar",
				destination: "pegarEstatuetaar"
		},
		{
				choice: "Não Pegar a Estatueta do Ar",
				destination: "naopegarEstatuetaar"
		}
		]
	},

	pegarEstatuetaar: {
		title: "Pegar a Estatueta do Ar",
		story: "</h3><h3>Sentindo-se bem melhor, Toriel levanta-se para procurar sua espada, e a encontra perto da passagem de onde vem o calor e a luz, como se uma imensa fogueira ardesse dentro daquela sala.</h3><h3>Toriel aproxima-se para pegar sua espada e vê que a gigantesca sala não tem chão; apenas as pontas de alguns pilares de pedras são vistas na superfície, e a seis metros de profundidade, está um lago de lava incandescente.</h3><h3>Enquanto tenta ler o que está escrito na beira deste precipício, uma forma de fogo salta da lava: parece alguma pessoa pegando fogo, mas não existe corpo, apenas chamas, pulando rapidamente de pilar em pilar, e Toriel percebe um par de olhos malignos em meio às chamas, o encarando e se aproximando.</h3>",
		choices: [
		{
			choice: "Combater Golem de Fogo",
			destination: 'combateGolemfogo'
		}
		]
	},

	naopegarEstatuetaar: {
		title: "Pegar a Estatueta do Ar",
		story: "</h3><h3>Sentindo-se bem melhor, Toriel levanta-se para procurar sua espada, e a encontra perto da passagem de onde vem o calor e a luz, como se uma imensa fogueira ardesse dentro daquela sala.</h3><h3>Toriel aproxima-se para pegar sua espada e vê que a gigantesca sala não tem chão; apenas as pontas de alguns pilares de pedras são vistas na superfície, e a seis metros de profundidade, está um lago de lava incandescente.</h3><h3>Enquanto tenta ler o que está escrito na beira deste precipício, uma forma de fogo salta da lava: parece alguma pessoa pegando fogo, mas não existe corpo, apenas chamas, pulando rapidamente de pilar em pilar, e Toriel percebe um par de olhos malignos em meio às chamas, o encarando e se aproximando.</h3>",
		choices: [
		{
			choice: "Combater Golem de Fogo",
			destination: 'combateGolemfogo'
		}
		]
	},

	combateGolemfogo: {
		title: "",
		story: "",
		choices: [
		{
			choice: "",
			destination: ""
		}
		]
	},

	poscombateGolemfogo1: {
		title: "Pós Combate com o Golem de Fogo",
		story: "<h3>O último golpe foi desferido...</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: "poscombateGolemfogo2"
		}
		]
	},

	poscombateGolemfogo2: {
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
			destination: 'limbo'
		}
		]
	},

	sucessoGolemfogo: {
		title: "Vitória sobre o Golem de Fogo",
		story: "<h3>Finalmente, o Elemental de Fogo se dissipe numa nuvem de fumaça.</h3><h3>Agora, Toriel tem condições de apreciar a assustadora paisagem diante de seus olhos, ele se encontra na larga beira de um precipício de lava, e alguns corpos queimados dividem esse lugar com ele.</h3><h3>Toriel os identifica como sendo participantes dos grupos anteriores devido a vestígios de roupas, pois no geral, seus rostos queimados estão irreconhecíveis.</h3><h3>Desviando a vista daquela cena horrível, Toriel faz uma prece por eles.</h3><h3>As estatuetas foram deixadas no chão para que Toriel pudesse enfrentar a “fogueira assassina”, e para não correr o risco de perder essas preciosas peças, ele as coloca em uma mochila de couro encontrada próxima a um dos corpos.</h3><h3>Nas outras margens do precipício Toriel encontra outras duas passagens: uma delas é arredondada e lisa como a que ele passou, e a outra é ornamentada com várias esculturas, segue por uma longa escadaria e pode se perceber uma claridade azulada vindo daquele corredor.</h3><h3>Com pequenos pulos, essas portas podem ser alcançadas de pilar em pilar; Toriel percebe que os pilares de pedra mais próximos são quatro, e cada um deles tem a ponta terminada em diferentes formatos: um deles forma um quadrado, outro forma um círculo, outro tem a forma de um triângulo com um dos lados arredondados e outro tem a forma de um círculo com uma quina reta. Percebe também, que sob seus pés está escrito do mesmo modo que no teto da outra sala:</h3><h2>VOCÊ PRECISA DA TERRA PARA FIRMAR SEUS PÉS.</h2><h3>Qual será seu caminho?</h3>",
		choices: [
		{
			choice: "Pilar Quadrado",
			destination: 'pilarQCTP'
		},
		{
			choice: "Pilar Circular",
			destination: 'pilarQCTP'
		},
		{
			choice: "Pilar Triangular com um Lado Arredondado",
			destination: 'pilarQCTP'
		},
		{
			choice: "Pilar Circular com uma Quina",
			destination: 'pilarQCTP'
		},
		{
			choice: "Voltar pra Sala Anterior",
			destination: 'voltarSala'
		}
		]
	},

	pilarQCTP: {
		title: "Pular sem Terra nos pés",
		story: "<h3>Logo que Toriel pousa seus pés no pilar, este começa a desmoronar...</h3><h3>Neste momento dramático, você acha que Toriel deve: se equilibrar sobre o Pilar que se demorona, pular para o próximo pilar ou se voltar para trás para pular de volta para a beira do precipício?</h3>",
		choices: [
		{
			choice: "Se Equilibrar",
			destination: 'seEquilibrar'
		},
		{
			choice: "Pular para o próximo Pilar",
			destination: 'pularPilar'
		},
		{
			choice: "Pula para trás",
			destination: 'pularTras'
		}
		]
	},

	voltarSala: {
		title: "Voltar pra Sala Principal",
		story: "<h3>Toriel olha aqueles pilares com desconfiança, vira-se e caminha em direção à passagem mais escura, que está do outro lado da sala.</h3><h3>Ele chega até a entrada, e percebe que o chão daquela sala escura é de terra com algumas pedras brancas; observando melhor, Toriel percebe que essas pedras são ossos, e percebe também mais alguns corpos dos clérigos do outro grupo que entrou no Templo, e entre eles estava o Escudo de Pedra Benta.</h3><h3>Toriel deve:</h3>",
		choices: [
		{
			choice: "Investigar essa Sala de Terra",
			destination: 'investigarSalaterra'
		},
		{
			choice: "Pular nos Pilares de Lava",
			destination: 'pularPilareslava'
		}
		]
	},


	seEquilibrar: {
		title: "Sucesso no Teste de Destreza",
		story: "<h3>As pedras dos pilares afundam na lava ardente, e o que você acha que Toriel pode fazer numa situação dessas?</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'morrerQueimado'
		}
		]
	},

	pularPilar: {
		title: "Falha no Teste de Destreza",
		story: "<h3>Faça um Teste de Acrobacia para ver se Toriel alcança o próximo pilar.</h3>",
		choices: [
		{
			choice: "Rolar 2D6",
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

	morrerQueimado: {
		title: "Morrer Queimado",
		story: "<h3>Corroido pelas chamas, Toriel é tragado pelo fogo.</h3><h3>Esqueça esse passado, acalme-se, respire fundo e comece de novo como se fosse a primeira e única vez, e não perca a noção de que esta história está acontecendo realmente em uma realidade alternativa.</h3>",
		choices: [
		{
				choice: "Continuar",
				destination: 'limbo'
		}
		]
	},

	pularTras: {
		title: "Pular pra Trás",
		story: "<h3>Faça um Teste de Acrobacia para ver se Toriel consegue esse pulo, com penalidade -3 pois Toriel terá que pular para trás.</h3>",
		choices: [
			{
				choice: "Rolar 2D6",
				destination: 'rolarDados02'
			}
		]
	},

	rolarDados02: {
		title: "",
		story: "",
		choices: [
			{
				choice: "",
				destination: ""
			}
		]
	},

	investigarSalaterra: {
		title: "Investigar Sala com Terra",
		story: "<h3>Toriel pisa na terra tentando não encostar nos ossos, sente que é firme e anda até o centro da sala.</h3><h3>Apesar da escuridão, pois a única iluminação é o brilho da lava que vem de trás, ele percebe um pequeno monte de terra no cento da sala.</h3><h3>	Faça um teste de Percepção Auditiva para Toriel. Seu atributo Percepção é 7, mas como Toriel tem a Característica Prontidão (1), suas chances aumentam para um Teste contra 8.</h3>",
		choices: [
		{
			choice: "Rolar 2D6",
			destination: 'rolarDados03'
		}
		]
	},

	rolarDados03: {
		title: "",
		story: "",
		choices: [
		{
			choice: "",
			destination: ""
		}
		]
	},

	pularPilareslava: {
		title: "Pular sobre os Pilares de Lava",
		story: "<h3>Mais uma vez Toriel atravessa aquela sala do ar chega até a borda do precipício de lava. Ele pulará no pilar quadrado, no pilar circular, no pilar triangular com um lado arredondado, no pilar circular com uma quina ou voltará para a sala anterior?</h3>",
		choices: [
		{
			choice: "Pilar Quadrado",
			destination: 'pilarQCTP'
		},
		{
			choice: "Pilar Circular",
			destination: 'pilarQCTP'
		},
		{
			choice: "Pilar Triangular com um Lado Arredondado",
			destination: 'pilarQCTP'
		},
		{
			choice: "Pilar Circular com Quina",
			destination: 'pilarQCTP'
		},
		{
			choice: "Voltar para Sala anterior",
			destination: 'voltarSala'
		}
		]
	},

	sucessorolarDados01: {
		title: "Sucesso no Teste de Destreza",
		story: "<h3>Toriel segura-se no próximo pilar, que também começa a desmoronar; Ele não tem apoio firme para pular de novo...</h3><h3> E o pior acontece.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'morrerQueimado'
		}
		]
	},

	sucessorolarDados02: {
		title: "Sucesso no Teste de Destreza -3",
		story: "<h3>As mãos de Toriel agarram a borda do precipício, com esforço, ele puxa seu corpo para a beira do precipício. Acalmado pela terra firme, ele observa o pilar desmoronado se reconstruir e assumir a mesma forma anterior.</h3><h3>Ele lê mais uma vez os escritos na beira do precipício:</h3><h2>VOCÊ PRECISA DA TERRA PARA FIRMAR SEUS PÉS.</h2><h3>... e ainda não sabe que passo dar?</h3>Toriel pulará no pilar quadrado, no pilar circular, no pilar triangular com um lado arredondado, no pilar circular com uma quina ou voltará para a sala anterior?</h3>",
		choices: [
		{
			choice: "Pilar Quadrado",
			destination: 'pilarQCTP'
		},
		{
			choice: "Pilar Circular",
			destination: 'pilarQCTP'
		},
		{
			choice: "Pilar Triangular com um Lado Arredondado",
			destination: 'pilarQCTP'
		},
		{
			choice: "Pilar Circular com Quina",
			destination: 'pilarQCTP'
		},
		{
			choice: "Voltar para Sala anterior",
			destination: 'voltarSala'
		}
		]
	},

	sucessorolarDados03: {
		title: "Sucesso no Teste de Percepção",
		story: "<h3>Toriel percebe que os ossos estão se movendo...</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'falharolarDados03'
		}
		]
	},

	falharolarDados03: {
		title: "Falha no Teste de Percepção",
		story: "<h3>O que Toriel fará agora?</h3>",
		choices: [
		{
			choice: "Cavará o monte de terra",
			destination: 'cavarTerra'
		},
		{
			choice: "Examinará os corpos ",
			destination: 'examinarCorpos'
		},
		{
			choice: "Pegará o Escudo de Pedra Benta",
			destination: 'pegarEscudo'
		}
		]
	},

	cavarTerra: {
		title: "Cavar a Sala de Terra",
		story: "<h3>Cavando a terra, as mãos de Toriel tocam em algo sólido, mas enquanto ele cava, os ossos começam a se arrastar em direção à entrada da sala.</h3><h3>Toriel olha espantado os ossos se unindo em uma única criatura, um emaranhado de ossos sem forma definida quem vem em sua direção.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'precombateGolemossos'
		}
		]
	},

	examinarCorpos: {
		title: "Examinar os Cadáveres",
		story: "<h3>Toriel reconhece seus amigos entre os mortos; de repente os ossos começam a se arrastar, e Toriel os acompanha com a visão em direção à entrada da sala.</h3><h3>Toriel olha espantado os ossos se unindo em uma única criatura, um emaranhado de ossos sem forma definida quem vem em sua direção.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'precombateGolemossos'
		}
		]
	},

	pegarEscudo: {
		title: "Pegar o Escudo de Pedra Benta",
		story: "<h3>Toriel se aproxima daquele escudo de pedra branca enfeitado com desenhos harmônicos, pega sua alça e o levanta com mais força do que a necessária; o escudo é de tamanho médio, e mais leve e resistente do que aparenta.</h3><h3>Toriel escuta os ossos se arrastarem em direção à entrada da sala.</h3><h3>Ele se vira e olha espantado os ossos se unindo em uma única criatura, um emaranhado de ossos sem forma definida quem vem em sua direção.<h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'precombateGolemossos'
		}
		]
	},

	precombateGolemossos: {
		title: "Ir pro Final",
		story: "<h3>O Golem está fechando a entrada da sala, Toriel vai ter que destruir a criatura para escapar!</h3>",
		choices: [
		{
			choice: "Combater Golem de Ossos ",
			destination: 'combateGolemossos'
		}
		]
	},

	combateGolemossos: {
		title: "",
		story: "",
		choices: [
		{
			choice: "",
			destination: ""
		}
		]
	},

	poscombateGolemossos1: {
		title: "Pós Combate com o Golem de Ossos",
		story: "<h3>O último golpe foi desferido...</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: "poscombateGolemossos2"
		}
		]
	},

	poscombateGolemossos2: {
		title: "",
		story: "",
		choices: [
		{
			choice: "",
			destination: ""
		}
		]
	},

	sucessoGolemossos: {
		title: "Sucesso contra o Golem de Ossos",
		story: "<h3>Os ossos triturados desmoronam, viram pó e se misturam com a terra; Toriel continua de pé, decidindo se seu próximo ato será cavar o monte de terra no centro da sala, pegar o Escudo de Pedra Benta, pegar um punhado de terra, examinar os corpos ou sair da sala.</h3>",
		choices: [
		{
			choice: "Cavar no Centro da Sala",
			destination: 'cavarCentrosala'
		},
		{
			choice: "Pegar o Escudo de Pedra Benta",
			destination: 'pegarEscudo2'
		},
		{
			choice: "Pegar Punhado de Terra",
			destination: 'pegarpunhadoTerra'
		},
		{
			choice: "Examinar os Corpos",
			destination: 'examinarCorpos2'
		},
		{
			choice: "Sair da Sala",
			destination: 'sairSala'
		}
		]
	},

	sucessoGolemossos2: {
		title: "Sucesso contra o Golem de Ossos",
		story: "<h3>Os ossos triturados desmoronam, viram pó e se misturam com a terra; Toriel continua de pé, decidindo se seu próximo ato será cavar o monte de terra no centro da sala, pegar um punhado de terra, examinar os corpos ou sair da sala.</h3>",
		choices: [
		{
			choice: "Cavar no Centro da Sala",
			destination: 'cavarCentrosala'
		},
		{
			choice: "Pegar Punhado de Terra",
			destination: 'pegarpunhadoTerra'
		},
		{
			choice: "Examinar os Corpos",
			destination: 'examinarCorpos2'
		},
		{
			choice: "Sair da Sala",
			destination: 'sairSala'
		}
		]
	},

	cavarCentrosala: {
		title: "Cavar no Centro da Sala",
		story: "<h3>Depois de cavar um pouco, Toriel encontra um objeto; ele limpa a terra e percebe que aquilo é uma Estatueta Harmônica semelhante às que carrega, apenas a barriga de cristal é diferente por estar cheia de terra.</h3>",
		choices: [
		{
				choice: "Pegar a Estatueta da Terra",
				destination: "pegarEstatuetaterra"
		},
		{
				choice: "Não Pegar a Estatueta da Terra",
				destination: "naopegarEstatuetaterra"
		}
		]
	},

	pegarEstatuetaterra: {
		title: "Pegar a Estatueta Harmônica da Terra",
		story: "<h3>Toriel guarda com carinho a estatueta harmônica da terra em uma mochila.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'devoltaSalalimbo'
		}
		]
	},

	naopegarEstatuetaterra: {
		title: "Pegar a Estatueta Harmônica da Terra",
		story: "<h3>Toriel guarda com carinho a estatueta harmônica da terra em uma mochila.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'devoltaSalalimbo'
		}
		]
	},

	pegarEscudo2: {
		title: "Pegar o Escudo de Pedra Benta",
		story: "<h3>Toriel se aproxima daquele escudo de pedra branca enfeitado com desenhos harmônicos, pega sua alça e o levanta com mais força do que a necessária; o escudo é de tamanho médio, e mais leve e resistente do que aparenta.<h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'devoltaSalalimbo'
		}
		]
	},
	examinarCorpos2: {
		title: "Examinar os Cadáveres",
		story: "<h3>Toriel reconhece seus amigos entre os mortos, inclusive Paine.</h3><h3>Toriel fica um tempo nesta sala contemplativo, e faz uma prece por aqueles que se foram.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'devoltaSalalimbo'
		}
		]
	},

	pegarpunhadoTerra: {
		title: "Pegar um punhado de terra",
		story: "<h3>Toriel pega um punhado de terra e guarda em seus sapatos.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'devoltaSalalimbo'
		}
		]
	},

	devoltaSalalimbo: {
		title: "",
		story: "",
		choices: [
		{
			choice: "",
			destination: ""
		}
		]
	},

	devoltaSala1: {
		title: "De volta a Sala Central",
		story: "<h3>E agora, Toriel examinará os corpos ou sairá da sala?</h3>",
		choices: [
		{
			choice: "Examinar os Corpos",
			destination: 'examinarCorpos2'
		},
		{
			choice: "Sair da Sala",
			destination: 'sairSala'
		}
		]
	},

	devoltaSala2: {
		title: "De volta a Sala Central",
		story: "<h3>E agora, Toriel pegará o Escudo de Pedra Benta, examinará os corpos ou sairá da sala?</h3>",
		choices: [
		{
			choice: "Pegar o Escudo de Pedra Benta",
			destination: 'pegarEscudo2'
		},
		{
			choice: "Examinar os Corpos",
			destination: 'examinarCorpos2'
		},
		{
			choice: "Sair da Sala",
			destination: 'sairSala'
		}
		]
	},

	devoltaSala3: {
		title: "De volta a Sala Central",
		story: "<h3>E agora, Toriel cavará o monte de terra no centro da sala, examinará os corpos ou sairá da sala?</h3>",
		choices: [
		{
			choice: "Cavar no Centro da Sala",
			destination: 'cavarCentrosala'
		},
		{
			choice: "Examinar os Corpos",
			destination: 'examinarCorpos2'
		},
		{
			choice: "Sair da Sala",
			destination: 'sairSala'
		}
		]
	},

	devoltaSala4: {
		title: "De volta a Sala Central",
		story: "<h3>E agora, Toriel pegará um punhado de terra, examinará os corpos ou sairá da sala?</h3>",
		choices: [
		{
			choice: "Pegar Punhado de Terra",
			destination: 'pegarpunhadoTerra'
		},
		{
			choice: "Examinar os Corpos",
			destination: 'examinarCorpos2'
		},
		{
			choice: "Sair da Sala",
			destination: 'sairSala'
		}
		]
	},

	devoltaSala5: {
		title: "De volta a Sala Central",
		story: "<h3>E agora, Toriel pegará o Escudo de Pedra Benta, pegará um punhado de terra, examinará os corpos ou sairá da sala?</h3>",
		choices: [
		{
			choice: "Pegar o Escudo de Pedra Benta",
			destination: 'pegarEscudo2'
		},
		{
			choice: "Pegar Punhado de Terra",
			destination: 'pegarpunhadoTerra'
		},
		{
			choice: "Examinar os Corpos",
			destination: 'examinarCorpos2'
		},
		{
			choice: "Sair da Sala",
			destination: 'sairSala'
		}
		]
	},

	devoltaSala6: {
		title: "De volta a Sala Central",
		story: "<h3>E agora, Toriel pegará o Escudo de Pedra Benta, pegará um punhado de terra, examinará os corpos ou sairá da sala?</h3>",
		choices: [
		{
			choice: "Pegar o Escudo de Pedra Benta",
			destination: 'pegarEscudo2'
		},
		{
			choice: "Pegar Punhado de Terra",
			destination: 'pegarpunhadoTerra'
		},
		{
			choice: "Examinar os Corpos",
			destination: 'examinarCorpos2'
		},
		{
			choice: "Sair da Sala",
			destination: 'sairSala'
		}
		]
	},

	devoltaSala7: {
		title: "De volta a Sala Central",
		story: "<h3>E agora, Toriel cavará o monte de terra no centro da sala, pegará um punhado de terra, examinará os corpos ou sairá da sala?</h3>",
		choices: [
		{
			choice: "Cavar no Centro da Sala",
			destination: 'cavarCentrosala'
		},
		{
			choice: "Pegar Punhado de Terra",
			destination: 'pegarpunhadoTerra'
		},
		{
			choice: "Examinar os Corpos",
			destination: 'examinarCorpos2'
		},
		{
			choice: "Sair da Sala",
			destination: 'sairSala'
		}
		]
	},

	devoltaSala8: {
		title: "De volta a Sala Central",
		story: "<h3>E agora, Toriel cavará o monte de terra no centro da sala, pegará o Escudo de Pedra Benta, pegará um punhado de terra, examinará os corpos ou sairá da sala?</h3>",
		choices: [
		{
			choice: "Cavar no Centro da Sala",
			destination: 'cavarCentrosala'
		},
		{
			choice: "Pegar o Escudo de Pedra Benta",
			destination: 'pegarEscudo2'
		},
		{
			choice: "Pegar Punhado de Terra",
			destination: 'pegarpunhadoTerra'
		},
		{
			choice: "Examinar os Corpos",
			destination: 'examinarCorpos2'
		},
		{
			choice: "Sair da Sala",
			destination: 'sairSala'
		}
		]
	},

	sairSala: {
		title: "Voltar pra Sala do Fogo",
		story: "<h3>Ele volta ao calor do precipício de lava, mais uma vez, lê a inscrição na beira do precipício:</h3><h2>VOCÊ PRECISA DA TERRA PARA FIRMAR SEUS PÉS.</h2><h3>Toriel olha as duas passagens distantes, do outro lado dessa enorme galeria; olha a lava incandescente lá embaixo, tenta adivinhar a firmeza desses pilares de pedra que formam caminho até as passagens e decide fazer algo, ele voltará para a sala com terra ou tentará alcançar alguma das passagens pulando de pilar em pilar?</h3>",
		choices: [
		{
			choice: "Voltar para Sala com Terra",
			destination: 'devoltaSalalimbo'
		},
		{
			choice: "Pular de Pilar em Pilar",
			destination: 'pularPilarpilarlimbo'
		}
		]
	},

	pularPilarpilarlimbo: {
		title: "",
		story: "",
		choices: [
		{
			choice: "",
			destination: ""
		}
		]
	},

	pularPilarpilar1: {
		title: "Ir pro Final",
		story: "<h3>Os pilares estão à frente de Toriel. Ele irá pular no:</h3>",
		choices: [
		{
			choice: "Pilar Quadrado",
			destination: 'pilarSolido1'
		},
		{
			choice: "Pilar Circular",
			destination: 'pilarSolido1'
		},
		{
			choice: "Pilar Triangular com Lado Arredondado",
			destination: 'pilarQCTQ2'
		},
		{
			choice: "Pilar Circular com Quina",
			destination: 'pilarQCTQ2'
		}
		]
	},

	pularPilarpilar2: {
		title: "Ir pro Final",
		story: "<h3>Os pilares estão à frente de Toriel. Ele irá pular no:</h3>",
		choices: [
		{
			choice: "Pilar Quadrado",
			destination: 'pilarQCTQ2'
		},
		{
			choice: "Pilar Circular",
			destination: 'pilarQCTQ2'
		},
		{
			choice: "Pilar Triangular com Lado Arredondado",
			destination: 'pilarQCTQ2'
		},
		{
			choice: "Pilar Circular com Quina",
			destination: 'pilarQCTQ2'
		}
		]
	},

	pilarSolido1: {
		title: "Pilar Real 1",
		story: "<h3>Seus pés se equilibram sobre o pilar e encontram firmeza, Toriel está sobre o lago de lava, atrás dele está à beira do precipício, e à frente, mais pilares de pedra.</h3><h3>Ele voltará para a beira, pulará no pilar em forma de triângulo, no pilar em forma de semicírculo ou no pilar em forma de pentágono?</h3>",
		choices: [
		{
			choice: "Voltar para Beira",
			destination: 'voltarBeira'
		},
		{
			choice: "Pular no Pilar Triangular",
			destination: 'pilarSolido2'
		},
		{
			choice: "Pular no Pilar Semicircular",
			destination: 'pilarQCTQ2'
		},
		{
			choice: "Pular no Pilar Pentagonal",
			destination: 'pilarSolido2'
		}
		]
	},

	pilarQCTQ2: {
		title: "Ir pro Final",
		story: "<h3>Logo que Toriel toca seus pés no pilar, este começa a desmoronar. Ele tenta se equilibrar sobre o pilar que se desmorona, pula para o próximo pilar ou vira-se para pular de volta para a beira do precipício?</h3>",
		choices: [
		{
			choice: "Tentar se Equilibrar",
			destination: 'seEquilibrar'
		},
		{
			choice: "Pular para o Próximo",
			destination: 'pularPilar'
		},
		{
			choice: "Pular pra Trás",
			destination: 'pularTras2'
		}
		]
	},

	pularPilar: {
		title: "Falha no Teste de Destreza",
		story: "<h3>Faça um Teste de Destreza para ver se Toriel alcança o próximo pilar.</h3>",
		choices: [
		{
			choice: "Rolar 2D6",
			destination: 'rolarDados01'
		}
		]
	},

	pularTras2: {
		title: "Pular pra Trás",
		story: "<h3>Faça um Teste de Acrobacia para ver se Toriel consegue esse pulo, com penalidade -3 pois Toriel terá que pular para trás.</h3>",
		choices: [
			{
				choice: "Rolar 2D6",
				destination: 'rolarDados04'
			}
		]
	},

	rolarDados04: {
		title: "",
		story: "",
		choices: [
		{
			choice: "",
			destination: ""
		}
		]
	},

	voltarBeira: {
		title: "Sucesso no Teste de Destreza -3",
		story: "<h3>Ele volta ao calor do precipício de lava, mais uma vez, lê a inscrição na beira do precipício:</h3><h2>VOCÊ PRECISA DA TERRA PARA FIRMAR SEUS PÉS.</h2><h3>Toriel olha as duas passagens distantes, do outro lado dessa enorme galeria; olha a lava incandescente lá embaixo, tenta adivinhar a firmeza desses pilares de pedra que formam caminho até as passagens e decide fazer algo, ele voltará para a sala com terra ou tentará alcançar alguma das passagens pulando de pilar em pilar?</h3>",
		choices: [
		{
			choice: "Voltar para Sala com Terra",
			destination: 'devoltaSalalimbo'
		},
		{
			choice: "Pular de Pilar em Pilar",
			destination: 'pularPilarpilarlimbo'
		}

		]
	},

	pilarSolido2: {
		title: "Pilar Sólido 2",
		story: "<h3>Toriel pula em um pilar firme, recupera o fôlego e se prepara para seguir seu caminho pulando no próximo pilar; mas qual deles: o com ponta em forma de círculo com ponta, em forma de quadrado com uma quina arredondada, em forma de trapézio com quatro quinas em cima, ou em forma de triângulo?</h3>",
		choices: [
			{
				choice: "Pular no Pilar Circular com ponta",
				destination: 'pilarSolido3'
			},
			{
				choice: "Pular no Pilar Quadrado com uma quina arredondada",
				destination: 'pilarQCTQ2'
			},
			{
				choice: "Pular no Pilar Trapezial com quatro quinas em cima",
				destination: 'pilarQCTQ2'
			},
			{
				choice: "Pular no Pilar Triangular",
				destination: 'pilarSolido3'
			}
			]
	},

	pilarSolido3: {
		title: "Pilar Sólido",
		story: "<h3>Logo que Toriel toca seus pés neste pilar, ele não sente o pilar balançar nem ruir; Toriel olha ao redor e percebe que está próximo das duas passagens, para alcançar a arredondada e lisa, existem dois pilares como caminho: um tem a forma de um losango e o outro tem a forma de triângulo com uma quina arredondada; e na direção da passagem ornamentada com várias esculturas harmônicas, onde se lê a inscrição “CAPELA PRINCIPAL DA HARMONIA”, os pilares tem a forma de trapézio, de pentágono com dois lados arredondados e de quadrado com os lados côncavos. É bom que Toriel se decida logo por qual pilar ele vai seguir ou se ele vai voltar para a beira do precipício, pois o lago de lava está começando a ficar agitado e formar ondas, esse pilar não vai ser um local seguro por muito tempo!</h3>",
			choices: [
			{
				choice: "Pular no Pilar Losangular",
				destination: 'pilarSolido4'
			},
			{
				choice: "Pular no Pilar Triangular com uma quina arredondada",
				destination: 'pilarQCTQ2'
			},
			{
				choice: "Pular no Pilar Trapezial",
				destination: 'pilarQCTQ2'
			},
			{
				choice: "Pular no Pilar Pentagonal com dois lados arredondados",
				destination: 'pilarQCTQ2'
			},
			{
				choice: "Pular no Pilar Quadrado com dois lados arredondados",
				destination: 'pilarQCTQ2'
			},
			{
				choice: "Voltar pra Beira do Precipício",
				destination: 'VoltarBeira'
			}
			]
	},

	pilarSolido4: {
		title: "Pilar Solido4",
		story: "<h3>Toriel pula no pilar, equilibra-se e calcula a distância até o chão da passagem: um pulo bem dado até que alcança, mas existem ainda dois pilares que poderiam deixar esse pulo mais fácil.</h3><h3>De repente, labaredas de fogo se erguem da lava e começam a subir os pilares como se tivessem vida própria. São mais Elementais do Fogo, e muitos, pelo menos 3 deles.</h3><h3>Ele não tem como voltar para a outra beira do precipício pois os Elementais estão no caminho; Toriel pulará direto para a passagem, pulará no pilar com ponta em forma de semicírculo, pulará no com forma de pentágono com uma quina arredondada, ou irá ficar aí mesmo para enfrentar os Elementais do Fogo?</h3>",
		choices: [
		{
			choice: "Pular Direto",
			destination: 'pularAlto'
		},
		{
			choice: "Pular no Pilar Semicircular",
			destination: 'pilarQCTQ3'
		},
		{
			choice: "Pular no Pilar Pentagonal com quina",
			destination: 'pilarQCTQ3'
		},
		{
			choice: "Enfrentar Elementais",
			destination: 'enfrentarElementais'
		}
		]
	},

	pilarQCTQ3: {
		title: "Ir pro Final",
		story: "<h3>Toriel pisa no pilar que começa a ruir, e os Elementais do Fogo estão se aproximando por trás; ele tentará manter o equilíbrio sobre esse pilar ou pulará para a beira do precipício?</h3>",
		choices: [
		{
			choice: "Se Equilibrar",
			destination: 'seEquilibrar'
		},
		{
			choice: "Pulará para a Beira",
			destination: 'rolarDados05'
		}
		]
	},

	pularAlto: {
		title: "Pular Alto sobre os Pilares",
		story: "<h3>Para conseguir esse pulo sem problemas, Toriel precisará de um sucesso em um Teste de Acrobacia.</h3>",
		choices: [
		{
			choice: "Rolar 2D6",
			destination: 'rolarDados05'
		}
		]
	},

	rolarDados05: {
		title: "",
		story: "",
		choices: [
		{
			choice: "",
			destination: ""
		}
		]
	},

	sucessorolarDados05: {
		title: "Sucesso no Teste de Acrobacia",
		story: "<h3>De pé na beira do precipício, Toriel observa criaturas em chamas escalando o precipício e pulando pilares de pedra em sua direção; atrás dele, uma sala com estranhos reflexos ondulados azulados e avermelhados. Toriel investigará a sala ou aguardará os Elementais para o combate?</h3>",
		choices: [
		{
			choice: "investigar a Sala",
			destination: 'investigarSala'
		},
		{
			choice: "Enfrentar Elementais",
			destination: 'enfrentarElementais'
		}
		]
	},

	falharolarDados05: {
		title: "Falha no Teste de Acrobacia",
		story: "<h3>Seus pés de escorregam na beira do precipício de lava, Toriel estica os braços e suas mãos tentam agarrar o chão; seus dedos e unhas se raspam na pedra até que ele consegue se firmar. Enquanto ele se esforça para se erguer, suas costas queimam: um Elemental do Fogo se pendurou em sua mochila. Toriel desamarrará a alça da mochila, tentará subir com o Elemental em suas costas para enfrentá-lo em terra firme ou tentará se livrar do Elemental aí mesmo com a sua espada?</h3>",
		choices: [
		{
			choice: "Desamarrar Mochila",
			destination: 'desamarrarMochila'
		},
		{
			choice: "Subirá com o Elemental",
			destination: 'pegarFogo'
		},
		{
			choice: "Subir o Precipício",
			destination: 'pegarFogo'
		}
		]
	},

	enfrentarElementais: {
		title: "Enfrentar os Elementais de Fogo",
		story: "<h3>Com os olhos literalmente em chamas, cinco Elementais se aproximam.</h3>Seu calor é mortal, não adianta nem rolar os dados que dessa vez Toriel não tem chance.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'limbo'
		}
		]
	},

	investigarSala: {
		title: "Investigar a Sala",
		story: "<h3>As quinas e arestas suaves combinadas com os ondulantes reflexos azul avermelhados que passeiam pelas paredes lisas desta sala dão a ilusão de que a sala não tem fim. Um olhar mais atento nota que uma  parede tem uma ondulação diferente, aliás, os reflexos que balançam por toda sala partem desse quadro.</h3><h3>Toriel se aproxima sem entender como aquela água não cai daquele buraco quadrado na parede!</h3><h3>Emoldurando esse quadro/lago estava escrito:</h3><h2>...A ÁGUA NÃO ESTARÁ ONDE ESTAVA A ÁGUA NÃO ESTARÁ ONDE ESTAVA A ÁGUA NÃO...</h2><h3>E mergulhada nessa água, está uma Estatueta Harmônica.</h3><h3>Um Elemental de Fogo começa a subir na entrada da sala. E parece haver mais deles.</h3><h3>Toriel enfiará o braço na água para tentar pegar a Estatueta, tentará tirar a água de dentro do buraco ou enfrentará as criaturas de fogo?</h3>",
		choices: [
		{
			choice: "Enfiar o Braço na Água",
			destination: 'enfiarBracoagua1'
		},
		{
			choice: "Tirar Água do Quadro",
			destination: 'tirarAgua1'
		},
		{
			choice: "Enfrentar Elementais",
			destination: 'enfrentarElementais'
		}
		]
	},


	desamarrarMochila: {
		title: "Desamarrar a Mochila",
		story: "<h3>Toriel puxa o afrouxa o nó da alça, o peso e o fogo em suas costas caem, a criatura flamejante e sua mochila com tudo o que havia dentro cai na lava. Se você acha que Toriel deve se atirar para pegar a mochila ou subir para a beira do precipício?</h3>",
		choices: [
		{
			choice: "Se Atirar",
			destination: 'morrerQueimado'
		},
		{
			choice: "Subir para a Beira",
			destination: 'sucessorolarDados05'
		}
		]
	},


	pegarFogo: {
		title: "Pegar Fogo",
		story: "<h3>O Elemental nem precisa golpear para causar dano, as roupas de Toriel começam a pegar fogo. Não conseguindo controlar seu corpo ardendo em chamas, ele cai na lava.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'limbo'
		}
		]
	},


	enfiarBracoagua1: {
		title: "Tentativa 1 de Enfiar o Braço na Água pra Pegar a Estatueta",
		story: "<h3>Apesar de receoso, o Elemental de Fogo entra lentamente na sala; Toriel enfia o braço naquela poça vertical, mas quando suas mãos tocam a água, a sua superfície se agita e turva a visão da estatueta; Toriel tocou o fundo do buraco mas não encontrou nada, balançou os braços e percebeu algo se deslocando lá dentro.</h3><h3>A criatura de fogo estava próxima, preparando seu ataque; outros já estavam entrando na sala.</h3><h3>Toriel tentará tirar a água de dentro do quadro, enfiará a cabeça dentro do quadro ou enfrentará as fogueiras ambulantes?</h3>",
		choices: [
		{
			choice: "Tirar Água do Quadro",
			destination: 'tirarAgua2'
		},
		{
			choice: "Enfiar a Cabeça na Água",
			destination: 'enfiarCabecaagua'
		},
		{
			choice: "Enfrentar Elementais",
			destination: 'enfrentarElementais'
		},
		]
	},


	tirarAgua1: {
		title: "Tentativa de Tira Água do Quadro",
		story: "<h3>Apesar de receoso, o Elemental de Fogo entra lentamente na sala; as mãos de Toriel tocam a água, a sua superfície se agita e turva a visão da estatueta; ele tenta tirar a água, mas as gotas escorrem de volta para o quadro.</h3><h3>A criatura de fogo estava próxima, preparando seu ataque; outros já estavam entrando na sala.</h3><h3>Toriel enfiará o braço no quadro, enfiará a cabeça dentro do quadro ou enfrentará as fogueiras ambulantes?</h3>",
		choices: [
		{
			choice: "Enfiar o Braço na Água",
			destination: 'tirarAgua1'
		},
		{
			choice: "Enfiar a Cabeça na Água",
			destination: 'enfiarCabecaagua'
		},
		{
			choice: "Enfrentar Elementais",
			destination: 'enfrentarElementais'
		},
		]
	},


	tirarAgua2: {
		title: "Ir pro Final",
		story: "<h3>As mãos de Toriel tocam a água, a sua superfície se agita e turva a visão da estatueta; ele tenta tirar a água, mas as gotas escorrem de volta para o quadro.</h3><h3>De repente, um chicote de fogo golpeia suas costas, são os elementais.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'enfrentarElementais'
		}
		]
	},


	enfiarCabecaagua: {
		title: "Enfiar a Cabeça na Água",
		story: "<h3>Com a cabeça dentro da água, Toriel consegue ver onde a Estatueta Harmônica está flutuando, e ele sente também o calor aumentando em suas costas.</h3><h3>Toriel deve?</h3>",
		choices: [
		{
			choice: "Pegar a Estatueta da Água",
			destination: 'pegarEstatuetaagua'
		},
		{
			choice: "Não Pegar a Estatueta da Água",
			destination: 'naopegarEstatuetaagua'
		}
		]
	},

	pegarEstatuetaagua: {
		title: "Enfiar a Cabeça na Água",
		story: "<h3>Com um movimento rápido, ele agarra a estatueta e quando ele a puxa de dentro do quadro, a água começa a jorrar para fora e uma porta de pedra começa descer do meio da parede e fechar a entrada da sala.</h3><h3>O Elemental de Fogo mais próximo recua para o outro canto da sala, e outros três tentam se equilibrar do lado de fora da sala na beira do precipício.</h3><h3>A passagem está se fechando, Toriel ficará aí dentro com aquele Elemental de Fogo nada amistoso ou tentará empurrar os também nada amistosos Elementais de Fogo que estão na minguante passagem para sair da sala?</h3>",
		choices: [
		{
			choice: "Se Isolar com o Elemental",
			destination: 'isolarElemental'
		},
		{
			choice: "Correr para a Beira",
			destination: 'correrBeira'
		}
		]
	},

	naopegarEstatuetaagua: {
		title: "Não Pegar a Estatueta da Água",
		story: "<h3>Ao se virar, Toriel se vê cercado por Elementais do Fogo...</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'enfrentarElementais'
		}
		]
	},

	isolarElemental: {
		title: "Se Isolar com o Elemental",
		story: "<h3>A pesada porta de pedra fecha a passagem com uma forte batida, apenas a luz vermelha do Elemental de Fogo ilumina a sala. Toriel encara a criatura e percebe que ela não está preocupada com ele, mas sim com a água jorrando do quadro que se espalha pelo chão da sala.</h3><h3>A água encurrala a criatura de fogo num canto da sala, e numa tentativa desesperada, ela pula para cima de Toriel.</h3><h3>Toriel tentará se esquivar e passar pela criatura:</h3>",
		choices: [
		{
			choice: "Rolar 2D6",
			destination: 'rolarDados06'
		}
		]
	},

	correrBeira: {
		title: "Correr para a Beira",
		story: "<h3>Toriel toma impulso e tromba na parede de fogo que estava na entrada da sala, os Elementais se desequilibram e caem junto com Toriel no lago de lava.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'morrerQueimado'
		}
		]
	},

	rolarDados06: {
		title: "",
		story: "",
		choices: [
		{
			choice: "",
			destination: ""
		}
		]
	},

	sucessorolarDados06: {
		title: "Sucesso na Esquiva",
		story: "<h3>A criatura sente a água com um chiado de fritura. Ela tenta se levantar, mas a água já se espalhou por todo o chão.</h3><h3>Toriel observa aquela forma de fogo se debatendo, chiando e espalhando fumaça e vapor; o brilho avermelhando vai se extinguindo até que se apaga totalmente, deixando Toriel na mais completa escuridão.</h3><h3>O local está abafado pela neblina quente que o Elemental do fogo levantou, e Toriel escuta a água que continua jorrando do quadro; estranho —Toriel pensa— essa água toda não cabia naquele buraco na parede.</h3><h3>Toriel procura a porta de pedra tateando a parede, chega até ela e constata que por mais que ele se esforce, não consegue movê-la.</h3><h3>A água já está na sua cintura, Toriel anda às cegas pela sala e passa pelo jato d’água. Ele tenta mais uma vez enfiar o braço dentro do quadro, mas a pressão da água é muito forte, tão forte que além de não deixar uma mão de Toriel se aproximar do buraco, tira a Estatueta Harmônica da outra mão de Toriel.</h3><h3>Inconformado, ele mergulha na para procurar a estatueta. Teste sua Percepção:</h3>",
		choices: [
		{
			choice: "Rolar 2D6",
			destination: 'rolarDados07'
		}
		]
	},

	falharolarDados06: {
		title: "Sucesso na Esquiva",
		story: "<h3>Toriel é atingido pelo Elemental, mas a aura de proteção do Escudo de Pedra Benta o salva. Apesar de ser do tamanho de Toriel, a criatura é levíssima, como se fosse feita de gases. Toriel cairá no chão ou ele tentará empurrar o Elemental de Fogo com golpes de espada?</h3>",
		choices: [
		{
			choice: "Cairá no Chão",
			destination: 'sucessorolarDados06'
		},
		{
			choice: "Empurrar com Golpes",
			destination: 'empurrarElemental'
		}
		]
	},

	rolarDados07: {
		title: "",
		story: "",
		choices: [
		{
			choice: "",
			destination: ""
		}
		]
	},

	sucessorolarDados07: {
		title: "Sucesso no Teste de Percepção",
		story: "<h3>Na mais completa escuridão, Toriel nada tateando o chão procurando a estatueta; seu fôlego está se acabando e ele ainda não encontrou nada. Ele sobe e bate a cabeça no teto. Desesperado, levanta o rosto e sente uma fina camada de ar rente ao teto. Toriel respira fundo e percebe que essa camada está diminuindo rapidamente. Ele mal tem tempo de puxar um último fôlego antes dessa camada se extinguir.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'continuarAgua'
		}
		]
	},

	falharolarDados07: {
		title: "Morrer Afogado",
		story: "<h3>Toriel fica imóvel poupando seu fôlego, e nada acontece; até que seu fôlego acaba e ele respira buscando por ar, mas seus pulmões recebem apenas água, seu corpo engasga e se contorce, sentindo a dor da asfixia até o espasmo final, quando descansa na morte.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'tenteOutraVez'
		}
		]
	},

	empurrarElemental: {
		title: "Ir pro Final",
		story: "<h3>Toriel golpeia e empurra a criatura várias vezes, ganhando tempo para a água ir inundando a sala. Isso faz a criatura se desesperar...</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'sucessorolarDados06'
		}
		]
	},

	continuarAgua: {
		title: "Continuar na Água",
		story: "<h3>Flutuando na escuridão, Toriel prende aquele último fôlego em seus pulmões como o mais precioso dos tesouros. O que ele fará com esse último suprimento de ar: Procurará a Estatueta Harmônica, tentará abrir a porta de pedra, investigará o buraco na parede ou ficará imóvel para reter o ar por mais tempo?</h3>",
		choices: [
		{
			choice: "Procurar Estatueta da Água",
			destination: 'procurarEstatuetaagua'
		},
		{
			choice: "Tentar abrir Porta de Pedra",
			destination: 'abrirPortapedra'
		},
		{
			choice: "Investigar Buraco na Parede",
			destination: 'investigarBuracoparede'
		},
		{
			choice: "Ficar Imóvel",
			destination: 'falharolarDados07'
		}
		]
	},

	procurarEstatuetaagua: {
		title: "Procurar Estatueta da Água",
		story: "<h3>Toriel mergulha em busca da estatueta perdida na escuridão, apalpa o chão em um ritmo cada vez mais frenético conforme seu fôlego se acabava. </h3>",
		choices: [
		{
			choice: "Rolar 2D6",
			destination: 'rolarDados08'
		}
		]
	},

	abrirPortapedra: {
		title: "Abrir Porta de Pedra",
		story: "<h3>Toriel mergulha, apalpa a parede até encontrar a diferença de relevo onde desceu a porta de pedra; ele firma os dedos na base da porta e tenta levantar a rocha com toda sua força.</h3><h3>Mas a passagem não se abre, ao final do esforço, Toriel desesperadamente respira buscando por ar, mas seus pulmões recebem apenas água, seu corpo engasga e se contorce, sentindo a dor da asfixia até o espasmo final, quando descansa na morte.</h3><h3>Teste sua Percepção:</h3>",
		choices: [
		{
			choice: "Rolar 2D6",
			destination: 'rolarDados08'
		}
		]
	},

	rolarDados08: {
		title: "",
		story: "",
		choices: [
		{
			choice: "",
			destination: ""
		}
		]
	},

	sucessorolarDados08: {
		title: "Morrer Afogao, tocando na Estueta",
		story: "<h3>As mãos de Toriel tocam algo, rapidamente ele agarra o objeto, tem o formato da estatueta. Quando seu fôlego acaba, Toriel desesperadamente respira buscando por ar, mas seus pulmões recebem apenas água; seu corpo engasga e se contorce, sentindo a dor da asfixia até o espasmo final, depois descansa na morte.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'tenteOutravez'
		}
		]
	},

	falharolarDados08: {
		title: "Morrer Afogado, sem tocar na Estueta",
		story: "<h3>Toriel desesperadamente apalpa o chão da sala sem nada encontrar, e quando seu fôlego acaba, ele respira buscando por ar, mas seus pulmões recebem apenas água, seu corpo engasga e se contorce, sentindo a dor da asfixia até o espasmo final, depois descansa na morte.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'tenteOutravez'
		}
		]
	},
	investigarBuracoparede: {
		title: "Investigar Buraco na Parede",
		story: "<h3>Toriel mergulha apalpando a parede em busca do buraco, sua mão o encontra e ele não está jorrando água, e quando enfia sua cabeça nele, ele encontra ar! Inexplicavelmente, uma bolha de ar permanece dentro do buraco.</h3><h3>Toriel respira aliviado.</h3><h3>Enquanto ele planeja sua próxima ação, uma vibração balança a sala e seu corpo é puxado para a passagem que começa a se abrir.</h3><h3>Toriel nem tem tempo de tentar se agarrar na borda do buraco, o fluxo de água é muito forte e o arrasta para a passagem, passagem que se abre como uma cachoeira para o lago de lava!</h3><h3>Indefeso como uma conchinha numa onda, Toriel é arremessado, chacoalhado, girado e levado pela correnteza precipício abaixo.</h3><h3>Toriel cai numa superfície quente, é arrastado por mais alguns metros até que se choca com um pilar de pedra. Sem a proteção do escudo, você poderia teria morrido.</h3><h3>Toriel abre seus olhos e vê altos pilares de pedra envolvidos por neblina, sente as costas tocando numa superfície quente e lembra que está no lago de lava!</h3><h3>Ele levanta-se de um pulo e percebe que a lava esfriou com o banho, embora a rocha recém-formada continue quente.</h3><h3>Toriel percebe também que suas armas e objetos foram arrancados pela correnteza.</h3><h3>Uma fraca iluminação azulada vem da passagem ornamentada com a inscrição “CAPELA PRINCIPAL”, e depois de algum tempo de procura, Toriel encontra seus itens, inclusive as quatro Estatuetas Harmônicas.</h3><h3>O chão começa a esquentar, de repente, chamas surgem da rocha em vários pontos. Toriel olha ao seu redor as paredes altas e íngremes do precipício.</h3><h3>A rocha começa a ruir, formando veias de lava por toda parte, e dessas veias, labaredas tentam se levantar como se tivessem vida própria!</h3><h3>A parede sob a passagem da Capela Principal parece bem mais escalável, quando Toriel se aproxima, ele percebe que ela é facilmente escalável, mesmo com uma mão ocupada carregando as estatuetas.</h3><h3>Lá embaixo, lentamente o lago de lava volta a ser o que era antes.</h3><h3>Com muito cuidado para não escorregar, Toriel escala a parede até a entrada da Capela Principal.</h3><h3>Uma escadaria sobe em direção à luz azulada, tanto os pilares da entrada como os degraus da escadaria são ornamentados com pequenas e suaves esculturas harmônicas, mas Toriel não tem muito tempo para apreciá-las, formas de fogo saltam da lava e começam a escalar os pilares e a beira do precipício.</h3><h3>Toriel corre pela escadaria até chegar na Capela Principal!</h3><h3>Uma sala enorme, com poderosos pilares unidos às paredes lisas segurando o teto arredondado, a luz azulada vem de um altar redondo e quase transparente, no fundo da sala estão os cinco desaparecidos, de pé e lado a lado, com o olhar distante e túnicas azuis, e em um canto da sala, está uma fogueira gigante, suas labaredas alcançam os cinco metros.</h3><h3>E por falar em fogueira, Toriel olha para trás e vê alguns Elementais de Fogo subindo a escada; ele enfrentará as criaturas ou entrará na Capela Principal?.</h3>",
		choices: [
		{
			choice: "Enfrentar Elementais",
			destination: 'enfrentarElementais'
		},
		{
			choice: "Entrar na Capela Principal",
			destination: 'entrarCapela'
		}
		]
	},


	entrarCapela: {
		title: "Entrar na Capela Principal",
		story: "<h3>Toriel entra na capela e se aproxima do altar; as criaturas flamejantes não entram, ficam apenas observando e flamejando no topo da escadaria.</h3><h3>O altar parece ser feito do mais puro cristal, e seu brilho azulado ilumina toda a sala; Toriel colocará as estatuetas no altar ou investigará a sala?</h3>",
		choices: [
		{
			choice: "Colocar as Estuaetas no Altar",
			destination: 'colocarEstatuetasaltar'
		},
		{
			choice: "Investigar a Sala",
			destination: 'investigarSala2'
		}
		]
	},

	colocarEstatuetasaltar: {
		title: "Colocar 4 Estatuetas no Altar",
		story: "<h3>Assim que Toriel toca o altar, uma luz avermelhada toma conta da sala e o calor aumenta, um par de olhos de fogo enorme se forma na fogueira gigante. Toriel recua, mas um tentáculo de fogo o alcança e o envolve. Toriel arde em chamas e seu corpo é consumido pelo Fogo do Desequilíbrio.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'tenteOutravez'
		}
		]
	},

	investigarSala2: {
		title: "Investigar a Sala 2",
		story: "<h3>Toriel examina o altar de alto a baixo, olha com medo e curiosidade a fogueira gigante, decide não se aproximar, olha os Desaparecidos e reconhece um clérigo que havia participado com ele no combate contra os Orcs. Toriel se aproxima:</h3><h3>— Oi!?!</h3><h3>— ...</h3><h3>— Você não se lembra de mim, eu sou o Toriel, lutei com você contra a invasão dos Orcs!</h3><h3>— ...</h3><h3>— Olaaá, tem alguém aí?</h3><h3>— ...</h3><h3>— Eu conheço você também, você é um dos clérigos que cuida do colégio do mosteiro!</h3><h3>— ...</h3><h3>— Não é?</h3><h3>— ...</h3><h3>— Era?</h3><h3>— ...</h3><h3>— ...</h3><h3>— ...</h3><h3>— Vocês estão de gozação comigo ou vocês não estão me ouvindo mesmo?</h3><h3>— ...</h3><h3>Toriel observa as feições dos Desaparecidos, eles não têm expressão alguma, e seu olhar é vago, parecem estátuas; nem respirar eles respiram!</h3><h3>Toriel continuará essa conversa com os Desaparecidos ou investigará a sala de novo?</h3>",
		choices: [
		{
			choice: "Conversar com os Desaparecidos",
			destination: 'conversarDesaparecidos'
		},
		{
			choice: "Investigar a Sala",
			destination: 'investigarSala3'
		}
		]
	},

	tenteOutravez: {
		title: "Tentar Outra Vez",
		story: "<h3>Faltava pouco, muito pouco para Toriel vencer esse desafio, mas infelizmente você fez a escolha errada. Da próxima vez preste mais atenção na descrição do ritual que Toriel deve realizar. Tente mais uma vez, você está quase lá.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'limbo'
		}
		]
	},

	conversarDesaparecidos: {
		title: "Conversar com os Desaparecidos",
		story: "<h3>— Vocês não vão colaborar mesmo, não é? —Toriel pergunta aos Desaparecidos.</h3><h3>— ... — E os Desaparecidos não respondem.</h3><h3>— Não tem um pingo de consideração.</h3><h3>— ...</h3><h3>— Eu quase me mato para chegar até aqui e é assim que eu sou recebido, com esse desprezo!</h3><h3>— ...</h3><h3>— É, vocês são engraçados mesmo; vão lá fora, falam que um ritual deve se...</h3><h3>De repente, os cinco Desaparecidos falam ao mesmo tempo com uma voz que não parece ser a deles: — As Estatuetas da Harmonia devem ser colocadas no Altar Mundial na ordem de importância dos elementos que representam.</h3><h3>— ...er rals ...!</h3><h3>— ...</h3><h3>— Como é?!?!</h3><h3>— ...</h3><h3>— Foi impressão minha ou vocês falaram comigo?</h3><h3>— ...</h3><h3>— Falaram?</h3><h3>— ...</h3><h3>— Ah, qual é! Deixem de brincadeira, eu fiquei tão espantado que nem entendi o que vocês falaram, dá para vocês repetirem?</h3><h3>— ...</h3><h3>— É sério, eu não escutei direito, dá para repetir?</h3><h3>— ...</h3><h3>— Por favor ?!</h3><h3>— ...</h3><h3>— Ah, vão à *#@!@# *! #*@, desculpem, desculpem, mas é que... é que esse ritual...</h3><h3>— As Estatuetas da Harmonia devem ser colocadas no Altar Mundial na ordem de importância dos elementos que representam.</h3><h3>— Valeu! Quer dizer, obrigado; então para realizar o ritual eu...</h3><h3>— As Estatuetas da Harmonia devem ser colocadas no Altar Mundial na ordem de importância dos elementos que representam.</h3><h3>— ...? Ritual!</h3><h3>— As Estatuetas da Harmonia devem ser colocadas no Altar Mundial na ordem de importância dos elementos que representam.</h3><h3>— Certo, agora eu entendi como funciona! Aquele altar de cristal azulado é o Altar Mundial e essas estatuetas representam os elementos da harmonia, essa com o coração representa a carne, essa é a terra, essa a água, e essa sem nada deve representar o ar.</h3><h3>Toriel colocará as Estatuetas da Harmonia no Altar Mundial agora ou investigará a sala?</h3>",
		choices: [
		{
			choice: "Colocar Estatuetas no Altar",
			destination: 'colocarEstatuetasaltar'
		},
		{
			choice: "Investigar a Sala",
			destination: 'investigarSala4'
		}
		]
	},

	investigarSala3: {
		title: "Investigar a Sala 3",
		story: "<h3>Toriel caminha pela sala, tomando o cuidado de não se aproximar da fogueira gigante e nem dos Elementais do Fogo que continuam sua guarda na escadaria. Ele examina as paredes, os pilares, procura por gavetas ou passagens secretas, tenta empurrar os pilares, tenta olhar embaixo do altar mas não consegue movê-lo, examina a parede atrás dos Desaparecidos, examina suas túnicas, revista-os, e nada...</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'conversarDesaparecidos'
		}
		]
	},

	investigarSala4: {
		title: "Investigar Sala 4",
		story: "<h3>Toriel caminha pela sala, tomando o cuidado de não se aproximar da fogueira gigante e nem dos Elementais do Fogo que continuam sua guarda na escadaria. Ele examina as paredes, os pilares, procura por gavetas ou passagens secretas, tenta empurrar os pilares, tenta olhar embaixo do altar mas não consegue movê-lo, examina a parede atrás dos Desaparecidos, examina suas túnicas, revista-os, e nada de Estatueta Harmônica do Fogo...</h3><h3>Toriel colocará apenas as estatuetas que têm no altar, atacará os Elementais de Fogo, se aproximará da grande fogueira ou atacará os Desaparecidos?</h3>",
		choices: [
		{
			choice: "Colocar Estatuetas no Altar",
			destination: 'colocarEstatuetasaltar'
		},
		{
			choice: "Enfrentar Elementais",
			destination: 'enfrentarElementais2'
		},
		{
			choice: "Aproximar da Grande Fogueira",
			destination: 'aproximarFogueira'
		},
		{
			choice: "Atacará os Desaparecidos",
			destination: 'atacarDesaparecidos'
		}
		]
	},

	enfrentarElementais2: {
		title: "Enfrentar Elementais 2",
		story: "<h3>Toriel avança nos elementais, e quando sua espada atinge um deles, os elementais de fogo perdem a inibição e invadem a Capela Principal; não adianta nem rolar os dados que dessa vez Toriel não tem chance, nem mesmo com um Pergaminho de Proteção contra Fogo ele sobreviveria de ser empurrado escada abaixo até o lago de lava.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'limbo'
		}
		]
	},

	aproximarFogueira: {
		title: "Aproximar-se da Fogueira",
		story: "<h3>Depois de alguns passos na direção da grande fogueira, Toriel fica atento, buscando alguma alteração na aparência do fogo ou mudança na temperatura; mas não constata nada, o fogo e a temperatura continuam os mesmos.</h3><h3>A fogueira parece queimar do nada: ela está sobre o chão de pedra apenas; nenhuma lenha, palha ou fenda está a alimentando o fogo aparentemente. Aliás, existe algo sim; fixando a vista, Toriel percebe um pequeno objeto no centro da fogueira.</h3><h3>Toriel entrará dentro da fogueira para examinar esse objeto ou examinará a sala mais uma vez?</h3>",
		choices: [
		{
			choice: "Entrar na Fogueira",
			destination: 'examinarObjeto'
		},
		{
			choice: "Investigar a Sala",
			destination: 'investigarSala5'
		}
		]
	},

	atacarDesaparecidos: {
		title: "Ir pro Final",
		story: "<h3>Toriel golpeia um dos Desaparecidos, que não reage, a espada de Toriel racha seu crânio e seu corpo tomba. Toriel observa imobilizado o sangue escorrendo da cabeça do Desaparecido, deixa a espada cair... e escuta no fundo de sua alma algo parecido com uma voz doce dizendo:“ —Você faz parte da Harmonia”.</h3><h3>O corpo do Desaparecido é consumido pelas chamas, Toriel continua imóvel.</h3><h3>O corpo vira cinzas, mas a túnica azul permanece intacta, e Toriel a veste.</h3><h3>Você não escolherá mais qual caminho Toriel seguirá; nem Toriel poderá escolher, ele não existe mais, quem existe agora é um Desaparecido.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'limbo'
		}
		]
	},

	examinarObjeto: {
		title: "Examinar Objeto dentro da Fogueira",
		story: "<h3>Toriel se aproxima do fogo e não sente seu calor, toca na chama e seu dedo não arde, enfia o braço na fogueira e retira rapidamente, constata que nem um fiapo de seu colete foi chamuscado.</h3><h3>Criando coragem, mas atento para qualquer alteração, Toriel entra na fogueira, e é como se ela não existisse.</h3><h3>Sua visão está um pouco prejudicada pelas “labaredas” vermelhas, mas ele consegue localizar o objeto, parece ser uma Estatueta Harmônica. Assim que Toriel toca esse objeto, o calor parece aumentar, ele soltará o objeto e procurará outro item na fogueira, pegará o objeto e pulará para fora da fogueira ou sairá rapidamente da fogueira sem pegar ada?</h3>",
		choices: [
		{
			choice: "Procurar Outro Item",
			destination: 'procuraroutroItem'
		},

		{
			choice: "Pegar Objeto",
			destination: 'pegarObjeto'
		},
		{
			choice: "Sair Rapidamente",
			destination: 'sairFogueira'
		}
		]
	},

	investigarSala5: {
		title: "Investigar Sala 5",
		story: "<h3>Toriel caminha pela sala, tomando o cuidado de não se aproximar da fogueira gigante e nem dos Elementais do Fogo que continuam sua guarda na escadaria. Ele examina as paredes, os pilares, procura por gavetas ou passagens secretas, tenta empurrar os pilares, tenta olhar embaixo do altar, mas não consegue movê-lo, examina a parede atrás dos Desaparecidos, examina suas túnicas, revista-os, e nada de Estatueta Harmônica do Fogo...</h3><h3>Toriel colocará apenas as estatuetas que ele tem no altar, atacará os Elementais de Fogo, se aproximará da grande fogueira ou atacará os Desaparecidos?</h3>",
		choices: [
		{
			choice: "Colocar Estatuetas no Altar",
			destination: 'colocarEstatuetasaltar'
		},
		{
			choice: "Enfrentar Elementais",
			destination: 'enfrentarElementais2'
		},
		{
			choice: "Aproximar da Grande Fogueira",
			destination: 'aproximarFogueira'
		},
		{
			choice: "Atacará os Desaparecidos",
			destination: 'atacarDesaparecidos'
		}
		]
	},

	procuraroutroItem: {
		title: "Procurar Outro Item na Fogueira",
		story: "<h3>Com uma rápida passada de vista, Toriel não encontra mais nada dentro da fogueira além daquele objeto, e de repente aquele calor se transforma no mais ardente fogo, queimando Toriel de imediato.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'tenteOutravez'
		}
		]
	},

	pegarObjeto: {
		title: "Pegar Objeto na Fogueira",
		story: "<h3>Toriel agarra o objeto e pula para fora da fogueira no momento em que suas chamas se tornam realidade!</h3><h3>A sala fica quente e recebe uma iluminação avermelhada, em conflito com a luz azulada que resiste em torno do altar.</h3><h3>Ele se levanta e olha para trás, para o Fogo do Desequilíbrio que arde em suas costas, e encara seus grandes olhos de fogo que sussurram em sua mente:</h3><h3>O FOGO É O PRINCIPAL ELEMENTO DA HARMONIA.</h3><h3>Toriel recua assustado diante daquela visão e tenta acalmar seus pensamentos; o Ritual do Equilíbrio deve ser realizado, ele olha para o objeto em sua mão e encontra uma Estatueta Harmônica com chamas dentro de sua barriga de cristal.</h3><h3>Ele olha para os Desaparecidos e pergunta:</h3><h3>— Já estou com cinco estatuetas, e agora, o que eu faço?</h3><h3>— ...</h3><h3>— Eu sei que agora eu devo fazer o ritual, mas...</h3><h3>— As Estatuetas da Harmonia devem ser colocadas no Altar Mundial na ordem de importância dos elementos que representam.</h3><h3>— Isso eu já sei, mas como eu... quer dizer, eu tenho que colocar uma de cada vez, todas ao mesmo tempo... tem alguma que deve ser colocada antes de outra?</h3><h3>— ...</h3><h3>— É, eu acho que agora é comigo.</h3><h3>Toriel se aproxima do Altar Mundial, observa as cinco Estatuetas Harmônicas: fogo, ar, água, carne e terra. Tenta se lembrar de suas aulas no colégio do mosteiro, tenta lembrar como conseguiu cada uma das estatuetas e o que estava escrito próximo a elas...</h3><h3>Levanta os olhos e vê o altar de cristal azulado na sua frente, e a grande fogueira vermelha no fundo da sala e arrisca uma oração:</h3><h3>— Que o Equilíbrio volte à Harmonia!</h3><h3>Qual ou quais Estatuetas Harmônicas Toriel colocará no Altar Mundial?</h3>",
		choices: [
		{
			choice: "A Estatueta da Água",
			destination: 'colocarEstatuetasaltar'
		},
		{
			choice: "A Estatueta do Ar",
			destination: 'colocarEstatuetasaltar'
		},
		{
			choice: "A Estatueta da Carne",
			destination: 'colocarEstatuetasaltar'
		},
		{
			choice: "A Estatueta do Fogo",
			destination: 'primeiroEstatuetafogo'
		},
		{
			choice: "A Estatueta da Terra",
			destination: 'colocarEstatuetasaltar'
		},
		{
			choice: "Todas ao mesmo Tempo",
			destination: 'irFinal'
		}
		]
	},

	sairFogueira: {
		title: "Sair Rapidamente da Fogueira",
		story: "<h3>Toriel corre para fora da fogueira, se protege atrás do altar e dá uma espiada no ambiente: a capela continua azulada, os Elementais do Fogo continuam na entrada e a grande fogueira continua no seu canto.</h3><h3>Ele colocará apenas as estatuetas que ele tem no altar, atacará os Elementais de Fogo, se aproximará da grande fogueira ou atacará os Desaparecidos?</h3>",
		choices: [
		{
			choice: "Colocar Estatuetas no Altar",
			destination: 'colocarEstatuetasaltar'
		},
		{
			choice: "Enfrentar Elementais",
			destination: 'enfrentarElementais2'
		},
		{
			choice: "Aproximar da Grande Fogueira",
			destination: 'aproximarFogueira'
		},
		{
			choice: "Atacará os Desaparecidos",
			destination: 'atacarDesaparecidos'
		}
		]
	},

	primeiroEstatuetafogo: {
		title: "Colocar a Estatueta do Fogo Primeiro",
		story: "<h3>Toriel coloca a Estatueta Harmônica do Fogo sobre o Altar Mundial, nada acontece, qual será a próxima estatueta que Toriel colocará no altar?</h3>",
		choices: [
		{
			choice: "A Estatueta da Água",
			destination: 'colocarEstatuetasaltar'
		},
		{
			choice: "A Estatueta do Ar",
			destination: 'colocarEstatuetasaltar'
		},
		{
			choice: "A Estatueta da Carne",
			destination: 'colocarEstatuetasaltar'
		},
		{
			choice: "A Estatueta da Terra",
			destination: 'colocarEstatuetasaltar'
		},
		{
			choice: "Todas ao mesmo Tempo",
			destination: 'colocarEstatuetasaltar'
		}
		]
	},


	irFinal: {
		title: "Ir pro Final",
		story: "<h3>Toriel põe as cinco estatuetas juntas sobre o altar, os cinco elementos com a mesma importância.</h3><h3>Nada acontece, a não ser a iluminação avermelhada que está diminuindo; Toriel escuta um barulho, olha para o lado, os cinco Desaparecidos estão caídos. Ele corre para socorrê-los quando percebe uma iluminação vermelha crescendo, junto com o calor nas suas costas, Toriel olha para trás: os Elementais de Fogo entraram na sala e correm em sua direção.</h3><h3>Toriel procura rapidamente uma saída pelos lados e vê a fogueira gigante sumindo, e seus elementais também.</h3><h3>A única iluminação da sala é o altar de cristal azulado, que também está se apagando lentamente.</h3><h3>E quando a iluminação se acaba completamente, a sala começa tremer, e o abalo parece ser maior do canto onde estava a fogueira.</h3><h3>Toriel corre em direção da escadaria, esbarra no altar, derrubando algumas estatuetas; continua correndo até trombar com uma parede, a passagem deve ficar um pouco para a esquerda, ou talvez pela direita.</h3><h3>Rochas caem do teto, a capela está desabando.</h3><h3>Tateando a parede, ele procura a saída, até que uma luz claríssima vinda de um canto da capela ilumina o ambiente.</h3><h3>Os tremores pararam, Toriel estava próximo da escadaria quando ele espiou de onde vinha essa luz: em um canto da capela, o teto havia desmoronado, e uma luz muito forte vinha de cima.</h3><h3>Toriel se aproxima das rochas, apanha uma Estatueta Harmônica que está em seu caminho e começa a escalar o monte, alcança o teto e continua escalando.</h3><h3>A luz fica cada vez mais forte, Toriel vai subindo até que suas mãos alcançam um chão de grama, Toriel põe a cabeça para fora do buraco e quando seus olhos se acostumam com a luz do Sol, ele se localiza: está no pé do morro do Templo da Harmonia.</h3><h3>Gritos chegam das bordas da cidade, e se misturam com o tremor de todo o morro. A população assiste a implosão do templo, e foge da gigantesca nuvem de poeira que se levanta.</h3><h3>Todo o morro treme, Toriel começa a correr, mas o chão instável engana seus pés e ele cai rolando pela encosta. O morro também afunda, e a massiva nuvem de detritos se espalha rapidamente.</h3><h3>A população, aterrorizada, começa a se reorganizar, tentando entender o que aconteceu, até que alguém avisa: - Olhem, tem alguém saindo do morro!</h3><h3>A chegada de Toriel traz alguma alegria para o espanto dos cidadãos. Todos ouviram seu relato, e acreditaram que a maldição havia sido quebrada.</h3><br><h1>F I M</h1><br><br><h3>Epílogo Secreto</h3><h3>Um mês se passa, nenhum sacrifício é feito, e não ocorrem terremotos nem secas. O feito de Toriel é comemorado, ele é considerado um herói no reino, e passa a fazer parte do comando militar da cidade.</h3><h3>Porém, as terras não produzem tanto quanto antes, e depois de outro mês, percebe-se que as terras da região rendem tanto quanto as terras comuns.</h3><h3>Juntamente com a maldição, acabou a benção da Harmonia sobre Acorde.</h3><h3>Toriel passou a ser criticado, alegaram que ele destruiu o templo e desagradou os deuses, e ele perdeu seu cargo na cidade.</h3><h3>Depois de um ano, todo o reino está decadente, pois a fartura agrícola não é mais capaz de sustentar todos os serviços que se montaram sobre ela. Toriel está preso na capital do reino, dando esclarecimentos intermináveis na guilda de magia.</h3><h3>Alguns anos depois, durante um pequeno culto que reza pelo retorno da Harmonia para um vilarejo, cinco fiéis param de orar, se levantam, e dizem em coro: - Nós podemos reestabelecer a Harmonia.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'limbo'
		}
		]
	},

	instrucoes: {
		title: "Instruções",
		story: "<h3><center>Recomendação Etária: Livre</center></h3><h3>Para jogar uma aventura-solo, basta ler o texto apresentado, e no final, clicar sobre a decisão escolhida. Como exemplo, temos 2 opções:</h3><h3>- A primeira delas é a opção de 'Começar a Aventura', onde você irá ler o trecho introdutório do texto, identificando o personagem que você irá interpretar;</h3><h3>- A segunda opção é a de retornar a 'Tela Inicial' do jogo.</h3><h3>No caso dessa aventura-solo, é utilizado o sistema de regras <a href='https://operarpg.com.br' class='classe1' target='blank'>OPERA RPG</a>; caso queira ler um resumos das regras, consulte o <a href='https://operarpg.com.br/opereta/' class='classe1' target='blank'>OPEReta</a>.</h3><h3>Existe um botão flutuante no canto inferior da tela. Ele permite ver a ficha de personagem na mesma ou em outra janela.</h3><h3>Existe mais de um final possível deste jogo, por isso você poder jogar novamente escolhendo opções diferentes das anteriormente escolhidas.</h3><h3>Após as opções de escolha narrativa, existe o controle (de 4 botões) de uma trilha sonora; recomendamaos escutá-la, caso seja possível.</h3>",
		choices: [
		{
			choice: "Começar a Aventura!",
			destination: "intro"
		},
		{
			choice: "Tela Inicial",
			destination: "inicio"
		}
		]
	},

	inicio: {
		title: "Inicio",
		story: "",
		choices: [
		{
			choice: ".",
			destination: "inicio"
		}
		]
	},

	creditos: {
		title: "Créditos",
		story: "<h2 align='center'>Créditos</h2><h3>Esta é aventura-solo é parte do <a href='https://operarpg.com.br/arquivos/regras_e_fichas/ROPERAShareware.zip' target='blank' class='classe1'>OPERA Shareware Reload</a>, disponível no site do <a href='https://operarpg.com.br' target='blank' class='classe1'>OPERA RPG</a></p><p><b>Programação:</b> Leonardo Antônio de Andrade</p><p><b>Autores:</b></p><p>&nbsp;&nbsp;Leonardo Antônio de Andrade</p><p>&nbsp;&nbsp;Rogério de Mello Godoy</p><p><b>Trilha Sonora: </b><a href='https://jamendo.com/track/1802142/epic-medieval-music-battle' target='blank' class='classe1'>Epic medieval music battle, A|C</a></h3>",
		choices: [
		{
			choice: "Começar a Aventura!",
			destination: "intro"
		},
		{
			choice: "Tela Inicial",
			destination: "inicio"
		}
		]
	}
	
	}
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
		case ('comecarAventura'):
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
			sessionStorage.setItem('estatuetaagua', 0);
			sessionStorage.setItem('estatuetaar', 0);
			sessionStorage.setItem('estatuetacarne', 1);
			sessionStorage.setItem('estatuetafogo', 0);
			sessionStorage.setItem('estatuetaterra', 0);
			sessionStorage.setItem('punhadoterra', 0);
			sessionStorage.setItem('combate1', 0);
			sessionStorage.setItem('combate2', 0);
			document.getElementById("rolar1").value = "Iniciar";
			document.getElementById("rolar2").value = "Iniciar";
			document.getElementById("chatStatus1").innerHTML = "<h4>COMBATE NÃO INICIADO</h4>";
			document.getElementById("chatStatus2").innerHTML = "<h4>COMBATE NÃO INICIADO</h4>";

		break;

		case ('limbo'):
			if (parseInt(sessionStorage.getItem('savepoint'), 10) != 0)
				story.currentScene = 'intro2';
			else
				story.currentScene = 'intro';
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
			sessionStorage.setItem('estatuetaagua', parseInt(sessionStorage.getItem('estatueta_'), 10));
			sessionStorage.setItem('estatuetaar', parseInt(sessionStorage.getItem('estatuetaar_'), 10));
			sessionStorage.setItem('estatuetacarne', parseInt(sessionStorage.getItem('estatuetacarne_'), 10));
			sessionStorage.setItem('estatuetafogo', parseInt(sessionStorage.getItem('estatuetafogo_'), 10));
			sessionStorage.setItem('estatuetaterra', parseInt(sessionStorage.getItem('estatuetaterra_'), 10));
			sessionStorage.setItem('punhadoterra', parseInt(sessionStorage.getItem('punhadoterra_'), 10));

			sessionStorage.setItem('combate1', 0);
			sessionStorage.setItem('combate2', 0);

			document.getElementById("rolar1").value = "Iniciar";
			document.getElementById("rolar2").value = "Iniciar";
			document.getElementById("chatStatus1").innerHTML = "<h4>COMBATE NÃO INICIADO</h4>";
			document.getElementById("chatStatus2").innerHTML = "<h4>COMBATE NÃO INICIADO</h4>";

			switch (parseInt(sessionStorage.getItem('savepoint'), 10))
			{
				case (1):
					story.currentScene = 'voltarSala';
				break;

				case (2):
					story.currentScene = 'sairSala';
				break;

				case (3):
					story.currentScene = 'investigarSala';
				break;

				case (4):
					story.currentScene = 'entrarCapela';
				break;

				case (5):
					story.currentScene = 'investigarSala4';
				break;
			}
	
		break;

		case ('devoltaSalalimbo'):
			if (parseInt(sessionStorage.getItem('escudo'), 10) == 1 && parseInt(sessionStorage.getItem('estatuetaterra'), 10) == 1 && parseInt(sessionStorage.getItem('punhadoterra'), 10) == 1)
				story.currentScene = 'devoltaSala1';
			if (parseInt(sessionStorage.getItem('escudo'), 10) == 0 && parseInt(sessionStorage.getItem('estatuetaterra'), 10) == 1 && parseInt(sessionStorage.getItem('punhadoterra'), 10) == 1)
				story.currentScene = 'devoltaSala2';
			if (parseInt(sessionStorage.getItem('escudo'), 10) == 1 && parseInt(sessionStorage.getItem('estatuetaterra'), 10) == 0 && parseInt(sessionStorage.getItem('punhadoterra'), 10) == 1)
				story.currentScene = 'devoltaSala3';
			if (parseInt(sessionStorage.getItem('escudo'), 10) == 1 && parseInt(sessionStorage.getItem('estatuetaterra'), 10) == 1 && parseInt(sessionStorage.getItem('punhadoterra'), 10) == 0)
				story.currentScene = 'devoltaSala4';
			if (parseInt(sessionStorage.getItem('escudo'), 10) == 0 && parseInt(sessionStorage.getItem('estatuetaterra'), 10) == 1 && parseInt(sessionStorage.getItem('punhadoterra'), 10) == 0)
				story.currentScene = 'devoltaSala5';
			if (parseInt(sessionStorage.getItem('escudo'), 10) == 0 && parseInt(sessionStorage.getItem('estatuetaterra'), 10) == 1 && parseInt(sessionStorage.getItem('punhadoterra'), 10) == 0)
				story.currentScene = 'devoltaSala6';
			if (parseInt(sessionStorage.getItem('escudo'), 10) == 1 && parseInt(sessionStorage.getItem('estatuetaterra'), 10) == 0 && parseInt(sessionStorage.getItem('punhadoterra'), 10) == 0)
				story.currentScene = 'devoltaSala7';
			if (parseInt(sessionStorage.getItem('escudo'), 10) == 0 && parseInt(sessionStorage.getItem('estatuetaterra'), 10) == 0 && parseInt(sessionStorage.getItem('punhadoterra'), 10) == 0)
				story.currentScene = 'devoltaSala8';
		break;

		case ('pularPilarpilarlimbo'):
			if (parseInt(sessionStorage.getItem('estatuetacarne'), 10) == 1 && parseInt(sessionStorage.getItem('estatuetaar'), 10) == 1 && parseInt(sessionStorage.getItem('estatuetaterra'), 10) == 1)
				story.currentScene = 'pularPilarpilar1';
			else
				story.currentScene = 'pularPilarpilar2';
		break;

		case ('aceitarPergaminho'):
			Swal.fire({
  				icon: 'sucess',
  				title: 'Benção Mágica',
  				text: sessionStorage.getItem('nome') + ' ganhou benção para sua arma. Pode ser utilizado uma única vez.'
			});
			sessionStorage.setItem('bencao', 1);
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
		break;

		case ('pegarEscudo2'):
			Swal.fire({
  				icon: 'sucess',
  				title: 'Escudo de Pedra Benta',
  				text: sessionStorage.getItem('nome') + ' ganhou uma arma mágica que confere a seu possuidor e uma tênue aura branca que absorve 1 ponto de dano em todo o corpo de quem o carrega. Dados: +1 / +3 > 1'
			});
			sessionStorage.setItem('escudo', 1);
			sessionStorage.setItem('arma0_nome', 'Escudo de Pedra Branca');
			sessionStorage.setItem('arma0_aparo', 10);
			sessionStorage.setItem('absorcao', 1);
		break;

		case ('pegarEstatuetaar'):
			Swal.fire({
  				icon: 'sucess',
				title: 'Estatueta Harmônica do Ar',
  				text: sessionStorage.getItem('nome') + ' pegou a Estatueta Harmônica do Elemento Ar.'
			});
			sessionStorage.setItem('estatuetaar', 1);
		break;

		case ('pegarEstatuetaterra'):
			Swal.fire({
  				icon: 'sucess',
				title: 'Estatueta Harmônica da Terra',
  				text: sessionStorage.getItem('nome') + ' pegou a Estatueta Harmônica do Elemento Terra.'
			});
			sessionStorage.setItem('estatuetaterra', 1);
		break;

		case ('pegarEstatuetaagua'):
			Swal.fire({
  				icon: 'sucess',
				title: 'Estatueta Harmônica da Água',
  				text: sessionStorage.getItem('nome') + ' pegou a Estatueta Harmônica do Elemento Água.'
			});
			sessionStorage.setItem('estatuetaagua', 1);
		break;

		case ('pegarObjeto'):
			Swal.fire({
  				icon: 'sucess',
				title: 'Estatueta Harmônica do Fogo',
  				text: sessionStorage.getItem('nome') + ' pegou a Estatueta Harmônica do Elemento Fogo.'
			});
			sessionStorage.setItem('estatuetaagua', 1);
		break;

		case ('pegarpunhadoTerra'):
			Swal.fire({
  				icon: 'sucess',
  				title: 'Punhado de Terra',
  				text: sessionStorage.getItem('nome') + ' pegou um punhado de terra e colocou em seus sapatos.'
			});
			sessionStorage.setItem('punhadoterra', 1);
		break;

		case ('combateGolemfogo'):
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
			story.currentScene = 'poscombateGolemfogo1';
			combate1.style.display = 'block';

		break;

		case ('poscombateGolemfogo2'):
			if(parseInt(sessionStorage.getItem('vida'), 10) > 0)
			{
				sessionStorage.setItem('arma1_golpe', 10);
				sessionStorage.setItem('arma1_aparo', 10);
				sessionStorage.setItem('arma1_danof', 0);
				story.currentScene = 'sucessoGolemfogo';
			}
			else
				story.currentScene = 'derrotaCombate';
		break;

		case('voltarSala'):
			Swal.fire({
				icon: 'sucess',
				title: 'Ponto de Salvamento 1',
				text: 'Você chegou no primeiro ponto de salvamento.'
	 		});
			sessionStorage.setItem('savepoint', 1);

			sessionStorage.setItem('vida_', parseInt(sessionStorage.getItem('vida'), 10));
			sessionStorage.setItem('bencao_', parseInt(sessionStorage.getItem('bencao'), 10));
			sessionStorage.setItem('escudo_', parseInt(sessionStorage.getItem('escudo'), 10));
			sessionStorage.setItem('iniciativa_', parseInt(sessionStorage.getItem('iniciativa'), 10));
			sessionStorage.setItem('absorcao_', parseInt(sessionStorage.getItem('absorcao'), 10));
			sessionStorage.setItem('arma0_nome_', sessionStorage.getItem('arma0_nome'));
			sessionStorage.setItem('arma0_golpe_', parseInt(sessionStorage.getItem('arma0_golpe'), 10));
			sessionStorage.setItem('arma0_aparo_', parseInt(sessionStorage.getItem('arma0_aparo'), 10));
			sessionStorage.setItem('arma0_danoa_', parseInt(sessionStorage.getItem('arma0_danoa'), 10));
			sessionStorage.setItem('arma0_danof_', parseInt(sessionStorage.getItem('arma0_danof'), 10));
			sessionStorage.setItem('arma1_nome_', sessionStorage.getItem('arma1_nome'));
			sessionStorage.setItem('arma1_golpe_', parseInt(sessionStorage.getItem('arma1_golpe'), 10));
			sessionStorage.setItem('arma1_aparo_', parseInt(sessionStorage.getItem('arma1_aparo'), 10));
			sessionStorage.setItem('arma1_danoa_', parseInt(sessionStorage.getItem('arma1_danoa'), 10));
			sessionStorage.setItem('arma1_danof_', parseInt(sessionStorage.getItem('arma1_danof'), 10));
			sessionStorage.setItem('estatuetaagua_', parseInt(sessionStorage.getItem('estatueta'), 10));
			sessionStorage.setItem('estatuetaar_', parseInt(sessionStorage.getItem('estatuetaar'), 10));
			sessionStorage.setItem('estatuetacarne_', parseInt(sessionStorage.getItem('estatuetacarne'), 10));
			sessionStorage.setItem('estatuetafogo_', parseInt(sessionStorage.getItem('estatuetafogo'), 10));
			sessionStorage.setItem('estatuetaterra_', parseInt(sessionStorage.getItem('estatuetaterra'), 10));
			sessionStorage.setItem('punhadoterra_', parseInt(sessionStorage.getItem('punhadoterra'), 10));
		break;

		case ('combateGolemossos'):
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
			story.currentScene = 'poscombateGolemossos1';
			combate2.style.display = 'block';

		break;

		case ('poscombateGolemossos2'):
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

		case('sairSala'):
			if(parseInt(sessionStorage.getItem('estatuetaterra'), 10) && !parseInt(sessionStorage.getItem('sairsala'), 10))
			{
				Swal.fire({
				icon: 'sucess',
				title: 'Ponto de Salvamento 2',
				text: 'Você chegou no segundo ponto de salvamento.'
	 			});
				sessionStorage.setItem('savepoint', 2);
				sessionStorage.setItem('sairsala', 1);

				sessionStorage.setItem('vida_', parseInt(sessionStorage.getItem('vida'), 10));
				sessionStorage.setItem('bencao_', parseInt(sessionStorage.getItem('bencao'), 10));
				sessionStorage.setItem('escudo_', parseInt(sessionStorage.getItem('escudo'), 10));
				sessionStorage.setItem('iniciativa_', parseInt(sessionStorage.getItem('iniciativa'), 10));
				sessionStorage.setItem('absorcao_', parseInt(sessionStorage.getItem('absorcao'), 10));
				sessionStorage.setItem('arma0_nome_', sessionStorage.getItem('arma0_nome'));
				sessionStorage.setItem('arma0_golpe_', parseInt(sessionStorage.getItem('arma0_golpe'), 10));
				sessionStorage.setItem('arma0_aparo_', parseInt(sessionStorage.getItem('arma0_aparo'), 10));
				sessionStorage.setItem('arma0_danoa_', parseInt(sessionStorage.getItem('arma0_danoa'), 10));
				sessionStorage.setItem('arma0_danof_', parseInt(sessionStorage.getItem('arma0_danof'), 10));
				sessionStorage.setItem('arma1_nome_', sessionStorage.getItem('arma1_nome'));
				sessionStorage.setItem('arma1_golpe_', parseInt(sessionStorage.getItem('arma1_golpe'), 10));
				sessionStorage.setItem('arma1_aparo_', parseInt(sessionStorage.getItem('arma1_aparo'), 10));
				sessionStorage.setItem('arma1_danoa_', parseInt(sessionStorage.getItem('arma1_danoa'), 10));
				sessionStorage.setItem('arma1_danof_', parseInt(sessionStorage.getItem('arma1_danof'), 10));
				sessionStorage.setItem('estatuetaagua_', parseInt(sessionStorage.getItem('estatueta'), 10));
				sessionStorage.setItem('estatuetaar_', parseInt(sessionStorage.getItem('estatuetaar'), 10));
				sessionStorage.setItem('estatuetacarne_', parseInt(sessionStorage.getItem('estatuetacarne'), 10));
				sessionStorage.setItem('estatuetafogo_', parseInt(sessionStorage.getItem('estatuetafogo'), 10));
				sessionStorage.setItem('estatuetaterra_', parseInt(sessionStorage.getItem('estatuetaterra'), 10));
				sessionStorage.setItem('punhadoterra_', parseInt(sessionStorage.getItem('punhadoterra'), 10));
			}
		break;

		case('voltarSala'):
			Swal.fire({
				icon: 'sucess',
				title: 'Ponto de Salvamento 3',
				text: 'Você chegou no terceiro ponto de salvamento.'
	 		});
			sessionStorage.setItem('savepoint', 3);

			sessionStorage.setItem('vida_', parseInt(sessionStorage.getItem('vida'), 10));
			sessionStorage.setItem('bencao_', parseInt(sessionStorage.getItem('bencao'), 10));
			sessionStorage.setItem('escudo_', parseInt(sessionStorage.getItem('escudo'), 10));
			sessionStorage.setItem('iniciativa_', parseInt(sessionStorage.getItem('iniciativa'), 10));
			sessionStorage.setItem('absorcao_', parseInt(sessionStorage.getItem('absorcao'), 10));
			sessionStorage.setItem('arma0_nome_', sessionStorage.getItem('arma0_nome'));
			sessionStorage.setItem('arma0_golpe_', parseInt(sessionStorage.getItem('arma0_golpe'), 10));
			sessionStorage.setItem('arma0_aparo_', parseInt(sessionStorage.getItem('arma0_aparo'), 10));
			sessionStorage.setItem('arma0_danoa_', parseInt(sessionStorage.getItem('arma0_danoa'), 10));
			sessionStorage.setItem('arma0_danof_', parseInt(sessionStorage.getItem('arma0_danof'), 10));
			sessionStorage.setItem('arma1_nome_', sessionStorage.getItem('arma1_nome'));
			sessionStorage.setItem('arma1_golpe_', parseInt(sessionStorage.getItem('arma1_golpe'), 10));
			sessionStorage.setItem('arma1_aparo_', parseInt(sessionStorage.getItem('arma1_aparo'), 10));
			sessionStorage.setItem('arma1_danoa_', parseInt(sessionStorage.getItem('arma1_danoa'), 10));
			sessionStorage.setItem('arma1_danof_', parseInt(sessionStorage.getItem('arma1_danof'), 10));
			sessionStorage.setItem('estatuetaagua_', parseInt(sessionStorage.getItem('estatueta'), 10));
			sessionStorage.setItem('estatuetaar_', parseInt(sessionStorage.getItem('estatuetaar'), 10));
			sessionStorage.setItem('estatuetacarne_', parseInt(sessionStorage.getItem('estatuetacarne'), 10));
			sessionStorage.setItem('estatuetafogo_', parseInt(sessionStorage.getItem('estatuetafogo'), 10));
			sessionStorage.setItem('estatuetaterra_', parseInt(sessionStorage.getItem('estatuetaterra'), 10));
			sessionStorage.setItem('punhadoterra_', parseInt(sessionStorage.getItem('punhadoterra'), 10));
		break;

		case('entrarCapela'):
			Swal.fire({
				icon: 'sucess',
				title: 'Ponto de Salvamento 4',
				text: 'Você chegou no quarto ponto de salvamento.'
	 		});
			sessionStorage.setItem('savepoint', 5);

			sessionStorage.setItem('vida_', parseInt(sessionStorage.getItem('vida'), 10));
			sessionStorage.setItem('bencao_', parseInt(sessionStorage.getItem('bencao'), 10));
			sessionStorage.setItem('escudo_', parseInt(sessionStorage.getItem('escudo'), 10));
			sessionStorage.setItem('iniciativa_', parseInt(sessionStorage.getItem('iniciativa'), 10));
			sessionStorage.setItem('absorcao_', parseInt(sessionStorage.getItem('absorcao'), 10));
			sessionStorage.setItem('arma0_nome_', sessionStorage.getItem('arma0_nome'));
			sessionStorage.setItem('arma0_golpe_', parseInt(sessionStorage.getItem('arma0_golpe'), 10));
			sessionStorage.setItem('arma0_aparo_', parseInt(sessionStorage.getItem('arma0_aparo'), 10));
			sessionStorage.setItem('arma0_danoa_', parseInt(sessionStorage.getItem('arma0_danoa'), 10));
			sessionStorage.setItem('arma0_danof_', parseInt(sessionStorage.getItem('arma0_danof'), 10));
			sessionStorage.setItem('arma1_nome_', sessionStorage.getItem('arma1_nome'));
			sessionStorage.setItem('arma1_golpe_', parseInt(sessionStorage.getItem('arma1_golpe'), 10));
			sessionStorage.setItem('arma1_aparo_', parseInt(sessionStorage.getItem('arma1_aparo'), 10));
			sessionStorage.setItem('arma1_danoa_', parseInt(sessionStorage.getItem('arma1_danoa'), 10));
			sessionStorage.setItem('arma1_danof_', parseInt(sessionStorage.getItem('arma1_danof'), 10));
			sessionStorage.setItem('estatuetaagua_', parseInt(sessionStorage.getItem('estatueta'), 10));
			sessionStorage.setItem('estatuetaar_', parseInt(sessionStorage.getItem('estatuetaar'), 10));
			sessionStorage.setItem('estatuetacarne_', parseInt(sessionStorage.getItem('estatuetacarne'), 10));
			sessionStorage.setItem('estatuetafogo_', parseInt(sessionStorage.getItem('estatuetafogo'), 10));
			sessionStorage.setItem('estatuetaterra_', parseInt(sessionStorage.getItem('estatuetaterra'), 10));
			sessionStorage.setItem('punhadoterra_', parseInt(sessionStorage.getItem('punhadoterra'), 10));
		break;

		case('investigarSala4'):
			Swal.fire({
				icon: 'sucess',
				title: 'Ponto de Salvamento 5',
				text: 'Você chegou no quinto e último ponto de salvamento.'
	 		});
			sessionStorage.setItem('savepoint', 4);

			sessionStorage.setItem('vida_', parseInt(sessionStorage.getItem('vida'), 10));
			sessionStorage.setItem('bencao_', parseInt(sessionStorage.getItem('bencao'), 10));
			sessionStorage.setItem('escudo_', parseInt(sessionStorage.getItem('escudo'), 10));
			sessionStorage.setItem('iniciativa_', parseInt(sessionStorage.getItem('iniciativa'), 10));
			sessionStorage.setItem('absorcao_', parseInt(sessionStorage.getItem('absorcao'), 10));
			sessionStorage.setItem('arma0_nome_', sessionStorage.getItem('arma0_nome'));
			sessionStorage.setItem('arma0_golpe_', parseInt(sessionStorage.getItem('arma0_golpe'), 10));
			sessionStorage.setItem('arma0_aparo_', parseInt(sessionStorage.getItem('arma0_aparo'), 10));
			sessionStorage.setItem('arma0_danoa_', parseInt(sessionStorage.getItem('arma0_danoa'), 10));
			sessionStorage.setItem('arma0_danof_', parseInt(sessionStorage.getItem('arma0_danof'), 10));
			sessionStorage.setItem('arma1_nome_', sessionStorage.getItem('arma1_nome'));
			sessionStorage.setItem('arma1_golpe_', parseInt(sessionStorage.getItem('arma1_golpe'), 10));
			sessionStorage.setItem('arma1_aparo_', parseInt(sessionStorage.getItem('arma1_aparo'), 10));
			sessionStorage.setItem('arma1_danoa_', parseInt(sessionStorage.getItem('arma1_danoa'), 10));
			sessionStorage.setItem('arma1_danof_', parseInt(sessionStorage.getItem('arma1_danof'), 10));
			sessionStorage.setItem('estatuetaagua_', parseInt(sessionStorage.getItem('estatueta'), 10));
			sessionStorage.setItem('estatuetaar_', parseInt(sessionStorage.getItem('estatuetaar'), 10));
			sessionStorage.setItem('estatuetacarne_', parseInt(sessionStorage.getItem('estatuetacarne'), 10));
			sessionStorage.setItem('estatuetafogo_', parseInt(sessionStorage.getItem('estatuetafogo'), 10));
			sessionStorage.setItem('estatuetaterra_', parseInt(sessionStorage.getItem('estatuetaterra'), 10));
			sessionStorage.setItem('punhadoterra_', parseInt(sessionStorage.getItem('punhadoterra'), 10));
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

		case ('rolarDados02'):
			if (dados <= 4)
			{
				Swal.fire({
  					icon: 'sucess',
  					title: 'Sucesso',
  					text: 'Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <= 4 (Sucesso)'
				});
				story.currentScene = 'sucessorolarDados02';
			}
			else
			{
				Swal.fire({
  					icon: 'error',
  					title: 'Falha',
  					text: 'Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 4 (Falha)'
				});
				story.currentScene = 'morrerQueimado';
			}
		break;

		case ('rolarDados03'):
			if (dados <= 8)
			{
				Swal.fire({
  					icon: 'sucess',
  					title: 'Sucesso',
  					text: 'Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <= 8 (Sucesso)'
				});
				story.currentScene = 'sucessorolarDados03';
			}
			else
			{
				Swal.fire({
  					icon: 'error',
  					title: 'Falha',
  					text: 'Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 8 (Falha)'
				});
				story.currentScene = 'falharolarDados03';
			}
		break;

		case ('rolarDados04'):
			if (dados <= 4)
			{
				Swal.fire({
  					icon: 'sucess',
  					title: 'Sucesso',
  					text: 'Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <= 4 (Sucesso)'
				});
				story.currentScene = 'voltarBeira';
			}
			else
			{
				Swal.fire({
  					icon: 'error',
  					title: 'Falha',
  					text: 'Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 4 (Falha)'
				});
				story.currentScene = 'morrerQueimado';
			}
		break;

		case ('rolarDados05'):
			if (dados <= 7)
			{
				Swal.fire({
  					icon: 'sucess',
  					title: 'Sucesso',
  					text: 'Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <= 7 (Sucesso)'
				});
				story.currentScene = 'sucessorolarDados05';
			}
			else
			{
				Swal.fire({
  					icon: 'error',
  					title: 'Falha',
  					text: 'Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 7 (Falha)'
				});
				story.currentScene = 'falharolarDados05';
			}
		break;

		case ('rolarDados06'):
			var dado3 = Math.floor(Math.random() * 6 + 1);
			var dado4 = Math.floor(Math.random() * 6 + 1);
			var dados2 = dado3 + dado4 + 9;
			dados += 9;
			if (dados >= dados2)
			{
				Swal.fire({
  					icon: 'sucess',
  					title: 'Sucesso',
  					text: 'Ataque do Elemental(+9): ' + dado3 + ' + ' + dado4 + ' + 9 = ' + dados2 + ' <= Esquiva de Toriel(+9): ' + dado1 + ' + ' + dado2 + ' + 9 = ' + dados + ' (Sucesso)'
				});
				story.currentScene = 'sucessorolarDados06';
			}
			else
			{
				Swal.fire({
  					icon: 'error',
  					title: 'Falha',
  					text: 'Ataque do Elemental(+9): ' + dado3 + ' + ' + dado4 + ' + 9 = ' + dados2 + ' > Esquiva de Toriel(+9): ' + dado1 + ' + ' + dado2 + ' + 9 = ' + dados + ' (Falha)'
				});
				story.currentScene = 'falharolarDados06';
			}
		break;

		case ('rolarDados07'):
			if (dados <= 7)
			{
				Swal.fire({
  					icon: 'sucess',
  					title: 'Sucesso',
  					text: 'Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <= 7 (Sucesso)'
				});
				story.currentScene = 'sucessorolarDados07';
			}
			else
			{
				Swal.fire({
  					icon: 'error',
  					title: 'Falha',
  					text: 'Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 7 (Falha)'
				});
				story.currentScene = 'falharolarDados07';
			}
		break;

		case ('rolarDados08'):
			if (dados <= 7)
			{
				Swal.fire({
  					icon: 'sucess',
  					title: 'Sucesso',
  					text: 'Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <= 7 (Sucesso)'
				});
				story.currentScene = 'sucessorolarDados08';
			}
			else
			{
				Swal.fire({
  					icon: 'error',
  					title: 'Falha',
  					text: 'Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 7 (Falha)'
				});
				story.currentScene = 'falharolarDados08';
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
