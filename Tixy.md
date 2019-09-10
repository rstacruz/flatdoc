# Tixy

Endpoint for Tixy

## Create an account (Sign up)

> Endpoint: tixy_register

> Payload

```json
{
    "email": "email",
    "industry": "industry",
    "password": "password",
    "organizer": "organizer",
    "website": "website"
}
```

> Result

```json
{
    "accountRef": "ea7ca901-9217-4a04-9af4-3c6c21ccc3a2"
}
```

## Sign-in to an account

> Endpoint: tixy_sign_in

> Payload

```json
{
    "email": "email",
    "password": "password"
}
```
> Result

```json
{
    "account": {
        "accountRef": "ea7ca901-9217-4a04-9af4-3c6c21ccc3a2",
        "email": "email",
        "industry": "industry",
        "organizer": "organizer",
        "website": "website",
        "plan": ""
    }
}

```
## get_event_by_email (Retreive event)

> Endpoint: get_events_by_email.py

> Payload

```json
{
    "email": "email",
}
```

> Result

```json

{
    "event1": {"event_id": 1, 
                "event_name": "event_name", 
                "event_tag": "event_tag",
                "start_date": "2019-12-02T12:30:30.001Z", 
                "end_date": "2019-05-04T12:30:30.001Z", 
                "username": "username", 
                "no_tickets_sold": 12,
                "revenue": 36000, 
                "status": "status"},
    "event2": {"event_id": 2, 
                "event_name": "Slay Festival", 
                "event_tag": "Slay", 
                "start_date": "2019-01-24T12:30:30.001Z",
                "end_date": "2019-05-04T12:30:30.001Z", 
                "username": "username", 
                "no_tickets_sold": 62,
                "revenue": 186000, 
                "status": "status"},

}
```

## get_events_by_status (Retreive event)

> Endpoint: get_events_by_status.py

> Payload

```json
{
    "username": "username", "status":"status"
}
```

> Result

```json

{
    "event1": {"event_id": 1, 
                "event_name": "event_name", 
                "event_tag": "event_tag",
                "start_date": "2019-12-02T12:30:30.001Z", 
                "end_date": "2019-05-04T12:30:30.001Z", 
                "username": "username", 
                "no_tickets_sold": 12,
                "revenue": 36000, 
                "status": "status"},
    "event2": {"event_id": 2, 
                "event_name": "Slay Festival", 
                "event_tag": "Slay", 
                "start_date": "2019-01-24T12:30:30.001Z",
                "end_date": "2019-05-04T12:30:30.001Z", 
                "username": "username", 
                "no_tickets_sold": 62,
                "revenue": 186000, 
                "status": "status"},

}
```

## get_events_by_tag (Retreive event)

> Endpoint: get_events_by_tag.py

> Payload

```json
{
    "username": "username", "tag":"tag"
}
```

> Result

```json

{
    "event1": {"event_id": 1, 
                "event_name": "event_name", 
                "event_tag": "event_tag",
                "start_date": "2019-12-02T12:30:30.001Z", 
                "end_date": "2019-05-04T12:30:30.001Z", 
                "username": "username", 
                "no_tickets_sold": 12,
                "revenue": 36000, 
                "status": "status"},
    "event2": {"event_id": 2, 
                "event_name": "Slay Festival", 
                "event_tag": "Slay", 
                "start_date": "2019-01-24T12:30:30.001Z",
                "end_date": "2019-05-04T12:30:30.001Z", 
                "username": "username", 
                "no_tickets_sold": 62,
                "revenue": 186000, 
                "status": "status"},

}
```

## get_no_of_sold_tickets (Retreive the number of ticket sold over a specified period of time)

> Endpoint: get_no_of_sold_tickets.py

> Payload

```json
{
    "username": "username", "period":"period"
}
```

> Result

```json

{"number_of_tickets_sold": "number_of_tickets_sold"}
```

## get_total_revenue (Retreive the amount of revenue made over a specified period of time)

> Endpoint: get_no_of_sold_tickets.py

> Payload

```json
{
    "username": "username", "period":"period"
}
```

> Result

```json

{"total_revenue":"total_revenue"}
```

## get_recent_purchases_by_email (Retreive top 10 tickets purchase records)

> Endpoint: get_recent_purchases_by_email.py

> Payload

```json
{
    "email": "email"
}
```

> Result

```json


{
    "event1": 
        {"ticket_buyer_name": "David", 
        "amount": 24000, 
        "event_name": "Teker Expo", 
        "purchase_date": "2019-05-04T12:30:30.001Z"}, 
    "event2": 
        {"ticket_buyer_name": "David",
         "amount": 6000,
         "event_name": "Teker Expo", 
         "purchase_date": "2019-05-04T12:30:30.001Z"} 

```

## create_event (create a new event)

> Endpoint: create_event.py

> Payload

```json
{
    "username":"username",
    "event_name":"event_name",
    "event_tag":"event_tag",
    "description":"description",
    "start_date":"start_date",
    "end_date":"end_date"
}
```

> Result

```json
{   "event_ref":"event_ref",
    "username":"username",
   "event_name":"event_name",
   "event_tag":"event_tag",
   "description":"description",
   "start_date":"start_date",
   "end_date":"end_date"    

   } 

```

## edit_user_info (Retreive top 10 tickets purchase records)

> Endpoint: create_event.py

> Payload

```json
{
    "event_name":"event_name",
    "event_tag":"event_tag",
    "description":"description",
    "start_date":"start_date",
    "email":"email",
    "end_date":"end_date",
    "twitter_link":"twitter_link",
    "facebook_link":"facebook_link"
}
```

> Result

```json
{   "event_ref":"event_ref",
   "event_name":"event_name",
   "event_tag":"event_tag",
   "description":"description",
   "email":"email",
   "description":"description",
   "start_date":"start_date",
   "end_date":"end_date",
   "twitter_link":"twitter_link",
    "facebook_link":"facebook_link"   

   } 

```