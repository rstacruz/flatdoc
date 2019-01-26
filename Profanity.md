# Profanity Filter

This function will take a string and return a HTML formatted string with tags that decorate profane words. The payload has the following parameters.

| Field | Type   | Description                         |
|-------|--------|-------------------------------------|
| text  | string | the field to be formatted into HTML |
|       |        |                                     |
|       |        |                                     |


> Endpoint: versus_profanity_filter

> Payload

``` prettyprint linenums:1
{
    "text": "What the hell"
}
```

> Result
``` html
what the <STRONG CLASS="blacklist">hell</STRONG>
```

