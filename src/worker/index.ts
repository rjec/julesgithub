import { Hono } from 'hono';
import { serveStatic } from 'hono/cloudflare-workers';

// This is a Cloudflare worker, so we need to specify the bindings
// for the environment variables.
type Bindings = {
  // Add any bindings you need here
};

const app = new Hono<{ Bindings: Bindings }>();

// Endpoint to handle appointment requests
app.post('/api/appointments', async (c) => {
  try {
    const appointmentData = await c.req.json();
    console.log('Received appointment data:', appointmentData);

    // In a real application, you would save this data to a database
    // and send a confirmation email.
    // For this example, we'll just log it and return a success message.

    return c.json({
      success: true,
      message: 'Appointment request received successfully.',
    });
  } catch (error) {
    console.error('Error processing appointment request:', error);
    return c.json(
      { success: false, message: 'Failed to process appointment request.' },
      500
    );
  }
});

// Existing endpoint for demonstration
app.get('/api/', (c) => c.json({ name: 'Cloudflare' }));

app.get('*', serveStatic({ root: './' }))
app.get('*', serveStatic({ path: './index.html' }))


export default app;
