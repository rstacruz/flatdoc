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

**Endpoint**: scout_create_scout

**Method**: POST

**Payload**

```json
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
  "language": "English",
  "source": "webApp" // enum "ussd", "androidApp"
}
```

> Result
```json
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
      "startDate": "2000-10-10 00:00:00",
      "versusCreditsAccruing": 0
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

| Field | Type | Required | Description |
| - | - | - | - |
| docRef | string | required | A unique identifier of the campaign |
| scoutRef | string | optional | Scout unique identifier |



**Endpoint** scout_get_questions

**Method** POST
 
**Sample payload**
``` json
{
  "docRef": "a0ad177c-a6d0-44a4-8662-7f2851093b81",
  "scoutRef": "+2341234567890"
}
```

**Result**
``` json
{
  "message": "Successfully obtained questions",
  "questions": [
        {
            "questionRef": "9d2eb846-41f9-4745-af85-6d0a9951ecdc",
            "campaignRef": "a0ad177c-a6d0-44a4-8662-7f2851093b81",
            "clientRef": "nqaXKB0SzWN6xh7RVyzl",
            "campaignName": "Demographics Survey",
            "clientName": "The Enterprise",
            "question": "What is your highest education level?",
            "options": {
                "range": [],
                "options_list": [
                    "No schooling completed",
                    "Nursery school to 8th grade",
                    "Some high school no diploma",
                    "High school graduate diploma or the equivalent (for example: GED)",
                    "Some college credit no degree",
                    "Trade/technical/vocational training",
                    "Associate degree",
                    "Bachelors degree",
                    "Masters degree",
                    "Professional degree",
                    "Doctorate degree"
                ],
                "unit": "single_select",
                "type": "multiplechoice"
            },
            "sequence": null,
            "optionsListNG": [],
            "optionsListGH": [],
            "optionsListKE": [],
            "optionsUnitNG": null,
            "optionsUnitGH": null,
            "optionsUnitKE": null,
            "optionsUnitTZ": null,
            "optionsListTZ": []
        }
  ]
}
```

**Errors**

* 400 - Invalid param | Missing docRef
* 404 - Scout does not exist
* 500 - Error obtaining scout | error encountered while reading from db


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


## Get Image Requests

Get a list of multimedia requests of mediaType _image_ a scout is eligible to send responses.

**Endpoint** 
scout_get_image_requests

**Method** 
GET

**Query params**

| Field | Type | Description |
| - | - | - |
| phoneNumber | string | Scout unique identifier |
| authString | string | Authentication string |


> Sample response
``` json
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
        "status": "live",
        "versusCreditsAccruing": 2
      }
    .
    .
    .
  ]
}
```

**Errors**

* 400 - Only GET requests are allowed | Missing query parameter | Invalid param
* 401 - Invalid authstring
* 403 - Scout is unverified | Scout is missing demographic field
* 404 - Scout does not exist | There are no image requests
* 500 - Error obtaining image requests


## Get Audio Requests

Get a list of multimedia requests of mediaType _audio_ a scout is eligible to send responses.

**Endpoint** 
scout_get_audio_requests

**Method** 
GET

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
        "status": "live",
        "versusCreditsAccruing": 2
      }
    .
    .
    .
  ]
}
```

**Errors**

* 400 - Only GET requests are allowed | Missing query parameter | Invalid param
* 401 - Invalid authstring
* 403 - Scout is unverified | Scout is missing demographic field
* 404 - Scout does not exist | There are no audio requests
* 500 - Error obtaining audio requests


## Get Video Requests

Get a list of multimedia requests of mediaType _video_ a scout is eligible to send responses.

