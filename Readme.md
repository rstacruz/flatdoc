Flatdoc
=======

Documentation generator.

Getting started
---------------

Simply create a file based on the template, which has a bare DOM, link to the
scripts, and a link to a theme. It will look something like this (not exact).

[View template >](http://foo.com) *Opens in new window*

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
