import { PolicyLayout } from '@/components/policies/PolicyLayout';

export default function DeliveryPolicyPage() {
  return (
    <PolicyLayout title="Shipping / Delivery Policy" updatedAt="April 28, 2026">
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Digital Delivery</h2>
        <p>All products are delivered digitally. No physical shipment is involved for software licenses or digital keys.</p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Delivery Time</h2>
        <p>License keys are typically delivered instantly after successful payment, usually within 2 minutes to your registered email.</p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Support for Delays</h2>
        <p>If delivery is delayed due to payment verification or technical issues, our support team resolves it on priority.</p>
      </section>
    </PolicyLayout>
  );
}
