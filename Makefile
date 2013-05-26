UGLIFY := ./node_modules/.bin/uglifyjs --comments "/^!/"

all: \
	doclet.js \
	legacy.js

watch:
	while true; do make all | grep -v "Nothing"; sleep 1; done

doclet.js: src/doclet.js vendor/marked.js
	cat $^ | $(UGLIFY) > $@

legacy.js: vendor/html5shiv.js vendor/respond.js
	cat $^ | $(UGLIFY) > $@

.PHONY: watch
