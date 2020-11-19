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
  "response": "",
  "clientRef": ""
}
```

> Result
``` javascript
{
  "response": {
    "campaignRef": "0b3cf5bd-bea9-429b-b374-8f65e5473ed9",
    "questionRef": "c30e78b6-ff88-49a5-91e9-bb7fb46f1455"
    "scoutRef": "ea7ca901-9217-4a04-9af4-3c6c21ccc3a2",
    "response": "response",
    "clientRef": "clientRef"
  }
}
```

## Create Scout

Add a scout - firstName, lastName and phoneNumber are required


> Endpoint: scout_create_scout

> Payload

``` javascript
{
    "firstName": "James",
    "lastName": "Austin",
    "phoneNumber": "+2347023004000",
    "bankName": "Prudential",
    "bankCode": "002",
    "accountNumber": "10-2-200-5",
    "bvn": "bvn",
    "emailAddress": "a@test.com",
    "dob": "2017-12-31",
    "gender": "Female",
    "education": "education",
    "maritalStatus": "maritalStatus",
    "religion": "religion",
    "occupation": "occupation",
    "country": "country",
    "state": "state",
    "language": "English"
}
```

> Result
``` javascript
{
  "scoutRef": "ea7ca901-9217-4a04-9af4-3c6c21ccc3a2"
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
      "campaignName": "Biq Query",
      "campaignRef": "0b3cf5bd-bea9-429b-b374-8f65e5473ed9",
      "clientName": "The Enterprise",
      "clientRef": "nqaXKB0SzWN6xh7RVyzl",
      "country": "NG",
      "description": "Big query",
      "education": null,
      "endAge": 60,
      "endDate": "2020-10-10 00:00:00",
      "gender": null,
      "maritalStatus": null,
      "occupation": null,
      "religion": null,
      "startAge": 20,
      "startDate": "2000-10-10 00:00:00"
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
    {
        "firstName": "firstName",
        "lastName": "lastName",
        "phoneNumber": "phoneNumber",
        "bankName": "bankName",
        "bankCode": "bankCode",
        "accountNumber": "accountNumber",
        "bvn": "bvn",
        "emailAddress": "emailAddress",
        "dob": "dob",
        "gender": "gender",
        "education": "education",
        "maritalStatus": "maritalStatus",
        "religion": "religion",
        "occupation": "occupation",
        "country": "country",
        "state": "state",
        "language": "language",
        "scoutRef": "ea7ca901-9217-4a04-9af4-3c6c21ccc3a2",
        "versusCredits": {
            "canCashOut": false,
            "amount": 0
        },
        "verified": false,
        "twoFA": false
    }
  ]
}
```

## Get Questions

Get the questions associated with a campaign.


> Endpoint: scout_get_questions

> Payload

``` javascript
{
  "docRef": "0b3cf5bd-bea9-429b-b374-8f65e5473ed9"
}
```

> Result
``` javascript
{
  "questions": [
    {
      "campaignName": "campaignRef",
      "campaignRef": "0b3cf5bd-bea9-429b-b374-8f65e5473ed9",
      "clientName": "clientName",
      "clientRef": "clientRef",
      "options": "1,2,3",
      "question": "Big question",
      "questionRef": "c30e78b6-ff88-49a5-91e9-bb7fb46f1455"
    }
  ]
}
```

## Get Responses

Get the responses associated with a question.


> Endpoint: scout_get_questions

> Payload

``` javascript
{
  "docRef": "0b3cf5bd-bea9-429b-b374-8f65e5473ed9"
}
```

> Result
``` javascript
{
  "questions": [
    {
      "campaignRef": "0b3cf5bd-bea9-429b-b374-8f65e5473ed9",
      "questionRef": "c30e78b6-ff88-49a5-91e9-bb7fb46f1455"
      "scoutRef": "ea7ca901-9217-4a04-9af4-3c6c21ccc3a2",
      "response": "response",
      "clientRef": "clientRef"
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
  "docRef": "ea7ca901-9217-4a04-9af4-3c6c21ccc3a2"
}
```

> Result
``` javascript
{
    "firstName": "firstName",
    "lastName": "lastName",
    "phoneNumber": "phoneNumber",
    "bankName": "bankName",
    "bankCode": "bankCode",
    "accountNumber": "accountNumber",
    "bvn": "bvn",
    "emailAddress": "emailAddress",
    "dob": "dob",
    "gender": "gender",
    "education": "education",
    "maritalStatus": "maritalStatus",
    "religion": "religion",
    "occupation": "occupation",
    "country": "country",
    "state": "state",
    "language": "language",
    "scoutRef": "ea7ca901-9217-4a04-9af4-3c6c21ccc3a2",
    "versusCredits": {
        "canCashOut": false,
        "amount": 0
    },
    "verified": false,
    "twoFA": false,
    "requiresBankUpdate": false
}
```

## Create Scout Wallet

Create a Stellar Wallet associated with a Scout.

| Field               | Type   | Description                                                                        |
|---------------------|--------|------------------------------------------------------------------------------------|
| sourceStellarSeed   | string | A Stellar Account funded in XLM to provide the mimimum balance needed for a wallet |
| scoutRef            | string | A unique string to identify a scout, a wallet is created once for each scoutRef    | 

> Endpoint: scout_create_wallet 

> Payload

```json
{
  "sourceStellarSeed": "SCY5QWUU7IGWGVUWYFSPBA2CAYQFYR63QALEIIX3ITYDPLV2AUIY6Q5S",
  "scoutRef": "ea7ca901-9217-4a04-9af4-3c6c21ccc3a2"
}
```

> Result

```json
{
  "walletRef": "FQ0upRkKXT3xdwzzKs6X"
}
```

## Fund a Scout Wallet

Create a Stellar Wallet associated with a Scout.

| Field               | Type   | Description                                                 |
|---------------------|--------|-------------------------------------------------------------|
| sourceStellarSeed   | string | A Stellar Issuing Account to provide at transaction fee     |
| scoutRef            | string | A unique string to used to create a wallet for the scout    | 
| versusCoinCredit    | string | VersusCoin amount formatted as a string to fund the wallet  | 

> Endpoint: scout_fund_wallet

> Payload

```json
{
  "sourceStellarSeed": "SCY5QWUU7IGWGVUWYFSPBA2CAYQFYR63QALEIIX3ITYDPLV2AUIY6Q5S",
  "scoutRef": "ea7ca901-9217-4a04-9af4-3c6c21ccc3a2",
  "versusCoinCredit": "1.05"
}
```

> Result

```json
{
  "status": "ok"
}
```

## Get Banks

Get a list of banks supported by cashout in Nigeria


> Endpoint: scout_get_banks

> Payload

``` javascript
{
  "authstring": "authentication string"
}
```

> Result
``` javascript
{
  "msg":"Successfully obtained banks list",
  "banks":[
    {"name":"Access Bank",
    "slug":"access-bank",
    "code":"044",
    "longcode":"044150149",
    "gateway":"emandate",
    "pay_with_bank":false,
    "active":true,
    "is_deleted":null,
    "country":"Nigeria",
    "currency":"NGN",
    "type":"nuban",
    "id":1,
    "createdAt":"2016-07-14T10:04:29.000Z",
    "updatedAt":"2019-06-18T10:52:46.000Z"
    }
    .
    .
    .
  ]
}
```

## Convert Scout Credits

Convert scout credits to amount in local currency


> Endpoint: scout_convert_amount

> Payload

``` javascript
{
  "authstring": "authentication string",
  "amount": "scout credits to be converted",
  "country": "Two letter alpha-2 ISO code of country for which credit amount is to be converted e.g 'NG'"
}
```

> Result
``` javascript

{
  "message":
  "Successfully converted scout credit",
  "convertedAmount":1628,
  "currency":"NGN"
}
```

## Verify Account Number

Verify that scout bank account number is correct and can recieve funds

> Endpoint: scout_verify_account_number

> Payload

``` javascript
{
  "authstring": "authentication string",
  "accountNumber": "bank account number",
  "bankCode": "bank code - returned from scout_getbanks",
  "bankName": "name of bank - returned from scout_getbanks",
  "phoneNumber": "scount phone number"
}
```

> Result
``` javascript
{
  "message":"Sucessfully verified account number",
  "accountNumber":"1234567890",
  "accountName":"JOHN DOE"
}
```

## Verify Account Number

Verify that scout bank account number is correct and can recieve funds

> Endpoint: scout_verify_account_number

> Payload

``` javascript
{
  "authstring": "authentication string",
  "accountNumber": "bank account number",
  "bankCode": "bank code - returned from scout_getbanks",
  "bankName": "name of bank - returned from scout_getbanks",
  "phoneNumber": "scount phone number"
}
```

> Result
``` javascript
{
  "message":"Sucessfully verified account number",
  "account": {
    "account_number":"1234567890",
    "account_name":"JOHN DOE"
  }
}
```

## Cashout

Cashout scout credits to local currency

> Endpoint: scout_cashout

> Payload

``` javascript
{
  "authstring": "authentication string",
  "accountNumber": "bank account number",
  "amount": "credit amount to be cashed out",
  "country": "NG",
  "phoneNumber": "+2348045634567"
}
```

> Result
``` javascript
{
  "message":"Successfully transferred money to recipient",
  "credits":"50",
  "amount":2714,
  "currency":"NGN",
  "referenceNumber":"b96f5fc7-722b-4f9e-bf81-a114d45f8dc6"
}
```


## get image requests

Get a list of image multimedia requests

> Endpoint: scout_get_image_requests?phoneNumber={phoneNumber}&authString={authString}

> Query params


| parameters | 
| -----------| 
| authstring |
| phoneNumber| 


> Result
``` python
{
  "message": "Successfully obtained image requests",
   "requests":[
      {
        "clientRef": "12345",
        "clientName": "The Enterprise",
        "requestName": "Footage of the Lekki Protest",
        "description": "Let’s get you started with a simple photo request.",
        "requestRef": "a0ad177c-a6d0-44a4-8662-7f2851093b81",
        "country": "NG",
        "stateOrRegion": "Lagos",
        "created": "Thu Nov 12 2020 14:20:50 GMT+0100 (West Africa Standard Time)",
        "endAge": 65,
        "startAge": 16,
        "gender": "female",
        "numberOfRespondents": 500,
        "mediaType": "image",
        "status": "live"
      }
    .
    .
    .
  ]
}
```

## get audio requests

Get a list of audio multimedia requests

> Endpoint: scout_get_audio_requests?phoneNumber={phoneNumber}&authString={authString}

> Query params


| Parameters  | 
| ----------- | 
| authstring  |
| phoneNumber | 


> Result
``` python
{
  "message": "Successfully obtained audio requests",
   "requests":[
      {
        "clientRef": "12345",
        "clientName": "The Enterprise",
        "requestName": "Footage of the Lekki Protest",
        "description": "Let’s get you started with a simple photo request.",
        "requestRef": "a0ad177c-a6d0-44a4-8662-7f2851093b81",
        "country": "NG",
        "stateOrRegion": "Lagos",
        "created": "Thu Nov 12 2020 14:20:50 GMT+0100 (West Africa Standard Time)",
        "endAge": 65,
        "startAge": 16,
        "gender": "female",
        "numberOfRespondents": 500,
        "mediaType": "audio",
        "status": "live"
      }
    .
    .
    .
  ]
}
```

## get video requests

Get a list of video multimedia requests

> Endpoint: scout_get_video_requests?phoneNumber={phoneNumber}&authString={authString}

> Query params

| Parameters  | 
| ----------- | 
| authstring  |
| phoneNumber | 


> Result
``` python
{
  "message": "Successfully obtained video requests",
   "requests":[
      {
        "clientRef": "12345",
        "clientName": "The Enterprise",
        "requestName": "Footage of the Lekki Protest",
        "description": "Let’s get you started with a simple photo request.",
        "requestRef": "a0ad177c-a6d0-44a4-8662-7f2851093b81",
        "country": "NG",
        "stateOrRegion": "Lagos",
        "created": "Thu Nov 12 2020 14:20:50 GMT+0100 (West Africa Standard Time)",
        "endAge": 65,
        "startAge": 16,
        "gender": "female",
        "numberOfRespondents": 500,
        "mediaType": "audio",
        "status": "live"
      }
    .
    .
    .
  ]
}
```
## Get A List Of Multimedia Requests A Scout Is Eligible To Send Responses
Request

Get a list of image multimedia requests

> Endpoint: scout_get_multimedia_requests?phoneNumber={phoneNumber}&authString={authString}

> Query params


| parameters | 
| -----------| 
| authstring |
| phoneNumber| 


> Result
``` python
{
  "message": "Successfully obtained image requests",
   "requests":[
      {
        "clientRef": "12345",
        "clientName": "The Enterprise",
        "requestName": "Footage of the Lekki Protest",
        "description": "Let’s get you started with a simple photo request.",
        "requestRef": "a0ad177c-a6d0-44a4-8662-7f2851093b81",
        "country": "NG",
        "stateOrRegion": "Lagos",
        "created": "Thu Nov 12 2020 14:20:50 GMT+0100 (West Africa Standard Time)",
        "endAge": 65,
        "startAge": 16,
        "gender": "female",
        "numberOfRespondents": 500,
        "mediaType": "image",
        "status": "live"
      }
    .
    .
    .
  ]
}
```

## Multimedia responses

Post multimedia request responses

> Endpoint: scout_add_multimedia_request_response

> Payload

``` python
{
  "requestRef": "12345",
  "scoutRef": "239485855559",
  "mediaUrls":["https://google.api.com/235617"],
  "mediaType":"audio",
}
```

> Result
``` python
{
  "message":"Successfully added multimedia request response",
  "responseRef": "9596869640495837"
}
```

## Responses

Get completed request responses arranged from the most recent.

> Endpoint: scout_get_request_response?phoneNumber={phoneNumber}&authString={authString}

> Query params

| Parameters  | 
| ----------- | 
| authstring  |
| phoneNumber | 


> Result
``` python
{
  "message": "Successfully obtained request responses",
   "requests":[
      {
        "clientRef": "12345",
        "requestRef": "12345",
        "scoutRef": "+2340927738929",
        "mediaUrls":["https://google.api.com/235617"],
        "created": "Thu Nov 12 2020 14:20:50 GMT+0100 (West Africa Standard Time)",
        "mediaType":"audio",
        "status": "pending"
      }
    .
    .
    .
  ]
}
```




