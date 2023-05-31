# Scout

Endpoints for Versus Scouts

## Add Response

Add a response to a question.

> Endpoint: scout_add_response

> Payload

```javascript
{
  "cRef": "",
  "qRef": "",
  "sRef": "",
  "optionRef": 2626,
  "response": [{"option": "Small Chops", "option_type": "specified","id": 2626}],
  "clientRef": ""
}
```

> Result

```javascript
{
  "response": {
    "campaignRef": "0b3cf5bd-bea9-429b-b374-8f65e5473ed9",
    "questionRef": "c30e78b6-ff88-49a5-91e9-bb7fb46f1455"
    "scoutRef": "ea7ca901-9217-4a04-9af4-3c6c21ccc3a2",
    "optionRef": "optionRef",
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

## Update Scout

Update a scout - authtoken, firstName, lastName and phoneNumber are required.
if accountNumber is provided then bankCode woud be required.

**Endpoint**: scout_update_scout

**Method**: POST

**Payload**

```json
{
  "authtoken": "7a9w8w7w-hdgee-4e8g-ab0b",
  "firstName": "James",
  "lastName": "Austin",
  "phoneNumber": "+2347023004000",
  "bankName": "Prudential",
  "bankCode": "002",
  "accountNumber": "1656767655",
  "bvn": "bvn",
  "emailAddress": "a@test.com",
  "dob": "2017-12-31",
  "gender": "female",
  "education": "education",
  "maritalStatus": "maritalStatus",
  "religion": "religion",
  "occupation": "occupation",
  "country": "country",
  "state": 24,
  "localGovernmentArea": 803,
  "language": "English"
}
```

> Result

```json
{
  "text": "Successfully updated the scout details to DB"
}
```

## Validate new Signup

Validate scouts data b4 creating account for them.

> Endpoint: scout_validate_new_signup

> Payload

```javascript
{
  "authstring": "authentication string",
  "accountNumber": "bank account number",
  "bankCode": "bank code - returned from scout_getbanks",
  "phoneNumber": "scount phone number",
  "firstName": "OGHENEVWEDE",
  "lastName": "SAMUEL"
}
```

> Result

```javascript
{
  "message":"Sucessfully validated signup data",
  "account": {
    "account_number":"1234567890",
    "account_name":"SAMUEL OGHENEVWEDE",
    "recipientCode": "re_wdwdw.[d.d]"
  }
}
```

## Get Campaigns

Get all campaigns on the system

**Endpoint**
scout_get_campaigns

**Method**
POST

> Payload

```javascript
{
     "phoneNumber":"+2348134342570"
}
```

> Result

```javascript
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

## Get All Campaigns

Get all campaigns including Text and Media

**Endpoint**
scout_get_all_campaigns

**Method**
POST

> Payload

```javascript
{
     "phoneNumber":"+2348134342570"
}
```

> Result

```javascript
{
  "totalCampaigns": 12,
  "all_campaigns": [
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

```javascript
{
  "phoneNumber": "08023004000"
}
```

> Result

```javascript
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

| Field    | Type   | Required | Description                         |
| -------- | ------ | -------- | ----------------------------------- |
| docRef   | string | required | A unique identifier of the campaign |
| scoutRef | string | optional | Scout unique identifier             |

**Endpoint** scout_get_questions

**Method** POST

**Sample payload**

```json
{
  "docRef": "a0ad177c-a6d0-44a4-8662-7f2851093b81",
  "scoutRef": "+2341234567890"
}
```

**Result**

