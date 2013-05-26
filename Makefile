UGLIFY := ./node_modules/.bin/uglifyjs --comments "/^!/"
STYLUS := ./node_modules/.bin/stylus -U -u nib

all: \
	flatdoc.js \
	legacy.js \
	theme-white/style.css

watch:
	while true; do make all | grep -v "Nothing"; sleep 1; done

flatdoc.js: src/flatdoc.js vendor/marked.js
	cat $^ > $@

legacy.js: vendor/html5shiv.js vendor/respond.js
	cat $^ > $@

%.css: %.styl
	$(STYLUS) < $< > $@

# $ make v/0.1.0
# Makes a distribution.
#
v/%: flatdoc.js
	mkdir -p $@
	$(UGLIFY) < flatdoc.js > $@/flatdoc.js
	$(UGLIFY) < legacy.js > $@/legacy.js
	mkdir -p $@/theme-white
	$(UGLIFY) < theme-white/script.js > $@/theme-white/script.js
	cp theme-white/style.css $@/theme-white

.PHONY: watch
