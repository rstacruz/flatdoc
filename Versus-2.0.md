# General

These are general purpose endpoints that are not necessarily attached to scout or dashboard functions

## Send SMS

This function leverages Twilio APIs to send SMS to a phone number. 
Please use the endpoint and sample _authstring_ as is.

> Endpoint: https://us-central1-versus-dev-212614.cloudfunctions.net/versus_v2_send_sms

> Payload

```json
{
  "phoneNumber": "+2348123456789",
  "message": "Text message to be sent",
  "authstring": "55ad4986-b519-4e44-ab0b-890527299af6"
}
```

> Response

```json
{
  "message": "Successfully sent SMS"
}
```

> Errors

* 400 - Missing parameter phoneNumber, message, authstring || Failed authentication. Invalid authstring || Message exceeds allowed number of characters 150/140
* 500 - Failed to send SMS

# Scout

This has endpoints for managing scout actions that are unique to Versus 2.0. For other actions refer to v1 docs. 

## End Campaign

This is called after a scout has answered all campaign questions. It calculates the credits earned and adds it to respective scout account.

> Endpoint: scout_end_campaign

> Payload

``` json
{
  "phoneNumber": "+2348123456789",
  "campaignRef": "47b73826-e9b2-412f-b8b4-c055eeec778b",
  "authstring": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

``` json
{
  "message": "Successfully submitted survey and credited scout",
  "credits": 12,
  "campaignRef": "47b73826-e9b2-412f-b8b4-c055eeec778b"
}
```

> Errors

* 401 - Failed authentication. Authstring invalid or not found in request body
* 403 - Missing required parameters || Scout has already completed this campaign
* 404 - Scout does not exist
* 500 - Backend service error || Oops! Something happened from our end

## Get Campaigns

To obtain campaigns that match a scout's demographic.

> Endpoint: scout_get_campaigns

> Payload

``` json
{
  "phoneNumber": "+2348123456789"
}
```

> Response

``` json
{
  "campaigns": [
    {
      "description": "Let’s get you started with a simple demographics survey! This will help us send you surveys that are more appropriate for you.",
      "endDate": 2571212464693,
      "startDate": 1546300800,
      "campaignName": "Demographics Survey",
      "isDemographicSurvey": true,
      "campaignRef": "a0ad177c-a6d0-44a4-8662-7f2851093b81",
      "country": "NG",
      "clientName": "The Enterprise",
      "clientRef": "nqaXKB0SzWN6xh7RVyzlzl",
      "endAge": 65,
      "startAge": 16
    }
  ]
}
```

> Errors

* 400 - Scout is not verified
* 403 - Missing required param: phoneNumber 
* 404 - Scout does not exist
* 500 - Backend service error || Oops! Something broke from our end 

## Get Partners

Get current scout partners.

> Endpoint: scout_get_partners

> Payload

``` json
{
  "authstring": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

``` json
{
  "message": "Successfully obtained scout partners",
  "scoutPartners": [
    {
        "scoutPartnerRef": "33c514f8-3484-4646-a0b3-6be4a5957248",
        "name": "Facebook"
    },
    {
        "name": "Catch them Young Nigeria (Next Digital Talent)",
        "scoutPartnerRef": "4e18e782-e873-4832-879d-97b288a9e85b"
    },
    {
        "scoutPartnerRef": "86f52918-4987-4c0b-a71d-37ab743bc58d",
        "name": "West Africa Vocational Education (WAVE)"
    },
    {
        "scoutPartnerRef": "a25b5ac8-3e17-4e35-9ce8-f534e89b4e02",
        "name": "Instagram"
    },
    {
        "scoutPartnerRef": "af8ed4cf-974c-4b69-9663-3c115594655f",
        "name": "She Leads Africa"
    },
    {
        "scoutPartnerRef": "d3c48853-eda9-45d6-b127-4d3f66dcb975",
        "name": "Twitter"
    },
    {
        "name": "GIEVA",
        "scoutPartnerRef": "f572e8a0-7526-41df-962b-1fb20ad7baa1"
    }
  ]
}
```

> Errors

* 400 - Missing authstring in request body
* 401 - Failed authentication. Invalid authstring
* 500 - Backend service error || Oops! Something broke from our end

## Convert Amount

Convert scout credit amount to equivalent cash.

> Endpoint: scout_convert_amount

> Payload

``` json
{
  "amount": 200,
  "country": "NG",
  "authstring": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

``` json
{
  "message": "Successfully converted scout credit",
  "convertedAmount": 10800,
  "currency": "NGN"
  }
}
```

> Errors

* 400 - Missing body parameters... || We do not yet support cashout in that country || Error converting scout credit
* 401 - Failed authentication. Authstring invalid or not found in request body
* 500 - Backend service error

## Verify Account Number

This endpoint verifies scout bank account number and creates a Paystack recipient ready for transfer of funds.

> Endpoint: scout_verify_account_number

> Payload

``` json
{
  "phoneNumber": "+2348123456789",
  "accountNumber": "0123456789",
  "bankCode": "026",
  "bankName": "ZENITH",
}
```

> Response

``` json
{
  "message": "Sucessfully verified account number",
  "accountName": "XAVIER STAN",
  "accountNumber": "0123456789"
  }
}
```

> Errors

* 400 - Missing body parameters ... || Error verifying account number || Error creating recipient
* 401 - Failed authentication. Authstring invalid or not found in request body
* 404 - Scout does not exist
* 500 - Backend service error || Error verifying account || Error obtaining scout

## Cashout

Initiate transfer of funds to scout bank account.

> Endpoint: scout_cashout

> Payload

``` json
{
  "phoneNumber": "+2348123456789",
  "amount": 1000,
  "accountNumber": "01234567890",
  "country": "NG",
  "authstring": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

``` json
{
  "message": "Successfully transferred money to recipient",
  "credits": 12,
  "amount": 1000,
  "currency": "NGN",
  "referenceNumber": "t_c7c53f113d5ac7c53f113d5a"
}
```

> Errors

* 400 - Missing required parameters || That country is not yet supported for cashout || Error converting scout credit for transfer || Error initiating transfer to scout || Error checking transfer status || Failed to transfer money to recipient
* 401 - Failed authentication. Authstring invalid or not found in request body
* 403 - The given account number is invalid, please verify bank account || Insufficient scout credit balance || Cashout is disabled for this scout. Less than 33 credits || Scout does not have a verified bank account
* 404 - Scout does not exist
* 500 - Backend service error

## Get Banks

Obtain a list of banks with their codes.

> Endpoint: scout_get_banks

> Payload

``` json
{
  "authstring": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

``` json
{
  "msg": "Successfully obtained banks list",
  "banks": [
    {
      "name": "Access Bank",
      "slug": "access-bank",
      "code": "044",
      "longcode": "044150149",
      "gateway": "emandate",
      "pay_with_bank": false,
      "active": true,
      "is_deleted": null,
      "country": "Nigeria",
      "currency": "NGN",
      "type": "nuban",
      "id": 1,
      "createdAt": "2016-07-14T10:04:29.000Z",
      "updatedAt": "2020-02-18T08:06:44.000Z"
  },
  {
      "name": "Access Bank (Diamond)",
      "slug": "access-bank-diamond",
      "code": "063",
      "longcode": "063150162",
      "gateway": "emandate",
      "pay_with_bank": false,
      "active": true,
      "is_deleted": null,
      "country": "Nigeria",
      "currency": "NGN",
      "type": "nuban",
      "id": 3,
      "createdAt": "2016-07-14T10:04:29.000Z",
      "updatedAt": "2020-02-18T08:06:48.000Z"
    },
  ]
  }
}
```

> Errors

* 400 - Error obtaining banks list
* 401 - Failed authentication. Authstring invalid or not found in request body
* 500 - Backend service error


## Save Device Token

To save a scout device registration token. It handles both creation of a new record and update of an existing one.

> Endpoint: scout_save_device_token

> Payload

``` json
{
  "scoutRef": "+2348123456789",
  "deviceRegistrationToken": "47b73826-e9b2-412f-b8b4-c055eeec778b",
  "authstring": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

``` json
{
  "message": "Successfully created new device registration token record",
  "scoutRef": "+2348123456789",
  "deviceRegistrationToken": "47b73826-e9b2-412f-b8b4-c055eeec778b",
  "deviceRegistrationTokenRef": "dccfb068-de00-40a8-b033-8488430136f3"
}
```

``` json
{
  "message": "Successfully updated device registration token",
  "scoutRef": "+2348123456789",
  "deviceRegistrationToken": "47b73826-e9b2-412f-b8b4-c055eeec778b",
  "deviceRegistrationTokenRef": "dccfb068-de00-40a8-b033-8488430136f3"
}
```

> Errors

* 400 - Missing parameter scoutRef, deviceRegistrationToken
* 401 - Failed authentication. Authstring invalid or not found in request body
* 403 - Only POST requests are allowed
* 500 - Error creating new device registration token record || Error updating existing device registration token record || Error fetching token record


# Dashboard

These are endpoints called by v2.0 dashbboard components. 

## Add Campaign

Add a new campaign

> Endpoint: versus_v2_add_campaign

> Payload

``` json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "description": "Let’s get you started with a simple demographics survey! This will help us send you surveys that are more appropriate for you.",
  "endDate": 2571212464693,
  "startDate": 1546300800,
  "campaignName": "Demographics Survey",
  "isDemographicSurvey": true,
  "campaignRef": "a0ad177c-a6d0-44a4-8662-7f2851093b81",
  "country": "NG",
  "stateOrRegion": "Lagos",
  "endAge": 65,
  "startAge": 16,
  "gender": "female",
  "numberOfRespondents": 500
}
```

> Response

``` json
{
  "message": "Successfully added new client campaign",
  "campaignRef": "47b73826-e9b2-412f-b8b4-c055eeec778b"
}
```

> Errors

* 401 - User is not authorized to make this request || Error authenticating user
* 402 - Insufficient versus credit balance
* 403 - Missing required parameters
* 404 - Client does not exist
* 500 - Backend service error

## Add Client

Add a new client on signup

> Endpoint: versus_v2_add_client

> Payload

``` json
{
  "email": "abc@def.ghi",
  "firstName": "Xavier",
  "lastName": "Stan",
  "organizationName": "Enterfive",
  "OrganizationSector": "Software and Internet",
}
```

> Response

``` json
{
  "message": "Successfully added new client",
  "clientRef": "47b73826-e9b2-412f-b8b4-c055eeec778b"
}
```

> Errors

* 400 - Missing required parameters
* 401 - User is not authorized to make this request || Error authenticating user
* 404 - Client does not exist
* 409 - Email already exists
* 500 - Backend service error

## Add Question

Add a new campaign question

> Endpoint: versus_v2_add_question

> Payload

``` json
{
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "question": "Which snack do you like best?",
  "optionsType": "multiplechoice",
  "optionsList": [
    {"text": "Biscuits"},
    {"text": "Chocolate"},
    {"text": "Groundnuts"}
  ],
  "campaignRef": "a0ad177c-a6d0-44a4-8662-7f2851093b81"
}
```

> Response

``` json
{
  "message": "Successfully added new question",
}
```

> Errors

* 400 - Missing required parameters
* 401 - User is not authorized to make this request || Error authenticating user
* 402 - Insufficient versus credit balance
* 404 - Campaign does not exist
* 500 - Backend service error

## Confirm Team Member

Confirm a new team member who is onboarding and creating a profile 

> Endpoint: versus_v2_confirm_team_member

> Payload

``` json
{
  "email": "xavi@stan.dev",
  "token": "bfbbc055eeec778b",
  "firstName": "Xavier",
  "lastName": "Stan",
}
```

> Response

``` json
{
  "message": "Successfully confirmed team"
}
```

> Errors

* 400 - Missing required parameters
* 401 - Invalid team token
* 402 - Insufficient versus credit balance
* 404 - Team not found
* 500 - Backend service error

## Edit Campaign

Update a campaign

> Endpoint: versus_v2_edit_campaign

> Payload

``` json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "campaignRef": "a0ad177c-a6d0-44a4-8662-7f2851093b81"
}
```

> Response

``` json
{
  "message": "Successfully updated client campaign",
  "campaignRef": "47b73826-e9b2-412f-b8b4-c055eeec778b"
}
```

> Errors

* 400 - Missing required parameters
* 401 - User is not authorized to make this request || Error authenticating user
* 404 - Client does not exist
* 500 - Backend service error

## Edit Client

Update client data

> Endpoint: versus_v2_edit_client

> Payload

``` json
{
  "email": "xavier@stan.dev",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "clientData": {
    "logoURL": "https://clientlogo.png"
  }
}
```

> Response

``` json
{
  "message": "Successfully updated client data"
}
```

> Errors

* 401 - Team member does not have edit capability || Error authenticating user
* 402 - Insufficient versus credit balance
* 403 - Missing required parameters
* 404 - Team not found || Client does not exist
* 500 - Backend service error

## Get All Campaign Data **

Get all campaign-related data

** To be deprecated soon

> Endpoint: versus_v2_get_all_campaign_data

> Payload

``` json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "campaignRef": "a0ad177c-a6d0-44a4-8662-7f2851093b81"
}
```

> Response

``` json
{
  "message": "Successfully obtained all campaign data",
  "campaign": {
    "campaignRef": "a0ad177c-a6d0-44a4-8662-7f2851093b81",
  },
  "questions": [],
  "reponses": [],
  "respondents": []
}
```

> Errors

* 400 - Missing required parameters
* 401 - User is not authorized to make this request || Error authenticating user
* 404 - Campaign does not exist
* 500 - Backend service error

## Get All Surveys **

Get all surveys

** To be deprecated soon

> Endpoint: versus_v2_add_campaign

> Payload

``` json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
}
```

> Response

``` json
{
  "message": "Successfully obtained all campaigns",
  "campaigns": []
}
```

> Errors

* 400 - Missing required parameters
* 401 - User is not authorized to make this request || Error authenticating user
* 404 - Client does not exist
* 500 - Backend service error

## Get Campaign **

Get campaign data

** To be deprecated soon

> Endpoint: versus_v2_get_campaign

> Payload

``` json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "campaignRef": "a0ad177c-a6d0-44a4-8662-7f2851093b81"
}
```

> Response

``` json
{
  "message": "Successfully obtained campaign data",
  "campaign": {},
  "questionsData": [],
  "responsesData": []
}
```

> Errors

* 400 - Missing required parameters
* 401 - User is not authorized to make this request || Error authenticating user
* 404 - Campaign does not exist
* 500 - Backend service error

## Get Campaigns **

Get all campaigns

** To be deprecated soon

> Endpoint: versus_v2_get_campaigns

> Payload

``` json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

``` json
{
  "message": "Successfully obtained campaigns data",
  "campaign": [],
  "questionsData": [],
  "responsesData": []
}
```

> Errors

* 400 - Missing required parameters
* 401 - User is not authorized to make this request || Error authenticating user
* 500 - Backend service error

## Get Chart Data

Get processed chart data and labels

> Endpoint: versus_v2_get_chart_data

> Payload

``` json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "period": "today",
  "sources": {
    "news": [],
    "others": [],
    "socialmedia": []
  }
}
```

> Response

``` json
{
  "message": "Successfully obtained chart data",
  "chartData": {
    "labels": [],
    "mentions": [],
    "positive": [],
    "negative": [],
    "neutral": []
  }
}
```

> Errors

* 400 - Missing required parameters
* 401 - User is not authorized to make this request || Error authenticating user
* 500 - Backend service error

## Get Client

Get client data

> Endpoint: versus_v2_get_client

> Payload

``` json
{
  "email": "xavier@stan.dev",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

``` json
{
  "message": "Successfully obtained client",
  "client": {},
  "team": {}
}
```

> Errors

* 400 - Missing required parameters
* 401 - User is not authorized to make this request || Error authenticating user
* 404 - Client or Team does not exist
* 500 - Backend service error

## Get Filtered Mentions

Get mentions for specific set of filters

> Endpoint: versus_v2_get_filtered_mentions

> Payload

``` json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "period": "today"
}
```

> Response

``` json
{
  "message": "Successfully obtained mentions",
  "classifiedNewsMentions": {
    "positiveMentions": [],
    "negativeMentions": []
  },
  "classifiedOthersMentions": {
    "positiveMentions": [],
    "negativeMentions": []
  },
  "classifiedTwitterMentions": {
    "positiveMentions": [],
    "negativeMentions": []
  }
}
```

> Errors

* 400 - Missing required parameters
* 401 - User is not authorized to make this request || Error authenticating user
* 500 - Backend service error

## Get Mentions Summary

Get a summary of mentions distribution for a period

> Endpoint: versus_v2_get_mentions_summary

> Payload

``` json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "period": "last 30 days",
  "sentiment": "positive",
  "sources": {
    "categories": ["news", "others", "socialmedia"],
    "news": [],
    "others": [],
    "socialmedia": []
  }
}
```

> Response

``` json
{
  "message": "Successfully obtained mentions summary",
  "sentiment": "positive",
  "sources": {},
  "total": 90,
  "news": 20,
  "tweets": 60,
  "others": 10,
  "percentagePositive": 100,
  "percentageNegative": 0,
  "percentageNeutral": 0
}
```

> Errors

* 400 - Missing required parameters
* 401 - User is not authorized to make this request || Error authenticating user
* 500 - Backend service error

## Get Most Popular Mentions

Obtain most popular mentions

> Endpoint: versus_v2_get_most_popular_mentions

> Payload

``` json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "period": "last 7 days"
}
```

> Response

``` json
{
  "message": "Successfully obtained most popular mentions",
  "popularMentions": {
    "positive": [],
    "negative": []
  }
}
```

> Errors

* 400 - Missing required parameters
* 401 - User is not authorized to make this request || Error authenticating user
* 404 - Client does not exist
* 500 - Backend service error

## Get Newsfeed

Get social media and news mentions details for newsfeed

> Endpoint: versus_v2_get_newsfeed

> Payload

``` json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "period": "today",
  "sentiment": "negative",
  "sources": {
    "news": [],
    "others": [],
    "socialmedia": []
  }
}
```

> Response

``` json
{
  "message": "Successfully obtained newsfeed",
  "newsfeed": []
}
```

> Errors

* 400 - Missing required parameters
* 401 - User is not authorized to make this request || Error authenticating user
* 500 - Backend service error

## Get News Mentions Sources

Obtain sources of news mentions

> Endpoint: versus_v2_get_news_mentions_sources

> Payload

``` json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "period": "today",
  "sentiment": "positive"
}
```

> Response

``` json
{
  "message": "Successfully obtained news mentions sources",
  "totalSources": 10,
  "sources": []
}
```

> Errors

* 400 - Missing required parameters
* 401 - User is not authorized to make this request || Error authenticating user
* 500 - Backend service error

## Get Others Mentions Sources

Obtain sources of other mentions

> Endpoint: versus_v2_get_others_mentions_sources

> Payload

``` json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "period": "today",
  "sentiment": "positive"
}
```

> Response

``` json
{
  "message": "Successfully obtained others mentions sources",
  "totalSources": 10,
  "sources": []
}
```

> Errors

* 400 - Missing required parameters
* 401 - User is not authorized to make this request || Error authenticating user
* 500 - Backend service error

## Get Socialmedia Mentions Sources

Obtain sources of social media mentions

> Endpoint: versus_v2_get_socialmedia_mentions_sources

> Payload

``` json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "period": "today",
  "sentiment": "positive"
}
```

> Response

``` json
{
  "message": "Successfully obtained socialmedia mentions sources",
  "totalTwitterMentions": 20
}
```

> Errors

* 400 - Missing required parameters
* 401 - User is not authorized to make this request || Error authenticating user
* 500 - Backend service error

## Get Offboard Client

Obtain details of client that has not yet onboarded

> Endpoint: versus_v2_get_offboard_client

> Payload

``` json
{
  "onboardingToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

``` json
{
  "message": "Successfully obtained client",
  "client": {}
}
```

> Errors

* 400 - Missing required parameters
* 404 - Client does not exist
* 500 - Backend service error

## Get Team Members

Get client team members 

> Endpoint: versus_v2_get_team_members

> Payload

``` json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

``` json
{
  "message": "Successfully obtained team members",
  "teamMembers": [
    {
      "email": "deji@enterfive.com",
      "canEdit": false,
      "clientRef": "nqaXKB0SzWN6xh7RVyzl",
      "accepted": true
    }
  ]
}
```

> Errors

* 400 - Missing required parameters
* 401 - User is not authorized to make this request || Error authenticating user
* 404 - Team does not exist
* 500 - Backend service error

## Get Top Influencers

Obtain a list of top influencers

> Endpoint: versus_v2_get_top_influencers

> Payload

``` json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "period": "today"
}
```

> Response

``` json
{
  "message": "Successfully obtained top influencers",
  "topInfluencers": {
    "positive": [],
    "negative": []
  }
}
```

> Errors

* 400 - Missing required parameters
* 401 - User is not authorized to make this request || Error authenticating user
* 500 - Backend service error

## Get Total Questions

Get a count of total questions for a client 

> Endpoint: versus_v2_get_total_questions

> Payload

``` json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

``` json
{
  "message": "Successfully obtained total questions",
  "totalQuestions": 320
}
```

> Errors

* 400 - Missing required parameters
* 401 - User is not authorized to make this request || Error authenticating user
* 500 - Backend service error

## Get Total Responses

Get a count of total responses for a client 

> Endpoint: versus_v2_get_total_responses

> Payload

``` json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
}
```

> Response

``` json
{
  "message": "Successfully obtained total responses",
  "totalQuestions": 320
}
```

> Errors

* 400 - Missing required parameters
* 401 - User is not authorized to make this request || Error authenticating user
* 500 - Backend service error

## Get Total Survey Questions

Get a count of total survey questions for each campaign

> Endpoint: versus_v2_get_total_survey_questions

> Payload

``` json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "campaignRef": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

