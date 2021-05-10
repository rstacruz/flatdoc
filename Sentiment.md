# Sentiment API reference

This has two endpoints for getting sentiments analysis results for tweets

## Twitter Bulk Sentiment

This function analyzes `articles(tweets)` in bulk (it takes an array of tweets) and sends back their sentiment results in bulk (in array)

**Required Parameters**

| Field     | Type   | Description                         |
|-----------|--------|-------------------------------------|
| authtoken | string | The Authorization token             |
| articles  | array  | An array of tweets texts            |


> Endpoint: https://us-central1-versus-dev-212614.cloudfunctions.net/twitter_bulk_sentiment

> Payload

```json
{
  "authtoken": "KXiJfTdkXRjsKqodwAQckv9TpXPm3ahHqjsFHJCVZWrLbWqtyAYg3XXhGFj7iQUd",
  "articles": [
    "The board of directors, meeting this Wednesday morning, has decided to formally communicate to the Super League and the rest of the founding clubs its decision not to finally formalise its adherence to the project.",
    "Is there a ride-hailing service in Gabon? Yes, Gozem just launched there this week."
  ]
}
```
`articles` is an array of the content you want to get sentiment on

> Response
```json
[
  {
    "classes": [
      "0",
      "1",
      "2"
    ],
    "scores": [
      0.1801636666059494,
      0.29152658581733704,
      0.5283097624778748
    ]
  },
  {
    "classes": [
      "0",
      "1",
      "2"
    ],
    "scores": [
      0.3405248522758484,
      0.13876305520534515,
      0.5207120180130005
    ]
  }
]
```
The result is an array of objects, one object for each entry in the articles array. The object has two elements: 

`classes` is an array of  0 : *negative*, 1 : *neutral*, 2 : *positive*. 

`scores` is an array of the probability of each class. You will need to find the index of the largest number for the sentiment. For example, both objects have scores[2] as the largest number!



## Twitter Sentiment

This function takes an `article`, analyzes it, and returns a sentiment result

**Required Parameters**

| Field     | Type   | Description                         |
|-----------|--------|-------------------------------------|
| authtoken | string | The Authorization token             |
| article   | string | A  tweet text                      |

> Endpoint:  https://us-central1-versus-dev-212614.cloudfunctions.net/twitter_sentiment

> Payload

```json
{
  "authtoken": "KXiJfTdkXRjsKqodwAQckv9TpXPm3ahHqjsFHJCVZWrLbWqtyAYg3XXhGFj7iQUd",
  "article": "Is there a ride-hailing service in Gabon? Yes, Gozem just launched there this week."
}
```

`article` is the content you want to get sentiment on


> Response

```json
{
    "classes": [
      "0",
      "1",
      "2"
    ],
    "scores": [
      0.3405248522758484,
      0.13876305520534515,
      0.5207120180130005
    ]
  }
```
The result is an object with two elements:

`classes` is an array of  0 : *negative*, 1 : *neutral*, 2 : *positive*. 

`scores` is an array of the probability of each class. You will need to find the index of the largest number for the sentiment. For example, the object has scores[2] as the largest number!