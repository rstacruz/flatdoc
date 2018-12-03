# Clients

This has endpoints for managing clients


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

## Get Client

Returns the details associated with a client account

> Endpoint: versus_get_client

> Payload

``` javascript
{
  "docRef": "sz4rWLgN7yt0PU3frmjX"
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
  "twitterHandle": "twitter"
}
```

> Response

``` javascript
{
  "docRef": "dZU51YTPmB2qqA030JA4"
}
```