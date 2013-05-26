Development notes
=================

### Auto-generate files
This will (re-) build auto-generated files (stylus, etc).

    $ make [-B]

### Update vendor files
This will download files.

    $ cd vendor; make *.js

### Make a release
This will concat/compress things into a build in `/v/0.8.0`.

    $ make v/0.8.0

Todo
----

- Sectioning
- Titlecard (in progress)
- Actual readme (in progress)

Done:

- Menus
- IDs
- Syntax highlighting
- GitHub fetch
- Error handling
