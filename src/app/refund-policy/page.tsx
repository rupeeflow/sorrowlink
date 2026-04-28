import { PolicyLayout } from '@/components/policies/PolicyLayout';

export default function RefundPolicyPage() {
  return (
    <PolicyLayout title="Refund & Cancellation Policy" updatedAt="April 28, 2026">
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Refund and Cancellation Policy</h2>
        <p>
          This refund and cancellation policy outlines how you can cancel or seek a refund for a product / service that you
          have purchased through the Platform.
        </p>
        <p>Under this policy:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Cancellations will only be considered if the request is made within 10 days of placing the order. However,
            cancellation requests may not be entertained if the orders have been communicated to sellers / merchant(s) listed
            on the Platform and they have initiated the process of shipping, or the product is out for delivery. In such an
            event, you may choose to reject the product at the doorstep.
          </li>
          <li>
            In case of receipt of damaged or defective items, please report to our customer service team. The request would be
            entertained once the seller / merchant listed on the Platform has checked and determined the same at its own end.
            This should be reported within 10 days of receipt of products.
          </li>
          <li>
            In case you feel that the product received is not as shown on the site or as per your expectations, you must bring
            it to the notice of our customer service within 10 days of receiving the product. The customer service team, after
            looking into your complaint, will take an appropriate decision.
          </li>
          <li>In case of complaints regarding products that come with a manufacturer warranty, please refer the issue to them.</li>
          <li>
            In case of any refunds approved by Eye-Hyve Technologies Private Limited, it will take 10 days for the refund to
            be processed to you.
          </li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Return Policy</h2>
        <p>
          We offer refund / exchange within the first 30 days from the date of your purchase. If 30 days have passed since your
          purchase, you will not be offered a return, exchange, or refund of any kind.
        </p>
        <p>To be eligible for a return or exchange:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The purchased item should be unused and in the same condition as you received it.</li>
          <li>The item must have original packaging.</li>
          <li>If the item was purchased on sale, it may not be eligible for return / exchange.</li>
          <li>Only items found defective or damaged are replaced by us based on exchange requests.</li>
        </ul>
        <p>
          You agree that there may be certain categories of products / items that are exempt from returns or refunds. Such
          categories will be identified at the time of purchase.
        </p>
        <p>
          For accepted exchange / return requests (as applicable), once your returned product / item is received and inspected
          by us, we will send an email to notify you about receipt of the returned / exchanged product.
        </p>
        <p>
          If approved after quality check at our end, your request (i.e. return / exchange) will be processed in accordance
          with our policies.
        </p>
      </section>
    </PolicyLayout>
  );
}
