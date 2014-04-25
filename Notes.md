Developer notes
===============

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
    perl -p -i -e "s/0\.8\.0/0\.8\.1/g" templates/*.html Readme.md
    git diff

    # build files
    make
    make v/0.8.1

    # update version
    bump package.json

    # add release date
    vim History.md
    git release 0.8.1
