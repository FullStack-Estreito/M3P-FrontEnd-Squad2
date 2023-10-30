# M3P-FrontEnd-Squad2
LabSchool Manager - Gestão de Atendimentos Escolares

 - Escopo do Projeto 
A LABSchool Edu, empresa líder no segmento tecnológico de gestão educacional, foi
selecionada em edital e recebeu um aporte financeiro para aprimorar seu principal produto,
o LABSchool Manager. A expectativa é desenvolver um novo sistema no formato white-label,
capaz de ser personalizado e comercializado para escolas e demais instituições de ensino de
todo o país.
O modelo white-label consiste em um software padrão que pode ser personalizado com as
cores, tipografias, logotipos e demais elementos visuais da identidade do cliente,
proporcionando um resultado personalizado.

- Requisitos do sistema
Para construção do sistema LabSchool Manager foram utilzados as seguintes ferramentas:
Skills: Organização com Trello, criação de documentação e apresentação de solução;
Versionamento: Uso do GitHub para versionamento de código;
MySQL Workbench: Documentaçao dos bancos de dados SQL;
IDE utilizada: Visual Studio Code;
Programação WEB: Javascript, Typescript, CSS, HTML, Angular e Bootstrap;

- Descritivo para execução do sistema
OBS: *** Para está parte do projeto (Front_end) executar com sucesso, é necessário estar em execução a API (Back_End).
         Os detalhes para execução estão descritos no README do projeto de Back_End.

Considerando que os procedimentos para execução via linha de comando do GitHub estejam instalados, segue:
Escolher um diretório da sua preferência;
Clicar com o botão direito e escolhar a opção, (git Bash Here);
Executar a linha de comando: (git init);
Executar a linha de comando: (git clone URL); A URL é a do repositório do GitHub onde a aplicação está armazenada;
Exemplo: git clone https://github.com/FullStack-Estreito/M3P-FrontEnd-Squad2.git

No mesmo diretório onde foi efetuado o clone(download) do sistema, executar a linha de comando (code .) para abrir o Visual Studio Code;
Depois de aberto o Visual Studio code, clicar na barra superior, opção (New Terminal) para abrir um terminal para digitação dos comandos necessários para execução do sistema, segue os comandos:

            cd FrontEnd <posicionar o prompt do terminal no diretório onde está a aplicação>
            npm install <instalação dos pacotes Angular, necessários para execução do sistema>
            ng serve --open <compilação do sistema e demais inicializações dos pacotes do Angular>

Se a execução do comando (ng serve) ocorrer sem erros de compílação, deverá ser exibido no terminal a seguinte mensagem:

-------------------------------------------------------------------------------------
           ✔ Browser application bundle generation complete.

Initial Chunk Files   | Names         |  Raw Size
vendor.js             | vendor        |   2.65 MB |
styles.css, styles.js | styles        | 497.63 kB |
polyfills.js          | polyfills     | 333.17 kB |
main.js               | main          | 117.61 kB |
runtime.js            | runtime       |   6.53 kB |

                      | Initial Total |   3.58 MB

Build at: 2023-07-30T00:56:08.699Z - Hash: a41de363e72f37de - Time: 3288ms

** Angular Live Development Server is listening on localhost:4200, open your browser on <http://localhost:4200/> **

√ Compiled successfully.
--------------------------------------------------------------------------------------

Logo em seguida será aberto automaticamente no navegador de internet a aplicação LabSchool Manager para ser utilizada.

- Melhorias sugeridas:
Inclusão da opção de impressão de relatórios;
Acrescentar cadastro dos pais do aluno;

FIM