```json
{
  "message": "Successfully obtained questions",
  "questions": [
    {
      "questionRef": "073c36b7-0bdb-46a2-9c55-114b4a65e741",
      "campaignRef": "48afd59b-c367-4d60-a695-76984fb65be8",
      "question": "Which snack do you like best?",
      "response_type": "multiplechoice",
      "response_units": "single_select",
      "response_lower_range": null,
      "response_upper_range": null,
      "sequence": null,
      "campaignName": "Lawyers Survey",
      "clientsName": "",
      "campaignDescription": "Lawyers",
      "clientRef": "nqaXKB0SzWN6xh7RVyzl",
      "options": {
        "options_list": [
          {
            "id": 2627,
            "option": "Peanuts",
            "option_type": "specified",
            "skip_logic": {
              "action_type": "JUMP",
              "jump_questionRef": "8f80e145-eb1b-4c5e-92a4-60a8523ebb0f"
            }
          },
          {
            "id": 2623,
            "option": "Biscuits",
            "option_type": "specified",
            "skip_logic": {
              "action_type": "END_SURVEY",
              "jump_questionRef": null
            }
          },
          {
            "id": 2624,
            "option": "Chocolate",
            "option_type": "specified",
            "skip_logic": {
              "action_type": "NONE",
              "jump_questionRef": null
            }
          },
          {
            "id": 2625,
            "option": "Groundnuts",
            "option_type": "specified",
            "skip_logic": {
              "action_type": "JUMP",
              "jump_questionRef": "9f80e145-eb1b-4c5e-92a4-60a8523ebb0j"
            }
          },
          {
            "id": 2626,
            "option": "Other",
            "option_type": "unspecified",
            "skip_logic": {
              "action_type": null,
              "jump_questionRef": null
            }
          }
        ],
        "range": [null, null],
        "unit": "single_select",
        "type": "multiplechoice"
      }
    }
  ]
}
```

**SKIP LOGIC EXPLANATION**

- The skip logic `action_type` value can be `JUMP`, `END_SURVEY`, or `NONE`.
- If the `skip_logic[action_type]` of a question's option is `NONE` or `null`, skip logic does not apply. This is the default implementation.
- If the `skip_logic[action_type]` of a question's option is `JUMP` and the option is selected, _JUMP_ to the question whose questionRef is the same as the `skip_logic[jump_questionRef]`.
- If the `skip_logic[action_type]` of a question's option is `END_SURVEY` and the option is selected, end the campaign.

**Errors**

- 400 - Invalid param | Missing docRef
- 404 - Scout does not exist
- 500 - Error obtaining scout | error encountered while reading from db

## Get Responses

Get the responses associated with a question.

> Endpoint: scout_get_responses

> Payload

```javascript
{
  "cRef": "48afd59b-c367-4d60-a695-76984fb65be8",
  "qRef": "073c36b7-0bdb-46a2-9c55-114b4a65e741"
}
```

> Result

```javascript
{
  "responses": [
        {
            "campaignRef": "48afd59b-c367-4d60-a695-76984fb65be8",
            "clientRef": "nqaXKB0SzWN6xh7RVyzl",
            "scoutRef": "+23480661xxxxx",
            "questionRef": "073c36b7-0bdb-46a2-9c55-114b4a65e741",
            "optionRef": 2626,
            "response": "Small Chops",
            "created_at": "2021-11-01 08:40:33.559000"
        }
    ]
}
```

## Get One Scout

Get a scout given the phone number

> Endpoint: scout_get_one_scout

> Payload

```javascript
{
  "phone": "+2348066109631"
}
```

> Result

```json
{
  "scoutRef": "+2348066109631",
  "dob": "1990-10-31T00:00:00.000Z",
  "anyChildUnder18": false,
  "childrenInHouseHold": "below_3",
  "gender": "female",
  "householdMonthlyIncome": "above_1000_USD",
  "peopleInHousehold": "3_to_5",
  "personalMonthlyIncome": "above_1000_USD",
  "tribe": "Yoruba",
  "deviceRegistrationToken": null,
  "deviceRegistrationTokenRef": null,
  "accountName": null,
  "accountNumber": "",
  "bankCode": "",
  "bankName": "",
  "blacklistContext": null,
  "blacklisted_on": null,
  "blacklistReason": null,
  "blacklisted": null,
  "bvn": "",
  "emailAddress": null,
  "firstName": "queen",
  "lastName": "busola",
  "income": null,
  "phoneNumber": "+2348066109631",
  "recipientCode": null,
  "twoFA": false,
  "verified": false,
  "source": "",
  "requiresBankUpdate": false,
  "occupation": "",
  "lga_id": 689,
  "language": "English",
  "versusCredits_amount": 0,
  "versusCredits_canCashOut": false,
  "versusCredits_holding": 0,
  "country": "NG",
  "education": "Bachelor's degree",
  "employment": "Fully employed",
  "maritalStatus": "No",
  "scoutPartnerRef": null,
  "state": "Ondo",
  "localGovernmentArea": "Akure South",
  "age": 32,
  "completedCampaigns": []
}
```

