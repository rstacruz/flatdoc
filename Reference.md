  - [Flatdoc](#flatdoc)
  - [Flatdoc.run()](#flatdocrun)
  - [Flatdoc.file()](#flatdocfile)
  - [Flatdoc.github()](#flatdocgithub)
  - [Parser](#parser)
  - [Parser.parse()](#parserparse)
  - [Transformer](#transformer)
  - [Transformer.addIDs()](#transformeraddids)
  - [Transformer.getMenu()](#transformergetmenu)
  - [Transformer.buttonize()](#transformerbuttonize)
  - [Transformer.smartquotes()](#transformersmartquotes)
  - [Highlighters](#highlighters)
  - [MenuView](#menuview)
  - [Runner](#runner)
  - [Runner.run()](#runnerrun)
  - [Runner.applyData()](#runnerapplydata)

## Flatdoc

  Flatdoc.

### Flatdoc.run()

  Runs.

### Flatdoc.file()

  File fetcher function.
  
  Fetches a given `url` via AJAX.
  See [Runner#run()] for a description of fetcher functions.

### Flatdoc.github()

  Github fetcher.
  Fetches from repo `repo` (in format 'user/repo').
  
  If the parameter `filepath` is supplied, it fetches the contents of that
  given file in the repo.
  
  See [Runner#run()] for a description of fetcher functions.
  
  See: http://developer.github.com/v3/repos/contents/

## Parser

  Parser module.
  Parses a given markdown.
  
```js
var data = Flatdoc.parser.parse('markdown source here');
console.log(data);
//=> { title: '..', content: '..', menu: '..' }
```

### Parser.parse()

  Parses a given Markdown document.
  See `Parser` for more info.

## Transformer

  Transformer.
  Mangles HTML.

### Transformer.addIDs()

  Adds sections.

### Transformer.getMenu()

  Returns menu data for a given HTML.
  
```js
menu = Flatdoc.transformer.getMenu($content);
menu == {
  level: 0,
  items: [{
    section: "Getting started",
    level: 1,
    items: [...]}, ...]}
```

### Transformer.buttonize()

  Changes "button >" text to buttons.

### Transformer.smartquotes()

  Applies smart quotes to a given element.
  It leaves `code` and `pre` blocks alone.

## Highlighters

  Syntax highlighters.
  
  You may add or change more highlighters via the `Flatdoc.highlighters`
  object.
  
```js
Flatdoc.highlighters.js = function(code) {
};
```

  
  Each of these functions

## MenuView

  Menu view. Renders menus

## Runner

  A runner module that fetches via a `fetcher` function.
  
```js
var runner = new Flatdoc.runner({
  fetcher: Flatdoc.url('readme.txt')
});
runner.run();
```

  
  The following options are available:
  
   - `fetcher` - a function that takes a callback as an argument and
```js
 executes that callback when data is returned.
```

  
  See: [Flatdoc.run()]

### Runner.run()

  Loads the Markdown document (via the fetcher), parses it, and applies it
  to the elements.

### Runner.applyData()

  Applies given doc data `data` to elements in object `elements`.
