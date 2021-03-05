# Settings

These endpoints can be used to obtain and update scout and client settings.

## Get Scout Settings

Obtains scout settings.

> Endpoint: get_scout_settings

> Method: GET

> Payload

```json
{
  "authstring": "55ad4986-b519-4e44-ab0b-890527299af6"
}
```

> Response

```json
{
  "message": "Successfully obtained scout settings",
  "scoutSettings": {
    "creditsPerQuestion_video": 2,
    "creditsPerQuestion_audio": 2,
    "usdPerCredit": 0.05,
    "exchangeRate_NGNperUSD": 360,
    "creditsPerQuestion_image": 2,
    "creditsPerQuestion_text": 1
  }
}
```

> Errors

* 401 = Unauthorized request
* 403 - Only GET requests are allowed
* 500 - Error getting scout settings


## Update Scout Settings

Update scout settings.

> Endpoint: update_scout_settings

> Method: POST

> Payload

``` json
{
  "authstring": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "creditsPerQuestion_audio": 2,
  // and more scout settings
}
```

> Response

``` json
{
  "message": "Successfully updated scout settings",
    "update": {
      "creditsPerQuestion_audio": 2
    }
}
```

> Errors

* 400 - No required values included for update
* 401 - Unauthorized request
* 403 - Only POST requests are allowed
* 404 - Scout does not exist
* 500 - Error updating scout settings
## Get Scout Settings (scout-admin)

Obtains scout settings.

> Endpoint: scout_get_scout_settings

> Method: POST

> Payload

```json
{
  "uid": "7gPJM7CHa5divxg0BPMdknW8hi03",
  "idToken": "NlY3VyZXRva2VuLmdvb2dsZS5jb20vdmVyc3VzLXNjb3V0LWRldiIsImF1ZCI6InZlcnN1cy1zY291dC1kZXYiLCJhdXRo"
}
```

> Response

```json
{
  "message": "Successfully obtained scout settings",
  "scoutSettings": {
    "creditsPerQuestion_video": 2,
    "creditsPerQuestion_audio": 2,
    "usdPerCredit": 0.05,
    "exchangeRate_NGNperUSD": 360,
    "creditsPerQuestion_image": 2,
    "creditsPerQuestion_text": 1
  }
}
```

> Errors

* 401 = Unauthorized request
* 403 - Only GET requests are allowed
* 500 - Error getting scout settings


## Update Scout Settings (scout-admin)

Update scout settings.

> Endpoint: scout_update_scout_settings

> Method: POST

> Payload

``` json
{
  "uid": "7gPJM7CHa5divxg0BPMdknW8hi03",
  "idToken": "NlY3VyZXRva2VuLmdvb2dsZS5jb20vdmVyc3VzLXNjb3V0LWRldiIsImF1ZCI6InZlcnN1cy1zY291dC1kZXYiLCJhdXRo",
  "creditsPerQuestion_audio": 2,
  // and more scout settings
}
```

> Response

``` json
{
  "message": "Successfully updated scout settings",
    "update": {
      "creditsPerQuestion_audio": 2
    }
}
```

> Errors

* 400 - No required values included for update
* 401 - Unauthorized request
* 403 - Only POST requests are allowed
* 404 - Scout does not exist
* 500 - Error updating scout settings


## Get Client Settings

Obtains client settings.

> Endpoint: get_client_settings

> Method: POST

> Payload

```json
{
  "uid": "7gPJM7CHa5divxg0BPMdknW8hi03",
  "idToken": "NlY3VyZXRva2VuLmdvb2dsZS5jb20vdmVyc3VzLXNjb3V0LWRldiIsImF1ZCI6InZlcnN1cy1zY291dC1kZXYiLCJhdXRo"
}
```

> Response

```json
{
  "message": "Successfully obtained client settings",
  "clientSettings": {
    "creditsPerQuestion_audio": 2,
    "creditsPerQuestion_video": 2,
    "exchangeRate_NGNperUSD": 360,
    "usdPerCredit": 0.05,
    "usdPerRespondent_interact": 0.5,
    "creditsPerQuestion_image": 2,
    "creditsPerQuestion_text": 1
  }
}
```

> Errors

* 400 - Missing parameter idToken, uid
* 401 - User is not authorized to make this request | Error authenticating user
* 403 - Only POST requests are allowed
* 500 - Error getting client settings


## Update Client Settings

Update client settings.

> Endpoint: update_client_settings

> Method: POST

> Payload

``` json
{
  "uid": "7gPJM7CHa5divxg0BPMdknW8hi03",
  "idToken": "NlY3VyZXRva2VuLmdvb2dsZS5jb20vdmVyc3VzLXNjb3V0LWRldiIsImF1ZCI6InZlcnN1cy1zY291dC1kZXYiLCJhdXRo",
  "creditsPerQuestion_audio": 2,
  // and more client settings
}
```

> Response

``` json
{
  "message": "Successfully updated client settings",
    "update": {
      "creditsPerQuestion_audio": 2,
      "exchangeRate_NGNperUSD": 360,
      "questionsPerSurvey": 8,
      "usdPerCredit": 0.05,
      "usdPerRespondent_interact": 2,
    }
}
```

> Errors

