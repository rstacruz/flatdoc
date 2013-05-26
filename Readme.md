Flatdoc
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
  <!-- Flatdoc -->
  <script src='http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js'></script>
  <script src='http://rstacruz.github.io/flatdoc/flatdoc.build.js'></script>

  <!-- Flatdoc theme -->
  <link  href='http://rstacruz.github.io/flatdoc/theme.white/style.css' rel='stylesheet'>
  <script src='http://rstacruz.github.io/flatdoc/theme.white/script.js'></script>

  <!-- Initializer -->
  <script>
    Flatdoc.run({
      fetcher: Flatdoc.github('rstacruz/reponame')
    });
  </script>
</head>
<body>
  <div role='flatdoc-menu'></div>
  <div role='flatdoc-content'></div>
</body>
```

Options
-------

### fetcher

A fetcher function.

``` js
fetcher: Flatdoc.ajax('Readme.md')
```

### super

Do things.

This is *the* most convenient way to set up your CSS/JS (and images) in a 
[Sinatra](http://sinatrarb.com) app. Seriously. No need for crappy routes to 
render Sass or whatever. No-siree!

1. Drop your assets into `/app` like so (you can configure directories don't worry):
   * JavaScript/CoffeeScript files in `/app/js`
   * CSS/Sass/Less/CSS files in `/app/css`
   * Images into `/app/images`
3. Add `register Sinatra::AssetPack` and set up options to your app (see below)
4. Use `<%= css :application %>` to your layouts. Use this instead of
   messy *script* and *link* tags
5. BOOM! You're in business baby!

Installation
------------

Sinatra AssetPack is a simple Ruby gem. You can install it via `gem install`.

``` console
$ gem install sinatra-assetpack
```

#### Bundler users
If you use Bundler, you will need to add it to your *Gemfile*.

``` ruby
gem 'sinatra-assetpack', :require => 'sinatra/assetpack'
```


Setup
-----

Install the plugin and add some options. (Feel free to omit the *Optional* 
    items, they're listed here for posterity):

``` ruby
require 'sinatra/assetpack'

class App < Sinatra::Base
  set :root, File.dirname(__FILE__)
  register Sinatra::AssetPack

  assets {
    serve '/js',     from: 'app/js'        # Optional
    serve '/css',    from: 'app/css'       # Optional
    serve '/images', from: 'app/images'    # Optional

    # The second parameter defines where the compressed version will be served.
    # (Note: that parameter is optional, AssetPack will figure it out.)
    js :app, '/js/app.js', [
      '/js/vendor/**/*.js',
      '/js/app/**/*.js'
    ]

    css :application, '/css/application.css', [
      '/css/screen.css'
    ]

    js_compression  :jsmin      # Optional
    css_compression :sass       # Optional
  }
end
```

#### Using in layouts
In your layouts, use the `css` and `js` helpers:
*(Use haml? Great! Use `!= css :youreawesome` instead.)*

``` erb
<%= css :application, :media => 'screen' %>
<%= js  :app %>
```


And then what?
--------------

#### Development mode
If you're on **development** mode, it serves each of the files as so:

``` html
<link rel='stylesheet' href='/css/screen.849289.css' media='screen' type='text/css' />
<script type='text/javascript' src='/js/vendor/jquery.283479.js'></script>
<script type='text/javascript' src='/js/vendor/underscore.589491.js'></script>
<script type='text/javascript' src='/js/app/main.589491.js'></script>
```

#### Production mode
If you're on **production** mode, it serves a compressed version in the URLs you specify:

``` html
<link rel='stylesheet' href='/css/application.849289.css' media='screen' type='text/css' />
<script type='text/javascript' src='/js/app.589491.js'></script>
```

Features
--------

 * __CoffeeScript support__ Just add your coffee files in one of the paths 
 served (in the example, `app/js/hello.coffee`) and they will be available as JS 
 files (`http://localhost:4567/js/hello.js`).

 * __Sass/Less/SCSS support__ Works the same way. Place your dynamic CSS files 
 in there (say, `app/css/screen.sass`) and they will be available as CSS files 
 (`http://localhost:4567/css/screen.css`).

 * __Cache busting__ the `css` and `js` helpers automatically ensures the URL 
 is based on when the file was last modified. The URL `/js/jquery.js` may be 
 translated to `/js/jquery.8237898.js` to ensure visitors always get the latest 
 version.

 * __Images support__ Image filenames in your CSS will automatically get a 
 cache-busting suffix (eg, `/images/icon.742958.png`).

 * __Embedded images support__ You can embed images in your CSS files as 
 `data:` URIs by simply adding `?embed` to the end of your URL.

 * __No intermediate files needed__ You don't need to generate compiled files.
 You can, but it's optional. Keeps your source repo clean!

 * __Auto minification (with caching)__ JS and CSS files will be compressed as 
 needed.

 * __Heroku support__ Oh yes. That's right.

