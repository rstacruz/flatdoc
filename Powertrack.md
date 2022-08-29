# PowerTrack

Endpoints for PowerTrack Rules


## Add Rule
This function will take an array of rules and a string containing client reference, adds the rules to PowerTrack with the client reference as tags and returns the id of the rules created.

| Field      | Type   | Description                                |
|------------|--------|--------------------------------------------|
| rules      | array  | An array of strings with rules to be added |
| client_ref | string | A sstring containing client reference


> Endpoint: https://us-central1-versus-dev-212614.cloudfunctions.net/add_powertrack_rule

> Payload

``` javascript
{
	"rules": ["keyword", "#hashtag" "key phrase"],
	"client_ref": "company"
}
```

> Result
``` javascript
{
    "created": true,
    "detail": {
        "rule": "(keyword OR #hastag OR \"key phrase\")",
        "client_ref": "company",
        "id": "1272119853105766401"
    }
}
```

## Remove Rule
This function will take an array of rule ids to be removed, removes the rules from PowerTrack filter and returns a summary of rules deleted.

| Field      | Type   | Description                                      |
|------------|--------|--------------------------------------------------|
| rule_ids   | array  | An array of strings with rules ids to be removed |


> Endpoint: https://us-central1-versus-dev-212614.cloudfunctions.net/remove_powertrack_rule

> Payload

``` javascript
{
	"rule_ids": ["1272116620828258304"]
}
```

> Result
``` javascript
{
    "summary": {
        "deleted": 0,
        "not_deleted": 1
    },
    "detail": [
        {
            "id": "1272116620828258304",
            "deleted": false,
            "message": "Rule does not exist"
        }
    ]
}
```

