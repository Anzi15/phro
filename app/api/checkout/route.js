import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { amount } = await req.json(); // Get amount from frontend

    if (!amount || amount < 1) {
      return new Response(JSON.stringify({ error: "Invalid amount" }), { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "Custom Payment" },
            unit_amount: amount * 100, // Convert to cents
          },
          quantity: 1,
        },
      ],
      success_url: "https://phro-org.com/donation/thankyou",
      cancel_url: "https://yourwebsite.com/donate",
    });

    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
