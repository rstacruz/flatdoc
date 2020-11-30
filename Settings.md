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
