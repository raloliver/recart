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

