---
title: block-size
slug: Web/CSS/block-size
---

{{CSSRef}}{{SeeCompatTable}}

La propriété **`block-size`** est une propriété _logique_ qui permet de définir la taille de l'élément dans la direction orthogonale au sens de lecture. Selon la valeur de la propriété {{cssxref("writing-mode")}}, elle correspondra à la propriété physique {{cssxref("width")}} ou {{cssxref("height")}}.

{{InteractiveExample("CSS Demo: block-size")}}

```css interactive-example-choice
block-size: 150px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
block-size: 150px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
block-size: auto;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
block-size: auto;
writing-mode: vertical-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box where you can change the block-size.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  justify-content: center;
  color: #ffffff;
}
```

Si le mode d'écriture est vertical, la valeur de `block-size` fera référence à la largeur de l'élément et sinon, elle fera référence à sa hauteur.

L'autre propriété logique permettant de définir la dimension sur l'autre axe est {{cssxref("inline-size")}}.

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
block-size: 300px;
block-size: 25em;

/* Valeurs proportionnelles */
/* Type <percentage>        */
block-size: 75%;

/* Valeurs avec un mot-clé */
block-size: 25em border-box;
block-size: 75% content-box;
block-size: max-content;
block-size: min-content;
block-size: available;
block-size: fit-content;
block-size: auto;

/* Valeurs globales */
block-size: inherit;
block-size: initial;
block-size: unset;
```

### Valeurs

La propriété `block-size` peut prendre les mêmes valeurs que {{cssxref("width")}} et {{cssxref("height")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
.exemple {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 200px;
}
```

### HTML

```html
<p class="exemple">Texte d'exemple</p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés physiques correspondantes : {{cssxref("width")}} et {{cssxref("height")}}
- {{cssxref("writing-mode")}}
