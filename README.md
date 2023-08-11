# RECART - redux

### Classnames

`classnames` é um pacote para resolver classes condicionais. Por exemplo, imagine que você tenha uma classe chamada 'card-active', que só existirá se a variável `active` for true, como resolvemos isso sem e com classnames?

**Sem classnames**

```css
<div className={active ? 'card-active' : ''}>
</div>
```

**Com classnames**

```css
<div className={classNames({
 'card-active': active
})}>
</div>
```

### CSS Modules

Resolve problemas de sobreposição de CSS. O pacote ao invés de trazer as classes de forma convencional, ele cria ids únicos para a classe (mesmo que as classes tenham o mesmo nome!), e isto impede de um CSS que não queremos sobrepor outro CSS!

**Sem CSS Modules**

```javascript
import './Navbar.scss';

…

<nav className='nav'>
</nav>
```

Resultado:

```html
<nav class="nav">…</nav>
```

**Com CSS Modules**

```javascript
import styles from './Navbar.module.scss';
…
<nav className={styles.nav}> … </nav>
```

Resultado:

```html
<nav class="Navbar_nav__VwSpp">…</nav>
```

### JSConfig

O `baseUrl`, que diz que a pasta inicial para imports que **não vêm do `node_modules`** e sim que é o `src`, **não a pasta raiz do projeto**! Com isso não precisamos utilizar imports relativos (../../../).

Docs: https://code.visualstudio.com/docs/languages/jsconfig

### Criar o estado da busca dentro do componente busca seria uma boa ideia?

Como o componente é especificamente da busca, não seria errado ele ter esta responsabilidade, porém não conseguiríamos ver este estado do lado de fora do componente, então não, pois precisamos deste estado em um lugar acima para utilizar nas nossas páginas.

Caso deseje controlar o input no componente, podemos utilizar o hook `useState()`, exemplo:

```javascript
const [search, setSearch] = useState('');

…

<input value={search} />
```

👆🏼 No exemplo acima, nós estaremos controlando o input, mas ele será considerado `read-only`, ou seja, ele não poderá mudar o próprio valor! Para isto, devemos também adicionar o evento de mudança (`onChange`) para armazenar o novo valor da busca nesta constante:

```javascript
<input
  value={search}
  onChange={(element) => setSearch(element.target.value)}
/>
```

👆🏼 Aqui controlamos o valor do input e na mudança do mesmo, este valor é guardado na constante `search`.

### React Router DOM

**BrowserRouter**

Este componente faz com que se utilize o comportamento de mudança de rotas do browser (navegador), ou seja, com barras (como "/login" por exemplo).

**Routes**

Este componente diz que dentro dele terá uma ou várias rotas que serão analisadas, e a que se encaixar na estrutura que escolhemos (BrowserRouter) ela renderizará a rota.

**Route**

Este componente é uma representação de uma rota. Nele podemos dizer qual é a rota que aquele Route representa (path) e o componente correspondente (element).

**Outlet**

Ele é bem parecido com a propriedade children do React, mas ele concatena componentes gerais com componentes específicos. Nesse projeto temos o Navbar e o Footer na página, então eles seriam componentes gerais e o que aparece ao meio é o Outlet, e o componente que estiver dentro será determinado pelo componente Route.

**Link**

É um componente correspondente à tag <a> do HTML, mas ele não utiliza o redirecionamento do navegador, e sim da própria biblioteca.

**useLocation**

Um hook utilizado para pegar várias informações baseada no `location` do navegador, neste projetos utilizamos o `pathname`, que é a rota ativa no momento.

**useParams**

Um hook usado para identificar parâmetros na URL da página, normalmente utilizado em conjunto com o componente Route, colocando nele uma rota dinâmica chamada item/:id. No lugar deste :id existe uma identificação do item, e ela estará disponível dentro de `useParams`.

**useNavigate**

Um hook utilizado para navegar entre páginas.

Documentação do react-router-dom: https://reactrouter.com/en/start/overview

### One-Way Data Binding & Prop Drilling

A responsabilidade do Router é controlar as rotas e saber o que é necessário renderizar. Então é preciso utilizar outra biblioteca para comunicar dados entre os componentes.

O React funciona assim desde que foi criado, e ele foi criado assim pois o que o React mais preza é a performance e a facilidade. Two-Way data binding é uma forma também utilizada em outros frameworks, mas é muito fácil ocorrer quedas de performance e que mudemos estados de forma desnecessária, pois se o dado pode vir de qualquer lugar, quem que tem o controle sobre este estado?

React é one-way data binding, então não é possível enviar entre as rotas, só é possível compartilhar informações de cima para baixo através de `props`, o que não é uma boa prática, já que vamos gerar um problema chamado "prop drilling", que é precisarmos passar props em cima de props, em cima de props... o que deixa o código mais complexo de gerir.

<div align="center">

