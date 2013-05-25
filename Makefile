UGLIFY := ./node_modules/.bin/uglifyjs --comments "/^!/"

all: \
	doclet.js \
	legacy.js

doclet.js: src/doclet.js vendor/marked.js
	cat $^ | $(UGLIFY) > $@

legacy.js: vendor/html5shiv.js vendor/respond.js
	cat $^ | $(UGLIFY) > $@

vendor: \
	vendor/html5shiv.js \
	vendor/marked.js \
	vendor/respond.js

vendor/html5shiv.js:
	wget "https://raw.github.com/aFarkas/html5shiv/master/dist/html5shiv.js" -q -O $@

vendor/marked.js:
	wget "https://github.com/chjj/marked/raw/master/lib/marked.js" -q -O $@

vendor/respond.js:
	wget "https://github.com/scottjehl/Respond/raw/master/respond.src.js" -q -O $@
