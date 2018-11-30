# Profanity Filter

This function will take a string and return a HTML formattted string with tags that decorate profane words.


> Endpoint: versus_profanity_filter

> Payload

``` javascript
{"text": "What the hell"}
```

> Result
``` html
what the <STRONG CLASS="blacklist">hell</STRONG>
```

