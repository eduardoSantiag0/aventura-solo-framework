var story;

var cont = 0;

var instrucoes = false;

var creditos = false;

var master = false;

function getStory () {
	return{

	currentScene: "dia_1", 
	dia_1: {
		title: "Primeiro Dia",
		image: "img/cabecalho__Primeira_Viagem.gif",
		story: "<h3>É o seu primeiro dia na profissão de faxineiro.</h3><h3>Você treinou durante um dia para não fazer nada errado. Esfregar o chão e espanar o pó não é uma tarefa tão simples assim, você precisa colocar a medida certa de sabão na água para não deixar o chão manchado, e não pode espanar o pó com muita força, senão o pó apenas levanta e volta depois de alguns minutos.</h3><h3>Na sua ficha de personagem constam as Habilidades Psíquicas; você tem a Habilidade Profissão [faxineiro] em nível 1. Isso significa que você sabe utilizar os materiais corretos da maneira correta, como determinar a melhor maneira de se limpar um escritório, para não utilizar polidor de móveis no carpete.</h3><h3>Apesar de estar anotada em Habilidades Psíquicas, essa Habilidade poderia ser testada junto com o Atributo Físico ao invés do Atributo Inteligência, pois na maioria das vezes, o que conta é o trabalho braçal, o quão rápido você consegue esfregar o chão. Limpeza não é moleza não...</h3><h3 > Seu nome foi plantado no banco de dados da 'Limpazzio Faxinas' pelos hackers da 'Gato Invisível'; e depois de outras alterações neste banco de dados, aqui está você, vestindo o macacão azul padrão, dentro do furgão da Limpazzio Faxinas, junto com outros quatro faxineiros que seguem desanimados para o 'Torre Azul'.</h3><h3>O furgão para na frente do edifício. Você ajuda seus colegas a descarregarem os baldes, esfregões e demais equipamentos.</h3><h3>O 'Torre Azul' é um prédio que ocupa destaque no centro da cidade, quarenta andares revestidos de grossas paredes de vidro azulado.</h3><h3>Já passam das 22h, todos os andares estão com as luzes apagadas, com exceção do primeiro e do último.</h3><h3>Todos os seus inquilinos já partiram de volta para as suas casas, depois de mais um dia de trabalho nos seus escritórios.</h4><h3>Ah, sim; os seguranças permanecem no prédio. Segundo o relatório feito pelo serviço de batedores da 'Gato Invisível', são dois no balcão da portaria, outros dois na sala de vídeo, que fica no segundo andar, e um segurança que fica circulando pelos andares e que reveza a posição com os colegas da sala de vídeo e do balcão. Todos vestindo o uniforme de segurança do 'Torre Azul', com quepe, radiocomunicador e pistola automática.</h3><h3>Prestou atenção neste detalhe? 'Pistola automática', todos os cinco seguranças. Lembre-se disso antes de tomar alguma atitude precipitada, você é um sujeito pacífico, olhe nas suas características psíquicas.</h3><h3>Não, você não pode mudar suas características psíquicas dessa vez. Seja o seu personagem e comporte-se como um cara pacífico.</h3><h3>Voltando ao 'Torre Azul'; um dos seguranças está abrindo a porta para vocês, ele veio do balcão redondo que está no centro do salão térreo do edifício, antes das portas dos quatro elevadores e da escada. O furgão da 'Limpazzio' foi embora, e só voltará para pegar vocês às 7h.</h3><h3>Vocês entram no luxuoso saguão do edifício, com pisos e paredes com imitações de mármore levemente azulado. Examinando alguns locais estratégicos rapidamente, você consegue localizar duas minicâmeras de vídeo (agradeça esse feito à sua Habilidade Psíquica Hacker [sistemas de segurança] nível 1; nem precisou de teste para perceber).</h3><h3>Os faxineiros cumprimentam os seguranças, se tratando pelo nome, eles já devem se conhecer, mas mesmo assim os faxineiros entregam seus crachás para os seguranças.</h3><h3>Você faz um aceno de cabeça e apresenta seu crachá também. O segurança mais jovem, que aguardava vocês, sentado atrás do balcão, passa os crachás por uma leitora ótica e confirma as informações em um teclado. Ele devolve os crachás, um a um, mas demora mais tempo com o seu crachá, olhando-o e olhando para você, provavelmente comparando com a sua foto no crachá.</h3><h3>O nome que está no crachá não é o seu nome verdadeiro, mas a foto é sua.</h3><h3>Finalmente, ele decide baixar a vista para passar o seu crachá pela leitora e conferir os seus dados no computador.</h3><h3>Ele não está olhando mais para você, e o outro segurança que está de pé, de costas, ao seu lado, conversando com um faxineiro. Você tem grandes chances de roubar a pistola que está no coldre deste segurança e render o segurança que está sentado.</h3>",
		choices: [
	 	{
			choice: "Roubar a Arma",
			destination: 'roubarArma'
	 	},
		{
			choice: "Aguardar a Checagem de Informações",
			destination: 'aguardarChecagem'
	 	}
	 	]
	},

	roubarArma: {
		title: "Roubar a Arma do Segurança",
		story: "<h3>Cara, por que você tentou fazer isso? Você quer saber o que aconteceu quando você tentou roubar a arma de um segurança e apontou para o outro? É claro que aconteceu o óbvio: Surgiu outro segurança pela escada, que ficou apontando uma arma para você enquanto você ameaçava os outros dois seguranças. Em menos de cinco minutos a polícia te cercou no local. FIM DE JOGO para você.</h3><h3>Tudo bem que eu comecei a contar a história de uma maneira meio diferente, sem contar os detalhes do seu personagem nem da sua missão, eu sei também que dava para desconfiar que o seu personagem não era um simples faxineiro, mas sim, um espião se infiltrando, mas isso não era motivo para você tomar uma atitude precipitada dessas.</h3><h3>Quando você joga uma partida de RPG, você tem que agir como se você fosse o seu personagem, imaginando cada situação com coerência, e não tomando atitudes inconsequentes, como alguém que está jogando um videogame e decide atirar em tudo só para ver o que acontece...</h3><h3>RPG não é videogame. Se você agir sem sentir a realidade em uma aventura de RPG, você vai estragar a diversão do cara que está contando a história, dos seus colegas de jogo e, até mesmo, a sua diversão (você deixou de participar de uma tensa aventura de espionagem só para tentar fazer uma cena de tiroteio inconsequente no saguão do edifício).</h3><h3>Espero que você tenha entendido o recado; se você quiser se divertir em uma partida de RPG, você precisa se dedicar, senão..., que dica eu posso te dar?... Vai assistir novela; novela tem final feliz...</h3><h3>Mas se você quer colocar a cabeça para funcionar e sentir as emoções que a sua imaginação pode lhe proporcionar, concentre-se no personagem, e tenha juízo dessa vez, hein!</h3>",
		choices: [
	 	{
			choice: "Começar Novamente",
			destination: 'dia_1'
	 	}
	 	]
	},

	aguardarChecagem: {
		title: "Aguardar a Checagem de Informações",
		story: "<h3>O segurança lhe devolve o crachá perguntando se era o seu primeiro dia. Você confirma e ele te deseja um bom trabalho.</h3><h3>A porta do elevador se abre, e seus colegas começam a entrar; você segue para o elevador enquanto retribui o cumprimento do segurança e acena para o outro, que já estava se sentando e pegando o caderno de esportes do jornal.</h3><h3>Ao passar pela porta do elevador, você percebe, entalhados no batente de madeira, alguns sensores.</h3><h3>Você nem perde muito tempo tentando identificá-los. Você já sabe para que servem.</h3><h3>No mapa que você estudou sobre esse edifício esses sensores apareciam nos batentes dos elevadores e da escada no andar térreo.</h3><h3>Esses sensores são o motivo pelo qual você está aqui agora.</h3><h3>Alguém deve estar traindo o patrão, pois algo muito caro e muito pequeno está sendo roubado.</h3><h3>E apesar de muito pequeno, este objeto pode ser facilmente detectado pelos sensores do andar térreo.</h3><h3>E se esses sensores dispararem, todas as saídas do prédio serão lacradas imediatamente: a entrada térrea e a saída para a cobertura do prédio.</h3><h3>O prédio não tem janelas, a ventilação e refrigeração de ar é feita por uma enorme tubulação central que conta com vários sensores de movimento que não puderam ser mapeados.</h3><h3>O tal objeto (que você suspeita ser um chip de controle de mísseis) foi escondido dentro de uma caixinha de doces equipada com um transmissor FM de baixo alcance.</h3><h3>Essa caixinha foi jogada em um dos cestos de lixo do 32º andar.</h3><h3>A sua missão é utilizar um walkman na frequência da caixinha para localizar o cesto de lixo com o 'doce', pegar a caixinha, e fugir pela cobertura.</h3><h3>Uma equipe de batedores da 'Gato Invisível' (provavelmente disfarçados de antenistas, segundo uma conversa paralela que você escutou, quando recebeu a missão) esteve no 'Torre Azul' durante a manhã conseguiu uma cópia da chave das escadas para a cobertura (é esta a chave que está com você, olhe na lista de <h3>Equipamentos da sua Ficha de Personagem) e escondeu um paraquedas na calha norte do edifício.</h3><h3>Vestido o paraquedas, você pulará sobre um estacionamento de três andares que fica ao lado do 'Torre Azul'.</h3><h3>No segundo andar deste estacionamento, estará um carro de passeio verde escuro, com a agente GI-108 ao volante, uma agente fixa da 'Gato Invisível' que você já conhece. O porta-malas desse carro estará destrancado, você deverá entrar furtivamente neste porta-malas e apreciar a viagem.</h3><h3>Você já trabalhou antes com a 'Gato Invisível', eles são competentes no que fazem, e nunca falharam com um agente, mesmo que mercenário; a não ser, é claro, que você seja capturado. Neste caso você vai estar por conta própria. É por isso que eles não contam muitos detalhes sobre as suas missões.</h3><h3>A porta do elevador se abre, os faxineiros se dividem, uma dupla fará a limpeza úmida do piso dos corredores. Os outros três seguirão na frente varrendo, espanando e recolhendo o lixo dos cestos, para levar tudo para baixo.</h3><h3>Começaram os problemas: Você foi escalado para fazer parte da limpeza úmida.</h3><h3>Não que você não saiba manejar o esfregão muito bem, o problema é que a outra equipe descerá antes recolhendo o lixo, e, portanto, quando você chegar no 32º os cestos de lixo estarão vazios...</h3><h3>E agora? Você vai tentar resolver a situação com alguma conversa ou vai tentar evitar a conversa com alguma situação?</h3>",
		choices: [
	 	{
			choice: "Tentar fazer parte da Equipe de Faxineiros",
			destination: 'equipeFaxineiros'
		},
		{
			choice: "Criar Situação para checar o Lixo",
			destination: 'criarSituacaoLixo'
		}
	 	]
	},

	equipeFaxineiros: {
		title: "Tentar fazer parte da Equipe de Faxineiros",
		story: "<h3>Você chega até o senhor de bigodes que, apesar de não ocupar nenhum cargo de chefia, está organizando as funções de todos na faxina.</h3><h3>E parece que ele já tem alguma experiência nisso, pois todos seguiram suas ordens como se já estivessem acostumados com suas funções.</h3><h3>Você tenta achar um bom argumento e...</h3><h3>Em uma situação normal de jogo, você deveria representar o personagem apresentando seus argumentos para o chefe. O mestre-de-jogo julgaria se as suas palavras atingiriam ou não o seu objetivo; mas nessa situação, existem dois motivos que complicam essa sua argumentação. O primeiro, e mais óbvio, é o fato de que eu não tenho como prever o pensamento de todos os leitores destas páginas e escrevê-las como opções. O segundo motivo, que poderá ocorrer em uma mesa de jogo normal também, é o fato de que, provavelmente, o personagem sabe mais de faxina do que você, jogador.</h3><h3>É muito complicado opinar sobre um assunto que você não conhece, mas isso será necessário algumas vezes em um jogo de RPG.</h3><h3>Existe uma solução interessante para resolver isso. Se você, mestre-de-jogo, julgar que o personagem pode conhecer algum bom argumento específico sobre o assunto, mas o jogador não possui conhecimentos suficientes sobre esse assunto (imagine um personagem com a Habilidade Psíquica Medicina sendo utilizado por um jogador de 15 anos), você pode sugerir um Teste de Inteligência do personagem.</h3><h3>Então vamos combinar o seguinte para resolver esta cena: você poderá optar por questionar a autoridade do faxineiro-chefe, mas se você quiser tentar um bom argumento, seu personagem fará um teste de Inteligência.</h3>",
		choices: [
	 	{
			choice: "Questionar a autoridade do Faxineiro-Chefe",
			destination: 'questionarAutoridade'
		},
		{
			choice: "Tentar um bom Argumento",
			destination: 'tentarArgumento'
		}
	 	]
	},

	criarSituacaoLixo: {
		title: "Criar Situação para checar o Lixo do 32º Andar",
		story: "<h3>Esfrega, esfrega, molha, torce, continua esfregando e esfregando. O 32º andar está chegando...</h3><h3>Você está sendo o mais rápido possível para não deixar a equipe de limpeza seca não se afastar muito, algumas vezes você conseguiu terminar, descer para o próximo andar e eles ainda estavam terminando o trabalho deles, mas a maioria das lixeiras já tinha sido recolhida no saco de lixo pelo faxineiro-chefe.</h3><h3>Você não poderia deixar isso acontecer no 32º andar.</h3><h3>Você tem que tomar alguma providência, por mais estúpida que seja, você não pode deixar esse 'doce' escapar! Muita grana está envolvida nisso para você, e muita grana foi gasta para você estar aqui neste momento. Se você falhar, adeus à carreira de mercenário, e dependendo de quem estava interessado nesse 'doce', você poderá até ser o alvo de alguma vingança...</h3><h3>E então? O que vai ser?</h3>",
		choices: [
	 	{
			choice: "Simular Ataque Epilético",
			destination: 'simularAtaque'
		},
		{
			choice: "Deixar cair as pilhas pela Escadaria",
			destination: 'cairPilhas'
		},
		{
			choice: "Pedir para levar o Saco de Lixo pra Baixo",
			destination: 'pedirSaco'
		},
		{
			choice: "Ir ao Banheiro e dar um 'Perdido'",
			destination: 'darPerdido'
		}
	 	]
	},

	questionarAutoridade: {
		title: "Questionar a autoridade do Faxineiro-Chefe",
		story: "<h3>Falando educadamente, você explica para o faxineiro que discorda dessa divisão de tarefas, pois o potencial de cada um só é conhecido por cada um, e, portanto, ele deveria dar uma chance para cada um desenvolver esse potencial escolhendo uma função, podendo ser feita, inclusive, uma votação, ou então, um revezamento de funções...</h3><h3>Depois de te escutar em silêncio por um minuto, o faxineiro aponta para o balde e diz:</h3><h3>- Encha o balde, pegue o esfregão e feche a boca.</h3><h3>E assim que termina a frase, ele vira as costas para você e começa a esvaziar um dos cestos de lixo em um saco plástico.</h3><h3>Parece que você não conquistou a simpatia dele com seu discurso democrático...</h3>",
		choices: [
		{
			choice: "Começar Novamente",
			destination: "dia_1"
		}
		]
	},

	tentarArgumento: {
		title: "Tentar um bom Argumento",
		story: "<h3>Vamos fazer um teste de atributo com a sua Inteligência, como o assunto é Profissão [faxineiro], e você tem essa habilidade em nível 1, você terá um bônus de 1 para tentar achar um bom argumento.</h3><h3>Você tem 6 de Inteligência mais bônus de +1, você fará um teste de atributo contra 7.</h3><h3>Lembrando que em um teste de atributo, você está disputando com você mesmo. A comparação será com sua própria capacidade, que no caso, é 7.</h3>",
		choices: [
		{
				choice: "Rolar Dados",
				destination: "rolarDados01"
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

	sucessoRolar01: {
		title: "Sucesso no Teste de Inteligência",
		story: "<h3>Você explica para o faxineiro-chefe que está um pouco receoso com esse tipo de piso, você nunca trabalhou com esse tipo antes e você não tem muita certeza da quantidade de sabão a ser utilizada. Você explica que não quer começar no emprego deixando marcas de esfregão no chão, e pede para trocar de lugar com alguém da limpeza seca, que você diz saber fazer muito bem.</h3><h3>Para fechar o pedido, você acrescenta que pretende adiantar o máximo possível a sua parte na limpeza seca para depois voltar e acompanhar o pessoal da limpeza úmida e aprender a medida certa e o modo correto de passar o esfregão naquele tipo de piso.</h3><h3>Você aproveita que ele está coçando o bigode pensando no seu pedido e pede para que ele lhe dê essa chance, pois você precisa muito desse emprego, e não se importa de fazer o seu serviço e parte do de outro, contanto que deem a chance de aprender a fazer um serviço bem feito.</h3><h3>Com um olhar paternal, o faxineiro-chefe lhe entrega a vassoura e diz:</h3><h3>- Rapaz, se todos tivessem a sua humildade, não teria tanta gente fazendo besteira nesse mundo...</h3><h3>SIIIIMMMMM!!! Você conseguiu cativar o velho!!!</h3><h3>Hora de trabalhar, você coloca o walkman, sintoniza na frequência combinada e começa a varrer com dedicação.</h3><h3>No fone de ouvido, apenas estática. Tudo bem, avisaram que o transmissor era de curto alcance para não chamar a atenção, provavelmente, apenas no próprio andar, ao lado do cesto você escutará alguma coisa.</h3><h3>Você varre rapidamente, e, algumas vezes, ajuda o chefe a esvaziar as lixeiras, para não despertar suspeitas quando você fizer isso no 32º andar.</h3><h3>Os andares vão sendo limpos, até que, finalmente, vocês estão no 33º andar.</h3><h3>Você agiliza a sua parte e, assim que termina o seu lado do corredor, você avisa:</h3><h3>- Olha, eu vou adiantar o andar debaixo, assim que o senhor encher o saco de lixo, o senhor me avisa que eu levo lá para baixo.</h3><h3>Com a aprovação dele, você desce para o 32º andar.</h3><h3>Você sai da porta da escada, uma lixeira está ao seu lado, nenhuma interferência no walkman.</h3><h3>Existem outras duas lixeiras no andar: uma está perto dos elevadores e a outra está no final do corredor.</h3><h3>Você anda pelo corredor e um chiadinho sutil é percebido nos fones de ouvido.</h3><h3>Você passa pela lixeira dos elevadores e o chiadinho começa a diminuir. Era aquela!</h3><h3>Sem voltar para trás, você começa a varrer, e caminha lentamente na direção dos elevadores. O chiadinho volta a aumentar.</h3><h3>Varrendo, você chega até a lixeira, dá uma espiada e... droga, o que mais pode acontecer de errado hoje, como é que você não tinha pensado antes que isso poderia acontecer.</h3><h3>A cesta de lixo está cheia até a metade, e você não consegue ver nada que se pareça com uma caixa de doces aí dentro.</h3><h3>Vasculhar o lixo não seria problema algum se você estivesse sozinho no corredor.</h3><h3>Seus colegas não chegaram ainda, mas você sabe que não são eles o problema.</h3><h3>O problema é a câmera no teto do corredor, você já tinha percebido, desde o primeiro andar que você varreu. O elevador tinha uma e todo andar de escadas também...</h3><h3>Ela está bem no meio do corredor, justo onde está o cesto de lixo... E para piorar mais um pouco, as câmeras são envolvidas por uma cúpula de vidro escurecido, isso significa que você não consegue ver para onde a câmera está apontada, você nem mesmo tem como saber se existe alguma câmera lá dentro.</h3><h3>Você acredita que em um minuto, os seus colegas faxineiros estarão descendo para esse andar. Você tem que pensar rápido; mais do que isso, você tem que agir rápido!</h3><h3>O que você vai fazer?</h3>",
		choices: [
	 	{
			choice: "Arrebentar a Câmera no Teto",
			destination: 'arrebentarCamera'
		},
		{
			choice: "Dar uma Vassourada na Lixeira",
			destination: 'darVassourada'
		},
		{
			choice: "Vasculhar a Lixeira",
			destination: 'vasculharLixeira'
		},
		{
			choice: "Esperar o Pessoal Chegar",
			destination: 'esperarPessoal'
		}
	 	]
	},

	falhaRolar01: {
		title: "Falha no Teste de Inteligência",
		story: "<h3>Você começa a falar algo sobre o problema dos seus sapatos escorregarem muito no chão molhado, gagueja um pouco ao tentar explicar uma certa alergia à sabão que você tem e é interrompido pelo faxineiro-chefe dizendo:</h3><h3>- Encha o balde, pegue o esfregão e feche a boca.</h3><h3>E assim que termina a frase, ele vira as costas para você e começa a esvaziar um dos cestos de lixo em um saco plástico.</h3><h3>É, não deu...</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'criarSituacaoLixo'
		}
	 	]
	},

	simularAtaque: {
		title: "Simular Ataque Epilético",
		story: "<h3 >Você se joga no chão e começa a tremer, seu colega de esfregão chega correndo e gritando por ajuda, sem saber o que fazer. Em menos de um minuto, os outros faxineiros estão ao seu redor tentando te segurar.</h3><h3>Dois seguranças também chegam pelo elevador, e utilizam as técnicas certas para te imobilizar.</h3><h3>Você se cansa de se debater e tenta explicar que já está melhor, mas, não adianta. Em alguns minutos os paramédicos chegam e você vai de ambulância para o hospital...</h3><h3>Sua missão? Você quer saber o que aconteceu com sua missão? Seu contratante também te fará essa pergunta...</h3><h3>Você achou mesmo que esta estratégia funcionaria?...</h3><h3>Não, é claro que não funcionou...</h3>",
		choices: [
		{
			choice: "Começar Novamente",
			destination: "dia_1"
		}
		]
	},

	cairPilhas: {
		title: "Deixar cair as pilhas pela Escadaria",
		story: "<h3>Enquanto troca de andar pelas escadas, você finge que checa as pilhas do seu walkman e deixa-as cair para fora do corrimão.</h3><h3 > Você desce procurando as pilhas, finge que não viu uma delas em um canto da escada e entra no 32º andar.</h3><h3>Os faxineiros já estavam lá, espanando, varrendo e recolhendo o lixo das lixeiras! Uma delas já havia sido esvaziada pelo faxineiro-chefe.</h3><h3>Com a desculpa de que estava procurando suas pilhas, você passeia pelo corredor, olhando as lixeiras.</h3><h3>Quer outras más notícias?</h3><h3>Aqui vai mais uma: A lixeira perto das escadas está quase vazia, e você não vê nenhum sinal da caixinha de doces lá. Já a lixeira próxima dos elevadores está cheia, existe a possibilidade de a caixinha estar lá, mas, existe uma câmera no teto e outros faxineiros ao seu lado, olhando para você com uma cara feia...</h3><h3>A pilha ter quicado por meio corredor e ter caído dentro da lixeira não seria uma boa desculpa para remexer o seu lixo.</h3><h3>Ah, sim, existe outro detalhe: A caixinha de doces pode já estar no saco de lixo, uma das lixeiras já foi esvaziada nele, mas você não tem como saber disso porque seu walkman está sem pilhas.</h3><h3>Calma, nem tudo está perdido. Olhe na sua Ficha de Personagem, nos Equipamentos, você tem pilhas extras!</h3><h3>Rapidamente você as coloca no walkman, que já está chiando, você está próximo do 'doce'.</h3><h3>Você olha na direção da lixeira mais próxima, a dos elevadores. Observa o faxineiro-chefe terminar de esvaziá-la no saco de lixo...</h3><h3>Ele passa por você, carregando o saco de lixo escuro, e rosna pelo bigode:</h3><h3>- Já achou suas pilhas. Volte ao trabalho.</h3><h3>E enquanto ele se afasta, o chiado vai diminuindo...</h3><h3>E agora?</h3>",
		choices: [
		{
			choice: "Pedir para levar o Saco de Lixo pra Baixo",
			destination: "pedirSaco"
		},
		{
			choice: "Roubar Saco de Lixo e Subir Correndo",
			destination: "roubarSaco"
		},
		{
			choice: "Deixar que ele Desça com o Saco de Lixo",
			destination: "deixarSaco"
		}
		]
	},

	pedirSaco: {
		title: "Pedir para levar o Saco de Lixo pra Baixo",
		story: "<h3>Eu não tenho como julgar se o faxineiro vai aceitar ou não esse seu pedido porque eu não tenho como escutar as palavras que você vai utilizar em seu pedido, então, nesta situação especial, vamos utilizar um teste de Inteligência de seu personagem para saber se ele foi atendido ou não.</h3><h3>Seu Atributo Inteligência é 6, vamos ver se você tem algum bônus aqui, que Habilidade que você poderia utilizar para fazer esse pedido? Não, não procure nas Habilidades Físicas, procure nas Psíquicas, vamos ver, você tem Atuação e Etiqueta, ambas poderiam ser utilizadas nessa situação, vamos utilizar a que tiver nível maior... Neste caso, ambas são nível 1, então, vamos somar +1 ao teste (não, você não pode acumular Habilidades para os testes).</h3><h3>Você tem um 7 para o teste, aliás, você teria um 7 para o teste. O problema é que o faxineiro-chefe não está gostando muito de suas atitudes, e esse pedido dificilmente será aceito por ele; penalidade de -2. Chegamos ao número 5 para o teste (6+1-2=5).</h3><h3>Lembrando que, apesar de uma outra pessoa estar envolvida neste teste, será um teste de atributo, ou seja, você deverá conseguir menos do que o limite nos 2D6.</h3><h3>Role os dados, se precisa conseguir 5 ou menos nos 2D6.</h3>",
		choices: [
		{
			choice: "Rolar Dados",
			destination: "rolarDados02"
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

	sucessoRolar02: {
		title: "Sucesso no Teste de Inteligência",
		story: "<h3>- Ok, rapaz, mas não fique enrolando lá embaixo.</h3><h3>Você conseguiu, com uma conversa de que quer ajudar para compensar o tempo que perdeu procurando as pilhas, você consegue a permissão para levar o saco de lixo.</h3><h3>O chiado está bem claro no fone de ouvido do walkman: O “doce” está dentro do saco.</h3><h3>Enquanto espera o elevador chegar, você já prevê outro problema: O saco é grande, está cheio de lixo, a caixinha de doces é pequena e você vai ter que encontrá-la dentro de um elevador antes que ele chegue até o andar térreo. Ah, sim: Existe uma câmera dentro do elevador.</h3><h3>Dentro do elevador, com a porta fechada e uma câmera no teto, você vai:</h3>",
		choices: [
		{
			choice: "Vasculhar no Saco de Lixo",
			destination: 'vasculharLixo'
		},
		{
			choice: "Deixar Saco de Lixo Cair",
			destination: 'deixarLixo'
		},
		{
			choice: "Ficar de 'Boa'",
			destination: 'guardarCaixinha'
		}
		]
	},

	falhaRolar02: {
		title: "Falha no Teste de Inteligência",
		story: "<h3>-Seu trabalho é no andar de cima.</h3><h3>Por esta resposta do faxineiro-chefe, parece que sua conversa de levar o saco de lixo para dar uma descansada nas pernas não convenceu.</h3><h3>E lá se vai o 'doce'.</h3><h3>Suas opções estão se esgotando...</h3><h3>O que mais você pode fazer?</h3>",
		choices: [
		{
			choice: "Tomar o Saco de Lixo",
			destination: 'roubarSaco'
		},
		{
			choice: "Esperar Oportunidade",
			destination: 'deixarSaco'
		}
		]
	},

	deixarSaco: {
		title: "Deixar que ele Desça com o Saco de Lixo",
		story: "<h3 >Você volta para as escadas, pensando no tipo de oportunidade que poderá surgir para você pegar o 'doce'.</h3><h3>Alguns minutos depois, enquanto você esfrega o chão, um alarme toca no prédio.</h3><h3>O 'doce' foi detectado pelos sensores quando o faxineiro-chefe passou pelo batente do elevador no andar térreo.</h3><h3>Fim da missão.</h3>",
		choices: [
		{
			choice: "Começar Novamente",
			destination: "dia_1"
		}
		]
	},

	deixarLixo: {
		title: "Deixar Saco de Lixo Cair no Elevador",
		story: "<h3>A porta do elevador se abre. Você ainda está terminando de recolher o lixo.</h3><h3>Os dois seguranças, por trás do balcão, olham para você com um ar de desprezo, não de surpresa. Parece que eles já sabiam o que tinha ocorrido dentro do elevador. O pessoal da sala de vídeo deve ter avisado pelo rádio...</h3><h3>Você limpa tudo, passa pelo balcão, coloca o saco de lixo junto com os outros perto da porta do saguão e volta para o elevador.</h3><h3>Fácil.</h3>",
		choices: [
		{
			choice: "Subir ao Último Andar",
			destination: "subirUltimo"
		}
		]
	},

	cairLixo: {
		title: "Deixar Saco de Lixo Cair",
		story: "<h3>Você deixa de apoiar o saco de lixo e a lei da gravidade se encarrega do resto...</h3><h3>O lixo se esparrama pelo chão do elevador, e você rapidamente começa a recolhê-lo e procurar pela caixinha.</h3><h3>Você precisaria de um Teste de Percepção, com Bônus pelo fato de a caixinha não ser tão pequena se comparada com o resto do lixo, pelo fato do lixo não ser tão emaranhado e pelo fato da lixeira onde estava o 'doce' ter sido a última a ser descarregada no saco de lixo.</h3><h3>Isso tudo já te daria um bônus de +3, e como você teria mais um Round para tentar achar esse 'doce' caso falhasse no primeiro, vamos agilizar o jogo: Você conseguiu achar a caixinha, igualzinha à da foto que estava no relatório; porém, o elevador já está parando.</h3><h3>Você vai:</h3>",
		choices: [
		{
			choice: "Guardar Caixinha dentro da Camisa",
			destination: "guardarCaixinha"
		},
		{
			choice: "Deixar cair a Caixinha no Canto",
			destination: "cairCanto"
		}
		]
	},

	darPerdido: {
		title: "Ir ao Banheiro e dar um 'Perdido'",
		story: "<h3>Pelo relatório, você já sabe que o 'Torre Azul' tem um banheiro público a cada 10 andares, mas mesmo assim, você pergunta a localização dos banheiros para o seu colega.</h3><h3>Ele explica e você vai para o 30º andar pelo elevador.</h3><h3>Representando o seu papel para as câmeras, você vai até o banheiro, volta, e sobe pelas escadas até o 32º andar.</h3><h3>Você sai da porta da escada, uma lixeira está ao seu lado, nenhuma interferência no walkman.</h3><h3>Existem outras duas lixeiras no andar: Uma está perto dos elevadores e a outra está no final do corredor.</h3><h3>Você anda pelo corredor e um chiadinho sutil é percebido nos fones de ouvido.</h3><h3>Você passa pela lixeira dos elevadores e o chiadinho começa a diminuir. Era aquela!</h3><h3>Você volta à lixeira, dá uma espiada e... droga, o que mais pode acontecer de errado hoje, como é que você não tinha pensado antes que isso poderia acontecer.</h3><h3>A cesta de lixo está cheia até a metade, e você não consegue ver nada que se pareça com uma caixa de doces aí dentro.</h3><h3>Vasculhar o lixo não seria problema algum se você estivesse sozinho no corredor.</h3><h3>Seus colegas não chegaram ainda, mas você sabe que não são eles o problema.</h3><h3>O problema é a câmera no teto do corredor, você já tinha percebido desde o primeiro andar que você esfregou. O elevador tinha uma e todo lance de escadas também...</h3><h3>Ela está bem no meio do corredor, justo onde está o cesto de lixo... E para piorar mais um pouco, as câmeras são envolvidas por uma cúpula de vidro escurecido, isso significa que você não consegue ver para onde a câmera está apontada, você nem mesmo tem como saber se existe alguma câmera lá dentro.</h3><h3>Você acredita que em um minuto, os seus colegas faxineiros estarão descendo para esse andar. Você tem que pensar rápido; mais do que isso, você tem que agir rápido!</h3><h3>O que você vai fazer?</h3>",
		choices: [
		{
			choice: "Vasculhar o Saco de Lixo",
			destination: 'vasculharLixo'
		},
		{
			choice: "Esperar Oportunidade",
			destination: 'esperarOportunidade'
		}
		]
	},

	arrebentarCamera: {
		title: "Arrebentar a Câmera no Teto",
		story: "<h3>Você quebra a câmera desferindo duas pancadas com o cabo de vassoura.</h3><h3>Em pouco tempo vasculhando, você acha o 'doce'.</h3><h3>Você esconde a caixinha dentro da camisa e sobe as escadas.</h3><h3>No último andar, você escuta a porta do elevador se abrindo quando você faz a última curva da escada.</h3><h3>Ao chegar na porta da cobertura, enquanto você pega a chave no bolso da calça...</h3><h3>- Parado ou eu atiro.</h3><h3>E você sabe que ele atiraria. O segurança está apontando uma arma automática para você na base da escadaria.</h3><h3>O tempo de você pegar a chave e abrir a porta ou o tempo de descer a escada até o segurança são tempo suficiente para que ele descarregue aquela arma em você.</h3><h3>Morrer ou se render não são opções que valham a pena para continuar essa aventura.</h3><h3>Fim da missão.</h3><h3>Melhor sorte da próxima vez.</h3>",
		choices: [
		{
				choice: "Começar Novamente",
				destination: "dia_1"
		}
		]
	},

	darVassourada: {
		title: "Dar uma Vassourada na Lixeira",
		story: "<h3>De costas para a lixeira, você varre com um pouco mais de força e a batida é inevitável, todo o lixo se esparrama pelo chão.</h3><h3>Fazendo uma cara de “desastrado e arrependido”, você começa a catar o lixo do chão, olhando com muita atenção para tudo o que pega.</h3><h3>Finalmente, a caixinha de doces, igual à foto do relatório. Aproveitando que está agachado, você a esconde dentro da camisa e continua catando o lixo.</h3><h3>Seus colegas chegam, você explica o acidente e continua o seu serviço.</h3><h3>Depois de algum tempo, você vai para as escadas naturalmente, como se fosse continuar o trabalho no andar inferior, mas ao invés de descer, você sobe até o último andar.</h3>",
		choices: [
		{
			choice: "Subir ao Último Andar",
			destination: "subirUltimo"
		}
		]
	},

	esperarOportunidade: {
		title: "Esperar Oportunidade",
		story: "<h3>Você volta pelo elevador e continua esfregando, pensando no tipo de oportunidade que poderá surgir para você pegar o 'doce'.</h3><h3>Alguns minutos depois, enquanto você esfrega o chão, um alarme toca no prédio.</h3><h3>O 'doce' foi detectado pelos sensores quando o faxineiro-chefe passou pelo batente do elevador no andar térreo.</h3><h3>Fim da missão.</h3><h3>Volte para o trecho 1 e faça escolhas melhores desta vez...</h3>",
		choices: [
		{
			choice: "Começar Novamente",
			destination: "dia_1"
		}
		]
	},

	esperarPessoal: {
		title: "Esperar o Pessoal Chegar",
		story: "<h3>Os seus colegas chegam para continuar a limpeza no 32º andar, e você continua varrendo.</h3><h3>A primeira coisa que o faxineiro-chefe faz é virar o conteúdo da lixeira dos elevadores no seu saco de lixo.</h3><h3>Conforme ele se afasta, o chiadinho no walkman vai diminuindo.</h3><h3>E agora?</h3>",
		choices: [
		{
			choice: "Pedir para levar o Saco de Lixo pra Baixo",
			destination: "pedirSaco"
		},
		{
			choice: "Roubar Saco de Lixo e Subir Correndo",
			destination: "roubarSaco"
		},
		{
			choice: "Deixar que ele Desça com o Saco de Lixo",
			destination: "deixarSaco"
		}
		]
	},

	roubarSaco: {
		title: "Roubar Saco de Lixo e Subir Correndo",
		story: "<h3>Vai ser fácil, o faxineiro-chefe não está preparado para essa tentativa, mas sempre existe a possibilidade dos reflexos dele funcionarem.</h3><h3>E, independentemente dos reflexos, ele está utilizando uma certa força para segurar esse saco. Para efeitos de teste, vamos fazer a conta sobre a metade do seu Físico.</h3><h3>Você se aproxima pelo lado dele e puxa o saco de lixo. Você precisará ganhar um Teste de Disputa envolvendo o Físico, você somará o seu Físico aos 2D6, e o faxineiro-chefe só terá metade do Físico dele para somar aos 2D6.</h3><h3>O seu oponente conseguiu um 8 nos 2D6, somado com seu 3 de metade do Físico, ele conseguiu um 11.</h3><h3>Agora é a sua vez, role os 2D6 e some com 6 (seu valor de Físico).</h3>",
		choices: [
		{
			choice: "Rolar Dados",
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

	sucessoRolar03: {
		title: "Sucesso no Teste de Disputa de Físico",
		story: "<h3>Com o saco de lixo nos braços, você ainda tem que subir 8 andares de escadas.</h3><h3>No meio do caminho, você dá uma parada para localizar o 'doce'.</h3><h3>Com a caixinha de doces localizada, você deixa o saco de lixo para trás.</h3><h3>Seu desempenho nas escadas melhora, mas, ainda assim, não é tão rápido quanto um elevador.</h3><h3>No último andar, você escuta a porta do elevador se abrindo quando você faz a última curva da escada.</h3><h3>Ao chegar na porta da cobertura, enquanto você pega a chave no bolso da calça...</h3><h3>- Parado ou eu atiro.</h3><h3>E você sabe que ele atiraria. O segurança está apontando uma arma automática para você na base da escadaria.</h3><h3>O tempo de você pegar a chave e abrir a porta ou o tempo de descer a escada até o segurança são tempo suficiente para que ele descarregue aquela arma em você.</h3><h3>Morrer ou se render não são opções que valham a pena para continuar essa aventura.</h3><h3>Fim da missão.</h3><h3>Melhor sorte da próxima vez.</h3>",
		choices: [
		{
			choice: "Começar Novamente",
			destination: 'dia_1'
		}
		]
	},

	falhaRolar03: {
		title: "Falha no Teste de Disputa de Físico",
		story: "<h3>Você puxa o saco de lixo com força, mas o faxineiro-chefe resiste. Quem não resiste é o saco de lixo...</h3><h3>O lixo se espalha pelo chão do corredor, e todos os olhares se voltam para você.</h3><h3>O ódio começa a brilhar no olhar do faxineiro-chefe, ele está furioso demais para conseguir falar alguma coisa.</h3><h3>Você aproveita esses segundos para retirar o fone do ouvido e falar, com cara de desentendido:</h3><h3>- Pô, o senhor não tinha dito que eu poderia levar o lixo lá para baixo? Por que o senhor ficou segurando.</h3><h3>Esta sua frase que destranca uma avalanche de ofensas do faxineiro-chefe sobre você e seu walkman, que ele ameaça arrancar de você.</h3><h3>Em menos de um minuto, um segurança aparece para tomar conhecimento dos fatos.</h3><h3>Você continua se fazendo de desentendido, achando que o faxineiro-chefe tinha deixado você levar o lixo, o que gera uma nova onda de fúria sobre você, dizendo que você está surdo com “essas coisas” no ouvido.</h3><h3>Depois de algum tempo, com o segurança acalmando os ânimos, você concorda em recolher o lixo sozinho, mas o faxineiro-chefe faz questão de que você não leve o saco de lixo até o térreo.</h3><h3>Com uma expressão de injustiça, você concorda com essa “punição”.</h3><h3>O segurança desce pelo elevador, e em poucos instantes você localiza a caixinha de doces, igualzinha à da foto do relatório.</h3><h3>Aproveitando a sua posição, agachado, de costas para a câmera de vídeo, você esconde o “doce” dentro da camisa e termina de recolher o lixo.</h3><h3>O faxineiro-chefe pega o saco de lixo e manda você subir e continuar seu serviço, sem descanso.</h3><h3>Ordens são ordens.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'subirUltimo'
		}
		]
	},

	subirUltimo: {
		title: "Subir ao Último Andar",
		story: "<h3>Com o 'doce' em segurança, quero dizer, o 'doce' está com você, mas você ainda não está em segurança.Você está com um uniforme de faxineiro subindo as escadas de um prédio cheio de vigilância interna e se comportando como se estivesse fazendo algo muito normal, como buscar um espanador esquecido no último andar.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'irCobertura'
		}
		]
	},

	irCobertura: {
		title: "Ir para a Cobertura",
		story: "<h3>Finalmente, a porta da cobertura. Você retira a chave do bolso, encaixa na fechadura, ela funciona: A porta está aberta.</h3><h3>Um vento frio está passando nesta altura. Apenas alguns prédios maiores e antenas estão ao seu redor. A cidade vista por cima.</h3><h3>Você segue as instruções, anda até a calha e, aliviado, você acha o paraquedas escondido em uma lona preta, conforme o combinado.</h3><h3>Em um minuto, você veste o paraquedas e se dirige para o lado do prédio onde está a garagem.</h3><h3>Apesar do vento e da curta distância do topo do prédio até a garagem, o salto não será muito difícil. Será apenas difícil...</h3><h3>Você olha pela borda do prédio, localiza a garagem, volta alguns passos, toma impulso e enquanto corre, escuta a porta da cobertura se abrindo.</h3><h3>Você não vai querer parar sua corrida para descobrir quem é, vai?</h3><h3>É, eu achei que não, por isso, eu nem vou colocar essa alternativa aqui.</h3><h3 > Você finaliza a corrida até o final do chão firme e salta com toda sua força.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'sucessoRolar04'
		}
		]
	},

	vasculharLixeira: {
		title: "Vasculhar Lixeira",
		story: "<h3>Você vasculha a lixeira e em pouco tempo encontra o 'doce', a caixinha é igual à da foto no relatório.</h3><h3>Ainda agachado ao lado da lixeira, você a esconde por dentro da camisa e vai para as escadas.</h3><h3>Agindo naturalmente, você não dá explicação alguma aos seus colegas de trabalho, age como se estivesse fazendo seu trabalho, indo buscar alguma coisa esquecida lá em cima, e continua subindo. Eles não têm motivo para desconfiar.</h3><h3>Finalmente, a porta da cobertura. Você retira a chave do bolso, encaixa na fechadura, ela funciona: A porta está aberta.</h3><h3>Um vento frio está passando nesta altura. Apenas alguns prédios maiores e antenas estão ao seu redor. A cidade vista por cima.</h3><h3>Você segue as instruções, anda até a calha e, aliviado, você acha o paraquedas escondido em uma lona preta, conforme o combinado.</h3><h3>Em um minuto, você veste o paraquedas e se dirige para o lado do prédio onde está a garagem.</h3><h3>Apesar do vento e da curta distância do topo do prédio até a garagem, o salto não será muito difícil. Será apenas difícil...</h3><h3>A porta da cobertura se abre atrás de você:</h3><h3>- Parado ou eu atiro!</h3><h3>É um dos seguranças, e pelo relatório, você sabe que ele vai atirar.</h3><h3>Ele está longe, uns 20 metros, e você está a poucos passos da borda do edifício...</h3><h3>Qual será a sua reação?</h3>",
		choices: [
		{
			choice: "Ficar Parado Esperando o Segurança",
			destination: 'esperarSeguranca'
		},
		{
			choice: "Arriscar Corrida pra Saltar",
			destination: 'arriscarCorrida'
		}
		]
	},

	vasculharLixo: {
		title: "Vasculhar o Saco de Lixo",
		story: "<h3>Você procura lixo adentro pela caixinha enquanto o elevador percorre os 32 andares até o Térreo.</h3><h3>O elevador é rápido, mas ainda assim, você terá 2 Rounds (10 segundos) para procurar o 'doce'.</h3><h3>Você precisaria de um Teste de Percepção, com bônus pelo fato de a caixinha não ser tão pequena se comparada com o resto do lixo, pelo fato do lixo não ser tão emaranhado e pelo fato da lixeira onde estava o 'doce' ter sido a última a ser descarregada no saco de lixo.</h3><h3>Isso tudo já te daria um Bônus de +3, e como você teria mais um Round para tentar achar esse 'doce' caso falhasse no primeiro, vamos agilizar o jogo: Você conseguiu achar a caixinha, igualzinha à da foto que estava no relatório.</h3><h3>O elevador já está desacelerando; você vai:</h3>",
		choices: [
		{
			choice: "Guardar Caixinha dentro da Camisa",
			destination: 'guardarCaixinha'
		},
		{
			choice: "Deixar cair a Caixinha no Canto",
			destination: 'cairCanto'
		}
		]
	},

	guardarCaixinha: {
		title: "Guardar Caixinha dentro da Camisa",
			story: "<h3>Assim que você sai do elevador, o alarme dispara, e os dois seguranças avançam na sua direção, um deles, com a mão na arma.</h3><h3>Sem muitas opções de fuga, você acaba encurralado no elevador, e em menos de 1 minuto, outro segurança chega com um detector e localiza o 'doce'.</h3><h3>Como você vai explicar isso para eles, não interessa mais para a 'Gato Invisível', pois sua missão já falhou.</h3><h3>É... Parece que você não prestou atenção em alguns detalhes da história e acabou se dando mal...</h3><h3>Mas tudo bem, essa aventura foi feita para que você possa aprender; pode errar quantas vezes você quiser você pode recomeçar.</h3>",
		choices: [
		{
			choice: "Jogar Novamente",
			destination: 'dia_1'
		}
		]
	},

	cairCanto: {
		title: "Deixar cair a Caixinha no Canto",
		story: "<h3>A porta do elevador se abre. Um dos seguranças já está te esperando.</h3><h3>Ele pergunta o que você estava procurando dentro do saco de lixo.</h3><h3>A câmera no teto do elevador; o pessoal da sala de vídeo passou a informação para ele...</h3><h3>Ah, essa é fácil; eu até vou dispensar seu personagem do teste de Inteligência para tentar se desculpar com o segurança.</h3><h3>Você explica que estava procurando algum cigarro pela metade, ou algum lápis que ainda pudesse ser utilizado; e como ele não tinha muitos motivos para desconfiar de você, ele deixa você passar.</h3><h3>Os outros sacos de lixo estão empilhados em um canto do saguão, perto da porta. Você começa a andar para lá, mas o segurança continua na frente do elevador; você olha para trás e percebe que ele está olhando para o interior do elevador em busca de algo suspeito...</h3><h3>Agora não é você quem faz o teste. Eu vou fazer um teste de Percepção para o segurança, enquanto ele olha o interior do elevador, para ver se ele acha aquela caixinha jogada lá no canto...</h3><h3>Você continua caminhando, passa pelo balcão onde está o outro segurança, eu já rolei o teste de Percepção do segurança do elevador e ele já está voltando.</h3><h3>Você desce as escadas até a porta do saguão, coloca o saco de lixo junto com os outros.</h3><h3>Voltando, você vê os dois seguranças no balcão, eles estão terminando de comentar algo.<h3>Ao passar pelo lado do balcão, eles estão agindo naturalmente, você chega até o elevador e eles não tomaram providência alguma.</h3><h3>Qual foi o resultado do teste de Percepção do segurança? Provavelmente foi negativo; ou então, ele até viu a caixinha no chão, mas não desconfiou... Ou então desconfiou, mas está esperando a hora certa. Quem sabe?... Na verdade, eu sei, mas não vou te contar.</h3><h3>Agora, você precisa cuidar do seu trabalho.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'subirUltimo'
		}
		]
	},

	esperarSeguranca: {
		title: "Sucesso no Teste de Disputa de Físico",
		story: "<h3>Eu gostaria muito de saber qual seria a explicação sobre o paraquedas em suas costas que você daria ao segurança...</h3><h3>Gostaria mesmo... Eu não consigo pensar em nenhuma que o convença a baixar a arma.</h3><h3>Seus amigos bem que avisaram que essa vida de espião não seria fácil.</h3><h3>Fim de missão.</h3><h3>Quer tentar de novo?</h3>",
		choices: [
		{
			choice: "Começar Novamente",
			destination: 'dia_1'
		}
		]
	},

	arriscarCorrida: {
		title: "Arriscar Corrida pra Saltar",
		story: "<h3>Quando você pegou aquela caixinha de doces, você sabia que não teria como voltar para trás.</h3><h3>Você corre agachado, e escuta o tiro.</h3><h3>Em sua direção.</h3><h3>Um Teste de Disputa decidirá se a bala te atingirá ou não.</h3><h3>Você tem sua Destreza (7) e o Bônus de Esquiva (+1) para somar com os 2D6, portanto, seu número de disputa é 8.</h3><h3>O segurança tem a Destreza dele (6), a Habilidade que ele tem com essa pistola (1) e o bônus da arma por Tiro Mirado (3), pois ele gastou as duas ações dele para dar esse tiro, sem guardar ação para a defesa. O número de teste dele é (10).</h3><h3>Você quer gastar suas duas ações para a esquiva também, conseguindo assim um bônus de +3? Sinto muito, mas nessa situação você não poderá, pois você não está prestando atenção apenas na origem do ataque e utilizando todo o seu corpo para se desviar deste ataque; você está fugindo. Nem tem noção se o segurança está atirando um pouco mais para cima ou para baixo. Será o seu 8 contra o 10 dele.</h3><h3>Eu rolo os 2D6 para o segurança e consigo um 9, somado com os 10 dele, você precisaria de uma soma maior do que 19 para escapar do disparo dele.</h3><h3>Precisaria, pois como eu disse, ele está a uns 20 metros de distância, o que dá para ele a penalidade de -4. Você precisará de 15 pontos; 7 ou mais nos dados para escapar. Em caso de empate, considera-se que o ataque acertou, mas apenas de raspão. Não é o suficiente para causar dano.</h3><h3>O quê? Você quer penalidades para ele porque você está em movimento? Não, dessa vez não. Se fosse um teste de mira do segurança, o seu movimento entraria como penalidade, mas como vocês estão disputando, o seu movimento é a sua rolagem de dados. Chega de chorar e role esses dados.</h3>",
		choices: [
		{
			choice: "Rolar Dados",
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

	sucessoRolar04: {
		title: "Sucesso no Teste de Destreza",
		story: "<h3>Suas pernas te empurram para longe do prédio, a gravidade te puxa para baixo, e um projétil de pistola passa sobre você, indo encontrar repouso no concreto de um prédio vizinho.</h3><h3>As luzes da cidade flutuam lá embaixo, mas você sabe que elas não ficarão distantes por muito tempo.</h3><h3>Sem precisar parar para pensar, você libera o paraquedas e se prepara para o impacto.</h3><h3>Não, não é o impacto com o chão, é o impacto do paraquedas se abrindo e freando bruscamente sua queda.</h3><h3>Está aberto, você se orienta rapidamente enquanto pega os controles do paraquedas.</h3><h3>Lá está o estacionamento, mais uma vez, tudo conforme a descrição do relatório. Agora é só manobrar a queda.</h3><h3>Você puxa as cordas de controle, enfrentando o vento e a velocidade de queda.</h3><h3>Você precisa de um teste de paraquedismo para conseguir pousar sobre o estacionamento. Será um Teste de Atributo, baseado em Destreza (7) e na Habilidade Paraquedismo (2), porém, temos uma situação desfavorável (pouca distância e vento) que dará uma penalidade de -1. Essa penalidade poderia ser maior, mas a área de pouso no estacionamento é bem grande.</h3><h3>Feitas as contas, seu teste será contra 8, se você conseguir 8 ou menos nos 2D6, a gente se fala no topo da garagem, senão, a gente se encontra em qualquer outro lugar...</h3>",
		choices: [
		{
			choice: "Rolar Dados",
			destination: 'rolarDados05'
		}
		]
	},

	falhaRolar04: {
		title: "Falha no Teste de Destreza",
		story: "<h3>Metal quente rasga seu braço enquanto você pisa na borda do prédio. Marque 3 pontos de dano no Físico Atual do seu personagem.</h3><h3>Suas pernas te empurram para longe do prédio, e a gravidade te puxa para baixo.</h3><h3>As luzes da cidade flutuam lá embaixo, mas você sabe que elas não ficarão distantes por muito tempo.</h3><h3>Sem precisar parar para pensar, você libera o paraquedas e se prepara para o impacto.</h3><h3>Não, não é o impacto com o chão, é o impacto do paraquedas se abrindo e freando bruscamente sua queda.</h3><h3>Está aberto, você se orienta rapidamente enquanto pega os controles do paraquedas.</h3><h3>Lá está o estacionamento, mais uma vez, tudo conforme a descrição do relatório. Agora é só manobrar a queda.</h3><h3>Você puxa as cordas de controle, mas a dor incomoda.</h3><h3>Você precisa de um teste de paraquedismo para conseguir pousar sobre o estacionamento. Será um Teste de Atributo baseado em Destreza (7) e na habilidade Paraquedismo (2), porém, temos 2 agravantes:</h3><h3>O primeiro é a situação (pouca distância e vento) que dará uma Penalidade de -1. Essa penalidade poderia ser maior, mas a área de pouso no estacionamento é bem grande.</h3><h3>O outro agravante é esse tiro que você levou. Lembre-se de que cada 2 pontos retirados do Físico, diminuem 1 ponto da Destreza. Logo, você tem mais uma penalidade de -1.</h3><h3>Feitas as contas, seu teste será contra 7, se você conseguir 7 ou menos nos 2D6.</h3>",
		choices: [
		{
			choice: "Rolar Dados",
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

	sucessoRolar05: {
		title: "Sucesso no Teste de Destreza",
		story: "<h3>A manobra é correta e você pousa no teto da garagem.</h3><h3>Mal toca o chão, você já se solta do paraquedas e corre para o andar debaixo pela rampa de acesso.</h3><h3>O estacionamento está com poucas luzes acesas, mas a iluminação externa também ajuda, uma vez que o estacionamento é aberto, contando apenas com muretas de 1 metro em suas laterais.</h3><h3>Sem mais problemas, você localiza o carro verde-escuro. Olha a placa, 2XPNCD, bate com a do relatório. É ela.</h3><h3>Diminuindo a velocidade, você se aproxima do porta-malas, mas não reconhece a motorista; aliás, você não vê motorista algum no carro.</h3><h3>O vidro, do lado do motorista, está quebrado, e alguns respingos de um líquido avermelhado são vistos no para-brisa.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'irFinal'
		}
		]
	},

	falhaRolar05: {
		title: "Falha no Teste de Destreza",
		story: "<h3>Não deu, você passou do ponto e não vai dar para voltar para o topo do estacionamento, o jeito agora é cair onde for possível.</h3><h3>Se você passou perto dos fios de energia, apesar do paraquedas, a queda é rápida. Não vai ter jeito, você vai ter que pousar na rua.</h3><h3>Apesar de estar no centro da cidade, nenhum carro está passando neste ponto da rua neste momento, afinal, já é de madrugada.</h3><h3>Seu pouso é tranquilo, apesar de nada discreto: Alguns cidadãos observam com curiosidade o seu feito.</h3><h3>Agora é torcer para a agente GI-108 perceber o seu erro e chegar com a carona antes que os seguranças tomem alguma providência.</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'irFinal'
		}
		]
	},

	irFinal: {
		title: "Final da Missão",
		story: "<h3>Fim da Missão.</h3><h3>...</h3><h3>É, apesar da história não ter acabado, essa missão acabou nesse ponto.</h3><h3>Você não está satisfeito, quer saber o que era o tal 'doce', quer saber se o seu personagem vai realmente escapar do Torre Azul?</h3><h3>Que bom, pois é assim mesmo que são os jogos de RPG, sempre existe a possibilidade de a aventura continuar. Tudo depende do mestre-de-jogo e dos jogadores. Mas agora, suas aventuras não dependerão mais de seguir textos numerados em um livro. Se quiser entender como transformar a sua imaginação em realidade, leia o <a href='https://operarpg.com.br' target='blank' class='classe1'>OPERA RPG</a>.</h3>",
		choices: [
		{
			choice: "Jogar Novamente",
			destination: 'dia_1'
		}
		]
	},

	instrucoes: {
		title: "Instruções",
		story: "<h3><center>Recomendação Etária: Livre</center></h3><h3>Para jogar uma aventura-solo, basta ler o texto apresentado, e no final, clicar sobre a decisão escolhida. Como exemplo, temos 2 opções:</h3><h3>- A primeira delas é a opção de 'Começar a Aventura', onde você irá ler o trecho introdutório do texto, identificando o personagem que você irá interpretar;</h3><h3>- A segunda opção é a de retornar a 'Tela Inicial' do jogo.</h3><h3>Existe mais de um final possível deste jogo, por isso você poder jogar novamente escolhendo opções diferentes das anteriormente escolhidas.</h3><h3>Após as opções, existe o controle (de 4 botões) de uma trilha sonora; recomendamaos escutá-la, caso seja possível.</h3>",
		choices: [
		{
			choice: "Começar a Aventura!",
			destination: "dia_1"
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
	},

	creditos: {
		title: "Créditos",
		story: "<h2 align='center'>Créditos</h2><br><h3>Esta é aventura-solo é parte do <a href='https://operarpg.com.br/product/opera-rpg-2a-edicao-modulo-basico-pdf/' target='blank' class='classe1'>OPERA RPG 2ª Edição</a></center></p><p><b>ISBN:</b> 978-65-00-38701-8</p><p><b>Programação:</b> Leonardo Antônio de Andrade</p><p><b>Autores:</b></p><p>&nbsp;&nbsp;Leonardo Antônio de Andrade</p><p>&nbsp;&nbsp;Rogério de Mello Godoy</p><p><b>Ilustrações:</b><p>&nbsp;&nbsp;Felipe Contartesi</p><p>&nbsp;&nbsp;Marcelo Braga</p><p><b>Trilha Sonora: </b></p>&nbsp;&nbsp;<a href='https://www.jamendo.com/track/1273567/espionage' target='blank' class='classe1'>Trecho da Faixa Espionage, de FOX & MEW</a></h3>",
		choices: [
		{
			choice: "Começar a Aventura!",
			destination: "dia_1"
		},
		{
			choice: "Tela Inicial",
			destination: "inicio"
		}
		]
	}
	
	}
}

document.addEventListener ('DOMContentLoaded', function() {
	var button0 = document.querySelector('#button0');
	var button1 = document.querySelector('#button1');
	var button2 = document.querySelector('#button2');
	var button3 = document.querySelector('#button3');
	var content = document.querySelector('#content');
	button0.addEventListener('click', function() {
		story = getStory ();
		renderScene ();
	})
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
	button2.addEventListener('click', function() {
		if (cont == 0)
		{
			instrucoes = true;
		}
		story = getStory ();
		renderScene ();
	})
	button3.addEventListener('click', function() {
		if (cont == 0)
		{
			creditos = true;
		}
		story = getStory ();
		renderScene ();
	})
})


function renderScene()
{
	//console.log(cont);
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

	if (!story[story.currentScene].image)
	{
		image = "<img></img>";
	}

	if (story[story.currentScene].title == "Primeiro Dia")
	{
		titulo = story[story.currentScene].title;
	}

	dado1 = Math.floor(Math.random() * 6 + 1);
	dado2 = Math.floor(Math.random() * 6 + 1);
	dados = dado1 + dado2;

	switch (story.currentScene)
	{
		case ('rolarDados01'):
			if (dados <= 7)
			{
				story.currentScene = 'sucessoRolar01';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <= 7 (Sucesso)');
			}
			else
			{
				story.currentScene = 'falhaRolar01';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 7 (Falha)');
			}
		break;
		case ('rolarDados02'):
			if (dados <= 5)
			{
				story.currentScene = 'sucessoRolar02';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <= 5 (Sucesso)');
			}
			else
			{
				story.currentScene = 'falhaRolar02';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 5 (Falha)');
			}
		break;
		case ('rolarDados03'):
			if ((dados + 6) >= 11)
			{
				story.currentScene = 'sucessoRolar03';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' + 6 = ' + (dados + 6) + ' >= 11 (Sucesso)');
			}
			else
			{
				story.currentScene = "falhaRolar03";
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' + 6 = ' + (dados + 6) + ' < 11 (Falha)');
			}
		break;
		case ('rolarDados04'):
			if (dados <= 7) {
				story.currentScene = 'sucessoRolar04';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <= 7 (Sucesso)');
			}
			else {
				story.currentScene = 'falhaRolar04';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 7 (Falha)');
			}
		break;
		case ('rolarDados05'):
			if (dados <= 8) {
				story.currentScene = 'sucessoRolar05';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <= 8 (Sucesso)');
			}
			else {
				story.currentScene = 'falhaRolar05';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 8 (Falha)');
			}
		break;
	}

	 
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

	//console.log(story.currentScene);
	
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
}

function getInputValue (x) {
	var inputs = document.querySelectorAll('input[type="button"]');
	story.currentScene = inputs[x].getAttribute('data-destination');
	renderScene();
	return;

}


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