![Prop Drilling](https://onedrive.live.com/embed?resid=F3F3AE118D1DE0A%2158313&authkey=%21AHdHiUy9jssFgAU&width=548&height=311 'Prop Drilling')

</div>

_<p align="center">Prop Drilling</p>_

### REDUX

<div align="center">

![Prop Drilling](https://onedrive.live.com/embed?resid=F3F3AE118D1DE0A%2158314&authkey=%21ACgASIn_dUlbA9E&width=727&height=451 'React - Redux - With and Without')

</div>

_<p align="center">React - Redux - With and Without</p>_

<div align="center">

![Prop Drilling](https://onedrive.live.com/embed?resid=F3F3AE118D1DE0A%2158315&authkey=%21APnP6yDytKDGD6o&width=510&height=361 'React - Redux - With and Without')

</div>

_<p align="center">React - Redux - Life Cycle</p>_

### Redux Toolkit & React Redux

`npm install @reduxjs/toolkit react-redux`

O Redux Toolkit, criar a store, porém atenção que é necessário prover a store para os componentes. Quem se encarrega de fazer isso é um componente do próprio React Redux.

Documentação @reduxjs/toolkit: https://redux-toolkit.js.org/tutorials/quick-start

Reducers: pequenos pedações da Store.

Com o Redux nós conseguimos ter todos os estados compartilhados entre componentes em um só lugar, reduzindo a complexidade de troca de informações e mudança de estado dentro do projeto!

Utilize as bibliotecas `react-redux` e `@redux/toolkit` para criar um Store, um Slice com o nome desejado e com um initialState como um objeto vazio. Após isso, utilize o `Provider` para conectar o seu store com o projeto.

**Action**

Action é uma função que retorna um objeto (ou apenas o objeto). Este objeto contém obrigatoriamente um `type`, e opcionalmente contém um `payload`. O objeto representa uma ação que será feita em um `reducer`.

**Dispatch**

Dispatch é a ação de disparar uma `action`. A action sozinha é apenas um objeto com a 'assinatura' que o redux aceita, já o `dispatch` é uma função que oficializa que aquela `action` está sendo disparada para o redux.

**Immer**

Imutabilidade é o ato de você nunca mudar um dado. É uma técnica que permite que tenhamos um projeto muito mais performático, pois como o dado nunca é mudado, ou seja, no redux nunca retornamos um estado mudado, e sim um novo estado.

**InitialState**

InitialState é o estado inicial do reducer, ele é obrigatório e é usado como o primeiro ponto do estado antes das alterações que as actions disparadas farão.

**Payload**

Payload é o nome da propriedade dentro do objeto `action`. Dentro desta propriedade colocamos um ou mais argumentos que gostaríamos de utilizar dentro do reducer.

**Provider**

Provider é um componente da biblioteca `react-redux` que nos permite prover o Store para todos os componentes abaixo dele.

**Reducer**

Reducers são pequenos estados dentro do Store. Reducers são funções que aceitam um estado inicial e as actions como argumentos, e sempre retornam um novo estado.

**Redux Toolkit**

Redux Toolkit é uma biblioteca que facilita a criação de inúmeras coisas no Redux. Com ele, conseguimos criar Reducers abstratos utilizando Slices, que automaticamente cria actions para nós e consegue resolver os estados com imutabilidade de forma automática.

**React Redux**

React Redux nos permite utilizar o Redux dentro do React, nos provendo funções/componentes utilitárias(os) como o Provider, useDispatch e useSelector, por exemplo.

**Slice**

Slice é o termo usado pelo Redux Toolkit para se referir ao pedaço que criamos que corresponderá ao Reducer, as Actions e as Action types correspondentes àquele reducer. É criado com a função `createSlice` do Redux toolkit.

**State**

State é um termo relativo no Redux, mas a forma mais comum de ser utilizado é se referindo ao estado atual de um reducer. Dentro de `useSelector`, State representa o estado de todo o Store.

**Store**

Store é o estado total do Redux, com todos os reducers e algumas funções utilitárias como `getState()` e `dispatch()`. Normalmente `Store` é utilizado para se referir à variável store diretamente, nela não só temos o `state` de todo o Redux do projeto como também a algumas funções que existem dentro dela.

**Type**

Type é um identificador de uma `action` (convencionalmente uma string), que será utilizada pelo `reducer` para identificar aquela ação e saber o que fazer com ela. Se o type é `incrementar` dentro do `reducer` deve haver um tratamento para caso a action seja do tipo incrementar. Caso esteja utilizando Redux Toolkit, o type é criado automaticamente.

**useDispatch**

`useDispatch` é um hook da biblioteca `react-redux`, que nos permite disparar uma action.

**useSelector**

`useSelector` é um hook que nos permite acessar o `state` de toda a aplicação. Nele, você pode receber todo o estado de uma só vez ou pegar exatamente o que você precisa. O recomendado é que seja utilizado para filtrar exatamente o necessário para o seu componente atual, pois o seu componente fica 'conectado' ao estado entregue pelo `useSelector`, logo ele atualizará sempre que aquele estado mudar.

**View**

View é o nome que damos à parte de visualização, ou seja, todos os componentes que criamos.

