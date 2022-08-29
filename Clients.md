# Clients

This has endpoints for managing clients

## Add Campaign

This creates a new campaign under the client account.

> Endpoint: versus_add_campaign

> Payload

``` javascript
{
  "docRef": "nqaXKB0SzWN6xh7RVyzl",
  "clientName": "clientName",
  "campaignName": "campaignName",
  "description": "description",
  "startDate": "2019-01-01",
  "endDate": "2019-06-30",
  "country": "NG",
  "startAge": 18,
  "endAge": 60
}
```

> Response

``` javascript
{
  "campaign": {
    "clientRef": "nqaXKB0SzWN6xh7RVyzl",
    "clientName": "clientName",
    "campaignName": "campaignName",
    "description": "description",
    "startDate": "2019-01-01",
    "endDate": "2019-06-30",
    "country": "NG",
    "startAge": 18,
    "endAge": 60
  }
}
```


## Add Comparison

This adds a new brand to the comparisons that a client carry out. The fields in the payload are listed below.

> Endpoint: versus_add_comparison

> Payload

``` javascript
{
  "docRef": "sz4rWLgN7yt0PU3frmjX",
  "brand": {
    "brandName": "1st Brand",
    "otherBrandName": "1st other brand"
  }
}
```

> Response

``` javascript

```

## Add Member

This adds a new user to a client account.

> Endpoint: versus_add_member

> Payload

``` javascript
{
	"docRef": "sz4rWLgN7yt0PU3frmjX",
	"member":{"email": "robert@otheremail.com", "canEdit": true}
}
```

> Response

``` javascript

```

## Add Question

This adds a question to a campaign.

> Endpoint: versus_add_question

> Payload

``` javascript
{
  "campaignRef": "86fea0f1-7c00-4ab7-bbc0-6125a4326125",
  "question": "Test Question 1",
  "options": "Positive, Neutral, Negative",
  "campaignName":"Test Campaign 1",
  "clientRef":"nqaXKB0SzWN6xh7RVyzl",
  "clientName":"The Enterprise"
}
```

> Response

``` javascript

{
  "question": {
    "question": "Test Question 1",
    "options": "Positive, Neutral, Negative",
    "campaignRef": "86fea0f1-7c00-4ab7-bbc0-6125a4326125",
    "clientRef": "nqaXKB0SzWN6xh7RVyzl",
    "campaignName": "Test Campaign 1",
    "clientName": "The Enterprise",
    "questionRef": "0899c86d-cbf6-4490-872f-269dcedad05d"
  }
}
```

## Create Client

Create a new client on the Versus platform. The response to this event causes a Welcome to Versus email to be triggered.

> Endpoint: versus_create_client

> Payload

``` javascript
{
  "name": "Deji Ibrahim",
  "email": "deji.a.ibrahim@gmail.com",
  "uniqueIdentifier": "deji"
}
```

> Response

``` javascript
{
  "docRef": "dZU51YTPmB2qqA030JA4"
}
```

## Create Member

This creates a user account when they accept the invite from a client.

> Endpoint: versus_create_member

> Payload

``` javascript
{
  "email": "deji@enterfive.com",
  "docRef": "cueIYrE3PyXXJmu4tPea",
  "firstName": "Dejiasd",
  "lastName": "ibrahimm",
  "password": "deji1234"
}
```

> Response

``` javascript

```

## Delete Comparison

Delete a brand comparison from a client account.

> Endpoint: versus_delete_comparison

> Payload

``` javascript
{
	"clientRef": “sz4rWLgN7yt0PU3frmjX",
	"brand": "1st Brand"
}
```

> Response

``` javascript

```

## Delete Member

Remove a user from a client account.

> Endpoint: versus_delete_member

> Payload

``` javascript
{
	"clientRef": “sz4rWLgN7yt0PU3frmjX",
	"email": "abc@email.com"
}
```

> Response

``` javascript

```

## Edit Client

This edits the details on a client's account.

> Endpoint: versus_edit_client

> Payload

``` javascript
{
	"docRef": "sz4rWLgN7yt0PU3frmjX",
	"alertOptions": {
        "criticalMentions": true, 
        "sentimentReports": "daily"
    },
    "brandName": "My brand",
  	"facebook":"fb.me/brand",
    "filterProfanity": true,
    "firstName": "Deji",
    "lastName": "Ibrahim",
    "officeAddress": "Victoria Island",
    "organizationName": "Enterfive",
    "otherBrandNames": "My other brand",
    "responseEmails": "abc@e5.com, def@e5.com",
    "topics": "Pricing, experience",
    "twitterHandle": "twitter"
}
```

> Response

``` javascript
{
  "docRef": "dZU51YTPmB2qqA030JA4"
}
```

## Get Campaigns

Returns a list of campaigns belonging to a client

> Endpoint: versus_get_campaigns

> Payload

``` javascript
{
  "docRef": "nqaXKB0SzWN6xh7RVyzl"
}
```

> Response

``` javascript
{
  "campaigns": [
    {
      "startDate": "2019-01-01",
      "description": "description",
      "campaignName": "campaignName",
      "startAge": 18,
      "country": "NG",
      "endAge": 60,
      "clientName": "clientName",
      "clientRef": "nqaXKB0SzWN6xh7RVyzl",
      "endDate": "2019-06-30",
      "docRef": "NuYgN5IyhPpeEDq9bxoz"
    },
    {
      "endAge": 65,
      "clientRef": "nqaXKB0SzWN6xh7RVyzl",
      "clientName": "The Enterprise",
      "endDate": "2019-03-30",
      "startDate": "2019-01-01",
      "description": "Campaign for McScoutie",
      "campaignName": "First Campaign",
      "startAge": 18,
      "country": "Nigeria",
      "docRef": "WXGj5wfVS6DKpyecChYm"
    }
  ]
}
```

