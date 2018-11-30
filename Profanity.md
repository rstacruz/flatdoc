# Profanity Filter

This function will take a string and return a HTML formatted string with tags that decorate profane words.

| Field     | Type       | Description                                  |
|-----------|------------|----------------------------------------------|
|  text     | string     | the string to be formatted                   |
|           |            |                                              |


> Endpoint: versus_profanity_filter

> Payload

``` javascript
{"text": "What the hell"}
```

> Result
``` html
what the <STRONG CLASS="blacklist">hell</STRONG>
```

