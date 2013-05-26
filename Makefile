UGLIFY := ./node_modules/.bin/uglifyjs --comments "/^!/"
STYLUS := ./node_modules/.bin/stylus -U -u nib
DOX := ./node_modules/.bin/dox

all: \
	flatdoc.js \
	legacy.js \
	theme-white/style.css \
	theme-white/script.js \
	Reference.md

watch:
	while true; do make all | grep -v "Nothing"; sleep 1; done

# Main distribution
flatdoc.js: \
	src/flatdoc.js \
	vendor/marked.js \
	vendor/base64.js
	cat $^ > $@

# Legacy shims for IE
legacy.js: \
	support/legacy-header.js \
	vendor/html5shiv.js \
	vendor/respond.js
	cat $^ > $@

%.css: %.styl
	$(STYLUS) < $< > $@

theme-white/script.js: \
	theme-white/setup.js \
	vendor/jquery.scrollagent.js \
	vendor/jquery.anchorjump.js \
	vendor/jquery.fillsize.js
	cat $^ > $@

Reference.md: src/flatdoc.js
	$(DOX) -r < $< | node support/dox2md.js --default-level 3 > $@

# $ make v/0.1.0
# Makes a distribution.
#
v/%: all
	mkdir -p $@
	$(UGLIFY) < flatdoc.js > $@/flatdoc.js
	$(UGLIFY) < legacy.js > $@/legacy.js
	cp template.html blank.html $@/
	mkdir -p $@/theme-white
	cp theme-white/style.css $@/theme-white
	cp theme-white/script.js $@/theme-white

.PHONY: watch
