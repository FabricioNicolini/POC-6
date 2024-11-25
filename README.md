# POC 6 - React em Prática

# Passo a passo da criação do projeto

1- A primeira coisa que você deve fazer ao pensar em criar um projeto como esse, é saber como criar um projeto em nextjs. Para isso, você deve ter nodejs instalado na sua máquina(computador), após isso, abra o prompt de comando, ou qualquer outro terminal de algum aplicativo de programação e insira os seguintes códigos.

  ```css
npm install

npx create-next-app nome_do_seu_projeto
```
Após isso, o seu projeto irá ser criado.

2- Agora você deve começar a deixar o código da maneira que gostaria, utilizando css e js para a parte mais visual do seu site(presentes na pasta pages). Além disso, nesse projeto foi necessária à criação de alguns componetes que tornassem o site mais funcional, como a criação de botões, sendo uma das funcionalidades, a emissão de um alerta após o clique no mesmo. Porém, em relação aos componentes, eles devem ser criados na pasta componentes(independente da pasta page) e dentro dela haverá uma ou mais pastas, contendo cada uma, um componente diferente. 

Como nosso projeto é baseado na compra de ingressos de um filme no cinema, tivemos que criar algumas coisas bem específicas, como os assentos, em que temos os assentos ocupados, os assentos livres e também os assentos selecionados(assentos que o comprador teria clicado). Tendo em mente que o tamanho dos assentos devem ser configurados, afim de não deixar com que fiquem grandes ou pequenos demais.

Sendo todos os componentes usados no nosso projeto, sala(

Tivemos também que implementar uma função de alteração de página de clara para escura e vice versa, fizemos isso a partir da criação do código abaixo

```css

if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyColorScheme);
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', applyColorScheme);
  }

```

O código em questão funciona a partir da prefêrencia do usuário em relação ao tema claro/escuro(escolha feita no navegador), como mostrado na imagem abaixo.
![WhatsApp Image 2024-11-25 at 09 56 53](https://github.com/user-attachments/assets/a3ea5c3e-f01a-457e-afa4-1a73c919d05c)


3- Após configurar o projeto, é hora de ver se está como quer, para isso deve-se iniciar o código e ver como ficou o resultado final, para isso, digite o código abaixo no terminal do aplicativo de programação que está sendo usado

```css

npm run dev

```

Esse código ira retornar um link que será o local em que o seu projeto ficará visível, além de que terá atualizações em tempo real caso seja feita alguma alteração no código(alteração será feita ao salvar), sem precisar atualizar a página. 

Sendo o link padrão,

```css

http://localhost:3000

```
podendo ocorrer algumas alterações no mesmo, caso o 3000 esteja em uso, sendo o próximo o 3001, assim por diante.