``` json
{
  "message": "Successfully obtained total survey questions",
  "totalSurveyQuestions": 6
}
```

> Errors

* 400 - Missing required parameters
* 401 - User is not authorized to make this request || Error authenticating user
* 500 - Backend service error

## Get Total Survey Responses

Get a count of total survey responses for each campaign

> Endpoint: versus_v2_get_total_survey_responses

> Payload

``` json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "campaignRef": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

``` json
{
  "message": "Successfully obtained total survey responses",
  "totalSurveyResponses": 6
}
```

> Errors

* 400 - Missing required parameters
* 401 - User is not authorized to make this request || Error authenticating user
* 500 - Backend service error

## Get Total Surveys

Obtain a count of all the surveys for a client

> Endpoint: versus_v2_get_total_surveys

> Payload

``` json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
}
```

> Response

``` json
{
  "message": "Successfully obtained total surveys data",
  "totalSurveys": 14
}
```

> Errors

* 400 - Missing required parameters
* 401 - User is not authorized to make this request || Error authenticating user
* 500 - Backend service error

## Launch campaign

CHange the status pf a campaign from draft to live

> Endpoint: versus_v2_launch_campaign

> Payload

``` json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "campaignRef": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

``` json
{
  "message": "Successfully launched client campaign",
  "campaignRef": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Errors

* 400 - Missing required parameters
* 401 - User is not authorized to make this request || Error authenticating user
* 500 - Backend service error

## Mark Irrelevant Mentions

Register a mention as irrlevant and notify project team

> Endpoint: versus_v2_mark_irrelevant_mention

> Payload

``` json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "mention": {},
  "brandName": 
}
```

> Response

``` json
{
  "message": "Successfully sent email"
}
```

> Errors

* 400 - Missing required parameters
* 401 - User is not authorized to make this request || Error authenticating user
* 500 - Backend service error

## Onboard Client

Onboard client

> Endpoint: versus_v2_onboard_client

> Payload

``` json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "officeAddress": "35 Oju Omega Avenue, Ikoyi, Lagos",
  "onboardingToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "brandName": "Enterfive",
  "otherBrandNames": "e5",
  "responseEmails": "pr@e5.com, hr@e5.com",
  "comparisonBrands": [],
  "teamMembers": [],
  "filterProfanity": true
}
```

> Response

``` json
{
  "message": "Successfully onboarded client",
  "clientRef": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Errors

* 400 - Missing required parameters
* 401 - Client is not approved for onboarding
* 500 - Backend service error

## Respond To Mention

Notify client designated responder of a mention they should act on

> Endpoint: versus_v2_respond_to_mention

> Payload

``` json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "mentionUrl": "https://twitter.com/user/234455/status/098734",
  "brandName": "Enterfive",
  "emailAddress": "pr@e5.co"
}
```

> Response

``` json
{
  "message": "Successfully sent email"
}
```

> Errors

* 400 - Missing required parameters
* 401 - User is not authorized to make this request || Error authenticating user
* 500 - Backend service error

## Retag Mention

Register a mention which sentiment is to be retagged and notify project team

> Endpoint: versus_v2_retag_mention

> Payload

``` json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "mention": {},
  "brandName": "e5",
  "retaggedSentiment": "neutral"
}
```

> Response

``` json
{
  "message": "Successfully sent email"
}
```

> Errors

* 400 - Missing required parameters
* 401 - User is not authorized to make this request || Error authenticating user
* 500 - Backend service error

## Get Versus Credits

Obtain client's current value of versus credit

> Endpoint: versus_v2_get_versus_credits

> Payload

``` json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

``` json
{
  "message": "Successfully obtained client versus credits",
  "versusCredits": 5500
}
```

> Errors

* 400 - Missing required parameters
* 401 - User is not authorized to make this request || Error authenticating user
* 500 - Backend service error

## Verify Signup Access

Validate tokenized signup link

> Endpoint: versus_v2_verify_signup_access

> Payload

``` json
{
  "tk": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

``` json
{
  "message": "Successfully verified signup"
}
```

> Errors

* 400 - Missing required parameters
* 401 - Invalid signup token
* 500 - Backend service error

## Download Report

Generates and downloads Versus pdf report based on filter parameters

> Endpoint: get_pdf_report

> Payload

``` json
{
    "clientRef": "nqaXKB0SzWN6xh7RVyzl",
    "brandName": "The New",
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImMzZjI3NjU0MmJmZmU0NWU5OGMyMGQ2MDNlYmUyYmExMTc2ZWRhMzMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGVqaSBJYnJhaGltIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2NvbG9ycy0yMWNiYyIsImF1ZCI6ImNvbG9ycy0yMWNiYyIsImF1dGhfdGltZSI6MTU5Mjk3OTk5NiwidXNlcl9pZCI6ImRLOElKNUc5WjFQZkg4RW5jbGN0NWx1MHZJazEiLCJzdWIiOiJkSzhJSjVHOVoxUGZIOEVuY2xjdDVsdTB2SWsxIiwiaWF0IjoxNTkyOTc5OTk2LCJleHAiOjE1OTI5ODM1OTYsImVtYWlsIjoiZGVqaS5hLmlicmFoaW1AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRlamkuYS5pYnJhaGltQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.qTcj7_wouzdZCECKEbkVs_wreCenMpsPhezZcQJcnSL9w0cL3cVu0pJNWEWbKIRxdz7FsEBNkB8p6eQ52mQLnfsVFbLBzNnMBSOZgyOVtgMk46BhCzxWYINgVaLl7hkShf4iD4Q73IEIvtKMN7osFFPYpnn2qCKSUyymvDHyJEx-jhh9zbl6BqDtONvm-Jq-OTAMxtYl7SfE8_vJjg0ndPGhHdDz12pqwpCBPF06oz5HV5U0C53bscpRe1hxP33gqCfyvsN_SWUOPsaESMcaQv_LcDjO29_oDINl-_P83yTaTsTdNwKdFOf4gn71r98SgEVPwhhvjcdwXvGNIWnZQg",
    "period": "today",
    "sentiment": "any sentiment",
    "sources": {
        "categories": [],
        "socialmedia": [],
        "news": [],
        "others": []
    },
    "uid": "dK8IJ5G9Z1PfH8Enclct5lu0vIk1"
}
```
## Download Listen Report

Generates and downloads Versus pdf report based on filter parameters

> Endpoint: versus_v2_get_pdf_report

> Payload

``` json
{
    "clientRef": "nqaXKB0SzWN6xh7RVyzl",
    "brandName": "The New",
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImMzZjI3NjU0MmJmZmU0NWU5OGMyMGQ2MDNlYmUyYmExMTc2ZWRhMzMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGVqaSBJYnJhaGltIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2NvbG9ycy0yMWNiYyIsImF1ZCI6ImNvbG9ycy0yMWNiYyIsImF1dGhfdGltZSI6MTU5Mjk3OTk5NiwidXNlcl9pZCI6ImRLOElKNUc5WjFQZkg4RW5jbGN0NWx1MHZJazEiLCJzdWIiOiJkSzhJSjVHOVoxUGZIOEVuY2xjdDVsdTB2SWsxIiwiaWF0IjoxNTkyOTc5OTk2LCJleHAiOjE1OTI5ODM1OTYsImVtYWlsIjoiZGVqaS5hLmlicmFoaW1AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRlamkuYS5pYnJhaGltQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.qTcj7_wouzdZCECKEbkVs_wreCenMpsPhezZcQJcnSL9w0cL3cVu0pJNWEWbKIRxdz7FsEBNkB8p6eQ52mQLnfsVFbLBzNnMBSOZgyOVtgMk46BhCzxWYINgVaLl7hkShf4iD4Q73IEIvtKMN7osFFPYpnn2qCKSUyymvDHyJEx-jhh9zbl6BqDtONvm-Jq-OTAMxtYl7SfE8_vJjg0ndPGhHdDz12pqwpCBPF06oz5HV5U0C53bscpRe1hxP33gqCfyvsN_SWUOPsaESMcaQv_LcDjO29_oDINl-_P83yTaTsTdNwKdFOf4gn71r98SgEVPwhhvjcdwXvGNIWnZQg",
    "period": "today",
    "sentiment": "any sentiment",
    "sources": {
        "categories": [],
        "socialmedia": [],
        "news": [],
        "others": []
    },
    "uid": "dK8IJ5G9Z1PfH8Enclct5lu0vIk1"
}
```

> Response: Returns Pdf file for Download

<!-- ``` json
{
  "message": "Successful"
}
``` -->

> Errors

* 400 - Missing required parameters
* 401 - Invalid signup token
* 500 - Backend service error

## Download Comparison Report

Generates and downloads Versus comparison pdf report based on filter parameters

> Endpoint: versus_v2_get_comparison_pdf

> Payload

``` json
{
    "clientRef": "nqaXKB0SzWN6xh7RVyzl",
    "brandName": "The New",
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImMzZjI3NjU0MmJmZmU0NWU5OGMyMGQ2MDNlYmUyYmExMTc2ZWRhMzMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGVqaSBJYnJhaGltIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2NvbG9ycy0yMWNiYyIsImF1ZCI6ImNvbG9ycy0yMWNiYyIsImF1dGhfdGltZSI6MTU5Mjk3OTk5NiwidXNlcl9pZCI6ImRLOElKNUc5WjFQZkg4RW5jbGN0NWx1MHZJazEiLCJzdWIiOiJkSzhJSjVHOVoxUGZIOEVuY2xjdDVsdTB2SWsxIiwiaWF0IjoxNTkyOTc5OTk2LCJleHAiOjE1OTI5ODM1OTYsImVtYWlsIjoiZGVqaS5hLmlicmFoaW1AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRlamkuYS5pYnJhaGltQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.qTcj7_wouzdZCECKEbkVs_wreCenMpsPhezZcQJcnSL9w0cL3cVu0pJNWEWbKIRxdz7FsEBNkB8p6eQ52mQLnfsVFbLBzNnMBSOZgyOVtgMk46BhCzxWYINgVaLl7hkShf4iD4Q73IEIvtKMN7osFFPYpnn2qCKSUyymvDHyJEx-jhh9zbl6BqDtONvm-Jq-OTAMxtYl7SfE8_vJjg0ndPGhHdDz12pqwpCBPF06oz5HV5U0C53bscpRe1hxP33gqCfyvsN_SWUOPsaESMcaQv_LcDjO29_oDINl-_P83yTaTsTdNwKdFOf4gn71r98SgEVPwhhvjcdwXvGNIWnZQg",
    "period": "lastYear",
    "sentiment": "any sentiment",
    "sources": {
        "categories": [],
        "socialmedia": [],
        "news": [],
        "others": []
    },
    "uid": "dK8IJ5G9Z1PfH8Enclct5lu0vIk1",
    "brands": ["2a304e66-2392-4b25-bd84-f5b7cc6d6aa5", "9da210aa-1033-49ce-aff8-b451b6bece85"]
}
```

> Response: Returns Pdf file for Download


> Errors

* 400 - Missing required parameters
* 401 - Invalid signup token
* 500 - Backend service error

## Get Subscription Plan

Obtain details of a subscription plan

> Endpoint: versus_v2_get_subscription_plan

> Payload

``` json
{
  "subscriptionPlanRef": "081d4b17-a1f3-4600-920f-6f46d3919873"
}
```

> Response

``` json
{
  "message": "Successfully obtained subscription plan",
  "subscriptionPlan": {
    "countriesAllowed": 12,
    "mentionsAllowed": 100000,
    "subscriptionPlanName": "Max",
    "languagesAllowed": 1,
    "subscriptionPlanRef": "081d4b17-a1f3-4600-920f-6f46d3919873"
  }
}
```

> Errors

* 400 - Missing parameter subscriptionPlanRef
* 403 - Only POST requests are allowed
* 500 - Backend service error