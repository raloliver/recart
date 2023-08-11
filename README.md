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

![Prop Drilling](https://onedrive.live.com/embed?resid=F3F3AE118D1DE0A%2158313&authkey=%21AHdHiUy9jssFgAU&width=548&height=311 "Prop Drilling")



