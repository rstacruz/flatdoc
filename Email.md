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
Notify an admin that they have been designated as a primary contact

## Designated Team Member: 
Notify someone that they have been added as a team member to Versus Sentiment

## Request a Demo: 
Let a potential user request a demo

## Respond to Article: 
Notify a recipient to respond to a social media post

## Welcome to Versus: 
Notify the recipient that their Versus Sentiment account has been created

## Your Report: 
Dispatch a periodic report