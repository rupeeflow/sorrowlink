export interface CheckoutPayload {
  fullName: string;
  email: string;
  items: Array<{ productId: string; quantity: number }>;
  totalAmount: number;
}

export interface PaymentIntentResult {
  orderId: string;
  amount: number;
  currency: 'INR';
  provider: 'placeholder';
  status: 'created';
}

// Placeholder payment intent hook for future gateway integration.
export async function createPaymentIntent(payload: CheckoutPayload): Promise<PaymentIntentResult> {
  await new Promise((resolve) => setTimeout(resolve, 700));

  return {
    orderId: `ord_${Date.now()}`,
    amount: payload.totalAmount,
    currency: 'INR',
    provider: 'placeholder',
    status: 'created',
  };
}
