# Email

This has endpoints for sending out emails.

## Custom Alerts: 
Notify an admin that custom alerts have been set for their account. The payload has the following fields.

| Field            | Type   | Description                                               |
|------------------|--------|-----------------------------------------------------------|
| recipient        | string | the email to send the mail to                             |
| firstName        | string | the name of the email recipient                           |
| organizationName | string | the name of the organization that the recipient works for |
| alertFrequency   | string | one or more periods, separated by a comma                 |

> Endpoint: email_custom_alerts_set

> Payload

``` javascript
{
  "recipient": "deji.a.ibrahim@gmail.com",
  "firstName": "Deji",
  "organizationName": "Deji Enterprises",
  "alertFrequency": "Daily"
}
```

> Response

``` javascript
{"recipient": "deji.a.ibrahim@gmail.com"}
```

## Dashboard Ready: 
Notify an admin that the Versus Sentiment dashboard has data for viewing. The payload has the following fields.

| Field     | Type   | Description                         |
|-----------|--------|-------------------------------------|
| recipient | string | the email to send the mail to       |
| firstName | string | the name of the email recipient     |

> Endpoint: email_dashboard_ready

> Payload: 

``` javascript
{
  "recipient": "johnthas@yahoo.com",
  "firstName": "Robert"
}
```

> Response

``` javascript
{"recipient": "johnthas@yahoo.com"}
```

## Designated Primary Email: 
Notify an admin that they have been designated as a primary contact. The payload has the following fields.

| Field            | Type   | Description                     |
|------------------|--------|---------------------------------|
| recipient        | string | the email recipient             |
| firstName        | string | the name of the email recipient |
| organizationName | string | the name of the organization    |

> Endpoint: email_designated_primary

> Payload

``` javascript
{
  "recipient": "johnthas@yahoo.com",
  "firstName": "Robert",
  "organizationName": "Enterfive"
}
```

> Response

``` javascript
{"recipient": "johnthas@yahoo.com"}
```

## Designated Team Member: 
Notify someone that they have been added as a team member to Versus Sentiment. The payload has the following fields.

| Field            | Type   | Description                      |
|------------------|--------|----------------------------------|
| recipient        | string | the email recipient              |
| firstName        | string | the name of the email recipient  |
| organizationName | string | the name of the organization     |
| inviteLink       | string | the URL that links to onboarding |

> Endpoint: email_designated_team_member

> Payload

``` javascript
{
  "recipient": "kemdi@enterfive.com",
  "firstName": "kemdi",
  "organizationName": "Enterfive",
  "inviteLink": "https://app.versus.ng/"
}
```

> Response

``` javascript
{"recipient": "kemdi@enterfive.com"}
```

## Request a Demo: 
Let a potential user request a demo. The payload has the following fields.

| Field        | Type   | Description                             |
|--------------|--------|-----------------------------------------|
| firstName    | string | the first name of the potential user    |
| lastName     | string | the last name of the potential user     |
| email        | string | the email address of the potential user |
| organization | string | the name of the organization            |
| sector       | string | the business sector of the requestor    |

> Endpoint: email_request

> Payload

``` javascript
{
  "firstName": "Robert",
  "lastName": "John",
  "email": "robert@enterfive.com",
  "organization": "Enterfive",
  "sector": "Information Technology"
}
```

> Response

``` javascript
{"recipient": "kemdi@enterfive.com"}
```

## Respond to Article: 
Notify a recipient to respond to a social media post. The payload has the following fields.

| Field            | Type   | Description                                  |
|------------------|--------|----------------------------------------------|
| firstName        | string | the first name of the recipient              |
| recipient        | string | the email address of the recipient           |
| link             | string | the URL to the article/post                  |
| notes            | string | a call to action or message to the recipient |
| requestFirstName | string | the name of the person sending the request   |

> Endpoint: email_respond_to_article

> Payload

``` javascript
{
  "firstName": "Robert",
  "recipient": "robert.thas.john@gmail.com",
  "link": "https://twitter.com",
  "notes": "I think you should respond to this tweet",
  "requestFirstName": "Kemdi"
}
```

> Response

``` javascript
{"recipient": "kemdi@enterfive.com"}
```

## Welcome to Versus: 
Notify the recipient that their Versus Sentiment account has been created. The payload has the following fields.

> Endpoint: email_welcome_to_versus

> Payload

``` javascript
{
  "recipient": "josh@enterfive.com",
  "inviteLink": "https://app.versus.ng"
}
```

> Response

``` javascript
{"recipient": "kemdi@enterfive.com"}
```

## Your Report: 
Dispatch a periodic report. The payload has the following fields.

| Field          | Type   | Description                                           |
|----------------|--------|-------------------------------------------------------|
| recipient      | string | the email address of the recipient                    |
| firstName      | string | the name of the recipient                             |
| alertFrequency | string | the report being received (daily, weekly, or monthly) |
| reportLink     | string | the URL from which to download reports                |

> Endpoint: email_your_report

> Payload

``` javascript
{
  "recipient": "johnthas@yahoo.com",
  "alertFrequency": "weekly",
  "firstName": "Robert",
  "reportLink": "https://app.versus.ng"
}
```

> Response

``` javascript
{"recipient": "kemdi@enterfive.com"}
```