Doclet
======

Documentation generator.

Getting started
---------------

Make a file that looks like this.

``` html
<!doctype html>
<html>
<head>
  <meta charset='utf-8'>
  <!-- Doclet -->
  <script src='http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js'></script>
  <script src='http://rstacruz.github.io/doclet/doclet.build.js'></script>

  <!-- Doclet theme -->
  <link  href='http://rstacruz.github.io/doclet/theme.white/style.css' rel='stylesheet'>
  <script src='http://rstacruz.github.io/doclet/theme.white/script.js'></script>

  <!-- Initializer -->
  <script>
    Doclet.run({
      fetcher: Doclet.github('rstacruz/reponame')
    });
  </script>
</head>
<body>
  <div role='doclet-menu'></div>
  <div role='doclet-content'></div>
</body>
```

Options
-------

### fetcher

A fetcher function.

``` js
fetcher: Doclet.ajax('Readme.md')
```
