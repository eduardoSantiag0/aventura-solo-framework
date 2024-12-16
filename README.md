# 🧩 Estrutura do código: 
## 🎲 **Variáveis Globais:**
- 🔮 ``story``: Armazena os dados da história.
- 🧪 ``instrucoes`` e ``creditos``: Variáveis de controle para funcionalidades específicas.
- 💾 **Variáveis customizáveis:** É possível criar variáveis para para guardar escolhas ou itens do jogador.  

## 🗿 **Funções Principais:**
- 🫵 ``getStory()`` Define as cenas e escolhas da narrativa, com toda a estrutura da história.
- 🥷 ``renderScene()`` Atualiza o texto e as opções disponíveis no HTML.
- 🔗 ``getInputValue(x)`` Processa a escolha do jogador e altera a cena atual com base no destino configurado.
- 🕹 ``getInputs()`` Gera os botões correspondentes às escolhas disponíveis em cada cena.

## 🎬 **Cenas:**

### Cada cena possui:
- 🏷️ ``title``: Título da cena.
- 🖼️ ``image``: Caminho para a imagem associada.
- ✍️ ``story``: Texto da cena.
- 🎮 ``choices``: As escolhos/opções que aparecem na tema. Cada escolha tem:
    - 🪧 ``choice``: Texto do botão.
    - 🧵 ``destination``: Nome da próxima cena.


### ☝🤓 Exemplo de Cena com nome "introducao"
```js
introducao: {
    title: "Titulo",
    image: "img/nome-da-imagem.arquivo",
    story: "Texto da cena...",
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
}
```
### 👋👨‍💻 Espero que este texto tenha contribuído para a compreensão do código e facilitado o processo de criação da sua história ✌🦦