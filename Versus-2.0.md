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
* 403 - Missing required parameters
* 404 - Scout does not exist
* 500 - Backend service error

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

* 403 - Missing required parameters
* 404 - Scout does not exist
* 500 - Backend service error

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
* 500 - Backend service error

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

* 400 - Missing required parameters
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

* 400 - Missing required parameters || other errors
* 401 - Failed authentication. Authstring invalid or not found in request body
* 500 - Backend service error

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

* 400 - Missing required parameters || other errors
* 401 - Failed authentication. Authstring invalid or not found in request body
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

* 401 - Failed authentication. Authstring invalid or not found in request body
* 500 - Backend service error
