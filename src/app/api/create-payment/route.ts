// import { NextRequest, NextResponse } from "next/server";
// const stripe = require("stripe")("sk_test_51QoMp3DORAhVYIgx2BqSd0LXRChKT7C3zHw68tLKdiZpug0Kx5PfForUwFWWYZLIe7dHsKtkTJyjyQaoJKM3AWe200qGbfbzg7")
// export async function POST(request: NextRequest) {
//   try {
//     const { amount } = await request.json();

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount,
//       currency: "usd",
//       automatic_payment_methods: { enabled: true },
//     });

//     return NextResponse.json({ clientSecret: paymentIntent.client_secret });
//   } catch (error) {
//     console.error("Internal Error:", error);
//     return NextResponse.json(
//       { error: `Internal Server Error: ${error}`},
//       { status: 500 }
//     );
//   }
// }


import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe with your secret key
const stripe = new Stripe("sk_test_51QoMp3DORAhVYIgx2BqSd0LXRChKT7C3zHw68tLKdiZpug0Kx5PfForUwFWWYZLIe7dHsKtkTJyjyQaoJKM3AWe200qGbfbzg7", {
  apiVersion: "2025-01-27.acacia", // Specify the Stripe API version
});

export async function POST(request: NextRequest) {
  try {
    const { amount } = await request.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Internal Error:", error);
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}