## Search Scouts

Search a scout given the phone number from list of scouts

> Endpoint: scout_search_scouts

> Payload

```javascript
{
  "phone": "+2348066109631"
}
```

> Result

```json
{
  "scoutRef": "+2348066109631",
  "dob": "1990-10-31T00:00:00.000Z",
  "gender": "female",
  "personalMonthlyIncome": "above_1000_USD",
  "householdMonthlyIncome": "above_1000_USD",
  "peopleInHousehold": "3_to_5",
  "childrenInHousehold": "below_3",
  "anyChildUnder18": false,
  "deviceRegistrationToken": null,
  "deviceRegistrationTokenRef": null,
  "accountName": null,
  "accountNumber": "",
  "bankCode": "",
  "bankName": "",
  "blacklistContext": null,
  "blacklisted_on": null,
  "blacklistReason": null,
  "blacklisted": null,
  "bvn": "",
  "emailAddress": null,
  "firstName": "queen",
  "lastName": "busola",
  "income": null,
  "phoneNumber": "+2348066109631",
  "recipientCode": null,
  "twoFA": false,
  "verified": false,
  "source": "",
  "requiresBankUpdate": false,
  "occupation": "",
  "localGovernmentArea": "Akure South",
  "language": "English",
  "versusCredits_amount": 0,
  "versusCredits_canCashOut": false,
  "versusCredits_holding": 0,
  "state_id": 28,
  "country_id": 160,
  "religion_id": 4,
  "education": 14,
  "marital_status_id": 3,
  "employment": 2,
  "maritalStatus": "No",
  "religion": "Christian Orthodox",
  "employmentStatus": "Fully employed",
  "tribe": "Yoruba",
  "education_level": "Bachelor's degree",
  "scoutPartnerRef": null,
  "state_name": "Ondo",
  "completedCampaigns": []
}
```

## Get Scout

Get a scout given the docRef

> Endpoint: scout_get_scout

> Payload

```javascript
{
  "docRef": "+2347034969842"
}
```

> Result

```json
{
  "accountName": null,
  "accountNumber": "",
  "age": 29,
  "anyChildUnder18": false,
  "bankCode": "050",
  "bankName": "Ecobank Nigeria",
  "blacklistContext": null,
  "blacklistReason": null,
  "blacklisted": null,
  "blacklisted_on": null,
  "bvn": "",
  "childrenInHousehold": "below_3",
  "completedCampaigns": [
    "0c40f707-d65f-4108-8b22-05cc9002339b",
    "161c089e-170a-41d3-9c17-a2fb6266752a",
    "16ede853-1013-4a22-8bef-999815accf27",
    "a0ad177c-a6d0-44a4-8662-7f2851093b81",
    "0873fdd4-4219-4dcc-8500-a1345d107830"
  ],
  "country": null,
  "deviceRegistrationToken": "fEHpqqpoSbqnHIlvMVkz97:APA91bGabezXYNUFXaKTDWiIKM0juEw3iFQO_5T15V6lG83AykRhVJYQJ0Ejn9DNOrf7N7Ml7OEpHd5BzyQnFudYpaysySV74AQxmcjbvyC3Z5hAhIT1iDIJ18m36wNlYdABBDlGOdZu",
  "deviceRegistrationTokenRef": "b4a8eb4e-85c1-4cf0-949d-4139aaa68076",
  "dob": "1992-10-09",
  "education": "Bachelors degree",
  "emailAddress": null,
  "employment": "Self-employed",
  "firstName": "Chukwuka",
  "gender": "male",
  "householdMonthlyIncome": "100_to_500_USD",
  "income": "above_1000_USD",
  "industryAffiliations": ["Engineering", "Oil & Gas", "Technology (Software)"],
  "language": "English",
  "lastName": "Emi",
  "lga_id": 634,
  "localGovernmentArea": "Eti-Osa",
  "maritalStatus": "Married or domestic partnership",
  "occupation": "",
  "peopleInHousehold": "below_3",
  "personalMonthlyIncome": "above_1000_USD",
  "phoneNumber": "+2347034969842",
  "recipientCode": "RCP_ugb6h9iwea6bzdn",
  "religion": "Christian Orthodox",
  "requiresBankUpdate": false,
  "scoutPartnerRef": null,
  "scoutRef": "+2347034969842",
  "source": "",
  "state": "Delta",
  "tribe": "Hausa",
  "twoFA": false,
  "verified": true,
  "versusCredits_amount": 75.0,
  "versusCredits_canCashOut": false,
  "versusCredits_holding": 0.0
}
```

