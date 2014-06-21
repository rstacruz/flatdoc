Developer notes
===============

### Distributions

There are 3 official ways to point to flatdoc releases. That is:

    # Specific versions
    # (built using `make v/0.8.1`)
    http://rstacruz.github.io/flatdoc/v/0.8.1/*

    # Latest from the 0.8 series.
    # Updated every time there's a 0.8 release.
    # (built using `make v/0.8`)
    http://rstacruz.github.io/flatdoc/v/0.8/*

    # Latest
    # (built using `make`)
    http://rstacruz.github.io/flatdoc/*

...just replace `*` with `flatdoc.js` (or any of the other support files).

### Notes on structure

 * Distributions are stored in `/v/{version}/*`.
 * CSS files are compiled from Stylus sources.
 * Some js files (like the theme files) are concatenated from other sources.
 * GNU make is used to do compile files.

### Updating files

To build .styl from .css

    make

### Releasing a new version

    npm install

    # update prescribed versions
    perl -p -i -e "s/v\/\d+\.\d+\.\d+/v\/0.9.0/g" templates/*.html Readme.md
    bump package.json
    git diff

    # build files
    make
    make v/0.9
    make v/0.9.0

    # add release date
    vim History.md
    git release 0.8.1