## Get Client

Returns the details associated with a client account

> Endpoint: versus_get_client

> Payload

``` javascript
{
  "docRef": "sz4rWLgN7yt0PU3frmjX"
}
```

## Get Clients

Returns an array of objects showing the name and docRef of clients in a specified category

> Endpoint: versus_get_clients

> Payload

``` javascript
{"category":"Banking"}
```

> Response

``` javascript

{
  "clients": [
    {
      "docRef": "68CgvyEYhGlLcAlDFdol",
      "name": "Kemdi Limited"
    },
    {
      "docRef": "mvPKqA09G4Fm09RMxs4a",
      "name": null
    },
    {
      "docRef": "nqaXKB0SzWN6xh7RVyzl",
      "name": "The Enterprise"
    },
    {
      "docRef": "uDs47BUH4v1EWXP0lPf7",
      "name": "Amaka Limited"
    },
    {
      "docRef": "xzfTjhjSw7UHOSbtRKXS",
      "name": "Chika Limited"
    }
  ]
}
```

> Response

``` javascript

```

## Get Comparisons

Returns the comparison brand details that the client keeps an eye on.

> Endpoint: versus_get_comparisons

> Payload

``` javascript
{
  "docRef": "68CgvyEYhGlLcAlDFdol"
}
```

> Response

``` javascript
{
  "comparisons": [
    {
      "otherBrandName": null,
      "clientRef": "68CgvyEYhGlLcAlDFdol",
      "brandName": "Jumia"
    },
    {
      "otherBrandName": "",
      "clientRef": "68CgvyEYhGlLcAlDFdol",
      "brandName": "Konga"
    }
  ]
}
```

## Get DocRef

Returns the client reference associated with a logged in user.

> Endpoint: versus_get_docref

> Payload

``` javascript
{
  "email": "deji.a.ibrahim@gmail.com"
}
```

> Response

``` javascript
{
  "members": [
    {
      "email": "deji.a.ibrahim@gmail.com",
      "canEdit": false,
      "clientRef": "nqaXKB0SzWN6xh7RVyzl"
    },
    {
      "email": "deji.a.ibrahim@gmail.com",
      "is_admin": true,
      "clientRef": "nqaXKB0SzWN6xh7RVyzl"
    },
    {
      "email": "deji.a.ibrahim@gmail.com",
      "clientRef": "nqaXKB0SzWN6xh7RVyzl",
      "canEdit": false
    }
  ]
}
```

## Get Members

Returns the list of users associated with a client account.

> Endpoint: versus_get_members

> Payload

``` javascript
{
  "docRef": "68CgvyEYhGlLcAlDFdol"
}
```

> Response

``` javascript
{
  "members": [
    {
      "clientRef": "68CgvyEYhGlLcAlDFdol",
      "email": "kemdi@enterfive.com",
      "is_admin": true
    },
    {
      "clientRef": "68CgvyEYhGlLcAlDFdol",
      "canEdit": true,
      "accepted": true,
      "email": "kemdi@voteorquench.org"
    },
    {
      "email": "kemdi.ebi@gmail.com",
      "clientRef": "68CgvyEYhGlLcAlDFdol",
      "canEdit": true
    }
  ]
}
```

## Get Questions

Get a list of questions under a campaign

> Endpoint: versus_get_questions

> Payload

``` javascript
{
  "docRef": "WXGj5wfVS6DKpyecChYm"
}
```

> Response

``` javascript
{
  "questions": [
    {
      "options": "Yes, No",
      "question": "Are you a scout?",
      "docRef": "kVjTjvEEwk18sLH5RmZX"
    }
  ]
}
```

## Get Responses

Get all the responses that have been provided to a question.

> Endpoint:  versus_get_responses

> Payload

``` javascript
{
  "cRef": "WXGj5wfVS6DKpyecChYm",
  "qRef": "kVjTjvEEwk18sLH5RmZX"
}
```

> Response

``` javascript
{
  "responses": [
    {
      "value": "Yes",
      "docRef": "4XhTtoWg0Yg7q4PSVXOU"
    }
  ]
}
```

## Update Client

Complete the onboarding process for a client.

> Endpoint: versus_update_client

> Payload

``` javascript
{
  "docRef": "sz4rWLgN7yt0PU3frmjX",
  "alertOptions": {
    "criticalMentions": true,
    "sentimentReports": "daily"
  },
  "brandName": "My brand",
  "comparisonBrands": [
    {
      "brandName": "1st Brand",
      "otherBrandName": "1st other brand"
    },
    {
      "brandName": "2nd Brand",
      "otherBrandName": "2nd other brand"
    },
    {
      "brandName": "3rd brand",
      "otherBrandName": "3rd other brand"
    }
  ],
  "email": "deji.a.ibrahim@gmail.com",
  "facebook": "facebook",
  "filterProfanity": true,
  "firstName": "Deji",
  "lastName": "Ibrahim",
  "officeAddress": "Victoria Island",
  "organizationName": "Enterfive",
  "otherBrandNames": "My other brand",
  "password": "1234abc",
  "responseEmails": "abc@e5.com, def@e5.com",
  "sentimentReports": "weekly",
  "teamMembers": [
    {
      "email": "robert@enterfive.com",
      "canEdit": true
    },
    {
      "email": "kemdi@enterfive.com",
      "canEdit": true
    },
    {
      "email": "anyone@enterfive.com",
      "canEdit": false
    }
  ],
  "topics": "Pricing, experience",
  "twitterHandle": "twitter",
  "instagramHandle":"@2019Oby"
}
```

> Response

``` javascript
{
  "docRef": "dZU51YTPmB2qqA030JA4"
}
```