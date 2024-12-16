//variáveis de controle do framework
var story;
var instrucoes = false;
var creditos = false;
var master = false;

//variáveis de controle da história
microchip = false;

//função que define o conteúdo textual da narrativa
function getStory() {
	return {
		currentScene: "inicio",
		inicio: {
			title: `Bem-vindo à aventura "Além das Águas de Inishmore"`,
			story: "<p>Na remota ilha de Inishmore, localizada na costa oeste da Irlanda, podemos encontrar um pequeno vilarejo. Congelados no tempo, os habitantes da diminuta ilha levam uma vida pacata e altamente pautada por suas rotinas imutáveis: do artesão à curandeira, cada um é definido por sua função naquela sociedade. Suas personalidades, sonhos e anseios, caso existam, pouco importam, pois ali não há muito com o que se preocupar. Se, por ventura, viajantes decidissem visitar a ilha, ficariam espantados em constatar que uma comunidade tão simples ainda resista na Irlanda do Século XXI — mas tão improvável quanto a subsistência do vilarejo, seria a chegada de alguém que não fosse nascido ali. No passado já houveram raros casos de moradores que deixaram a ilha movidos por sua curiosidade em relação ao mundo exterior, mas o oposto nunca ocorreu: Inishmore nunca recebeu turistas. Até agora.</p>",
			choices: [
				{
					choice: "Comece a aventura!",
					destination: 'intro'
				},
				{
					choice: "Outras aventuras",
					destination: 'http://narrativas-interativas.ufscar.br'
				},
				{
					choice: "Como jogar",
					destination: 'instrucoes'
				},
				{
					choice: "Créditos",
					destination: 'creditos'
				}
			]
		},
		intro: {
			story: `
				<p>Você é Eric, um romancista, portador de surdez profunda bilateral e autor do best-seller Contos de Winverlen, sua primeira publicação. Nascido em uma área isolada do Condado de Monaghan, no interior da Irlanda, você cresceu vendo em sua mãe a sua única família, sendo grato por ter aprendido com ela a se comunicar por meio da escrita e da língua de sinais irlandesa (ISL).</p>
			`,
			choices: [
				{
					choice: "Sobre sua infância",
					destination: 'suaInfancia'
				},
				{
					choice: "Sobre os Contos de Winverlen",
					destination: 'contosWinverlen'
				},
			]
		},
		instrucoes: {
			title: "Como jogar",
			story: "<h3><center>Recomendação Etária: 12+</center></h3><h3>Para jogar esta aventura-solo, basta ler o texto apresentado, e ao final, clicar na decisão de sua preferência. Como exemplo, temos duas opções:</h3><h3>- A primeira delas indica 'Comece a Aventura!', onde você irá ler o trecho introdutório do texto, identificando o personagem que você irá interpretar;</h3><h3>- A segunda opção é a de retornar à 'Tela Inicial' do jogo.</h3><h3>Essa aventura-solo foi idealizada de acordo com o sistema de regras Opera RPG, no entanto, para fins de simplificação, essas regras foram atenuadas ao máximo (a fim de não ser necessário um conhecimento prévio delas).</h3><h3>Dessa forma, ao longo dessa aventura-solo não serão necessários o conhecimento da ficha do personagem principal e nem tomadas de decisões que dependam de rolagem de dados.</h3><h3>Por fim, existe mais de um final possível para este jogo, por isso, você pode jogar novamente escolhendo opções diferentes das anteriormente escolhidas.</h3>",
			choices: [
				{
					choice: "Comece a aventura!",
					destination: "intro"
				},
				{
					choice: "Tela Inicial",
					destination: 'inicio'
				}
			]
		},
		creditos: {
			title: "Créditos",
			story: "<h2 align='center'>Créditos</h2><h3>Esta aventura-solo foi o trabalho final da disciplina de Introdução à Hipermídia, no semestre 2022/02. A disciplina pertence ao curso de Imagem e Som da UFSCar.<p><b>Programação: Leonardo Andrade e Gabriel Ritter</b></p><p><b>Autor: Gabriel Ritter</b></p><p><b>Ilustrações: Gabriel Ritter, a partir de prompts criados via Midjourney</b></p></h3>",
			choices: [
				{
					choice: "Comece a aventura!",
					destination: "intro"
				},
				{
					choice: "Tela Inicial",
					destination: 'inicio'
				}
			]
		},
		suaInfancia: {
			story: `
				<p>Por conta de sua deficiência auditiva, você sempre teve dificuldades para interagir com as outras crianças de seu bairro, que nunca demonstraram interesse em conhecer as sinalizações pelas quais você se expressava. Dessa forma, sua mãe foi também a sua melhor amiga, com quem você criava receitas, jogava xadrez e observava as estrelas. Infelizmente, você se tornou órfão aos 21, quando sua mãe teve um mal súbito e veio a óbito poucas horas depois. Sozinho, buscou nos livros e em uma velha máquina datilográfica o seu refúgio, onde escreveu o romance fantasioso Contos de Winverlen, vendeu-o a uma editora local, e a partir do inesperado sucesso da obra, conseguiu alugar um apartamento no centro de Dublin.</p>
			`,
			choices: [
				{
					choice: "Sobre os Contos de Winverlen",
					destination: 'contosWinverlen'
				},
				{
					choice: "Sobre a rotina em Dublin",
					destination: 'rotinaDublin'
				},
			]
		},
		contosWinverlen: {
			story: `
				<p>Após a morte de sua mãe, quando você ainda tinha 21 anos, você se viu sozinho no mundo, e a partir de uma velha máquina datilográfica que encontrou ao limpar seu porão, decidiu escrever o seu primeiro romance fantasioso: Contos de Winverlen. Na história narrada pelo livro, conhecemos o distante reino de Winverlen, onde uma jovem princesa debilitada precisa receber o transplante de um coração de dragão para sobreviver. No entanto, os dragões são criaturas banidas desse reino através de uma poderosa e secular magia que impede que tal espécie se aproxime de seu território. Exilada de seu próprio reino, a princesa precisa aprender a conviver nessa nova conjuntura, conhecendo, no processo, o valor da humildade, um grupo de camponeses que também foram exilados do reino, e segredos sombrios que seus pais nunca ousaram lhe contar. Após uma editora local demonstrar interesse pela publicação da sua história, você se deparou com um sucesso de vendas sem precedentes, e, assim, conseguiu alugar um apartamento no centro de Dublin.</p>
			`,
			choices: [
				{
					choice: "Sobre sua infância",
					destination: 'suaInfancia'
				},
				{
					choice: "Sobre a rotina em Dublin",
					destination: 'rotinaDublin'
				},
			]
		},
		rotinaDublin: {
			story: `
			<p>Morando na capital irlandesa, você conheceu pela primeira vez outros deficientes auditivos, com os quais pôde finalmente conversar utilizando a língua de sinais ensinada por sua mãe. No entanto, sua adaptação ao dia-a-dia da cidade grande foi dificultosa, afinal, a repentina mudança de vida não possibilitou que você se preparasse para um ambiente onde eram necessárias interações com uma grande quantidade de pessoas — especialmente nos jantares de gala organizados por sua editora, onde se sentia obrigado a frequentar para criar contatos e se estabelecer no mercado literário. Não bastasse isso, a pressão para escrever o segundo volume de sua saga fantasiosa começava a crescer cada vez mais, e você sabia que um longo intervalo entre o lançamento de seus livros poderia causar desinteresse em seu público e lhe custar sua única fonte de renda. Ciente disso, se fazia necessária uma nova mudança de vida para voltar a escrever, e você sabia o lugar ideal para isso.</p>
			<p>Prestes a completar 27 anos, você nunca havia visitado a casa onde sua mãe passou a infância, localizada na remota ilha de Inishmore, costa oeste da Irlanda. Agora que você havia herdado esse imóvel diminuto porém repleto de memórias, seria uma ótima oportunidade para visitar o local, se isolar por algumas semanas e finalmente escrever o segundo volume de seus contos fantásticos. Dessa forma, você se dispõe a pesquisar sobre a ilha, separa algumas roupas, sua estimada máquina de escrever, a quantia de dinheiro que julga necessária, e parte para essa mudança de ares.</p>
			`,
			choices: [
				{
					choice: "Viajar para a ilha de Inishmore!",
					destination: 'ilhaInishmore'
				},
			
			]
		},
		ilhaInishmore: {
			story: `
			<p>Ao chegar na ilha, você automaticamente reconhece algumas das figuras que sua mãe sempre mencionava nas histórias que contava, tais como o padeiro da longa barba ruiva (que agora é predominantemente branca) e a velha artesã que falava com voz de papagaio (afinal, ainda que a surdez lhe impeça de ouvi-la, não deve haver outra idosa com cabelos volumosos e um olho direito de vidro). Após conversar com alguns moradores com o auxílio da ferramenta de voz de seu celular e deixar claro que você é capaz de ler lábios com facilidade, você descobre que a casa construída por seus avós não está nesse vilarejo, mas em uma área mais isolada da ilha, à beira-mar e na companhia de um único vizinho.</p>
			<p>Chegando à casa, você fica maravilhado por, finalmente, ver materializadas as imagens outrora moldadas por seu imaginário infantil, com exceção de objetos como remos e arpões que repousam na sala de estar. Sua mãe nunca demonstrou afinidade pela pesca, tampouco seus avós: um casal de astrônomos que você nunca conheceu, mas tem plena convicção de que eram vegetarianos. Alguém teria ocupado esse local durante os quase trinta anos que ficou sem moradores? Enquanto você elabora hipóteses que possam explicar os equipamentos de pesca, um senhor de alta estatura e braços amedrontadoramente espessos adentra o local. Vocês se assustam ao perceber a presença um do outro, ao que o idoso, de forma rude, lhe cobra uma explicação para estar ali, mas logo percebe em você os inconfundíveis olhos de sua mãe. Imaginando tratar-se de algum parente, prontamente se apresenta: Fionn McCormick, o vizinho. Após a casa ter sido abandonada, ele decidiu que iria utilizá-la como depósito para seus aparatos de pesca, e não esperava que alguém fosse visitar um lugar tão isolado. Novamente, Fionn lhe intima por não ter dito uma única palavra, e demora a compreender a sua deficiência auditiva. Após algumas elucidações, o velho pescador finalmente deixa a casa, mas permanece desconfiado em relação às suas reais intenções. Assim, rapidamente recolhe alguns papéis, mapas e blocos de notas que estavam jogados à mesa, avisa que no dia seguinte irá retornar para recolher os outros objetos, e aproveita para lhe convidar para um passeio em seu barco na próxima manhã, onde ele irá contar mais detalhes sobre o passado de sua mãe. Em troca, ele espera te conhecer melhor.</p>
			`,
			choices: [
				{
					choice: "Aceitar o convite",
					destination: 'aceitarConvite'
				},
				{
					choice: "Recusar o convite",
					destination: 'recusarConvite'
				},
			]
		},
		aceitarConvite: {
			story: `
			<p>Você aceita o convite, se despede de Fionn, mas tem dificuldades para dormir, pensativo sobre o modo desesperado com que o idoso recolheu os papéis jogados à mesa. Durante os poucos segundos que teve para observar os papéis, você se recorda de anotações sobre uma mulher-peixe. Seria o vizinho um homem louco, ou alguma criatura desconhecida realmente habita aquelas águas? Uma sereia? Dúvidas não paravam de surgir, mas as respostas só viriam na manhã seguinte.</p>
			<p>O dia amanhece, Fionn recolhe os remos e arpões como havia lhe prometido, e, juntos, vocês entram no pequeno barco do pescador, rumo às serenas águas de Inishmore. Como o mar está calmo, o velho pescador posiciona uma varinha na lateral de seu barco, e começa a lhe contar histórias sobre o passado dele, citando os seus avós e sua saudosa mãe. É estranho que ela nunca o tenha mencionado, e a cada nova história relatando a proximidade do velho com seus ex-vizinhos, você começa a ficar mais intrigado e desconfiado. No entanto, Fionn também parece manifestar desconfiança com relação a você. Ainda que o jeito bronco do pescador denote que ele está gostando de ter uma companhia incapaz de retrucar suas grosserias, uma incerteza paira no ar: antes dele recolher os papéis que estavam à mesa, será que houve tempo para que você lesse o conteúdo das anotações? Antes que o clima de desconforto entre vocês se intensifique ainda mais, você percebe algo se movimentando no horizonte.</p>
			`,
			choices: [
				{
					choice: "Apontar a direção para que Fionn vá até o local",
					destination: 'apontarDireção'
				},
				{
					choice: "Fingir que não viu nada e esperar o fim da pescaria",
					destination: 'esperarFim'
				},	
			]
		},
		recusarConvite: {
			story: `
			<p>Desconfiado de quais serão as intenções de Fionn nesse passeio de barco, você educadamente faz um gesto corporal recusando essa oferta. Fionn parece duvidar ainda mais de sua inesperada vinda à ilha, mas após demonstrar cansaço e fingir que está doente, você consegue dispensar o convite do idoso com sucesso. Fionn finalmente compreende a sua indisposição, se despede, mas o alerta de que após alguns dias ele ainda pretende te levar para uma pesca, a fim de conhecê-lo melhor.</p>
			<p>Na manhã seguinte, espiando pela janela, você vê Fionn entrando em seu barco e saindo em direção ao mar. Com a casa do pescador vazia, você sabe que é a oportunidade perfeita para invadi-la e investigar o conteúdo dos papéis que Fionn recolheu de modo tão desesperado no dia anterior. Já dentro da casa, você finalmente encontra os papéis, e se depara com diversas ilustrações de uma mulher com cauda de peixe, além de rabiscos com anotações de locais da ilha que essa sereia hipotética parece frequentar. “Esse homem é um louco!”, você pensa, instintivamente. Ciente de que o porão daquela casa deve esconder maiores segredos, mas igualmente ciente de que algumas horas já se passaram desde que você entrou furtivamente naquela casa, você se vê indeciso entre investigar melhor a vida de seu vizinho ou sair antes do dia escurecer para não correr riscos.</p>
			`,
			choices: [
				{
					choice: "Sair antes de escurecer para não correr riscos",
					destination: 'sairAntes'
				},
				{
					choice: "Descer para o porão em busca de mais dados",
					destination: 'descerPorão'
				},	
			]
		},
		sairAntes: {
			story: `
			<p>Você deixa a casa e, para seu espanto, no momento ideal: no horizonte, é possível avistar que o barco de Fionn retorna à ilha. Sua intuição não poderia estar mais certa, bem como o momento de sua fuga. Agora que o vizinho jamais desconfiaria de sua invasão à casa dele, você decide que, na manhã seguinte, irá investigar por si próprio a existência (ou não-existência) da tal criatura que habita as misteriosas águas de Inishmore.</p>
			<p>O dia amanhece, você acorda mais cedo que de costume, adentra um pequeno barco que repousa à orla, e consegue deixar a ilha com a maior discrição possível — cada movimento não-calculado poderia despertar o vizinho antes da sua saída. Em meio ao calmo mar, o sol já desponta no horizonte, e próximo a ele, algo parece se mover. Rapidamente, você conduz o barco na direção da intrigante figura que acaba de avistar. Se aproximando, percebe melhor a natureza fantástica desta figura: uma atraente mulher com longos e cacheados cabelos ruivos, e, ao mesmo tempo, uma criatura mitológica com escamas espalhadas pelas curvas de seu corpo e brânquias visíveis em seu pescoço. A sua experiência como romancista jamais poderia ter te preparado para descrever algo tão belo e tão exótico. Graciosamente, a sereia abre os lábios, puxa fôlego e parece cantar algum tipo de canção. Você segue deslumbrado, olhando fixamente nos olhos dela, que agora parecem tomados por surpresa — aparentemente, as lendas sobre os cantos hipnotizantes das sereias eram reais, e nessa rara ocasião, a sua surdez profunda bilateral agia em seu favor, impedindo que o encanto da criatura surtisse algum efeito. Confusa ao perceber que você ainda não havia se jogado às águas do mar, a sereia mergulha e foge, receosa de que algo pudesse acontecer a ela.</p>
			`,
			choices: [
				{
					choice: "Seguir a sereia de barco",
					destination: 'seguirSereia'
				},
				{
					choice: "Voltar à ilha",
					destination: 'voltarIlha'
				},	
			]
		},
		descerPorão: {
			story: `
			<p>Decidido a investigar melhor a intrigante obsessão de seu vizinho e ciente de que você não terá muito tempo para isso, você desce até o porão de Fionn. Chegando lá, se depara com mais rabiscos e anotações, desta vez em papéis mais antigos, guardados há cerca de uns 30 anos. No meio desses papéis, uma nova surpresa: os nomes Cillian e Moira. Seus avós. Aparentemente, eles também foram morar às margens de Irishmore motivados pela busca da tal sereia. Será que Fionn teve algum envolvimento com o desaparecimento de seus avós e a consequente fuga de sua mãe durante a juventude dela?</p>
			<p>Enquanto você está distraído no porão, Fionn retorna à casa. Sua surdez congênita o impede de descobrir a chegada do velho pescador, mas infelizmente o mesmo não pode ser dito sobre ele. Ao ouvir ruídos provenientes do subsolo de sua casa, Fionn se equipa de uma espingarda, e cautelosamente desce para garantir se realmente há um invasor em seu lar. No momento em que ele percebe uma presença humana, não há outro impulso senão o de efetuar um disparo com a espingarda, que o atinge violentamente em sua perna esquerda. Você dá um grito de dor, e Fionn se assusta ao enfim reconhecer quem invadiu a casa.</p>
			`,
			choices: [
				{
					choice: "Fugir em direção à ilha com a perna sangrando",
					destination: 'fugirIlha'
				},
				{
					choice: "Deixar que Fionn se aproxime e trate as feridas",
					destination: 'deixarFionn'
				},	
			]
		},
		deixarFionn: {
			story: `
			<p>Após o disparo da espingarda, Fionn rapidamente se arrepende por ter atirado em você, jogando a espingarda ao chão e indo em sua direção. O pescador remove a bala de sua perna, rasga um pedaço da camisa que está vestindo, faz pressão no ferimento para conter o volume de sangue que você está perdendo, e, por fim, realiza um torniquete com seu cinto. Alguns minutos se passam, Fionn volta com um balde d’água, limpa a área lesionada, prepara um emplastro de ervas com propriedades medicinais, e faz um curativo em sua perna. Agora a dor começa a se atenuar. Você ainda tenta processar o fato de ter levado um tiro, simultaneamente espantado com os conhecimentos médicos do velho pescador e receoso por saber que ele irá lhe cobrar uma explicação para a sua invasão na casa. Qualquer explicação que você dê será fundamental para determinar como serão os seus próximos dias na ilha.</p>
			<p>Fionn retorna ao porão onde você repousa, mas dessa vez, tranca a porta para não correr o risco de que você fuja dali antes de se explicar. Finalmente, com uma expressão mista de desprezo e decepção, o vizinho lhe cobra respostas.</p>
			`,
			choices: [
				{
					choice: "Dar uma resposta sincera",
					destination: 'respostaSincera'
				},
				{
					choice: "Mentir e tentar fugir dali",
					destination: 'mentirFugir'
				},	
			]
		},
		mentirFugir: {
			story: `
			<p>Para respondê-lo, você puxa seu celular e, enquanto digita, os blocos de texto são lidos pela ferramenta de voz. Finalmente, a comunicação entre você e Fionn estava te dando um espaço para falar, deixando de ser uma relação baseada unicamente em fazer leitura labial das sandices pronunciadas pelo velho. Você decide se abrir e contar o motivo de ter invadido a casa, dizendo que a sua mãe sempre lhe contou sobre o idoso conversador que contava várias histórias. Enquanto você digita a próxima frase, se valendo de suas habilidades como romancista para elaborar uma desculpa convincente a partir do apelo a um sentimentalismo inerente a todo ser humano, você descobre que essa presumida humanidade não reside em Fionn: ainda que ele tenha cuidado dos ferimentos ocasionados pelo disparo da espingarda com expertise, a única motivação do velho era mesmo te prender para torturá-lo e arrancar uma confissão à força, haja visto que ele acaba de avançar em sua direção, não para refazer o curativo, mas para retirá-lo e apertar o dedo indicador no buraco da bala, agravando ainda mais o ferimento. Você derruba o celular ao chão e urra de dor. Enquanto observa, apavorado, os odiosos olhos de Fionn, nota que ele está gritando algo, e em meio a essa situação desesperadora, decide ler seus lábios:</p>
			<p>— Achou que ia me enganar, fedelho?! Chega aqui na ilha sem avisar, invade a casa em que eu moro faz quarenta e sete anos, e ainda tem a coragem de inventar uma mentira lavada dessas, achando que eu sou idiota o bastante pra acreditar que a sua mãe te contava historinhas felizes sobre o homem que matou os pais dela? — finaliza Fionn, apertando com mais força a ferida de sua perna. Você enfim atesta que não tem escolha.</p>
			`,
			choices: [
				{
					choice: "Confessar o motivo da invasão",
					destination: 'respostaSincera'
				},
			]
		},
		fugirIlha: {
			story: `
			<p>Em um gesto de desespero e com medo de levar um novo tiro que possa vir a ser fatal, você sai correndo do porão, bloqueia a porta com uma cadeira, passa pela cozinha de Fionn, chega à entrada da casa e continua a correr sem olhar para trás. O sangue escorre por sua perna, mas não há tempo para a dor. Com a adrenalina à mil, a sensação aflitiva parece chegar aos poucos, cada vez com mais intensidade. “O vilarejo não deve estar tão longe”, você torce, em seus pensamentos. Todavia, as prestações de seu sofrimento começam a se amplificar, e junto de uma indisposição pungente para continuar correndo, sua visão começa a ficar turva. Você cai ao chão, em meio à trilha de pedras na qual estava correndo. Já não há mais forças em seu corpo para chegar até o vilarejo.</p>
			`,
			choices: [
				{
					choice: "Se levantar e continuar correndo, apesar da dor",
					destination: 'levantarCorrer'
				},
				{
					choice: "Gritar por socorro na esperança de ser ouvido",
					destination: 'gritarSocorro'
				},	
			]
		},
		gritarSocorro: {
			story: `
			<p>Ciente de que o ferimento causado pelo tiro em sua perna esquerda pode causar uma hemorragia, e atento a sinais como a visão turva, que poderia lhe levar a um desmaio, você puxa fôlego e grita o mais alto que pode, na esperança de que alguém lhe ouça. Inishmore é uma ilha pacata e seus moradores podem ser contados nos dedos, mas dado que sua extensão territorial não é tão grande, certamente alguém irá ouvir o seu grito. Mais uma vez, você puxa fôlego e dá mais um grito, dessa vez, desmaiando por falta de oxigenação no cérebro. Felizmente, não demora para que venham a lhe socorrer, e suas feridas são tratadas a tempo, através de um torniquete que estanca o sangramento e um subsequente emplastro de ervas medicinais que aliviam a sua dor. Quem havia de ter sido o seu salvador? Fionn McCormick, que conseguiu sair da própria casa e seguiu os seus passos, sabendo que você não estaria longe.</p>
			<p>Você acorda, mais uma vez dentro do porão de Fionn, mas com a diferença de, agora, ter sido ele quem trancou as portas para você não fugir. A qualquer momento, ele irá entrar e lhe cobrar explicações para a sua invasão, explicações estas que, a depender de seu conteúdo, serão fundamentais para determinar como serão os seus próximos dias na ilha. Poucos minutos depois, Fionn chega ao porão, tranca a porta novamente, e com ares de indignação, tal como você imaginara, lhe cobra respostas.</p>
			`,
			choices: [
				{
					choice: "Dar uma resposta sincera",
					destination: 'respostaSincera'
				},
				{
					choice: "Mentir e tentar fugir dali",
					destination: 'mentirFugir'
				},	
			]
		},
		respostaSincera: {
			story: `
			<p>Envergonhado, você confessa o motivo de ter invadido a casa de Fionn, digitando em seu celular enquanto os blocos de texto são convertidos em falas. Você explica que aproveitou a saída do vizinho para descobrir qual era o conteúdo dos papéis que ele havia recolhido com tanta rapidez, admite que estava desconfiado da integridade dele e de suas intenções, e conta que agora já sabe sobre a obsessão de Fionn acerca da suposta sereia que habita as águas de Inishmore. Também o conta sobre ter visto em meio aos papéis o nome de seus avós, os quais você não sabe afirmar se realmente moraram lá para pesquisar sobre a sereia, ou se isso não passa de uma paranoia de Fionn, cego por suas ambições e sua convicção na existência da criatura sobrenatural (você hesita em dizer isso, mas já não há mais motivo para esconder suas impressões).</p>
			<p>Fionn percebe que você contou a verdade, e lhe dá algumas novas informações a respeito da época em que seus avós e sua mãe foram vizinhos dele. O pescador era convicto de que eles tinham o mesmo propósito que ele: o de atestar a existência da mulher-peixe de Inishmore, fato que levou Fionn a assassiná-los com medo de que fossem mais rápidos em suas descobertas. Com isso, apenas a jovem filha do casal foi capaz de fugir antes da morte iminente. Sozinho à beira-mar, Fionn temeu ser denunciado aos outros moradores da ilha, e tratou de correr para procurar as anotações de Cillian e Moira, ávido pelo conteúdo dos estudos do casal. Para a surpresa dele, haviam apenas anotações referentes a observação astronômica — os vizinhos apenas saíam de barco para espairar. Todavia, isso não negava a possibilidade da filha saber algo referente à sereia, ainda mais por ter fugido sem denunciar o assassino de seus pais a ninguém. Finalizando seu monólogo, Fionn olha profundamente em seus olhos, e pergunta qual é a sua opinião com relação às evidências que você encontrou sobre a criatura marinha. Teria ele perdido completamente a sanidade, ou não?</p>
			`,
			choices: [
				{
					choice: "Você acredita que há uma sereia nas águas",
					destination: 'sereiaExiste'
				},
				{
					choice: "Você acha impossível que exista uma sereia",
					destination: 'sereiaNaoexiste'
				},	
			]
		},
		sereiaExiste: {
			story: `
			<p>Após tudo o que Fionn acaba de lhe contar, você decide concordar com o vizinho, confessando que é possível que realmente haja uma sereia que se esconde nas águas de Inishmore. Talvez sua decisão tenha sido movida, em partes, pelo medo em contrariar as convicções do idoso, mas como um romancista que se tornou conhecido por ter criado um mundo fantasioso, você já não sabe mais diferenciar o real do imaginário. Ao terminar sua colocação, você olha para Fionn em busca de aprovação, mas ele está completamente apático — qual resposta ele esperava de ti? O velho pescador finalmente abre a boca, e diz que sempre soube das suas intenções se mudando para aquela ilha. Completa afirmando que apenas um homem pode descobrir a sereia: aquele que dedicou o trabalho de uma vida toda em busca disso. Com total frieza, ergue sua espingarda em uma fração de segundo, e sem sequer olhar em sua direção, dispara pela segunda vez naquela noite. Desta vez, o tiro o acerta no meio de seu peito, encerrando sua vida no mesmo instante. Ao final, sua jornada teve o pior desfecho imaginável: morto por conta de um mal-entendido.</p>
			`,
			choices: [
				{
					choice: "Créditos",
					destination: 'creditos'
				},
			]
		},
		sereiaNaoexiste: {
			story: `
			<p>Em meio à sinceridade que você demonstrou nos últimos minutos, você aceita que é muito arriscado mentir para Fionn, e se admite como cético acerca da existência de sereias. Mesmo que isso signifique tornar explícito que o homem à sua frente desperdiçou o trabalho de uma vida em busca de algo sem nenhum fundamento, você assim o faz, conformado de que não há motivos para mentir. Fionn percebe que você foi sincero na construção de sua resposta e, por baixo do aspecto carrancudo e do coração quase impenetrável, compreende que o julgou errado — aquele jovem realmente não passou de um escritor em busca de sossego para digitar um romance de fantasia. Ainda assim, o velho pescador ainda o repreende por ter invadido a casa dele em vez de ter feito o óbvio e buscado dialogar e conhecê-lo primeiro, ocasionando tudo que se passou nas últimas horas. Ele se levanta, destranca a porta do porão, te acompanha até a sua casa, e o aconselha para que você retorne à sua cidade natal e o deixe em paz, permitindo que ele possa viver o restante de sua vida isolado.</p>
			<p>No dia seguinte, você segue a recomendação de Fionn, e reúne novamente seus pertences, saindo sem ter coragem de se despedir e sem olhar para trás, deixando a misteriosa Inishmore em seu passado, para nunca mais retornar. Nos anos que se sucederam, você encontrou sossego voltando ao Condado de Monaghan, finalizou o segundo e terceiro volume dos Contos de Winverlen, e apesar destes não terem replicado o mesmo sucesso do primeiro livro, lhe trouxeram dinheiro suficiente para um sustento confortável. Às vezes você ainda pensa em Inishmore, a ilha que sua mãe abandonou sem nunca ter lhe contado o motivo, e que anos mais tarde você veio a fazer o mesmo — talvez o certo seja realmente deixar aquela pequena ilha esquecida e indetectada, esquecida no tempo tal como os seus moradores. Em menos de uma semana, você vivenciou perigos que nunca passou ou haverá de passar em seu futuro, e no conforto de sua casa, uma questão repousa em sua cabeça: será que realmente havia uma sereia vivendo nas profundezas daquelas águas?</p>
			`,
			choices: [
				{
					choice: "Créditos",
					destination: 'creditos'
				},
			]
		},
		levantarCorrer: {
			story: `
			<p>Em um último uso da adrenalina que ainda corre por suas veias, você se levanta com dificuldade. Enquanto se levanta, não consegue evitar e acaba olhando para a gravidade do ferimento em sua perna. A bala ainda está alojada ali, e o volume assustador de sangue que escorre abaixo de seu joelho enfim o desestabiliza. Você desmaia.</p>
			<p>Depois de seu desmaio, Fionn se dirige até o vilarejo, convicto de que você fugiu para lá. Nenhum morador parece saber o seu paradeiro, e ainda que o pescador, em um primeiro momento, imagine que isso seja um ato de resistência e alguém tenha lhe dado abrigo, ele não demora a perceber que não há nenhum rastro de sangue ao chão. Os moradores da ilha ficam preocupados, se reúnem para te procurar, e após cerca de três horas finalmente te encontram: jogado em meio a uma poça de sangue, um cadáver morto por hemorragia. “Por quê diabos ele não gritou por socorro?”, verbaliza o padeiro.</p>
			`,
			choices: [
				{
					choice: "Créditos",
					destination: 'creditos'
				},
			]
		},
		apontarDireção: {
			story: `
			<p>Com uma expressão de espanto, você se levanta a aponta para a direção em que viu algo se movendo. Por estar focado nas histórias que lhe contava e também por conta de problemas de visão causados pela idade avançada, Fionn não havia notado nada de peculiar nas águas, e nem notaria, não fosse o seu aviso. Rapidamente, o idoso conduz o barco na direção daquela intrigante figura que agora começava a ficar cada vez mais próxima. Os seus olhos de romancista jamais poderiam imaginar uma figura tão maravilhosa. De fato, Fionn estava certo sobre a existência de uma sereia em Inishmore, e você não poderia estar menos encantado com aquele ser deslumbrante: uma atraente mulher com longos e cacheados cabelos ruivos, e, ao mesmo tempo, uma criatura mitológica com escamas espalhadas pelas curvas de seu corpo e brânquias visíveis em seu pescoço. A mulher olha em sua direção, abre os lábios com graciosidade, e é brutalmente perfurada por um arpão que a atinge em seu seio esquerdo. Uma expressão de pavor se imprime em sua face. Agora, a obsessão de Fionn pela sereia chegava ao fim, e o velho pescador lhe agradece com um caloroso abraço, orgulhoso e desacreditado de seu êxito em assassinar a criatura antes mesmo de experimentar os supostos efeitos de seu canto hipnotizante. O sangue da sereia se espalha pelas águas, tendo o mar como testemunha.</p>
			<p>Nas semanas que se sucederam, você e Fionn decidiram deixar a ilha. Fionn McCormick finalmente apresentou ao mundo o cadáver daquela espécie nunca antes observada, provou a todos que nunca esteve louco durante o tempo em que viveu naquela ilha isolada, e foi laureado pela comunidade científica internacional em seus últimos anos de vida. Quanto a você, o trauma por ter denunciado o paradeiro da criatura ao pescador segue lhe assombrando. Naquela fatídica semana, você percebeu que não conseguiria mais dar continuidade aos Contos de Winverlen, e ciente de que a morte lhe acompanharia onde quer que você estivesse, optou por retornar à sua cidade natal. Sozinho, tal como as injustiças da vida lhe anteciparam ao longo de todos esses anos, você leva a vida como colunista em um pequeno jornal do Condado de Monaghan, decidido a viver um dia após o outro e obrigado a conviver com o fardo indissociável da culpa até o fim de seus amargos dias.</p>
			`,
			choices: [
				{
					choice: "Créditos",
					destination: 'creditos'
				},
			]
		},
		esperarFim: {
			story: `
			<p>Antes que Fionn perceba que você está olhando fixamente para um ponto do horizonte, você prontamente disfarça a sua expressão de espanto. Algumas horas e poucos peixes depois, a hora do almoço se aproxima, e o barco retorna à ilha. Através de gestos corporais de fácil compreensão, você agradece a Fionn pela companhia e se despede dele. No próximo dia, você está decidido a acordar mais cedo do que de costume e retornar de barco até o local em que avistou a misteriosa criatura se movendo.</p>
			<p>Na manhã seguinte, você empurra o pequeno barco até o mar, e assim consegue deixar a ilha discretamente, tomando cuidado a cada movimento para não correr o risco de acordar o vizinho antes de sua saída. De volta ao mesmo ponto do mar em que você e Fionn estiveram no dia anterior, o sol já desponta no horizonte, e próximo a ele, algo parece se mover. Prontamente, você conduz o barco na direção da intrigante figura que acaba de avistar. Conforme vai se aproximando, consegue perceber melhor a natureza fantástica daquela figura: uma atraente mulher com longos e cacheados cabelos ruivos, e, ao mesmo tempo, uma criatura mitológica com escamas espalhadas pelas curvas de seu corpo e brânquias visíveis em seu pescoço. Nem mesmo sua experiência como romancista poderia prepará-lo para descrever algo tão belo e tão exótico. Com ares de sedução, a sereia abre seus lábios, puxa fôlego e parece cantar algum tipo de canção. Você continua deslumbrado, olhando fixamente nos olhos dela, que agora parecem tomados por surpresa — aparentemente, as lendas sobre os cantos hipnotizantes das sereias eram reais, e naquele momento a sua surdez profunda bilateral agia em seu favor, impedindo que o encanto surtisse qualquer efeito. Confusa ao perceber que você não havia se jogado às águas do mar, a sereia mergulha e foge, com medo de que algo pudesse acontecer a ela.</p>
			`,
			choices: [
				{
					choice: "Seguir a sereia de barco",
					destination: 'seguirSereia'
				},
				{
					choice: "Voltar à ilha",
					destination: 'voltarIlha'
				},	
			]
		},
		seguirSereia: {
			story: `
			<p>Você rapidamente se propõe a seguir os rastros do nado daquele ser inexplicável, afinal, seria tolice contar com a sorte de encontrá-la outras vezes no futuro. Aquela poderia ser a inspiração perfeita para enfim dar continuidade aos Contos de Winverlen, e, além do mais, era seu dever encontrar um meio de alertar a sereia sobre a obsessão que o velho pescador nutria com relação a ela. Alguns minutos se passam, e você percebe que perdeu a sereia de vista. Como se isso não bastasse, você também está completamente desorientado, sem saber retornar à ilha.</p>
			<p>Perdido e exausto após ter ido tão longe sem se dar conta disso, você percebe que não deveria ter seguido a sereia, que se sentia ameaçada. Infelizmente, o arrependimento não irá lhe trazer de volta à ilha, e quanto mais as horas avançam, mais você tem a certeza de que as águas de Inishmore realmente são um fenômeno inexplicável, visto que os dias passam cada vez mais rápido, sua fome começa a ficar incontrolável, e mesmo que você tente remar, é impossível chegar a algum lugar. Sem forças e com insolação, sua última lembrança é avistar a bela sereia por uma última vez, o observando ao longe, com medo, e sendo a única testemunha de seu último suspiro.</p>
			`,
			choices: [
				{
					choice: "Créditos",
					destination: 'creditos'
				},
			]
		},
		voltarIlha: {
			story: `
			<p>Ainda que você queira muito ter seguido a sereia, pois receia não conseguir mais encontrá-la, você também compreende que não seria certo persegui-la, visto que ela poderia se sentir ameaçada. De volta à sua casa na ilha, você enfim começa a escrever o segundo volume dos Contos de Winverlen. Seria impossível não se sentir inspirado após aquele encontro diferente de tudo que você pudesse imaginar vivenciar. Nos próximos dias e semanas, você repete a mesma rotina, se encontrando no mesmo local e horário com a encantadora sereia, que agora já não o teme mais, e demonstra curiosidade para entender como pode haver um homem imune ao canto dela. Quando ela finalmente compreende a sua deficiência auditiva, vocês percebem que existem barreiras para se comunicar, visto que ela não compreende a ferramenta de voz de seu celular e tampouco sabe ler. Entretanto, diferentemente da maioria das pessoas que já passaram pela sua vida, ela está disposta a aprender a língua de sinais irlandesa. Dessa forma, seus encontros tornam-se trocas culturais, onde ela aprende a se comunicar por meio de sinalizações, e você pode encontrar inspiração para dar continuidade ao seu livro, que a cada noite tem mais páginas escritas. Agora que existe uma intimidade entre você e a sereia, ou melhor dizendo, Aoife, nome que fora escolhido por ela, a sua única preocupação é ser seguido por Fionn. Após duas semanas realizando a mesma rotina às escondidas, o inevitável ocorre, e você é descoberto por Fionn. Felizmente, Aoife mergulha antes de ser avistada pelo idoso que, confuso e desconfiado, lhe cobra explicações.</p>
			`,
			choices: [
				{
					choice: "Sinalizar para que Aoife fique alerta",
					destination: 'sinalizarAoife'
				},
			]
		},
		sinalizarAoife: {
			story: `
			<p>Discretamente, você passa uma de suas mãos nas águas do mar, para que Aoife perceba sua intenção em passar um recado. Fionn não percebe essa atitude, então, você puxa o celular de seu bolso, e com auxílio da ferramenta de voz, explica que vai ao mar toda manhã puramente em busca de inspiração para escrever o seu novo livro. Pela expressão no rosto de Fionn, ele parece não acreditar nessa resposta. Em um lampejo de ousadia, você expõe que é muito trabalhoso ter de traduzir todas as suas falas para uma ferramenta de voz, e que se realmente há o desejo em se comunicar com você, seria muito mais vantajoso que Fionn se disponibilizasse a aprender o básico da língua de sinais.</p>
			<p>Sua resposta soa como uma ofensa, e em uma expressão enraivecida, o velho pescador retruca dizendo que não tem o menor interesse em ter alguém para conversar, basta que você deixe ele e “as águas dele” em paz. Você finge compreender a indignação, quando na verdade só sabe que é inútil tentar discutir com alguém tão ignorante. Antes de encerrar a conversa, tenta ensinar uma única sinalização ao idoso, demonstrando com suas mãos e pedindo para que ele imite o mesmo gesto. A contragosto, ele repete os gestos e pergunta o que aquilo significa. “Morte”, você responde, enquanto Fionn, distraído, não percebe que Aoife estava logo atrás dele. Com um abraço, ela o puxa para as águas, e não há tempo de reação para que Fionn pudesse pegar sua espingarda ou qualquer outro aparato para se defender. Finalmente, Aoife estava livre para nadar pelas águas de Inishmore sem medo de ser morta pelo pescador que a caçou durante tantos anos. E por algum motivo, você não demonstra remorso em ter colaborado para o assassinato que acabara de ocorrer. No fundo, você sabe que aquela foi a melhor atitude a se tomar, e se despedindo de Aoife pela última vez, volta à sua casa e se despede de Inishmore no dia seguinte, com o segundo volume dos Contos de Winverlen recém-completado e ciente de ter vivido experiências inesquecíveis.</p>
			`,
			choices: [
				{
					choice: "Créditos",
					destination: 'creditos'
				},
			]
		},
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