**Endpoint** 
scout_get_video_requests

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
        "status": "live",
        "versusCreditsAccruing": 2
      }
    .
    .
    .
  ]
}
```

**Errors**

* 400 - Only GET requests are allowed | Missing query parameter | Invalid param
* 401 - Invalid authstring
* 403 - Scout is unverified | Scout is missing demographic field
* 404 - Scout does not exist | There are no video requests
* 500 - Error obtaining video requests

## Get Multimedia Requests

Get a list of multimedia requests a scout is eligible to send responses.

**Endpoint** 
scout_get_multimedia_requests

**Method** 
GET

**Query params**

| Field | Type | Description |
| - | - | - |
| phoneNumber | string | Scout unique identifier |
| authString | string | Authentication string |


> Sample response
``` json
{
  "message": "Successfully obtained multimedia requests",
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
      "spotsLeft": 500,
      "mediaType": "image",
      "status": "live",
      "versusCreditsAccruing": 2
    }
  ]
}
```

**Errors**

* 400 - Only GET requests are allowed | Missing query parameter | Invalid param
* 401 - Invalid authstring
* 403 - Scout is unverified | Scout is missing demographic field
* 404 - Scout does not exist | There are no multimedia requests
* 500 - Error obtaining multimedia requests


## Add Multimedia Response

Add multimedia request responses

| Field | Type | Description |
| - | - | - |
| requestRef | string | A unique identifier of the request for which a response is to be sent |
| scoutRef | string | A unique identifier of the scout sending the response |
| mediaType | string | The type of media the response is made of. `image`, `audio` or `video`
| mediaUrls | array | An array of (string) URL(s) pointing to the location which the response media is stored | 
| authstring | string | Authentication string |

> Endpoint: scout_add_multimedia_request_response

> Method: POST

> Sample payload

``` json
{
  "requestRef": "12345",
  "scoutRef": "239485855559",
  "mediaUrls":["https://google.api.com/235617"],
  "mediaType":"audio",
  "authstring": "123567890987654321"
}
```

> Sample response
``` json
{
  "message":"Successfully added multimedia request response",
  "responseRef": "9596869640495837"
}
```

**Errors**

* 400 - Missing parameter requestRef | Invalid param mediaUrls. Should be array of strings | Wrong mediaType. Request is for audio | Failed authentication. Authstring invalid or not found in request body
* 403 - Only POST requests are allowed
* 404 - Multimedia request does not exist
* 500 - Error adding multimedia request response | Error obtaining multimedia request


## Get Multimedia Responses

Get completed request responses arranged from the most recent.

**Endpoint** 
scout_get_request_responses

**Method** 
GET

**Query params**

| Field | Type | Description |
| - | - | - |
| phoneNumber | string | Scout unique identifier |
| authString | string | Authentication string |


> Sample Response
``` json
{
  "message": "Successfully obtained request responses",
  "responses":[
    {
      "clientRef": "12345",
      "requestRef": "12345",
      "scoutRef": "+2340927738929",
      "mediaUrls":["https://google.api.com/235617"],
      "created": "Thu Nov 12 2020 14:20:50 GMT+0100 (West Africa Standard Time)",
      "mediaType":"audio",
      "status": "pending"
    }
  ]
}
```

**Errors**

* 400 - Only GET requests are allowed | Missing query parameter | Invalid param
* 401 - Invalid authstring
* 500 - Error fetching request responses


## Get Scouts

Get scouts.

> Endpoint: scout_get_all_scouts

> Payload
``` json
{
    "idToken": "eyJhbGciOiJSUzI1NiIs...",
    "uid": "db3aLSS5AtalI7xqCa...",
    "page": 1,
    "size": 10,
    "filter": "verified" | "unverified" | "blacklisted" | "whitelisted"

}
```

> Result
``` json
{
  "status": true,
  "message": "Successful",
  "totalPages": 4,
  "totalScouts": 40,
  "pageSize": 10,
  "currentPage": 1,
  "data": [],
}
```
## Edit Scouts

Edit scout.

> Endpoint: scout_edit_scout

> Payload
``` json
{
    "idToken": "eyJhbGciOiJSUzI1NiIs...",
    "uid": "db3aLSS5AtalI7xqCa...",
    "peopleInHousehold": 3,
    "maritalStatus": "single",
    // other scout properties
}
```

> Result
``` json
{
  "status": true,
  "message": "Successful",
}
```
## Bulk Edit Scouts

Edit multiple scouts.

> Endpoint: scout_bulk_edit_scouts

> Payload
``` json
{
    "idToken": "eyJhbGciOiJSUzI1NiIs...",
    "uid": "db3aLSS5AtalI7xqCa...",
    "scoutRefs": [],
    "blacklisted": false,
    "blacklistReason": "",
    "blacklistContext": "",
    "verified": false,
}
```

> Result
``` json
{
  "status": true,
  "message": "Successful",
}
```

## Get Scouts Paystack Cashout

Get scouts Paystack Cashouts and Chart.

> Endpoint: scout_get_scouts_paystack_cashouts

> Payload
``` json
{
    "idToken": "eyJhbGciOiJSUzI1NiIs...",
    "uid": "db3aLSS5AtalI7xqCa...",
    "period": "lastMonth"
}
```

> Result
``` json
{
  "status": true,
  "message": "Successful",
  "totalPages": 12,
  "totalCashouts": 114,
  "pageSize": 10,
  "currentPage": 1,
   "cashouts": [
      {
          "scoutRef": "+2349017766085",
          "data": {
              "updatedAt": "2020-09-12T15:24:10.805Z",
              "reference": "009f685e-604f-4140-9b6f-00408eaadb56",
              "status": "success",
              "recipient": 8758390,
              "amount": 189000,
              "reason": "Redeem Versus scout credits",
              "integration": 146241,
              "domain": "test",
              "source": "balance",
              "currency": "NGN",
              "transfer_code": "TRF_63y76ctdr8a8cr7",
              "createdAt": "2020-09-12T15:24:10.805Z",
              "id": 32768223
          },
          "message": "Transfer has been queued",
          "status": true
      }
    .
    .
    .
  ],
  "cashoutsChart": [
    {
        "date": "Dec 25",
        "successfulCount": 2,
        "successfulAmount": 70100,
        "failedCount": 0,
        "failedAmount": 0
    }
    .
    .
    .
  ]
}
```


## Get Scouts Paga Cashout

Get scouts Paga Cashouts and Chart.

> Endpoint: scout_get_scouts_paga_cashouts

> Payload
``` json
{
    "idToken": "eyJhbGciOiJSUzI1NiIs...",
    "uid": "db3aLSS5AtalI7xqCa...",
    "period": "lastMonth"
}
```

> Result
``` json
{
  "status": true,
  "message": "Successful",
  "totalPages": 12,
  "totalCashouts": 114,
  "pageSize": 10,
  "currentPage": 1,
   "cashouts": [
      {
          "updatedAt": "2021-01-05T11:13:35.252Z",
          "exchangeRate": null,
          "amount": 54,
          "responseCode": 0,
          "withdrawalCode": null,
          "receiverRegistrationStatus": "UNREGISTERED",
          "referenceNumber": "3cdf95cc-54fc-4e1b-bb68-23a0e912ee89",
          "message": "You have successfully sent N54.00 to +2347030287520. Paga Txn ID: WG7H2. Thank you for using Paga!",
          "transactionId": "WG7H2",
          "currency": "NGN",
          "fee": 150
      }
    .
    .
    .
  ],
  "cashoutsChart": [
    {
        "date": "Dec 25",
        "successfulCount": 2,
        "successfulAmount": 70100,
        "failedCount": 0,
        "failedAmount": 0
    }
    .
    .
    .
  ]
}
```

## Get Scout Statistics

Get scouts statistics.

> Endpoint: scout_get_scouts_statistics

> Payload
``` json
{
    "idToken": "eyJhbGciOiJSUzI1NiIs...",
    "uid": "db3aLSS5AtalI7xqCa..."
}
```

> Result
``` json
{
  "status": true,
  "message": "Successful",
  "data": {
    "scouts": {
      "total": 1222,
      "usingPayStack": 600,
      "usingPaga": 622
    },
    "tokens": {
      "total": 1222,
      "usingPayStack": 600,
      "usingPaga": 62
    },
    "naira": {
      "total": 1222,
      "usingPayStack": 600,
      "usingPaga": 622
    }
  }
}
```



## Missing Data Notification

Get scouts statistics.

> Endpoint: scout_missing_data_notification

> Payload
``` json
{
    "idToken": "eyJhbGciOiJSUzI1NiIs...",
    "uid": "db3aLSS5AtalI7xqCa...",
    "scoutRef": "+23480343233
}
```

> Result
``` json
{
  "status": true,
  "message": "Successfully notified scout",
}
```

## Get Missing Data
Get missing responses in demographic survey

> Endpoint: scout_get_missing_data

> Payload
``` json
{
    "authString": "dfbeavt4h463234255dsR"
    "scoutRef": "+23480343233
}
```

> Result
``` json
{
  "status": true,
  "message": "Successfully obtained missing questions",
  "questions": []
}
```


## Image Is Safe
Verify that an image is suitable for upload

> Endpoint: scout_image_is_safe

> Payload
``` json
{
    "authString": "dfbeavt4h463234255dsR",
    "scoutRef": "+23480343233",
    "imageUrl": "http://some-image-url.jpeg"
}
```

> Result
``` json
{
  "status": true,
  "message": "Image is suitable for submission"
}
```

## Redeem Credits

Cashout via Paga (NG) or Beyonic (KE).

> Endpoint: redeem_credits

> Payload
``` json
{
  "authstring": "eyJhbGciOiJSUzI1NiIs",
  "country": "NG",
  "phoneNumber": "+2347890123456",
  "amount": "100",
}
```

> Result
``` json
{
  "message": "You have successfully sent N5,400.00 to +2347890123456. Paga Txn ID: 3QYS4. Thank you for using Paga!",
  "referenceNumber": "f6812351-f857-43f1-87cd-2ce18d48d667",
  "transactionId": "3QYS4"
}
```

> Error
* 400 - Missing body parameter(s) | Invalid format of parameter(s) | Error converting scout credit for transfer
* 401 - Failed authentication. Authstring invalid or not found in request body
* 403 - Cashout is disabled for this scout. Less than 8 credits | Insufficient scout credit balance
* 404 - Scout does not exist | Country not found! We do not yet support that country
* 500 - Unable to save transaction data in firestore

