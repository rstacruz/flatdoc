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

vendor: \
	vendor/html5shiv.js \
	vendor/marked.js \
	vendor/respond.js \
	vendor/jquery.js

vendor/html5shiv.js:
	wget "https://raw.github.com/aFarkas/html5shiv/master/dist/html5shiv.js" -q -O $@

vendor/marked.js:
	wget "https://github.com/chjj/marked/raw/master/lib/marked.js" -q -O $@

vendor/respond.js:
	wget "https://github.com/scottjehl/Respond/raw/master/respond.src.js" -q -O $@

vendor/jquery.js:
	wget "http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" -q -O $@

.PHONY: watch
