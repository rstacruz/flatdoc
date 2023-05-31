# General

These are general purpose endpoints that are not necessarily attached to scout or dashboard functions

## Send SMS

This function leverages Twilio APIs to send SMS to a phone number.
Please use the endpoint and sample _authstring_ as is.

> Endpoint: https://us-central1-versus-dev-212614.cloudfunctions.net/versus_v2_send_sms

> Payload

```json
{
  "phoneNumber": "+2348123456789, +23481....",
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

**Errors**

- 400 - Missing parameter phoneNumber, message, authstring || Failed authentication. Invalid authstring || Message exceeds allowed number of characters 150/140
- 500 - Failed to send SMS

# Scout

This has endpoints for managing scout actions that are unique to Versus 2.0. For other actions refer to v1 docs.

## End Campaign

This is called after a scout has answered all campaign questions. It calculates the credits earned and adds it to respective scout account.

> Endpoint: scout_end_campaign

> Payload

```json
{
  "phoneNumber": "+2348123456789",
  "campaignRef": "47b73826-e9b2-412f-b8b4-c055eeec778b",
  "authstring": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

```json
{
  "message": "Successfully submitted survey and credited scout",
  "credits": 12,
  "campaignRef": "47b73826-e9b2-412f-b8b4-c055eeec778b"
}
```

**Errors**

- 401 - Failed authentication. Authstring invalid or not found in request body
- 403 - Missing required parameters || Scout has already completed this campaign
- 404 - Scout does not exist
- 500 - Backend service error || Oops! Something happened from our end

## End Campaign If Capped

This is called before a response can be added to a scout account to check if the number of respondents alloted has be exceeded.

> Endpoint: versus_v2_end_campaign_if_capped

> Payload

```json
{
  "campaignRef": "47b73826-e9b2-412f-b8b4-c055eeec778b"
}
```

> Response

```json
{
  "message": "Successfully ended client campaign",
}
or
{
  "message": "Campaign allotment not exhausted"
}
```

**Errors**

- 401 - Failed authentication. Authstring invalid or not found in request body
- 403 - Missing required parameters || Scout has already completed this campaign
- 404 - Scout does not exist
- 500 - Backend service error || Oops! Something happened from our end

## Get Campaigns

To obtain campaigns that match a scout's demographic.

> Endpoint: scout_get_campaigns

> Payload

```json
{
  "phoneNumber": "+2348123456789"
}
```

> Response

```json
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
      "startAge": 16,
      "versusCreditsAccruing": 0
    }
  ]
}
```

**Errors**

- 400 - Scout is not verified
- 403 - Missing required param: phoneNumber
- 404 - Scout does not exist
- 500 - Backend service error || Oops! Something broke from our end

## Get Partners

Get current scout partners.

> Endpoint: scout_get_partners

> Payload

```json
{
  "authstring": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

```json
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

**Errors**

- 400 - Missing authstring in request body
- 401 - Failed authentication. Invalid authstring
- 500 - Backend service error || Oops! Something broke from our end

## Convert Amount

Convert scout credit amount to equivalent cash.

> Endpoint: scout_convert_amount

> Payload

```json
{
  "amount": 200,
  "country": "NG",
  "authstring": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

```json
{
  "message": "Successfully converted scout credit",
  "convertedAmount": 10800,
  "currency": "NGN"
  }
}
```

**Errors**

- 400 - Missing body parameters... || We do not yet support cashout in that country || Error converting scout credit
- 401 - Failed authentication. Authstring invalid or not found in request body
- 500 - Backend service error

## Verify Account Number

This endpoint verifies scout bank account number and creates a Paystack recipient ready for transfer of funds.

> Endpoint: scout_verify_account_number

> Payload

```json
{
  "phoneNumber": "+2348123456789",
  "accountNumber": "0123456789",
  "bankCode": "026",
  "bankName": "ZENITH"
}
```

> Response

```json
{
  "message": "Sucessfully verified account number",
  "accountName": "XAVIER STAN",
  "accountNumber": "0123456789"
  }
}
```

**Errors**

- 400 - Missing body parameters ... || Error verifying account number || Error creating recipient
- 401 - Failed authentication. Authstring invalid or not found in request body
- 404 - Scout does not exist
- 500 - Backend service error || Error verifying account || Error obtaining scout

## Cashout

Initiate transfer of funds to scout bank account.

> Endpoint: scout_cashout

> Payload

```json
{
  "phoneNumber": "+2348123456789",
  "amount": 1000,
  "accountNumber": "01234567890",
  "country": "NG",
  "authstring": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

```json
{
  "message": "Successfully transferred money to recipient",
  "credits": 12,
  "amount": 1000,
  "currency": "NGN",
  "referenceNumber": "t_c7c53f113d5ac7c53f113d5a"
}
```

**Errors**

- 400 - Missing required parameters || That country is not yet supported for cashout || Error converting scout credit for transfer || Error initiating transfer to scout || Error checking transfer status || Failed to transfer money to recipient
- 401 - Failed authentication. Authstring invalid or not found in request body
- 403 - The given account number is invalid, please verify bank account || Insufficient scout credit balance || Cashout is disabled for this scout. Less than 33 credits || Scout does not have a verified bank account
- 404 - Scout does not exist
- 500 - Backend service error

## Get Banks

Obtain a list of banks with their codes.

> Endpoint: scout_get_banks

> Payload

```json
{
  "authstring": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

```json
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

**Errors**

- 400 - Error obtaining banks list
- 401 - Failed authentication. Authstring invalid or not found in request body
- 500 - Backend service error

## Save Device Token

To save a scout device registration token. It handles both creation of a new record and update of an existing one.

> Endpoint: scout_save_device_token

> Payload

```json
{
  "scoutRef": "+2348123456789",
  "deviceRegistrationToken": "47b73826-e9b2-412f-b8b4-c055eeec778b",
  "authstring": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

```json
{
  "message": "Successfully created new device registration token record",
  "scoutRef": "+2348123456789",
  "deviceRegistrationToken": "47b73826-e9b2-412f-b8b4-c055eeec778b",
  "deviceRegistrationTokenRef": "dccfb068-de00-40a8-b033-8488430136f3"
}
```

```json
{
  "message": "Successfully updated device registration token",
  "scoutRef": "+2348123456789",
  "deviceRegistrationToken": "47b73826-e9b2-412f-b8b4-c055eeec778b",
  "deviceRegistrationTokenRef": "dccfb068-de00-40a8-b033-8488430136f3"
}
```

**Errors**

- 400 - Missing parameter scoutRef, deviceRegistrationToken
- 401 - Failed authentication. Authstring invalid or not found in request body
- 403 - Only POST requests are allowed
- 500 - Error creating new device registration token record || Error updating existing device registration token record || Error fetching token record

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

## Redeem credits

Redeems a scout's versus credits via Mobile money transfer.

> Endpoint: scout_redeem_credits

> Payload (All parameters are required)

```json
{
  "phoneNumber": "+2347034969842",
  "firstName": "Chukwuka",
  "lastName": "Emi",
  "amount": 20,
  "country": "GH",
  "authstring": "55ad4986-b519-4e44-ab0b-890527299af6"
}
```

> Response

```json
{
  "message": "Successfully initiated mobile money transfer to recipient",
  "credits": 20,
  "amount": "8.00",
  "currency": "BXC",
  "referenceNumber": "a1f8c460-fe31-4d1f-9995-ecbe25108144"
}
```

> Errors

- 400 - Missing required parameters || Invalid parameters' values
- 401 - Failed authentication. Authstring invalid or not found in request body
- 403 - Invalid request method (Only POST requests are allowed)
- 404 - Scout does not exist
- 500 - Server error

# Dashboard

These are endpoints called by v2.0 dashbboard components.

## Add Campaign

Add a new campaign

> Endpoint: versus_v2_add_campaign

> Payload

```json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "description": "Let’s get you started with a simple demographics survey! This will help us send you surveys that are more appropriate for you.",
  "campaignName": "Demographics Survey",
  "isDemographicSurvey": true,
  "campaignRef": "a0ad177c-a6d0-44a4-8662-7f2851093b81",
  "country": 160, // country id
  "stateOrRegion": 6, // state or region id
  "endAge": 65,
  "startAge": 16,
  "gender": ["female"],
  "interest_id": 2,
  "soccer_fan": true,
  "sports_fan": true,
  "favorite_team_id": 3
}
```

> Response

```json
{
  "message": "Successfully added new client campaign",
  "campaignRef": "47b73826-e9b2-412f-b8b4-c055eeec778b"
}
```

**Errors**

- 401 - User is not authorized to make this request || Error authenticating user
- 402 - Insufficient versus credit balance
- 403 - Missing required parameters
- 404 - Client does not exist
- 500 - Backend service error

## Add Client

Add a new client on signup

> Endpoint: versus_v2_add_client

> Payload

```json
{
  "email": "abc@def.ghi",
  "firstName": "Xavier",
  "lastName": "Stan",
  "organizationName": "Enterfive",
  "OrganizationSector_id": 1
}
```

> Response

```json
{
  "message": "Successfully added new client",
  "clientRef": "47b73826-e9b2-412f-b8b4-c055eeec778b"
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 404 - Client does not exist
- 409 - Email already exists
- 500 - Backend service error

## Add Question

Add a new campaign question

> Endpoint: versus_v2_add_question

> Payload

```json
{
  "uid": "dK8IJ5G9Z1PfH8Enclct5lu0vIk1",
  "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjU4ODI0YTI2ZjFlY2Q1NjEyN2U4OWY1YzkwYTg4MDYxMTJhYmU5OWMiLCJ0eXAiOiJKV1Q",
  "question": "Which snack do you like best?",
  "optionsType": "multiplechoice",
  "optionsList": [
    { "option": "Biscuits", "option_type": "specified" },
    { "option": "Chocolate", "option_type": "specified" },
    { "option": "Groundnuts", "option_type": "specified" },
    { "option": "Others", "option_type": "unspecified" }
  ],
  "campaignRef": "48afd59b-c367-4d60-a695-76984fb65be8"
}
```

> Response

```json
{
  "message": "Successfully added new question"
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 402 - Insufficient versus credit balance
- 404 - Campaign does not exist
- 500 - Backend service error

## Confirm Team Member

Confirm a new team member who is onboarding and creating a profile

> Endpoint: versus_v2_confirm_team_member

> Payload

```json
{
  "email": "xavi@stan.dev",
  "token": "bfbbc055eeec778b",
  "firstName": "Xavier",
  "lastName": "Stan"
}
```

> Response

```json
{
  "message": "Successfully confirmed team"
}
```

**Errors**

- 400 - Missing required parameters
- 401 - Invalid team token
- 402 - Insufficient versus credit balance
- 404 - Team not found
- 500 - Backend service error

## Edit Campaign

Update a campaign

> Endpoint: versus_v2_edit_campaign

> Payload

```json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "campaignRef": "a0ad177c-a6d0-44a4-8662-7f2851093b81",
  "campaignName": "Demographics Survey",
  "description": "Let’s get you started with a simple demographics survey!",
  "gender": ["male"],
  "startAge": 20,
  "endAge": 29,
  "country": 160,
  "stateOrRegion": 20,
  "startDate": "2021/07/23",
  "interest_id": 2,
  "soccer_fan": true,
  "sports_fan": true,
  "favorite_team_id": 3
}
```

> Response

```json
{
  "message": "Successfully updated client campaign",
  "campaignRef": "47b73826-e9b2-412f-b8b4-c055eeec778b"
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 404 - Client does not exist
- 500 - Backend service error

## Edit Client

Update client data

> Endpoint: versus_v2_edit_client

> Payload

```json
{
  "email": "xavier@stan.dev",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "clientData": {
        "organizationSector_id": 5,
        "firstName": "john",
        "lastName": "doe",
        "alertCriticalMentions": true,
        "alertDaily": true,
        "alertWeekly": false,
        "alertMonthly": true
        ...
        ...
  }
}
```

> Response

```json
{
  "message": "Successfully updated client data"
}
```

**Errors**

- 401 - Team member does not have edit capability || Error authenticating user
- 402 - Insufficient versus credit balance
- 403 - Missing required parameters
- 404 - Team not found || Client does not exist
- 500 - Backend service error

## Edit Client Admin

Update client data for admin

> Endpoint: versus_v2_edit_client_admin

> Payload

```json
{
  "email": "xavier@stan.dev",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "clientData": {
        "twitterHandles": "@johndoe",
        "otherBrandNames": "enterfive",
        ...
        ...
  }
}
```

> Response

```json
{
  "message": "Successfully updated client data"
}
```

**Errors**

- 400 - Missing required parameters || Error updating client data
- 401 - Team member does not have edit capability || Error authenticating user
- 403 - Only POST request is allowed
- 404 - Team not found || Client does not exist
- 500 - Backend service error

## Get Survey Data

Get Survey data

> Endpoint: versus_v2_get_survey_data

> Payload

```json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "campaignRef": "a0ad177c-a6d0-44a4-8662-7f2851093b81"
}
```

> Response

```json
{
  "message": "Successfully obtained survey data",
  "campaign": {
    ...
    ...
  }
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 404 - Campaign does not exist
- 500 - Backend service error

## Get All Campaign Data \*\*

Get all campaign-related data

\*\* To be deprecated soon

> Endpoint: versus_v2_get_all_campaign_data

> Payload

```json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "campaignRef": "a0ad177c-a6d0-44a4-8662-7f2851093b81"
}
```

> Response

```json
{
  "message": "Successfully obtained all campaign data",
  "campaign": {
    "campaignRef": "a0ad177c-a6d0-44a4-8662-7f2851093b81"
  },
  "questions": [],
  "reponses": [],
  "respondents": []
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 404 - Campaign does not exist
- 500 - Backend service error

## Get All Surveys \*\*

Get all surveys

\*\* To be deprecated soon

> Endpoint: versus_v2_add_campaign

> Payload

```json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

```json
{
  "message": "Successfully obtained all campaigns",
  "campaigns": []
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 404 - Client does not exist
- 500 - Backend service error

## Get Campaign \*\*

Get campaign data

\*\* To be deprecated soon

> Endpoint: versus_v2_get_campaign

> Payload

```json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "campaignRef": "a0ad177c-a6d0-44a4-8662-7f2851093b81"
}
```

> Response

```json
{
  "message": "Successfully obtained campaign data",
  "campaign": {},
  "questionsData": [
    {
      "questionRef": "08f7af41-2774-4f7c-a33d-ba3e00b72723",
      "campaignRef": "812fa6a9-3f68-4ec3-a74c-6f834045d151",
      "question": "Which snack do you like best?",
      "response_type": "multiplechoice",
      "response_lower_range": null,
      "response_upper_range": null,
      "sequence": 1,
      "options": {
        "options_list": [
          {
            "id": 234,
            "option": "always happy",
            "option_type": "specified",
            "skip_logic": {
              "action_type": "JUMP",
              "jump_questionRef": "18f7af41-2774-4f7t-a33d-ba3e00b72725"
            }
          }
        ],
        "type": "nps"
      }
    }
  ],
  "responsesData": {
    "numberOfResponses": 5
  },
  "highestSequence": 1
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 404 - Campaign does not exist
- 500 - Backend service error

## Get Campaigns \*\*

Get all campaigns

\*\* To be deprecated soon

> Endpoint: versus_v2_get_campaigns

> Payload

```json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

```json
{
  "message": "Successfully obtained campaigns data",
  "campaign": [],
  "questionsData": [
    {
        "clientRef": "nqaXKB0SzWN6xh7RVyzl",
        "campaignRef": "70254780-fc7d-4f17-a2e9-daae7ac83d42",
        "numberOfQuestions": 24
    }, ....
  ],
  "responsesData": [
    {
        "clientRef": "nqaXKB0SzWN6xh7RVyzl",
        "campaignRef": "8f23b689-790d-4e0a-8cff-b03e07433278",
        "numberOfResponses": 144
    },
  ]
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 500 - Backend service error

## Get Chart Data

Get processed chart data and labels

> Endpoint: versus_v2_get_chart_data

> Payload

```json
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

```json
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

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 500 - Backend service error

## Get Client

Get client data

> Endpoint: versus_v2_get_client

> Payload

```json
{
  "email": "xavier@stan.dev",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

```json
{
  "message": "Successfully obtained client",
  "client": {},
  "team": {}
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 404 - Client or Team does not exist
- 500 - Backend service error

## Get Clients

Get clients data

> Endpoint: versus_v2_get_clients

> Payload

```json
{
  "page": 1,
  "size": 10,
  "authstring": "13238bee-3ac9-4c77-b3b1"
}
```

> Response

```json
{
  "message": "Successfully obtained clients",
  "totalPages": 1,
  "totalClients": 10,
  "pageSize": 10,
  "currentPage": 1,
  "clients": []
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 404 - No record found
- 500 - Backend service error

## Get Subscription Status

Get subscription status

> Endpoint: versus_v2_get_subscription_status

> Payload

```json
{
  "clientRef": "0d3c2555-a595-4d76-b5f3-27096e947335"
}
```

> Response

```json
{
  "message": "Successfully obtained client subscription status",
  "subscription": [
      {
        "id": "sub_1Jk5QgFVq4cpBfbzCBuAMLsI",
        "object": "subscription",
        "application_fee_percent": null,
        "automatic_tax": {
            "enabled": false
        },
        "billing": "charge_automatically",
        "billing_cycle_anchor": 1634123726,
        "billing_thresholds": null,
        "cancel_at": null,
        "cancel_at_period_end": false,
        "canceled_at": null,
        "collection_method": "charge_automatically",
        "created": 1634123726,
        "current_period_end": 1639394126,
        "current_period_start": 1636802126,
        "customer": "cus_KOtDl5Ot72Swlm",
        "...."
      }
  ]
}
```

**Errors**

- 400 - Missing required parameters
- 404 - Error getting client subscription status
- 500 - Error getting Versus client

## Get Mentions Caps Status

Get mentions caps status for client

> Endpoint: versus_v2_get_mentions_cap_status

> Payload

```json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl"
}
```

> Response

```json
{
  "message": "Successfully obtained mentions for client nqaXKB0SzWN6xh7RVyzl ",
  "mentions_cap_status": {
    "mentionsLimit": 1000,
    "mentions": 30,
    "mentionsRemaining": 970,
    "isMentionsCapped": false
  }
}
```

**Errors**

- 400 - Missing required parameters
- 403 - Only post requests allowed
- 404 - Client does not exist
- 500 - Error getting mentions

## Disable Mentions On Cap

Disable client mentions on cap

> Endpoint: versus_v2_disable_mentions_on_cap
> Payload

```json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "powerTrackRuleId": "bfbbc055eeec778b"
}
```

> Response

```json
{
  "status": "Ok"
}
```

**Errors**

- 400 - Missing parameter
- 401 - Missing API key
- 402 - Incorrect API key
- 403 - Only POST requests are allowed
- 500 - Error getting clients

## Iterate Clients Mentions On Cap

Iterate Clients Mentions On Cap

> Endpoint: versus_v2_iterate_clients_mentions_on_cap
> Payload

```json
{
  "apiKey": "nqaXKB0SzWN6xh7RVyzlbfbbc055eeec"
}
```

> Response

```json
{
  "message": "Successfully iterated through clients"
}
```

**Errors**

- 401 - Missing API key
- 402 - Incorrect API key
- 403 - Only POST requests are allowed
- 404 - There are no clients
- 500 - Error getting clients

## Get Filtered Mentions

Get mentions for specific set of filters

> Endpoint: versus_v2_get_filtered_mentions

> Payload

```json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "period": "today"
}
```

> Response

```json
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

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 500 - Backend service error

## Get Mentions Summary

Get a summary of mentions distribution for a period

> Endpoint: versus_v2_get_mentions_summary

> Payload

```json
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

```json
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

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 500 - Backend service error

## Get Most Popular Mentions

Obtain most popular mentions

> Endpoint: versus_v2_get_most_popular_mentions

> Payload

```json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "period": "last 7 days"
}
```

> Response

```json
{
  "message": "Successfully obtained most popular mentions",
  "popularMentions": {
    "positive": [],
    "negative": []
  }
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 404 - Client does not exist
- 500 - Backend service error

## Get Newsfeed

Get social media and news mentions details for newsfeed

> Endpoint: versus_v2_get_newsfeed

> Payload

```json
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

```json
{
  "message": "Successfully obtained newsfeed",
  "newsfeed": []
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 500 - Backend service error

## Get Interests

Obtain sources of news mentions

> Endpoint: versus_v2_get_interests

> Payload

```json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

```json
{
  "message": "Successfully obtained interests data",
  "interests": [
    {
      "id": 1,
      "name": "Agriculture"
    }
  ]
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 500 - Backend service error || Oops! Something happened from our end

## Get News Mentions Sources

Obtain sources of news mentions

> Endpoint: versus_v2_get_news_mentions_sources

> Payload

```json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "period": "today",
  "sentiment": "positive"
}
```

> Response

```json
{
  "message": "Successfully obtained news mentions sources",
  "totalSources": 10,
  "sources": []
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 500 - Backend service error

## Get Others Mentions Sources

Obtain sources of other mentions

> Endpoint: versus_v2_get_others_mentions_sources

> Payload

```json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "period": "today",
  "sentiment": "positive"
}
```

> Response

```json
{
  "message": "Successfully obtained others mentions sources",
  "totalSources": 10,
  "sources": []
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 500 - Backend service error

## Get Socialmedia Mentions Sources

Obtain sources of social media mentions

> Endpoint: versus_v2_get_socialmedia_mentions_sources

> Payload

```json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "period": "today",
  "sentiment": "positive"
}
```

> Response

```json
{
  "message": "Successfully obtained socialmedia mentions sources",
  "totalTwitterMentions": 20
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 500 - Backend service error

## Get Offboard Client

Obtain details of client that has not yet onboarded

> Endpoint: versus_v2_get_offboard_client

> Payload

```json
{
  "onboardingToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

```json
{
  "message": "Successfully obtained client",
  "client": {}
}
```

**Errors**

- 400 - Missing required parameters
- 404 - Client does not exist
- 500 - Backend service error

## Change Response Emails

Change client response emails

> Endpoint: versus_v2_change_response_emails

> Payload

```json
{
  "email": "hi@mail.com",
  "responseEmails": "new12@mail.com, new233@mail.com",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

```json
{
  "message": "Successfully changed response emails",
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "responseEmails": "new12@mail.com, new233@mail.com"
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user || Team member does not have edit capabilities
- 404 - Team does not exist for email
- 500 - Backend service error

## Update Alert Options

Update Client Alert Options

> Endpoint: versus_v2_update_alert_options

> Payload

```json
{
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "email": "hi@mail.com",
  "alertOptions": {
    "alertCriticalMentions": true,
    "alertMonthly": false,
    "alertWeekly": false,
    "alertDaily": true
  }
}
```

> Response

```json
{
  "message": "Successfully updated alert options",
  "clientRef": "b4501e1b-a393-480a-828d-890f2ea75498",
  "alertOptions": {
    "alertCriticalMentions": true,
    "alertMonthly": false,
    "alertWeekly": false,
    "alertDaily": true
  }
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user || Team member does not have edit capabilities
- 404 - Team does not exist || Client does not exist for email
- 500 - Backend service error

## Change Can Edit Privilege

Change team member edit privilege

> Endpoint: versus_v2_change_can_edit_privilege

> Payload

```json
{
  "email": "hi@mail.com",
  "teamRef": "b4501e1b-a393-480a-828d-890f2ea75498",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

```json
{
  "message": "Successfully changed edit privileges of team member",
  "teamRef": "b4501e1b-a393-480a-828d-890f2ea75498",
  "canEdit": false
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user || Team member does not have edit capabilities
- 404 - Team does not exist || Client does not exist for email
- 500 - Backend service error

## Change Search Terms

Change Client search terms.

> Endpoint: versus_v2_change_search_terms

> Payload

```json
{
   "email": "newUser@gmail.com",
    "searchTerms": {
        "brandName": "enterfive",
        "otherBrandNames": "e5, versus
        ",
        "twitterHandles": "@vwedesam",
        "countriesToTrack": [{ "Code": "AX", "Name": "Aland Islands" }],
        "languagesToTrack": [{ "Code": "EN", "Name": "EN" }]
    },
    "uid": "dK8IJ5G9Z1PfH8Enclct5lu0vIk1",
    "idToken":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjMwMjUxYWIxYTJmYzFkMzllNDMwMWNhYjc1OTZkNDQ5ZDgwNDI1ZjYiLCJ0eXAiOiJKV1QifQ."
}
```

> Response

```json
{
  "message": "Successfully updated search terms",
  "clientRef": "6449-9f78-4cf4-9c91-49093e18137b"
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 404 - Team does not exist
- 500 - Backend service error

## Get Team Members

Get client team members

> Endpoint: versus_v2_get_team_members

> Payload

```json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

```json
{
  "message": "Successfully obtained team members",
  "teamMembers": [
    {
      "clientRef": "nqaXKB0SzWN6xh7RVyzl",
      "teamRef": "3ac9-4c77-b3b1-c7c53f113d5a",
      "email": "deji@enterfive.com",
      "firstName": "e5",
      "lastName": "enter",
      "canEdit": false,
      "status": "pending",
      "isAdmin": true
    },
    {
      ...
      ...
      ...
    }
  ]
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 500 - Backend service error

## Remove Team Member

Remove client team member

> Endpoint: versus_v2_remove_team_member

> Payload

```json
{
  "email": "hi@mail.com",
  "teamRef": "aXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

```json
{
  "message": "Successfully removed team member",
  "teamRef": "aXKB0SzWN6xh7RVyzl"
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 403 - You are not authorized to remove this team member
- 404 - Client does not exist || Team does not exist
- 500 - Backend service error

## Invite New Team Member

Invite new team member

> Endpoint: versus_v2_invite_new_team_member

> Payload

```json
{
  "email": "hi@mail.com",
  "newTeamMemberEmail": "new_member@mail.com",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

```json
{
  "message": "Successfully added new team member",
  "newTeamMember": {
    "email": "new_member@mail.com",
    "inviteStatus": "pending",
    "clientRef": "clkdydaXKB0SzWN6xh7RVyzl",
    "teamRef": "aXKB0SzWN6xh7RVyzl"
  }
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 404 - Team does not exist
- 500 - Backend service error

## Resend Team Member Invite

resend team member invite.

> Endpoint: versus_v2_resend_team_member_invite

> Payload

```json
{
  "email": "hi@mail.com",
  "newTeamMemberEmail": "new_member@mail.com",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

```json
{
  "message": "Successfully resent new team member invite",
  "newTeamMemberEmail": "new_member@mail.com"
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 404 - Team does not exist
- 500 - Backend service error

## Get Top Influencers

Obtain a list of top influencers

> Endpoint: versus_v2_get_top_influencers

> Payload

```json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "period": "today",
  "mention": {},
  "brandName":
}
```

> Response

```json
{
  "message": "Successfully obtained top influencers",
  "topInfluencers": {
    "positive": [],
    "negative": []
  }
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 500 - Backend service error

## Get Total Questions

Get a count of total questions for a client

> Endpoint: versus_v2_get_total_questions

> Payload

```json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

```json
{
  "message": "Successfully obtained total questions",
  "totalQuestions": 320
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user

* 500 - Backend service error

## Get Total Responses

Get a count of total responses for a client

> Endpoint: versus_v2_get_total_responses

> Payload

```json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

```json
{
  "message": "Successfully obtained total responses",
  "totalResponses": 320
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 500 - Backend service error

## Get Survey Questions

Get questions for a campaign

> Endpoint: versus_v2_get_survey_questions

> Payload

```json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "campaignRef": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

```json
{
  "message": "Successfully obtained survey questions",
  "questions": [
    { }
    ....
    ...
  ]
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 500 - Backend service error

## Get Total Survey Questions

Get a count of total survey questions for each campaign

> Endpoint: versus_v2_get_total_survey_questions

> Payload

```json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "campaignRef": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

```json
{
  "message": "Successfully obtained total survey questions",
  "totalSurveyQuestions": 6
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 500 - Backend service error

## Get Total Survey Respondents

Get total survey respondents for a campaign

> Endpoint: versus_v2_get_total_survey_respondents

> Payload

```json
{
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "campaignRef": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

```json
{
  "message": "Successfully obtained total survey respondents",
  "totalSurveyRespondents": 6
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 500 - Backend service error

## Get Total Survey Responses

Get a count of total survey responses for each campaign

> Endpoint: versus_v2_get_total_survey_responses

> Payload

```json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "campaignRef": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

```json
{
  "message": "Successfully obtained total survey responses",
  "totalSurveyResponses": 6
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 500 - Backend service error

## Get Total Surveys

Obtain a count of all the surveys for a client

> Endpoint: versus_v2_get_total_surveys

> Payload

```json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

```json
{
  "message": "Successfully obtained total surveys data",
  "totalSurveys": 14
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 500 - Backend service error

## Get Survey Options Data

Get Survey options data

> Endpoint: versus_v2_get_survey_options_data

> Payload

```json
{
  "questionRef": "8b6713e8-6ff7-4d32-90f6-2bddef574c0f",
  "option": "yes",
  "age": [1, 70],
  "gender": ["female", "male", "other"],
  "tribe": ["igbo", "hausa", "yoruba", "other"],
  "educationLevel": ["Senior Secondary", "Primary"],
  "religion": ["other", "christian"],
  "relationshipStatus": ["Single", "Married"],
  "employmentStatus": ["student"],
  "childrenInHousehold": ["3_to_5", "5_to_10"],
  "personsInHousehold": ["3_to_5"],
  "householdEarningsMonthly": ["100_to_500_USD"],
  "personalEarningsMonthly": ["100_to_500_USD"],
  "childrenUnder18": ["yes"],
  "states": ["Delta"],
  "targetQuestionRefToFilterBy": "6cd0ba7a-31dd-492a-acb6-05b93cdd6a10", //Optional
  "targetResponseOptionToFilterBy": "I don't know" //Optional
}
```

> Response

```json
{
  "message": "Successfully obtained options data",
  "totalResponses": 12,
  "totalOptionResponses": 5,
  "totalFiltered": 2,
  "totalOptionFiltered": 0
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 500 - Backend service error

## get Total Filtered Survey Respondents

Get Total Filtered Survey Respondents

> Endpoint: versus_v2_get_total_filtered_survey_respondents

> Payload

```json
{
  "questionRef": "8b6713e8-6ff7-4d32-90f6-2bddef574c0f",
  "option": "yes",
  "age": [1, 70],
  "gender": ["female", "male", "other"],
  "tribe": ["igbo", "hausa", "yoruba", "other"],
  "educationLevel": ["Senior Secondary", "Primary"],
  "religion": ["other", "christian"],
  "relationshipStatus": ["Single", "Married"],
  "employmentStatus": ["student"],
  "childrenInHousehold": ["3_to_5", "5_to_10"],
  "personsInHousehold": ["3_to_5"],
  "householdEarningsMonthly": ["100_to_500_USD"],
  "personalEarningsMonthly": ["100_to_500_USD"],
  "childrenUnder18": ["yes"],
  "states": ["Delta"],
  "targetQuestionRefToFilterBy": "6cd0ba7a-31dd-492a-acb6-05b93cdd6a10",
  "targetResponseOptionToFilterBy": "No"
}
```

> Response

```json
{
  "message": "Successfully obtained total survey respondents",
  "totalFilteredSurveyRespondents": 9
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 500 - Backend service error

## Launch campaign

CHange the status pf a campaign from draft to live

> Endpoint: versus_v2_launch_campaign

> Payload

```json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "campaignRef": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

```json
{
  "message": "Successfully launched client campaign",
  "campaignRef": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 500 - Backend service error

## Mark Irrelevant Mentions

Register a mention as irrlevant and notify project team

> Endpoint: versus_v2_mark_irrelevant_mention

> Payload

```json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "mention": {},
  "brandName":
}
```

> Response

```json
{
  "message": "Successfully sent email"
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 500 - Backend service error

## Onboard Client

Onboard client

> Endpoint: versus_v2_onboard_client

> Payload

```json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "officeAddress": "35 Oju Omega Avenue, Ikoyi, Lagos",
  "onboardingToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a",
  "brandName": "Enterfive",
  "otherBrandNames": "e5",
  "responseEmails": "pr@e5.com, hr@e5.com",
  "comparisonBrands": [],
  "teamMembers": [],
  "filterProfanity": true,
  "countriesToTrack": [2, 4, 7],
  "languagesToTrack": ["EN", "FR"]
}
```

> Response

```json
{
  "message": "Successfully onboarded client",
  "clientRef": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

**Errors**

- 400 - Missing required parameters
- 401 - Client is not approved for onboarding
- 500 - Backend service error

## Respond To Mention

Notify client designated responder of a mention they should act on

> Endpoint: versus_v2_respond_to_mention

> Payload

```json
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

```json
{
  "message": "Successfully sent email"
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 500 - Backend service error

## Retag Mention

Register a mention which sentiment is to be retagged and notify project team

> Endpoint: versus_v2_retag_mention

> Payload

```json
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

```json
{
  "message": "Successfully sent email"
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 500 - Backend service error

## Get Versus Credits

Obtain client's current value of versus credit

> Endpoint: versus_v2_get_versus_credits

> Payload

```json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "bfbbc055eeec778b",
  "idToken": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a.13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

```json
{
  "message": "Successfully obtained client versus credits",
  "versusCredits": 5500
}
```

**Errors**

- 400 - Missing required parameters
- 401 - User is not authorized to make this request || Error authenticating user
- 500 - Backend service error

## Verify Signup Access

Validate tokenized signup link

> Endpoint: versus_v2_verify_signup_access

> Payload

```json
{
  "tk": "13238bee-3ac9-4c77-b3b1-c7c53f113d5a"
}
```

> Response

```json
{
  "message": "Successfully verified signup"
}
```

**Errors**

- 400 - Missing required parameters
- 401 - Invalid signup token
- 500 - Backend service error

## Download Report

Generates and downloads Versus pdf report based on filter parameters

> Endpoint: get_pdf_report

> Payload

```json
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

```json
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

**Errors**

- 400 - Missing required parameters
- 401 - Invalid signup token
- 500 - Backend service error

## Download Comparison Report

Generates and downloads Versus comparison pdf report based on filter parameters

> Endpoint: versus_v2_get_comparison_pdf

> Payload

```json
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
  "brands": [
    "2a304e66-2392-4b25-bd84-f5b7cc6d6aa5",
    "9da210aa-1033-49ce-aff8-b451b6bece85"
  ]
}
```

> Response: Returns Pdf file for Download

**Errors**

- 400 - Missing required parameters
- 401 - Invalid signup token
- 500 - Backend service error

## Get Subscription Plan

Obtain details of a subscription plan

> Endpoint: versus_v2_get_subscription_plan

> Payload

```json
{
  "subscriptionPlanRef": "081d4b17-a1f3-4600-920f-6f46d3919873"
}
```

> Response

```json
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

## Get Subscription Plans

Obtain all subscription plans in db, sorted in ascending `sequence` order.

**Endpoint** versus_v2_get_subscription_plans

**Method** GET

**Sample response** 200

```json
{
  "message": "Successfully obtained subscription plans",
  "subscriptionPlans": [
    {
      "blurb": "For innovative pre-launch brands looking to boldly track and test",
      "countriesAllowed": 1,
      "sequence": 1,
      "price_monthly_USD": 0,
      "subscriptionPlanRef": "facfa4f4-d5d9-47ad-a0d8-b84402065dc9",
      "mentionsAllowed": 5000,
      "subscriptionPlanName": "Starter",
      "isFree": true,
      "details": "Get access to up to 5,000 mentions from 12 African countries of your choice. Extra $25 starting Ask credits. No custom reporting & consultation included.",
      "languagesAllowed": 1,
      "startCredits": 50,
      "price": "Free",
      "stripePriceId": "price_1IdC4hFVq4cpBfbzQm9fMsaP"
    }
  ]
}
```

**Errors**

- 400 - Only GET requests are allowed
- 404 - There are no subscription plans
- 500 - Error obtaining subscription plans

## Get Total Requests

Get total number of requests for a client.

**Endpoint** versus_v2_get_total_requests

> Payload

```json
{
  "clientRef": "12345",
  "uid": "6789",
  "idToken": "101112"
}
```

> Response

```json
{
  "message": "Successfully obtained total number of requests",
  "totalNumberOfRequests": 7
}
```

**Errors**

- 400 - Missing parameter | Invalid param ... Should be of type ...
- 401 - User is not authorized to make this request | Error authenticating user
- 403 - Only POST requests are allowed | Unauthorized request
- 404 - Team does not exist for client | Multimedia requests do not exist
- 500 - Error obtaining multimedia requests | Error obtaining client team for authorization

## Get Total Client Request Respondents

Get total number of client request respondents.

**Endpoint** versus_v2_get_total_client_request_respondents

> Payload

```json
{
  "clientRef": "12345",
  "uid": "6789",
  "idToken": "101112"
}
```

> Response

```json
{
  "message": "Successfully obtained total number of request respondents",
  "totalNumberOfClientRequestRespondents": 7
}
```

**Errors**

- 400 - Missing parameter | Invalid param ... Should be of type ...
- 401 - User is not authorized to make this request | Error authenticating user
- 403 - Only POST requests are allowed | Unauthorized request
- 404 - Team does not exist for client | Multimedia requests do not exist
- 500 - Error obtaining total number of client request responses | Error obtaining client team for authorization

## Get Request

Get a multimedia request/campaign

> Endpoint: versus_v2_get_request

> Payload

```python
{
  "clientRef": "12345",
  "uid": "6789",
  "idToken": "101112",
  "requestRef" "d34ffffeefefefefe"
}
```

> Response

```python
{
  "message":"Successfully obtained multimedia request",
  "request": {
       "clientRef": "12345",
       "requestName": "Footage of the Lekki Protest",
       "description": "Let’s get you started with a simple photo request.",
       "requestRef": "001a0ad177c-a6d0-44a4-8662-7f2851093b81",
       "country": "NG",
       "stateOrRegion": "Lagos",
       "endAge": 65,
       "startAge": 16,
       "gender": "female",
       "numberOfRespondents": 500,
       "mediaType": "audio",
       "status": "live",
       "created": "Thu Nov 12 2020 14:20:50 GMT+0100 (West Africa Standard Time)",
    }
}
```

## Get Requests

Get a list of requests belonging to a client

> Endpoint: versus_v2_get_requests

> Payload

```python
{
  "clientRef": "12345",
  "uid": "6789",
  "idToken": "101112"
}
```

> Response

```python
{
  "message":"Successfully obtained requests",
  [
    {
       "clientRef": "12345",
       "requestName": "Footage of the Lekki Protest",
       "description": "Let’s get you started with a simple photo request.",
       "requestRef": "001a0ad177c-a6d0-44a4-8662-7f2851093b81",
       "country": "NG",
       "stateOrRegion": "Lagos",
       "endAge": 65,
       "startAge": 16,
       "gender": "female",
       "numberOfRespondents": 500,
       "mediaType": "audio",
       "status": "live",
       "created": "Thu Nov 12 2020 14:20:50 GMT+0100 (West Africa Standard Time)",
    }
    .
    .
  ]
}
```

## Get Total Request Respondents

Get total number of respondents for a request.

**Endpoint** versus_v2_get_total_request_respondents

> Payload

```json
{
  "clientRef": "12345",
  "requestRef": "12345",
  "uid": "6789",
  "idToken": "101112"
}
```

> Response

```json
{
  "message": "Successfully obtained total number of request respondents",
  "totalNumberOfRequestRespondents": 7
}
```

**Errors**

- 400 - Missing parameter | Invalid param ... Should be of type ...
- 401 - User is not authorized to make this request | Error authenticating user
- 403 - Only POST requests are allowed | Unauthorized request
- 404 - Team does not exist for client | Multimedia requests do not exist
- 500 - Error obtaining total number of request respondents | Error obtaining client team for authorization

## Create Request

Create a new multimedia request.

> Endpoint: versus_v2_create_new_request

> Payload

```json
{
  "clientRef": "12345",
  "uid": "6789",
  "idToken": "101112",
  "requestName": "Footage of the Lekki Protest",
  "description": "Let’s get you started with a simple photo request.",
  "country": "160", // country id
  "stateOrRegion": "2", // state or region id
  "endAge": 65,
  "startAge": 16,
  "gender": "female",
  "numberOfRespondents": 500,
  "mediaType": "image"
}
```

> Response

```json
{
  "message": "Successfully created new request",
  "requestRef": "1234567890-09876543234567890-0987654"
}
```

**Errors**

- 400 - Missing parameter clientRef, clientName, requestName, etc | Invalid param description. Should be type string
- 401 - User is not authorized to make this request | Error authenticating user
- 403 - Only POST requests are allowed
- 500 - Error creating new request

## End MultiMedia Request

end multimedia request.

**Endpoint** versus_v2_get_request_responses

> Sample payload

```json
{
  "clientRef": "12345",
  "requestRef": "12345",
  "uid": "6789",
  "idToken": "101112"
}
```

> Sample response

```json
{
  "message": "Successfully obtained request responses"
}
```

**Errors**

- 400 - Missing parameter | Invalid param ... Should be of type ...
- 401 - User is not authorized to make this request | Error authenticating user
- 403 - Only POST requests are allowed | Unauthorized request
- 404 - Team does not exist for client | Multimedia requests do not exist
- 500 - Error obtaining request responses | Error obtaining client team for authorization

## Get Request Responses

Get a list of responses for a request.

**Endpoint** versus_v2_get_request_responses

> Sample payload

```json
{
  "clientRef": "12345",
  "requestRef": "12345",
  "uid": "6789",
  "idToken": "101112"
}
```

> Sample response

```json
{
  "message": "Successfully obtained request responses",
  "responses": [
    {
      "clientRef": "12345",
      "responseRef": "2",
      "requestRef": "12345",
      "scoutRef": "+2349484757484",
      "mediaUrls": ["https://google.api.com/235617"],
      "created": "Thu Nov 12 2020 14:20:50 GMT+0100 (West Africa Standard Time)",
      "mediaType": "audio"
    }
  ]
}
```

**Errors**

- 400 - Missing parameter | Invalid param ... Should be of type ...
- 401 - User is not authorized to make this request | Error authenticating user
- 403 - Only POST requests are allowed | Unauthorized request
- 404 - Team does not exist for client | Multimedia requests do not exist
- 500 - Error obtaining request responses | Error obtaining client team for authorization

## Approve Request Response

**Endpoint**

versus_v2_approve_request_response

> Sample payload

```json
{
  "clientRef": "12345",
  "requestRef": "123456",
  "responseRef": "123456",
  "uid": "6789",
  "idToken": "101112"
}
```

> Sample response

```json
{
  "message": "Successfully approved request response",
  "responseRef": "12345"
}
```

**Errors**

- 400 - Missing parameter | Invalid param ... Should be of type ...
- 401 - User is not authorized to make this request | Error authenticating user
- 403 - Only POST requests are allowed | Unauthorized request

## Reject Request Response.

> Endpoint: versus_v2_reject_request_response

> Sample payload

```json
{
  "clientRef": "12345",
  "uid": "6789",
  "idToken": "101112",
  "requestRef": "123456",
  "responseRef": "78900",
  "reasonForRejection": "NSFW", // NSFW, irrelevant, poor_quality,
  "optionalMessage": "You are not a very serious scout. Why are you running?"
}
```

> Response

```json
{
  "message": "Successfully rejected request response",
  "responseRef": "78900"
}
```

**Errors**

- 400 - Missing parameter | Invalid param ... Should be of type ...
- 401 - User is not authorized to make this request | Error authenticating user
- 403 - Only POST requests are allowed | Unauthorized request

## Batch Approve Request Responses.

> Endpoint: versus_v2_batch_approve_request_response

> Payload

```json
{
  "clientRef": "12345",
  "uid": "6789",
  "idToken": "101112",
  "responseRefs": ["87dudhd8u8udd", "8d8fd77df8huhfdf", "7dyd7f8dfudh8fuhdf8"]
}
```

> Response

```json
{
  "message": "Successfully batch-approved request responses",
  "responseRefs": ["123456", "789081", "213634", "234879"]
}
```

**Errors**

- 400 - Missing parameter | Invalid param ... Should be of type ...
- 401 - User is not authorized to make this request | Error authenticating user
- 403 - Only POST requests are allowed | Unauthorized request

## Credit Scout Interact.

> Endpoint: versus_v2_credit_scout_interact.

> Payload

```json
{
  "clientRef": "12345",
  "uid": "6789",
  "idToken": "101112",
  "response": {
    "scoutRef": "",
    "responseRef": "",
    "mediaType": "" // text, video, audio
  }
}
```

> Response

```json
{
  "message": "Successfully credited scout",
  "scoutRef": "2we2e2eexee",
  "responseRef": "d8s678sd",
  "credits": 20
}
```

**Errors**

- 400 - Missing parameter | Invalid param ... Should be of type ...
- 401 - User is not authorized to make this request | Error authenticating user
- 403 - Only POST requests are allowed | Unauthorized request

## Duplicate Question.

> Endpoint: versus_v2_duplicate_question

> Payload

```json
{
  "uid": "dK8IJ5G9Z1PfH8Enclct5lu0vIk1",
  "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjhiMjFkNWE1Y2U2OGM1MjNlZTc0MzI5YjQ3ZDg0NGE3YmZjODRjZmYiLCJ0eXAiOiJKV1QifQ.",
  "campaignRef": "0e328014-35bf-45b0-a551-497e10f344de",
  "question": "what's your name?",
  "optionsType": "nps",
  "optionsRange": null,
  "optionsList": ["", ""],
  "sequence": 3
}
```

> Response

```json
{
  "message": "successfully duplicated campaign !!!",
  "campaignRef": "0e328014-35bf-45b0-a551-497e10f344de"
}
```

**Errors**

- 400 - Missing parameter | Invalid param ... Should be of type ...
- 401 - User is not authorized to make this request | Error authenticating user
- 403 - Only POST requests are allowed | Unauthorized request

## Update Question.

> Endpoint: versus_v2_update_question

> Payload

```json
{
  "uid": "dK8IJ5G9Z1PfH8Enclct5lu0vIk1",
  "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjU4ODI0YTI2ZjFlY2Q1NjEyN2U4OWY1YzkwYTg4MDYxMTJhYmU5OWMiLCJ0eXAiOiJKV1Qi",
  "question": "Which snack do you like best?",
  "optionsType": "multiplechoice",
  "optionsList": [
    { "option": "Biscuits", "option_type": "specified", "id": 2623 },
    { "option": "Chocolate", "option_type": "specified", "id": 2624 },
    { "option": "Groundnuts", "option_type": "specified", "id": 2625 },
    { "option": "Peanuts", "option_type": "specified", "id": "new" },
    { "option": "Other", "option_type": "unspecified", "id": 2626 }
  ],
  "campaignRef": "48afd59b-c367-4d60-a695-76984fb65be8",
  "questionRef": "073c36b7-0bdb-46a2-9c55-114b4a65e741",
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "optionsRange": []
}
```

> Response

```json
{
  "message": "successfully updated question !!!",
  "questionRef": "0e328014-35bf-45b0-a551-497e10f344de"
}
```

**Errors**

- 400 - Missing parameter | Invalid param ... Should be of type ...
- 401 - User is not authorized to make this request | Error authenticating user
- 403 - Only POST requests are allowed | Unauthorized request

## Reorder Question.

> Endpoint: versus_v2_reorder_questions

> Payload

```json
{
  "clientRef": "14-35bf-45b0-a551-497e10f344de",
  "uid": "dK8IJ5G9Z1PfH8Enclct5lu0vIk1",
  "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjhiMjFkNWE1Y2U2OGM1MjNlZTc0MzI5YjQ3ZDg0NGE3YmZjODRjZmYiLCJ0eXAiOiJKV1QifQ.",
  "campaignRef": "35bf-45b0-a551-497e10f344de",
  "questionRef": "0e328014-35bf-45b0-a551-497e10f344de",
  "orderActionType": "up" // or down
}
```

> Response

```json
{
  "message": "successfully reorder questions !!!",
  "questionRef": "0e328014-35bf-45b0-a551-497e10f344de"
}
```

**Errors**

- 400 - Missing parameter | Invalid param ... Should be of type ...
- 401 - User is not authorized to make this request | Error authenticating user
- 403 - Only POST requests are allowed | Unauthorized request

## Delete Draft Survey.

> Endpoint: versus_v2_delete_draft_survey

> Payload

```json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "dK8IJ5G9Z1PfH8Enclct5lu0vIk1",
  "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjhiMjFkNWE1Y2U2OGM1MjNlZTc0MzI5YjQ3ZDg0NGE3YmZjODRjZmYiLCJ0eXAiOiJKV1QifQ.",
  "campaignRef": "0e328014-35bf-45b0-a551-497e10f344de"
}
```

> Response

```json
{
  "message": "successfully deleted campaign !!!",
  "campaignRef": "0e328014-35bf-45b0-a551-497e10f344de"
}
```

**Errors**

- 400 - Missing parameter | Invalid param ... Should be of type ...
- 401 - User is not authorized to make this request | Error authenticating user
- 403 - Only POST requests are allowed | Unauthorized request

## Delete Question.

> Endpoint: versus_v2_delete_question

> Payload

```json
{
  "clientRef": "nqaXKB0SzWN6xh7RVyzl",
  "uid": "dK8IJ5G9Z1PfH8Enclct5lu0vIk1",
  "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjhiMjFkNWE1Y2U2OGM1MjNlZTc0MzI5YjQ3ZDg0NGE3YmZjODRjZmYiLCJ0eXAiOiJKV1QifQ.",
  "campaignRef": "0e328014-35bf-45b0-a551-497e10f344de",
  "questionRef": "8014-35bf-45b0-a551-497e10f344de"
}
```

> Response

```json
{
  "message": "successfully deleted question !!!",
  "campaignRef": "0e328014-35bf-45b0-a551-497e10f344de"
}
```

**Errors**

- 400 - Missing parameter | Invalid param ... Should be of type ...
- 401 - User is not authorized to make this request | Error authenticating user
- 403 - Only POST requests are allowed | Unauthorized request

# Others

## Share Request Responses.

> Endpoint: versus_v2_share_request_responses

> Payload

```json
{
  "clientRef": "12345",
  "requestRef": "1234566",
  "uid": "6789",
  "idToken": "101112"
}
```

> Response

```json
{
  "message": "Successfully obtained responses zip url for sharing",
  "requestResponsesZipUrl": "https://all-the-responses.zip"
}
```

**Errors**

- 400 - Missing parameter | Invalid param ... Should be of type ...
- 401 - User is not authorized to make this request | Error authenticating user
- 403 - Only POST requests are allowed | Unauthorized request

## Download Request Responses..

> Endpoint: versus_v2_download_request_responses

> Payload

```json
{
  "clientRef": "12345",
  "requestRef": "1234566",
  "uid": "6789",
  "idToken": "101112"
}
```

> Response

```json
{}
```

**Errors**

- 400 - Missing parameter | Invalid param ... Should be of type ...
- 401 - User is not authorized to make this request | Error authenticating user
- 403 - Only POST requests are allowed | Unauthorized request

## Get Requests Responses

Get a list of responses for a request.

> Endpoint: versus_v2_get_request_responses

> Payload

```json
{
  "clientRef": "12345",
  "requestRef": "12345",
  "uid": "6789",
  "idToken": "101112"
}
```

> Response

```json
{
  "message": "Successfully obtained request",
  "request": {
    "clientRef": "12345",
    "clientName": "The Enterprise",
    "requestName": "Footage of the Lekki Protest",
    "description": "Let’s get you started with a simple photo request.",
    "requestRef": "001a0ad177c-a6d0-44a4-8662-7f2851093b81",
    "country": "NG",
    "stateOrRegion": "Lagos",
    "endAge": 65,
    "startAge": 16,
    "gender": "female",
    "numberOfRespondents": 500,
    "mediaType": "audio",
    "status": "live",
    "created": "Thu Nov 12 2020 14:20:50 GMT+0100 (West Africa Standard Time)"
  }
}
```

**Errors**

- 400 - Missing parameter subscriptionPlanRef
- 403 - Only POST requests are allowed
- 500 - Backend service error

## Pause Request If Capped

Pause multimedia request when allotment is reached.

**Endpoint** versus_v2_pause_request_if_capped

**Method** POST

> Sample payload

```json
{
  "requestRef": "1234567890987654321"
}
```

> Sample response

```json
{
  "message": "Successfully paused client multimedia request",
  "requestRef": "123567890987654321"
}
```

**Errors**

- 400 - Only POST requests are allowed | Missing parameter requestRef
- 404 - Request does not exist
- 500 - Error updating request status | Error obtaining number of request respondents

## Add SME client

Add a new client and team on signup. This is the first step before setting up a subscription and onboarding the client.

**Endpoint** versus_v2_add_sme_client

**Method** POST

**Required Params**

| Field                 | Type    | Description.                      |
| --------------------- | ------- | --------------------------------- |
| email                 | String  | Client admin email.               |
| firstName             | String  | Client admin first name.          |
| lastName              | String  | Client admin last name.           |
| organizationName      | String  | Client organization name.         |
| organizationSector_id | Integer | Client organization sector.       |
| subscriptionPlanRef   | String  | Selected subscription plan ref.   |
| subscriptionPlanName  | String  | Selected subscription plan name . |

**Sample response** 200

```json
{
  "message": "Successfully added new SME client",
  "client": {
    "clientRef": "d103d4ab-5f9b-45cd-985d-7a27cdd1b37f",
    "firstName": "Steve",
    "lastName": "Tanner",
    "email": "st-test@st.co",
    "onboardingToken": "f0365e46-fc8d-406b-be56-fa8a7bf6596f"
  }
}
```

**Errors**

- 400 - Missing parameter
- 409 - Client already exists and has onboarded
- 500 - Error creating new team | Error creating new SME client | Error getting client by email

* 400 - Missing parameter
* 409 - Client already exists and has onboarded
* 500 - Error creating new team | Error creating new SME client | Error getting client by email

## Stripe Create Checkout Session

Securely create a checkout session for subscription payments via Stripe.

**Endpoint** versus_v2_stripe_create_checkout_session

**Method** POST

**Required Params**

| Field            | Type   | Description.                                                                         |
| ---------------- | ------ | ------------------------------------------------------------------------------------ |
| client           | Object | The standard client object complete with properties including email, firstName, etc. |
| subscriptionPlan | String | Selected subscription plan ref.                                                      |

**Sample response** 200

```json
{
  "message": "Successfully created Stripe checkout session",
  "sessionId": "MvW5EVMqiVZW23JTKx8ui6worLLHdMJlVERPObuj"
}
```

**Errors**

- 400 - Missing parameter
- 403 - Only POST requests are allowed
- 404 - Subscription plan does not exist
- 500 - Error creating Stripe checkout session | Error obtaining subscription plan

* 400 - Missing parameter
* 403 - Only POST requests are allowed
* 404 - Subscription plan does not exist
* 500 - Error creating Stripe checkout session | Error obtaining subscription plan

## Stripe Webhook

Securely handles subscription and other payment events from Stripe. It adds the appropriate value (new subscription plan or versus credits) to client after a successful payment event is received.

**Endpoint** versus_v2_stripe_webhook

**Method** POST

**Errors**

- 400 - Webhook error
- Logs only - Error adding subscription plan to client | Error adding purchased versus credits for client

* 400 - Webhook error
* Logs only - Error adding subscription plan to client | Error adding purchased versus credits for client

## Subscribe Free Plan

Subscribes client to free plan. This subscription is processed outside of Stripe.

**Endpoint** versus_v2_subscribe_free_plan

**Method** POST

**Required Params**

| Field            | Type   | Description                                                                         |
| ---------------- | ------ | ----------------------------------------------------------------------------------- |
| client           | Object | The standard client object complete with properties including email, firstName, etc |
| subscriptionPlan | String | Selected subscription plan ref                                                      |

**Sample response** 200

```json
{
  "message": "ccessfully subscribed client to free plan",
  "subscriptionPlan": "MvW5E-VMqiV-ZWorL-LHdMJ-lVERP-Obuj"
}
```

**Errors**

- 400 - Missing parameter | Invalid param . Should be type | Subscription plan is not free
- 403 - Only POST requests are allowed
- 404 - Subscription plan does not exist
- 500 - Error subscribing client to free plan | Error obtaining subscription plan
