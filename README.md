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
<input value={search} onChange={element => setSearch(element.target.value)} />
```

👆🏼 Aqui controlamos o valor do input e na mudança do mesmo, este valor é guardado na constante `search`.


