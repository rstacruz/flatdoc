UGLIFY := ./node_modules/.bin/uglifyjs --comments "/^!/"
STYLUS := ./node_modules/.bin/stylus -U -u nib

all: \
	doclet.js \
	legacy.js \
	theme-white/style.css

watch:
	while true; do make all | grep -v "Nothing"; sleep 1; done

doclet.js: src/doclet.js vendor/marked.js
	cat $^ | $(UGLIFY) > $@

legacy.js: vendor/html5shiv.js vendor/respond.js
	cat $^ | $(UGLIFY) > $@

%.css: %.styl
	$(STYLUS) < $< > $@

.PHONY: watch
