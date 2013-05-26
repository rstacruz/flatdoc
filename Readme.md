Flatdoc
=======

Flatdoc is a small browser JavaScript file that fetches Markdown files (from
    Github or any URL) and renders them as full pages. Essentially, it's the
easiest way to make open source documentation from *Readme* files.

Flatdoc has no server-side components or any build process needed. Simply create
an HTML file and deploy.

Getting started
---------------

Create a file based on the template, which has a bare DOM, link to the
scripts, and a link to a theme. It will look something like this (not exact).
For GitHub projects, simply place this file in your [GitHub pages] branch and
you're all good to go.

[Download template >][template] *Opens in new window*

``` html
<html>
<head>
  <!-- Doclet -->
  <script src='http://rstacruz.github.io/flatdoc/v/1.0/legacy.js'></script>
  <script src='http://rstacruz.github.io/flatdoc/v/1.0/flatdoc.js'></script>

  <!-- Doclet theme (optional) -->
  <link  href='http://rstacruz.github.io/flatdoc/v/1.0/theme.white/style.css' rel='stylesheet'>
  <script src='http://rstacruz.github.io/flatdoc/v/1.0/theme.white/script.js'></script>

  <!-- Initializer -->
  <script>
    Doclet.run({
      fetcher: Doclet.github('rstacruz/reponame')
    });
  </script>
</head>

<body role='flatdoc'>
  <div role='flatdoc-menu'></div>
  <div role='flatdoc-content'></div>
</body>
</html>
```

How it works
------------

Flatdoc utilizes the [GitHub API] to fetch your project's Readme files. (You may
also configure it to fetch any arbitrary URL via AJAX.)

Next, it uses [marked], an extremely fast Markdown parser that has support for
GitHub flavored Markdown.

Flatdoc then simply renders *menu* and *content* DOM elements to your HTML
document. Flatdoc also comes with a default theme to style your page for you, or
you may opt to create your own styles.

Customizing
-----------

You can customize it to your seeds.

Misc
====

Changelog
---------

#### v0.1.0 - Jan 23, 2013

First version.

Acknowledgements
----------------

© 2013, Rico Sta. Cruz. Released under the [MIT 
License](http://www.opensource.org/licenses/mit-license.php).

**Flatdoc** is authored and maintained by [Rico Sta. Cruz][rsc] with help from its 
[contributors][c]. It is sponsored by my startup, [Nadarei, Inc][nd].

 * [My website](http://ricostacruz.com) (ricostacruz.com)
 * [Nadarei, Inc.](http://nadarei.co) (nadarei.co)
 * [Github](http://github.com/rstacruz) (@rstacruz)
 * [Twitter](http://twitter.com/rstacruz) (@rstacruz)

[rsc]: http://ricostacruz.com
[c]:   http://github.com/rstacruz/flatdoc/contributors
[nd]:  http://nadarei.co

[GitHub pages]: https://pages.github.com
[template]: https://github.com/rstacruz/flatdoc/blob/master/template.html
[GitHub API]: http://github.com/api
[marked]: https://github.com/chjj/marked
