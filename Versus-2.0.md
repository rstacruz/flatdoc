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
}
```

> Errors

```
* 401 - Failed authentication. Authstring invalid or not found in request body
* 403 - Missing required parameters
* 404 - Scout does not exist
* 500 - Backend service error
```