## Get States

Get list of states and the corresponding local government given the country_id

> Endpoint: scout_get_states_lga

> Payload

```javascript
{
  "country_id": "160"
}
```

> Result

```json
{
  "status": true,
  "message": "Successful",
  "data": [
    {
      "id": 1,
      "country_id": 160,
      "name": "Abia",
      "lga": [
        "Aba North",
        "Arochukwu",
        "Aba South",
        "Bende",
        "Isiala Ngwa North",
        "Ikwuano"
      ]
    }
  ]
}
```

**Errors**

- 400 - Missing query parameter | Invalid param
- 403 - Only POST requests are allowed
- 500 - Unable to get States

## Create Scout Wallet

Create a Stellar Wallet associated with a Scout.

| Field             | Type   | Description                                                                        |
| ----------------- | ------ | ---------------------------------------------------------------------------------- |
| sourceStellarSeed | string | A Stellar Account funded in XLM to provide the mimimum balance needed for a wallet |
| scoutRef          | string | A unique string to identify a scout, a wallet is created once for each scoutRef    |

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

| Field             | Type   | Description                                                |
| ----------------- | ------ | ---------------------------------------------------------- |
| sourceStellarSeed | string | A Stellar Issuing Account to provide at transaction fee    |
| scoutRef          | string | A unique string to used to create a wallet for the scout   |
| versusCoinCredit  | string | VersusCoin amount formatted as a string to fund the wallet |

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

```javascript
{
  "authstring": "authentication string"
}
```

> Result

```javascript
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

```javascript
{
  "authstring": "authentication string",
  "amount": "scout credits to be converted",
  "country": "Two letter alpha-2 ISO code of country for which credit amount is to be converted e.g 'NG'"
}
```

> Result

```javascript

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

```javascript
{
  "authstring": "authentication string",
  "accountNumber": "bank account number",
  "bankCode": "bank code - returned from scout_getbanks",
  "bankName": "name of bank - returned from scout_getbanks",
  "phoneNumber": "scount phone number"
}
```

> Result

