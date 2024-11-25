# POC 6 - React em Prática

# Passo a passo da criação do projeto

## 1.0
A primeira coisa que você deve fazer ao pensar em criar um projeto como esse, é saber como criar um projeto em nextjs. Para isso, você deve ter nodejs instalado na sua máquina(computador), após isso, abra o prompt de comando, ou qualquer outro terminal de algum aplicativo de programação e insira os seguintes códigos.

  ```css
npm install

npx create-next-app nome_do_seu_projeto
```
Após isso, o seu projeto irá ser criado.

## 2.0
Agora você deve começar a deixar o código da maneira que gostaria, utilizando css(como por exemplo flexbox) e js(que utiliza sintaxes de HTML 5) para a parte mais visual do seu site(presentes na pasta pages, principalmente no page.js e no global.css). Como mostrado abaixo

exemplo de flexbox no global.css
```css
body {
  display: flex;
  color: var(--foreground);
  background: var(--background);
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  margin: 0 auto; 
  padding: 10px; 
  height: 100vh; 
  overflow: hidden;
  justify-content: center;
  
}
```

exemplo de HTML 5 no page.js
```css
return (
    <div className={styles.container}>
      <header className={styles.Titulo}>
        <div className={styles.tituloAForja}>
          <h1>A forja</h1>
        </div>
        <div className={styles.Hora}>
          <p>16:40</p>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.sala}>
          <Sala toggleSeat={toggleSeat} />
        </div>
        <Sinopse />
      </main>
      <Botao totalPrice={totalPrice} />
    </div>
  );
```


### 2.1
Além disso, nesse projeto foi necessária à criação de alguns componetes que tornassem o site mais funcional, como a criação de botões, sendo uma das funcionalidades, a emissão de um alerta após o clique no mesmo. Porém, em relação aos componentes, eles devem ser criados na pasta componentes(independente da pasta page) e dentro dela haverá uma ou mais pastas, contendo cada uma, um componente diferente. 

Como nosso projeto é baseado na compra de ingressos de um filme no cinema, tivemos que criar algumas coisas bem específicas, como os assentos, em que temos os assentos indisponíveis, os assentos livres e também os assentos selecionados(assentos que o comprador teria clicado). Tendo em mente que o tamanho dos assentos devem ser configurados, afim de não deixar com que fiquem grandes ou pequenos demais.

Como na imagem abaixo

![WhatsApp Image 2024-11-25 at 10 28 24](https://github.com/user-attachments/assets/ad4ab4a3-9a4a-45d0-ab2b-1925db500639)


Sendo todos os componentes usados no nosso projeto, fila(sendo um conjunto de assentos), a sala(conjunto de filas), button(para emitir um alerta de compra e calcular o valor total da mesma) e por fim, sinopse(contendo a sinopse do filme, que se adequa ao Media Query). 

Suas passagens de parâmetro sendo eles, o toggleSeat, que foi definido no componente pai page.js para gerenciar os estados dos assentos selecionados.

ele no page.js
```css

<Sala toggleSeat={toggleSeat} />

```

ele no sala.js
```css

<Fila toggleSeat={toggleSeat} />

```
ele no fila.js
```css

<const branco = <div className={styles.AcentoBranco} onClick={(e) => toggleSeat(e.target)}></div>;

```
O page.js passa a função toggleSeat como prop para o componente Sala, que por sua vez repassa essa função para os componentes Fila, onde ela é usada nos eventos de clique.

Em questão do sinopse.js, é um componente que não recebe props diretamente neste projeto, mas utiliza conteúdo estático, como por exemplo

ele no page.js
```css

<Sinopse />

```

Ele no Sinopse.js
```css

<h3>Sinopse do filme</h3>
<p>Descrição detalhada do filme...</p>

```



### 2.2
Tivemos também que implementar uma função de alteração de página de clara para escura e vice versa, fizemos isso a partir da criação do código abaixo

```css

function applyColorScheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add(styles.dark);
      document.body.classList.remove(styles.light);
    } else {
      document.body.classList.add(styles.light);
      document.body.classList.remove(styles.dark);
    }
  }

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyColorScheme);
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', applyColorScheme);
  }

  applyColorScheme();

```

O código em questão funciona a partir da prefêrencia do usuário em relação ao tema claro/escuro(escolha feita no navegador), como mostrado na imagem abaixo.

![WhatsApp Image 2024-11-25 at 09 56 53](https://github.com/user-attachments/assets/a3ea5c3e-f01a-457e-afa4-1a73c919d05c)

![WhatsApp Image 2024-11-25 at 10 12 43](https://github.com/user-attachments/assets/ade59f2b-9de2-4865-9a48-ee346e966873)


### 2.3
Além de tudo isso, implementamos um design responsivo que só foi possível após a implementação dos códigos

```css
@media (max-width: 768px) {
  .container {
    height: 100vh;
  }

  .sala {
    width: 100%;
    height: 100%;
  }
}
```
```css
@media (max-width: 600px) {   
    .sinopse {
      display: none;
    }
}
```
```css
@media (max-width: 768px) {
    .container_filas {
        width: 100%;
    }

    .status {
        font-size: 0.8rem;
        font-weight: bold;
    }

    .legenda {
        width: 100%;
    }

    .AcentoBrancoBOLINHA,
    .AcentoCinzaBOLINHA,
    .AcentoVermelhoBOLINHA {
        width: 45%;
        height: 40%;
        margin: 2px;
        border-radius: 40px;
    }
}
```

códigos esses, presentes no, page.module.css, Sinopse.module.css e Sala.module.css, sendo essa a ordem em que os códigos estão a cima

Tendo como resultado final as imagens abaixo

![WhatsApp Image 2024-11-25 at 10 17 31](https://github.com/user-attachments/assets/67dcdb18-bad5-4f57-a5f5-787ebe538444)

![WhatsApp Image 2024-11-25 at 10 56 42](https://github.com/user-attachments/assets/85cb668f-3480-49e7-8736-1b7a1b59c0ff)



## 3.0 
Após configurar o projeto, é hora de ver se está como quer, para isso deve-se iniciar o código e ver como ficou o resultado final, para isso, digite o código abaixo no terminal do aplicativo de programação que está sendo usado

```css

npm run dev

```

Esse código ira retornar um link que será o local em que o seu projeto ficará visível, além de que terá atualizações em tempo real caso seja feita alguma alteração no código(alteração será feita ao salvar), sem precisar atualizar a página. 

Sendo o link padrão,

```css

http://localhost:3000

```
podendo ocorrer algumas alterações no mesmo, caso o 3000 esteja em uso, sendo o próximo o 3001, assim por diante.

