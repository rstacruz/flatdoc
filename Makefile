UGLIFY := ./node_modules/.bin/uglifyjs --comments "/^!/"
STYLUS := ./node_modules/.bin/stylus -U -u nib

all: \
	flatdoc.js \
	legacy.js \
	theme-white/style.css

watch:
	while true; do make all | grep -v "Nothing"; sleep 1; done

flatdoc.js: src/flatdoc.js vendor/marked.js
	cat $^ | $(UGLIFY) > $@

legacy.js: vendor/html5shiv.js vendor/respond.js
	cat $^ | $(UGLIFY) > $@

%.css: %.styl
	$(STYLUS) < $< > $@

.PHONY: watch
