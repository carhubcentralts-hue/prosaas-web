import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Prepare lead data with metadata
    const leadData = {
      name: body.name,
      phone: body.phone,
      business: body.business,
      message: body.message,
      source: 'prosaas.info',
      createdAt: new Date().toISOString()
    };

    // Log the lead data
    console.log('New lead received:', leadData);

    // Send to webhook if configured
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    
    if (webhookUrl) {
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(leadData),
        });

        if (!webhookResponse.ok) {
          console.error('Webhook request failed:', webhookResponse.status, webhookResponse.statusText);
        } else {
          console.log('Lead sent to webhook successfully');
        }
      } catch (webhookError) {
        console.error('Error sending to webhook:', webhookError);
        // Continue processing even if webhook fails
      }
    } else {
      console.log('LEAD_WEBHOOK_URL not set - skipping webhook delivery');
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Lead received successfully' 
    });
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { success: false, message: 'Error processing lead' },
      { status: 500 }
    );
  }
}
