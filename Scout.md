# Scout

Endpoints for Versus Scouts

## Add Response

Add a response to a question.


> Endpoint: scout_add_response

> Payload

``` javascript
{
  "cRef": "",
  "qRef": "",
  "sRef": "",
  "response": ""
}
```

> Result
``` javascript
{
  "response": {
    "value": ""
  }
}
```

## Create Scout

Add a scout


> Endpoint: scout_create_scout

> Payload

``` javascript
{
  "firstName": "Kemdi",
  "lastName": "Ebi",
  "phoneNumber": "08136260795",
  "bankName": "EcoBank",
  "accountNumber": "07097533321",
  "bvn": "202020202020"
}
```

> Result
``` javascript
{
  "docRef": "APeORvgxRox2YwzESeZK"
}
```

## Get Campaigns

Get all campaigns on the system


> Endpoint: scout_get_campaigns

> Payload

``` javascript
{}
```

> Result
``` javascript
{
  "campaigns": [
    {
      "startDate": "2019-01-01",
      "description": "Campaign for McScoutie",
      "campaignName": "First Campaign",
      "startAge": 18,
      "country": "Nigeria",
      "endAge": 65,
      "clientRef": "nqaXKB0SzWN6xh7RVyzl",
      "clientName": "The Enterprise",
      "endDate": "2019-03-30",
      "docRef": "WXGj5wfVS6DKpyecChYm"
    }
  ]
}
```

## Get DocRef

Get a Scout reference given a phoneNumber.


> Endpoint: scout_get_docref

> Payload

``` javascript
{
  "phoneNumber": "08023004000"
}
```

> Result
``` javascript
{
  "scouts": [
    "4XhTtoWg0Yg7q4PSVXOU"
  ]
}
```

## Get Questions

Get the questions associated with a campaign.


> Endpoint: scout_get_questions

> Payload

``` javascript
{
  "docRef": "WXGj5wfVS6DKpyecChYm"
}
```

> Result
``` javascript
{
  "questions": [
    {
      "question": "Are you a scout?",
      "options": "Yes, No",
      "docRef": "kVjTjvEEwk18sLH5RmZX"
    }
  ]
}
```

## Get Scout

Get a scout given the docRef


> Endpoint: scout_get_scout

> Payload

``` javascript
{
  "docRef": "APeORvgxRox2YwzESeZK"
}
```

> Result
``` javascript
{
  "gender": "",
  "bvn": "202020202020",
  "religion": "",
  "occupation": "",
  "firstName": "Kemdi",
  "country": "",
  "bankName": "EcoBank",
  "emailAddress": "",
  "lastName": "Ebi",
  "accountNumber": "07097533321",
  "age": "",
  "education": "",
  "twoFA": false,
  "maritalStatus": "",
  "state": "",
  "verified": false,
  "versusCredits": {
    "amount": 0,
    "canCashOut": false
  },
  "phoneNumber": "08136260795"
}
```