Compressors
-----------

By default, AssetPack uses [JSMin](http://rubygems.org/gems/jsmin) for JS 
compression, and simple regexes for CSS compression. You can specify other
compressors in the `assets` block:

``` ruby
assets {
  js_compression  :jsmin    # :jsmin | :yui | :closure | :uglify
  css_compression :simple   # :simple | :sass | :yui | :sqwish
}
```

### YUI Compressor

This uses Yahoo's Java-powered YUI compressor. For YUI compression, you need the 
YUI compressor gem (`gem install yui-compressor`).

``` ruby
assets {
  js_compression  :yui
  js_compression  :yui, :munge => true   # Munge variable names

  css_compression :yui
}
```

__Note:__ This depends on the `yui-compressor` gem. You will need to install it.
(`gem install yui-compressor`) If you use Bundler, you will need to add it to 
your Gemfile as well.

``` ruby
# Gemfile
gem 'yui-compressor', :require => 'yui/compressor'
```

### SASS compression

For SASS compression, you need the Sass gem (`gem install sass`). This treats 
the CSS files as Scss files and uses Sass's `:output => :compressed`.

``` ruby
assets {
  css_compression :sass
}
```

__Note:__ This depends on the `sass` gem. You will need to install it (`gem
install sass`). If you use Bundler, you will need to add it to your Gemfile as 
well.

``` ruby
# Gemfile
gem 'sass'
```

### Sqwish CSS compression

[Sqwish](http://github.com/ded/sqwish) is a NodeJS-based CSS compressor.  To use 
Sqwish with AssetPack, install it using `npm install -g sqwish`. You need NodeJS 
and NPM installed.

``` ruby
assets {
  css_compression :sqwish
  css_compression :sqwish, :strict => true
}
```

### Google Closure compression

This uses the [Google closure compiler 
service](http://closure-compiler.appspot.com/home)
to compress your JavaScript. Available levels are:

* `WHITESPACE_ONLY`
* `SIMPLE_OPTIMIZATIONS`
* `ADVANCED_OPTIMIZATIONS`

``` ruby
assets {
  js_compression :closure
  js_compression :closure, :level => "SIMPLE_OPTIMIZATIONS"
}
```

### UglifyJS compression

This uses the [UglifyJS](https://github.com/mishoo/UglifyJS) compressor to 
compress your JavaScript. You will need to install the 
[uglifier](http://rubygems.org/gems/uglifier) gem.

For options, refer to the [Uglifier 
documentation](https://github.com/lautis/uglifier).

``` ruby
assets {
  js_compression :uglify
  js_compression :uglify, [options]
}
```

__Note:__ This depends on the `uglifier` gem. In your Gemfile, you will need to 
add it. For Heroku support, you will need to add the `therubyracer-heroku` gem 
as well.

``` ruby
# Gemfile
gem 'uglifier'

# If you're on Heroku:
gem "therubyracer-heroku", "0.8.1.pre3", :require => false
```


Images
------

To show images, use the `img` helper.
This automatically adds width, height, and a cache buster thingie.
ImageMagick is required to generate full image tags with width and height.

``` html
<!-- Original: --> <%= img '/images/email.png' %>
<!-- Output:   --> <img src='/images/email.873842.png' width='16' height='16' />
```

#### URL translation
In your CSS files, `url()`'s will automatically be translated.

``` css
/* Original: */    .email { background: url(/images/email.png); }
/* Output:   */    .email { background: url(/images/email.6783478.png); }
```

#### Image embedding
Want to embed images as `data:` URI's? Sure! Just add `?embed` at the end of the 
URL.

``` css
/* Original: */    .email { background: url(/images/email.png?embed); }
/* Output:   */    .email { background: url(data:image/png;base64,NF8dG3I...); } 
```

Need to build the files?
------------------------

Actually, you don't need to—this is optional! But add this to your `Rakefile`:

``` ruby
# Rakefile
APP_FILE  = 'app.rb'
APP_CLASS = 'App'

require 'sinatra/assetpack/rake'
```

#### Invoking
Now invoke the `assetpack:build` Rake task. This will create files in `/public`.

    $ rake assetpack:build


API reference
-------------

#### Assets block
All configuration happens in the `assets` block. You may invoke it in 2 ways:

``` ruby
class App < Sinatra::Base
  register Sinatra::AssetPack

  # Style 1
  assets do
    css :hello, [ '/css/*.css' ]
    js_compression :yui
  end

  # Style 2
  assets do |a|
    a.css :hello, ['/css/*.css' ]
    a.js_compression :yui
  end
end
```

#### Getting options
Invoking it without a block allows you to access the options. This works for 
almost all the options, with the exception for `css`, `js` and `serve`.

``` ruby
App.assets
App.assets.js_compression   #=> :yui
```

### assets.serve

Serves files from `LOCALPATH` in the URI path `PATH`. Both parameters are 
required.

``` ruby
# Usage
serve 'PATH', :from => 'LOCALPATH'
```

#### Example
This makes `/app/javascripts/vendor/jquery.js`
available as `http://localhost:4567/js/vendor/jquery.js`.

``` ruby
serve '/js', from: '/app/javascripts'
```

### assets.js\_compression<br>assets.css\_compression

Sets the compression engine to use for JavaScript or CSS. This defaults to 
`:jsmin` and `:simple`, respectively.

If `OPTIONS_HASH` is given as a hash, it sets options for the engine to use.

``` ruby
# Usage:
assets {
  js_compression :ENGINE
  js_compression :ENGINE, OPTIONS_HASH
  css_compression :ENGINE
  css_compression :ENGINE, OPTIONS_HASH
}
```

#### Examples
Yo seriously check this out: the first line uses Sqwish with it's defaults, and 
the second line uses Sqwish with it's magic.

``` ruby
assets {
  css_compression :sqwish
  css_compression :sqwish, :strict => true
}
```

### assets.js\_compression\_options<br>assets.css\_compression\_options

Sets the options for the compression engine to use. This is usually not needed 
as you can already set options using `js_compression` and `css_compression`.

``` ruby
# Usage:
assets {
  js_compression_options HASH
  css_compression_options HASH
}
```

#### Example
This sets the option for `:munge` for the CSS compression engine.

``` ruby
css_compression_options :munge => true
```

### assets.css<br>assets.js

Adds packages to be used.

The `NAME` is a symbol defines the ID for that given package that you can use 
for the helpers. That is, If a CSS package was defined as `css :main, [ ... ]`, 
then you will need to use `<%= css :main %>` to render it in views.

the `URI` is a string that defines where the compressed version will be served.
It is optional. If not provided, it will default to `"/assets/name.type"` (eg:
`/assets/main.css`).

the `PATHs` is an array that defines files that will be served. Take note that 
this is an array of URI paths, not local paths.

If a `PATH` contains wildcards, it will be expanded in alphabetical order.
Redundancies will be taken care of.

``` ruby
# Usage:
assets {
  css :NAME, [ PATH1, PATH2, ... ]
  css :NAME, 'URI', [ PATH1, PATH2, ... ]
  js:NAME, [ PATH1, PATH2, ... ]
  js:NAME, 'URI', [ PATH1, PATH2, ... ]
}
```

#### Example
In this example, JavaScript files will be served compressed as 
`/js/application.js` (default since no `URI` is given). The files will be taken 
from `./app/javascripts/vendor/jquery*.js`.

``` ruby
class App < Sinatra::Base
  assets {
    serve '/js', from: '/app/javascripts'
    js :application, [
      '/js/vendor/jquery.*.js',
      '/js/vendor/jquery.js'
    ]
  }
end

# In views: <%= js :application %>
```

### assets.ignore
Excludes any URL paths that match the given spec.

These files will not show up in packages, and they will not be accessible.

By default, `.*` and `_*` are ignored. The former protects folders such as 
`.svn` from being accessed, and the latter protects Sass partial files from 
being accessed directly.

Note that this matches against URL paths, not local file paths. This means 
something like `*.scss` will not work, as all stylesheet files will be compiled 
to `.css`.

``` ruby
# Usage:
assets {
  ignore FILESPEC
}
```

#### Example
Here's an example.

``` ruby
class App < Sinatra::Base
  assets {
    # Ignores all files matching *.private.js in any folder.
    ignore '*.private.js'

    # Ignores all files in `/app/js/foo/**/*`
    ignore '/js/foo'
  }
end
```

#### Advanced usage
By default, `.*` and `_*` are ignored. To disable this behavior, you can use 
`clear_ignores!` before your `ignore` lines.

``` ruby
assets {
  clear_ignores!
  ignore '*.private.js'
}
```

To check if a certain file is ignored, use `assets.ignore?`

``` ruby
assets.ignored?("/css/_chrome.css")   #=> true
```


### assets.prebuild
Caches the built packages on application startup.

If this is not used, the packages will be minified when they are first 
requested. This only has an effect in the production environment (or when
Sinatra's `reload_templates` is otherwise set to false).

``` ruby
# Usage:
prebuild {true|false}
```

#### Example
In this example, the package for `:application` will be built when the 
application is started in the production environment.

``` ruby
class App < Sinatra::Base
  assets {
    js_compression :closure

    js :application, [
      '/js/vendor/jquery.*.js',
      '/js/vendor/jquery.js'
    ]
    prebuild true
  }
end

# $ RACK_ENV=production ruby app.rb
# ** Building /assets/application.js...
# == Sinatra/1.2.6 has taken the stage on 4567 for production
# >> Thin web server (v1.2.11 codename Bat-Shit Crazy)
# >> Maximum connections set to 1024
# >> Listening on 0.0.0.0:4567, CTRL+C to stop
```

API reference: helpers
----------------------

These are helpers you can use in your views.

### <%= css %>

Shows a CSS package named `PACKAGE`. If `OPTIONS_HASH` is given, they will we 
passed onto the `<link>` tag to be generated as attributes.

You may specify as many packages as you need, as shown in the second usage line.

``` ruby
# Usage:
<%= css :PACKAGE %>
<%= css :PACKAGE_1, :PACKAGE_2, ...  :PACKAGE_N, OPTIONS_HASH %>
<%= css :PACKAGE, OPTIONS_HASH %>
```

#### Example 1
This links to the `main` stylesheet for *screen* media.

``` erb
<%= css :main, media: 'screen' %>

<!-- Output: -->
<link rel='stylesheet' type='text/css' href='/css/main.873984.css' media='screen' />
```

#### Example 2
You may also invoke it with multiple packages.

``` erb
<%= css :base, :app, :main, media: 'screen' %>

<!-- Output: -->
<link rel='stylesheet' type='text/css' href='/css/base.873984.css' media='screen' />
<link rel='stylesheet' type='text/css' href='/css/app.873984.css' media='screen' />
<link rel='stylesheet' type='text/css' href='/css/main.873984.css' media='screen' />
```

### <%= js %>

Same as `css`, but obviously for JavaScript. You may also specify as many packages as you need, just with `css`.

``` erb
# Usage:
<%= js :PACKAGE %>
<%= js :PACKAGE_1, :PACKAGE_2, ...  :PACKAGE_N, OPTIONS_HASH %>
<%= js :PACKAGE, OPTIONS_HASH %>
```

#### Example
This example embeds the *main* package with an ID.

``` erb
<%= js :main, id: 'main_script' %>

<!-- Output: -->
<script type='text/javascript' src='/js/main.783439.js' id='main_script'></script>
```

### <%= img %>

Shows an `<img>` tag from the given `SRC`. If the images is found in the asset 
directories (and ImageMagick is available), `width` and `height` attributes will 
be added.

``` ruby
# Usage:
img 'SRC'
img 'SRC', OPTIONS_HASH
```

If `OPTIONS_HASH` is given, they will we passed onto the `<img>` tag to be 
generated as attributes.

#### Example
This example renders an image with an alt tag.

``` erb
<%= img '/images/icon.png', alt: 'Icon' %>

<!-- Output: -->
<img src='/images/icon.834782.png' width='24' height='24' alt='Icon' />`
```

Need Compass support?
---------------------

No, AssetPack doesn't have built-in [Compass](http://compass-style.org) support, 
but you can use [Sinatra Support](http://sinefunc.com/sinatra-support).

For an example of how to use AssetPack with Compass, including on how to use it 
to generate image [sprites][compsprite], see the [Compass example 
application.][compex]

[compex]: https://github.com/rstacruz/sinatra-assetpack/tree/master/examples/compass
[compsprite]: http://compass-style.org/reference/compass/utilities/sprites/

``` ruby
# gem install sinatra/support
Encoding.default_external = 'utf-8'
require 'sinatra/support'

class Main
  register Sinatra::CompassSupport
end
```

Acknowledgements
----------------

© 2011, Rico Sta. Cruz. Released under the [MIT 
License](http://www.opensource.org/licenses/mit-license.php).

Sinatra-AssetPack is authored and maintained by [Rico Sta. Cruz][rsc] with help 
from it's [contributors][c]. It is sponsored by my startup, [Sinefunc, Inc][sf].

 * [My website](http://ricostacruz.com) (ricostacruz.com)
 * [Sinefunc, Inc.](http://sinefunc.com) (sinefunc.com)
 * [Github](http://github.com/rstacruz) (@rstacruz)
 * [Twitter](http://twitter.com/rstacruz) (@rstacruz)

[rsc]: http://ricostacruz.com
[c]:   http://github.com/rstacruz/sinatra-assetpack/contributors
[sf]:  http://sinefunc.com
