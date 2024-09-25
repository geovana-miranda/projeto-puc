# Arquitetura da Solução

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

<img src="https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2024-2-e2-proj-front-t1-grupo2-eixo2-projeto/blob/main/docs/img/diagrama_classe.png" alt="imagem do diagrama de classes"/>

## Modelo ER (Projeto Conceitual)

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.

<img src="https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2024-2-e2-proj-front-t1-grupo2-eixo2-projeto/blob/main/docs/img/diagrama_relacional.png" alt="imagem do diagrama relacional"/>

## Projeto da Base de Dados

O projeto da base de dados corresponde à representação das entidades e relacionamentos identificadas no Modelo ER, no formato de tabelas, com colunas e chaves primárias/estrangeiras necessárias para representar corretamente as restrições de integridade.
 
<img src="https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2024-2-e2-proj-front-t1-grupo2-eixo2-projeto/blob/main/docs/img/diagrama_er.png" alt="imagem do diagrama er"/>

## Tecnologias Utilizadas

As tecnologias que serão utilizadas no desenvolvimento da aplicação são:

| Tecnologia | Função |
| ------------- | ------------- |
| HTML  | Linguagem de marcação  |
| CSS  | Linguagem de estilização  |
| JavaScript  | Linguagem de programação  |
| React  | Biblioteca JavaScript  |
| JSX  | Extensão de sintaxe do JavaScript  |
| UUID  | Biblioteca para gerar IDs únicos  |
| Local Storage  | Armazenamento de dados no navegador  |

Relação entre as tecnologias:

<img src="https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2024-2-e2-proj-front-t1-grupo2-eixo2-projeto/blob/main/docs/img/diagrama_tecnologias.png" alt="imagem do diagrama de tecnologias"/>

O usuário acessa o site por meio do navegador, que faz uma requisição HTTP ao servidor onde o site está hospedado. Em resposta, o servidor envia ao navegador os arquivos necessários para renderizar a página web. Esses arquivos incluem:

**HTML:** é uma linguagem de marcação usada para estruturar o conteúdo da pagina.

**CSS:** é uma linguagem de estilização usada para aplicar estilos a pagina.

**JavaScript:** é uma linguagem de programação usada para criar interatividade e dinamismo a pagina.

O **JSX** combina o HTML com o JavaScript, facilitando o desenvolvimento dos componentes React.

O **React** é uma biblioteca usada para construir interfaces de usuário dinâmicas e interativas. Ele permite a criação de componentes reutilizáveis e o gerenciamento eficiente de estado da aplicação.

O **UUID** permite a criação de identificadores únicos universais.

Os dados inseridos pelo usuário no site podem ser armazenados na **Local Storage**, uma funcionalidade do navegador que permite o armazenamento de dados localmente no dispositivo do usuário. Esses dados permanecem de forma persistente no navegador, mesmo após o fechamento da página.

## Hospedagem

O site será hospedado na Vercel, e seu endereço será adicionado posteriormente nesse arquivo.