```javascript
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

```javascript
{
  "authstring": "authentication string",
  "accountNumber": "bank account number",
  "amount": "credit amount to be cashed out",
  "country": "NG",
  "phoneNumber": "+2348045634567"
}
```

> Result

```javascript
{
  "message":"Successfully transferred money to recipient",
  "credits":"50",
  "amount":2714,
  "currency":"NGN",
  "referenceNumber":"b96f5fc7-722b-4f9e-bf81-a114d45f8dc6"
}
```

## Get Favorite Teams

Get list of favorite teams.

**Endpoint**
scout_get_favorite_teams

**Method**
POST

**Query params**

> Sample response

```json
{
   "data":[
     {
       "id": "",
       "team: ""
     }
    .
    .
    .
  ]
}
```

**Errors**

- 400 - Only POST requests are allowed | Missing query parameter | Invalid param
- 401 - Invalid authstring
- 403 - Scout is unverified | Scout is missing demographic field
- 404 - Scout does not exist | There are no image requests
- 500 - Error obtaining image requests

## Get Multimedia Requests

Get a list of multimedia requests a scout is eligible to send responses.

**Endpoint**
scout_get_multimedia_requests

**Method**
POST

**Query params**

| Field       | Type             | Description             |
| ----------- | ---------------- | ----------------------- |
| phoneNumber | string           | Scout unique identifier |
| authString  | string           | Authentication string   |
| mediaType   | string(optional) | audio, video, photo     |

> Sample response

```json
{
  "message": "Successfully obtained multimedia requests",
  "requests": [
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

- 400 - Only POST requests are allowed | Missing query parameter | Invalid param
- 401 - Invalid authstring
- 403 - Scout is unverified | Scout is missing demographic field
- 404 - Scout does not exist | There are no multimedia requests
- 500 - Error obtaining multimedia requests

## Add Multimedia Response

Add multimedia request responses

| Field      | Type   | Description                                                                             |
| ---------- | ------ | --------------------------------------------------------------------------------------- |
| requestRef | string | A unique identifier of the request for which a response is to be sent                   |
| scoutRef   | string | A unique identifier of the scout sending the response                                   |
| mediaType  | string | The type of media the response is made of. `image`, `audio` or `video`                  |
| mediaUrls  | array  | An array of (string) URL(s) pointing to the location which the response media is stored |
| authstring | string | Authentication string                                                                   |

> Endpoint: scout_add_multimedia_request_response

> Method: POST

> Sample payload

```json
{
  "requestRef": "12345",
  "scoutRef": "239485855559",
  "mediaUrls": ["https://google.api.com/235617"],
  "mediaType": "audio",
  "authstring": "123567890987654321"
}
```

> Sample response

```json
{
  "message": "Successfully added multimedia request response",
  "responseRef": "9596869640495837"
}
```

**Errors**

- 400 - Missing parameter requestRef | Invalid param mediaUrls. Should be array of strings | Wrong mediaType. Request is for audio | Failed authentication. Authstring invalid or not found in request body
- 403 - Only POST requests are allowed
- 404 - Multimedia request does not exist
- 500 - Error adding multimedia request response | Error obtaining multimedia request

## Get Multimedia Responses

Get completed request responses arranged from the most recent.

**Endpoint**
scout_get_request_responses

**Method**
POST

**Query params**

| Field       | Type   | Description             |
| ----------- | ------ | ----------------------- |
| phoneNumber | string | Scout unique identifier |
| authString  | string | Authentication string   |

> Sample Response

```json
{
  "message": "Successfully obtained request responses",
  "responses": [
    {
      "clientRef": "12345",
      "requestRef": "12345",
      "scoutRef": "+2340927738929",
      "mediaUrls": ["https://google.api.com/235617"],
      "created": "Thu Nov 12 2020 14:20:50 GMT+0100 (West Africa Standard Time)",
      "mediaType": "audio",
      "status": "pending"
    }
  ]
}
```

**Errors**

- 400 - Only POST requests are allowed | Missing query parameter | Invalid param
- 401 - Invalid authstring
- 500 - Error fetching request responses

## Get Scouts

Get scouts.

> Endpoint: scout_get_all_scouts

> Payload

```json
{
    "idToken": "eyJhbGciOiJSUzI1NiIs...",
    "uid": "db3aLSS5AtalI7xqCa...",
    "page": 1,
    "size": 10,
    "filter": "verified" | "unverified" | "blacklisted" | "whitelisted"

}
```

> Result

```json
{
  "status": true,
  "message": "Successful",
  "totalPages": 4,
  "totalScouts": 40,
  "pageSize": 10,
  "currentPage": 1,
  "data": []
}
```

## Edit Scouts

Edit scout.

> Endpoint: scout_edit_scout

> Payload

```json
{
  "idToken": "eyJhbGciOiJSUzI1NiIs...",
  "uid": "db3aLSS5AtalI7xqCa...",
  "peopleInHousehold": 3,
  "maritalStatus": "single"
  // other scout properties
}
```

> Result

```json
{
  "status": true,
  "message": "Successful"
}
```

## Bulk Edit Scouts

Edit multiple scouts.

> Endpoint: scout_bulk_edit_scouts

> Payload

```json
{
  "idToken": "eyJhbGciOiJSUzI1NiIs...",
  "uid": "db3aLSS5AtalI7xqCa...",
  "scoutRefs": [],
  "blacklisted": false,
  "blacklistReason": "",
  "blacklistContext": "",
  "verified": false
}
```

> Result

```json
{
  "status": true,
  "message": "Successful"
}
```

## Get Scouts Paystack Cashout

Get scouts Paystack Cashouts and Chart.

> Endpoint: scout_get_scouts_paystack_cashouts

> Payload

```json
{
  "idToken": "eyJhbGciOiJSUzI1NiIs...",
  "uid": "db3aLSS5AtalI7xqCa...",
  "period": "lastMonth"
}
```

> Result

```json
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

```json
{
  "idToken": "eyJhbGciOiJSUzI1NiIs...",
  "uid": "db3aLSS5AtalI7xqCa...",
  "period": "lastMonth"
}
```

> Result

```json
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

```json
{
  "idToken": "eyJhbGciOiJSUzI1NiIs...",
  "uid": "db3aLSS5AtalI7xqCa..."
}
```

> Result

```json
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

```json
{
    "idToken": "eyJhbGciOiJSUzI1NiIs...",
    "uid": "db3aLSS5AtalI7xqCa...",
    "scoutRef": "+23480343233
}
```

> Result

```json
{
  "status": true,
  "message": "Successfully notified scout"
}
```

## Get Missing Data

Get missing responses in demographic survey

> Endpoint: scout_get_missing_data

> Payload

```json
{
    "authString": "dfbeavt4h463234255dsR"
    "scoutRef": "+23480343233
}
```

> Result

```json
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

```json
{
  "authString": "dfbeavt4h463234255dsR",
  "scoutRef": "+23480343233",
  "imageUrl": "http://some-image-url.jpeg"
}
```

> Result

```json
{
  "status": true,
  "message": "Image is suitable for submission"
}
```

## Redeem Credits

Cashout via Paga (NG) or Beyonic (KE).

> Endpoint: redeem_credits

> Payload

```json
{
  "authstring": "eyJhbGciOiJSUzI1NiIs",
  "country": "NG",
  "phoneNumber": "+2347890123456",
  "amount": "100"
}
```

> Result

```json
{
  "message": "You have successfully sent N5,400.00 to +2347890123456. Paga Txn ID: 3QYS4. Thank you for using Paga!",
  "referenceNumber": "f6812351-f857-43f1-87cd-2ce18d48d667",
  "transactionId": "3QYS4"
}
```

> Error

- 400 - Missing body parameter(s) | Invalid format of parameter(s) | Error converting scout credit for transfer
- 401 - Failed authentication. Authstring invalid or not found in request body
- 403 - Cashout is disabled for this scout. Less than 8 credits | Insufficient scout credit balance
- 404 - Scout does not exist | Country not found! We do not yet support that country
- 500 - Unable to save transaction data in firestore

## Update dob (Date of Birth)

Updates a scout's date of birth.

> Endpoint: scout_update_dob

> Payload (All parameters are required)

```json
{
  "authtoken": "55ad4986-b519-4e44-ab0b-890527299af6",
  "scoutRef": "+2348134959703",
  "dob": "2021-10-01"
}
```

> Response

```json
{
  "message": "dob updated"
}
```

> Errors

- 400 - missing required parameters || wrong authtoken
- 404 - scout not found
- 405 - request method not allowed
- 500 - internal server error

## Update People In Household

Updates the range of the number of people in a scout's household.

> Endpoint: scout_update_people_in_household

> Payload (All parameters are required)

```json
{
  "authtoken": "55ad4986-b519-4e44-ab0b-890527299af6",
  "scoutRef": "+2348134959703",
  "people_in_household": "below_3"
}
```

> Response

```json
{
  "message": "people_in_household updated"
}
```

> Errors

- 400 - missing required parameters || wrong authtoken
- 404 - scout not found
- 405 - request method not allowed
- 500 - internal server error

## Update Children In Household

Updates the range of the number of children in a scout's household.

> Endpoint: scout_update_children_in_household

> Payload (All parameters are required)

```json
{
  "authtoken": "55ad4986-b519-4e44-ab0b-890527299af6",
  "scoutRef": "+2348134959703",
  "children_in_household": "below_3"
}
```

> Response

```json
{
  "message": "children_in_household updated"
}
```

> Errors

- 400 - missing required parameters || wrong authtoken
- 404 - scout not found
- 405 - request method not allowed
- 500 - internal server error

## Update Personal Monthly Income

Updates a scout's personal monthly income.

> Endpoint: scout_update_personal_monthly_income

> Payload (All parameters are required)

```json
{
  "scoutRef": "+2347034969842",
  "personal_monthly_income": "100_to_500_USD",
  "authtoken": "55ad4986-b519-4e44-ab0b-890527299af6"
}
```

> Response

```json
{
  "message": "Personal monthly income updated"
}
```

> Errors

- 400 - Missing required parameters || Invalid parameters' values
- 401 - Failed authentication. Authstring invalid or not found in request body
- 404 - Scout does not exist
- 405 - Invalid request method (Only POST requests are allowed)
- 500 - Server error

## Update Total Household Monthly Income

Updates a scout's total household monthly income.

> Endpoint: scout_update_household_monthly_income

> Payload (All parameters are required)

```json
{
  "scoutRef": "+2347034969842",
  "household_monthly_income": "100_to_500_USD",
  "authtoken": "55ad4986-b519-4e44-ab0b-890527299af6"
}
```

> Response

```json
{
  "message": "Household monthly income updated"
}
```

> Errors

- 400 - Missing required parameters || Invalid parameters' values
- 401 - Failed authentication. Authstring invalid or not found in request body
- 404 - Scout does not exist
- 405 - Invalid request method (Only POST requests are allowed)
- 500 - Server error

## Update Religion

Updates a scout's religion.

> Endpoint: scout_update_religion

> Payload (All parameters are required)

```json
{
  "scoutRef": "+2347034969842",
  "religion": "Christian Orthodox",
  "authtoken": "55ad4986-b519-4e44-ab0b-890527299af6"
}
```

> Response

```json
{
  "message": "Religion updated"
}
```

> Errors

- 400 - Missing required parameters || Invalid parameters' values
- 401 - Failed authentication. Authstring invalid or not found in request body
- 403 - Invalid request method (Only POST requests are allowed)
- 404 - Scout does not exist || Religion not found
- 500 - Server

## Update Tribe

Updates a scout's tribe.

> Endpoint: scout_update_tribe

> Payload (All parameters are required)

```json
{
  "scoutRef": "+2347034969842",
  "tribe": "Hausa",
  "authtoken": "55ad4986-b519-4e44-ab0b-890527299af6"
}
```

> Response

```json
{
  "message": "Tribe updated"
}
```

> Errors

- 400 - Missing required parameters || Invalid parameters' values
- 401 - Failed authentication. Authstring invalid or not found in request body
- 403 - Invalid request method (Only POST requests are allowed)
- 404 - Scout does not exist
- 500 - Server error

## Update Gender

Updates a scout's gender.

> Endpoint: scout_update_gender

> Payload (All parameters are required)

```json
{
  "scoutRef": "+2347034969842",
  "gender": "male",
  "authtoken": "55ad4986-b519-4e44-ab0b-890527299af6"
}
```

> Response

```json
{
  "message": "Gender updated"
}
```

> Errors

- 400 - Missing required parameters || Invalid parameters' values
- 401 - Failed authentication. Authstring invalid or not found in request body
- 403 - Invalid request method (Only POST requests are allowed)
- 404 - Scout does not exist
- 500 - Server error

## Update Marital Status

Updates a scout's marital status.

> Endpoint: scout_update_marital_status

> Payload (All parameters are required)

```json
{
  "scoutRef": "+2347034969842",
  "marital_status": "Married or domestic partnership",
  "authtoken": "55ad4986-b519-4e44-ab0b-890527299af6"
}
```

> Response

```json
{
  "message": "Marital status updated"
}
```

> Errors

- 400 - Missing required parameters || Invalid parameters' values
- 401 - Failed authentication. Authstring invalid or not found in request body
- 403 - Invalid request method (Only POST requests are allowed)
- 404 - Scout does not exist || Marital status not found
- 500 - Server error

## Update Highest Education Level

Updates a scout's highest education level.

> Endpoint: scout_update_highest_education_level

> Payload (All parameters are required)

```json
{
  "scoutRef": "+2347034969842",
  "highest_education_level": "Bachelors degree",
  "authtoken": "55ad4986-b519-4e44-ab0b-890527299af6"
}
```

> Response

```json
{
  "message": "Education level updated"
}
```

> Errors

- 400 - Missing required parameters || Invalid parameters' values
- 401 - Failed authentication. Authstring invalid or not found in request body
- 403 - Invalid request method (Only POST requests are allowed)
- 404 - Scout does not exist || Education level not found
- 500 - Server error

## Update Employment Status

Updates a scout's employment status.

> Endpoint: scout_update_employment_status

> Payload (All parameters are required)

```json
{
  "scoutRef": "+2347034969842",
  "employment_status": "Self-employed",
  "authtoken": "55ad4986-b519-4e44-ab0b-890527299af6"
}
```

> Response

```json
{
  "message": "Employment status updated"
}
```

> Errors

- 400 - Missing required parameters || Invalid parameters' values
- 401 - Failed authentication. Authstring invalid or not found in request body
- 403 - Invalid request method (Only POST requests are allowed)
- 404 - Scout does not exist || Employment status not found
- 500 - Server error

## Update Industry Affiliation / Interests

Updates a scout's industry affiliation / interests.

> Endpoint: scout_update_industry_affiliation

> Payload (All parameters are required)

```json
{
  "scoutRef": "+2347034969842",
  "interests": ["Engineering", "Technology (Software)", "Oil & Gas"],
  "authtoken": "55ad4986-b519-4e44-ab0b-890527299af6"
}
```

> Response

```json
{
  "message": "Interests / industry affiliations updated"
}
```

> Errors

- 400 - Missing required parameters || Invalid parameters' values
- 401 - Failed authentication. Authstring invalid or not found in request body
- 403 - Invalid request method (Only POST requests are allowed)
- 404 - Scout does not exist || Interests not found
- 500 - Server error

## Update Sports Fan

Updates a scout's sports fan field.

> Endpoint: scout_update_sports_fan

> Payload (All parameters are required)

```json
{
  "scoutRef": "+2347034969842",
  "sportsFan": "yes", // yes or no
  "authtoken": "55ad4986-b519-4e44-ab0b-890527299af6"
}
```

> Response

```json
{
  "message": "sportsFan updated"
}
```

> Errors

- 400 - Missing required parameters || Invalid parameters' values
- 401 - Failed authentication. Authstring invalid or not found in request body
- 403 - Invalid request method (Only POST requests are allowed)
- 404 - Scout does not exist
- 500 - Server error

## Update Soccer Fan

Updates a scout's soccer fan field.

> Endpoint: scout_update_soccer_fan

> Payload (All parameters are required)

```json
{
  "scoutRef": "+2347034969842",
  "soccerFan": "yes", // yes or no
  "authtoken": "55ad4986-b519-4e44-ab0b-890527299af6"
}
```

> Response

```json
{
  "message": "soccerFan updated"
}
```

> Errors

- 400 - Missing required parameters || Invalid parameters' values
- 401 - Failed authentication. Authstring invalid or not found in request body
- 403 - Invalid request method (Only POST requests are allowed)
- 404 - Scout does not exist
- 500 - Server error

## Update Favorite Team

Updates a scout's favorite team.

> Endpoint: scout_update_favorite_team

> Payload (All parameters are required)

```json
{
  "scoutRef": "+2347034969842",
  "favorite_team_id": 34, // favorite team id
  "authtoken": "55ad4986-b519-4e44-ab0b-890527299af6"
}
```

> Response

```json
{
  "message": "Favorite team updated"
}
```

> Errors

- 400 - Missing required parameters || Invalid parameters' values
- 401 - Failed authentication. Authstring invalid or not found in request body
- 403 - Invalid request method (Only POST requests are allowed)
- 404 - Scout does not exist
- 500 - Server error
