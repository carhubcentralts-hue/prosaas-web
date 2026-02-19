# Webhook Configuration for Leads

## Overview
The leads form on the ProSaaS website sends data to an API endpoint that can forward leads to your system via webhook.

## Webhook URL
To receive leads from the contact form, configure the webhook URL in your environment variables:

```bash
LEAD_WEBHOOK_URL=https://your-system.com/webhook/leads
```

## Webhook Endpoint
The webhook is triggered when a user submits the contact form at:
- **Endpoint**: `/api/lead` (POST)
- **Form Location**: Contact section on the homepage

## Payload Structure
When a lead is submitted, the following JSON payload is sent to your webhook URL:

```json
{
  "name": "שם המשתמש",
  "phone": "0501234567",
  "business": "שם העסק",
  "message": "הודעה מהלקוח",
  "source": "prosaas.info",
  "createdAt": "2026-02-19T10:48:14.013Z"
}
```

## Fields Description
- **name** (string, required): Full name of the lead
- **phone** (string, required): Phone number
- **business** (string, optional): Business name
- **message** (string, optional): Additional message from the lead
- **source** (string): Always "prosaas.info" to identify the source
- **createdAt** (string): ISO 8601 timestamp of when the lead was created

## HTTP Request Details
- **Method**: POST
- **Content-Type**: application/json
- **Headers**: Standard HTTP headers

## Response Handling
The webhook implementation does not require a specific response format. The system will:
- Log success if the webhook responds with HTTP 2xx status
- Log errors but continue processing if the webhook fails
- Not retry failed webhook deliveries (implement retry logic in your system if needed)

## Error Handling
- If `LEAD_WEBHOOK_URL` is not set, leads are logged to console but not sent externally
- Webhook failures do not prevent the user from receiving a success message
- All webhook errors are logged to the server console

## Testing Your Webhook
1. Set the `LEAD_WEBHOOK_URL` environment variable to your test endpoint
2. Submit the contact form on the website
3. Verify your endpoint receives the POST request with the correct payload

## Example Webhook Implementation (Node.js/Express)
```javascript
app.post('/webhook/leads', express.json(), (req, res) => {
  const { name, phone, business, message, source, createdAt } = req.body;
  
  // Process the lead in your system
  console.log('New lead received:', { name, phone, business });
  
  // Respond with success
  res.json({ success: true });
});
```

## Security Recommendations
1. Use HTTPS for your webhook URL
2. Implement rate limiting on your webhook endpoint
3. Validate the payload structure before processing
4. Consider adding webhook signature verification for additional security
5. Log all incoming webhooks for auditing

## Support
For questions or issues with the webhook integration, contact:
- Email: support@prosaas.pro
- Phone: 054-9750505
- WhatsApp: 055-7270844
