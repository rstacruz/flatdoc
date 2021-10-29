# Others


## Send WhatsApp Message
send whatsapp message with pre-approved templates

> Endpoint: send_whatsapp_message

> Payload

```json
{
    "phoneNumber": "+2348134342570", 
    "message": "Dear Samuel, your Versus Scouts OTP is 3445. For help contact Versus Africa on info@versus.africa"
}
```

> Sample Response

```json
{
    "message": "message sent to +23487267678",
    "message_sid": ""
}
```

**Error**

* 500 - Backend service error
