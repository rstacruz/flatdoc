# Scrapers

These are Versus-scrapers endpoints.

## News API

Fetches news articles in a similar way to [NewsAPI](https://newsapi.org/) but from Versus-scrapers

**Endpoint**: versus_scrapers_news_api

**METHOD**: POST

**Required params**

| Field | Type | Location | Description |
| - | - | - | - |
| keywords | Array | body | An array of strings containing the keywords to search  |
| X-Api-Key | String | headers | API Key |

**Optional params**

| Field | Type | Description |
| - | - | - |
| from | String | Search can be limited to this start date "YYYY-MM-DD"  |
| to | String | Search can be limited to this end date "YYYY-MM-DD"  |


**Sample response** 200
```json
{
  "status": "ok",
    "totalResults": 1,
    "keywords": ["akwa ibom"],
    "articles": [
      {
        "source": "PunchNG",
        "author": "PunchNG",
        "title": "Suspected cultists kill police inspector in Akwa Ibom",
        "description": "",
        "url": "https://punchng.com/suspected-cultists-kill-police-inspector-in-akwa-ibom/",
        "urlToImage": "https://cdn.punchng.com/wp-content/uploads/2020/05/11125455/POLICE-NPF-LOGO-EMBLEM.fw_-30x15.png",
        "publishedAt": {
            "value": "2021-02-22T17:06:30"
        },
        "content": "Patrick Odey, UyoSuspected cultists in...",
        "sentiment_score": null,
        "sentiment_class": null,
        "client_ref": null,
        "country": "NG"
      }
    ]
}
```
**Errors**

| Status Code | Error Code | Message |
| - | - | - |
| 400 | parameterMissing | Required parameter keywords is missing from the request and it cannot be completed. |
| 400 | parameterInvalid | You\'ve included a parameter in your request which is currently not supported. keywords should be an array of strings. |
| 401 | apiKeyMissing | Your API key is missing. Use the x-api-key HTTP header
| 401 | apiKeyInvalid | Your API key hasn't been entered correctly. Double check it and try again. |
| 403 | requestMethodInvalid | Only POST requests are allowed |
| 500 | unexpectedError | This shouldn't happen, and if it does then it's our fault, not yours. Try the request again shortly. |