* 400 - Missing auth parameter(s) idToken, uid | No required values included for update
* 401 - User is not authorized to make this request | Error authenticating user
* 403 - Only POST requests are allowed
* 404 - Scout does not exist
* 500 - Error updating client settings

## Get Client Settings

Obtains client settings.

> Endpoint: scout_get_client_settings

> Method: POST

> Payload

```json
{
  "uid": "7gPJM7CHa5divxg0BPMdknW8hi03",
  "idToken": "NlY3VyZXRva2VuLmdvb2dsZS5jb20vdmVyc3VzLXNjb3V0LWRldiIsImF1ZCI6InZlcnN1cy1zY291dC1kZXYiLCJhdXRo"
}
```

> Response

```json
{
  "message": "Successfully obtained client settings",
  "clientSettings": {
    "creditsPerQuestion_audio": 2,
    "creditsPerQuestion_video": 2,
    "exchangeRate_NGNperUSD": 360,
    "usdPerCredit": 0.05,
    "usdPerRespondent_interact": 0.5,
    "creditsPerQuestion_image": 2,
    "creditsPerQuestion_text": 1
  }
}
```

> Errors

* 400 - Missing parameter idToken, uid
* 401 - User is not authorized to make this request | Error authenticating user
* 403 - Only POST requests are allowed
* 500 - Error getting client settings


## Update Client Settings (scout-admin)

Update client settings.

> Endpoint: scout_update_client_settings

> Method: POST

> Payload

``` json
{
  "uid": "7gPJM7CHa5divxg0BPMdknW8hi03",
  "idToken": "NlY3VyZXRva2VuLmdvb2dsZS5jb20vdmVyc3VzLXNjb3V0LWRldiIsImF1ZCI6InZlcnN1cy1zY291dC1kZXYiLCJhdXRo",
  "creditsPerQuestion_audio": 2,
  // and more client settings
}
```

> Response

``` json
{
  "message": "Successfully updated client settings",
    "update": {
      "creditsPerQuestion_audio": 2,
      "exchangeRate_NGNperUSD": 360,
      "questionsPerSurvey": 8,
      "usdPerCredit": 0.05,
      "usdPerRespondent_interact": 2,
    }
}
```

> Errors

* 400 - Missing auth parameter(s) idToken, uid | No required values included for update
* 401 - User is not authorized to make this request | Error authenticating user
* 403 - Only POST requests are allowed
* 404 - Scout does not exist
* 500 - Error updating client settings
## Get Subscription Plans (scout-admin)

Obtains subpsrciption plans.

> Endpoint: scout_get_subscription_plans

> Method: POST

> Payload

```json
{
  "uid": "7gPJM7CHa5divxg0BPMdknW8hi03",
  "idToken": "NlY3VyZXRva2VuLmdvb2dsZS5jb20vdmVyc3VzLXNjb3V0LWRldiIsImF1ZCI6InZlcnN1cy1zY291dC1kZXYiLCJhdXRo"
}
```

> Response

```json
{
  "message": "Successfully obtained client settings",
  "subscriptionPlans": [
    {
      "countriesAllowed": 2,
      "languagesAllowed": 2,
      "mentionsAllowed": 20000, 
      "subscriptionPlanName": "SME",
      "subscriptionPlanRef": "w354ygeagh35wrrwrgsf2weweg45234"
    },
    {
      "countriesAllowed": 2,
      "languagesAllowed": 2,
      "mentionsAllowed": 20000, 
      "subscriptionPlanName": "SME",
      "subscriptionPlanRef": "w354ygeagh35wrrwrgsf2weweg45234"
    }
  ]
}
```

> Errors

* 400 - Missing parameter idToken, uid
* 401 - User is not authorized to make this request | Error authenticating user
* 403 - Only POST requests are allowed
* 500 - Error getting client settings


## Update Subscription Plans (scout-admin)

Update Subscription Plans.

> Endpoint: scout_update_subscription_plans

> Method: POST

> Payload

``` json
{
  "uid": "7gPJM7CHa5divxg0BPMdknW8hi03",
  "idToken": "NlY3VyZXRva2VuLmdvb2dsZS5jb20vdmVyc3VzLXNjb3V0LWRldiIsImF1ZCI6InZlcnN1cy1zY291dC1kZXYiLCJhdXRo",
  "subscriptionPlans": [
    {
      "countriesAllowed": 2,
      "languagesAllowed": 2,
      "mentionsAllowed": 20000, 
      "subscriptionPlanName": "SME",
      "subscriptionPlanRef": "w354ygeagh35wrrwrgsf2weweg45234"
    },
    {
      "countriesAllowed": 2,
      "languagesAllowed": 2,
      "mentionsAllowed": 20000, 
      "subscriptionPlanName": "SME",
      "subscriptionPlanRef": "w354ygeagh35wrrwrgsf2weweg45234"
    }
  // and more subscription plans
  ]
}
```

> Response

``` json
{
  "message": "Successfully updated subscription plans",
}
```

> Errors

* 400 - Missing auth parameter(s) idToken, uid | No required values included for update
* 401 - User is not authorized to make this request | Error authenticating user
* 403 - Only POST requests are allowed
* 404 - Scout does not exist
* 500 - Error updating client settings
