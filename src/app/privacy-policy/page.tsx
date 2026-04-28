import { PolicyLayout } from '@/components/policies/PolicyLayout';

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout title="Privacy Policy" updatedAt="April 28, 2026">
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Information We Collect</h2>
        <p>
          We collect personal data such as your name, email address, account details, order information, and transaction
          records that are required to provide software products and digital license delivery.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Business Transfers or Restructuring</h2>
        <p>
          In the event of a merger, acquisition, restructuring, or sale of business assets, your data may be transferred to
          the new business entity, subject to the same protections set out in this Privacy Policy.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Links to Other Sites</h2>
        <p>
          Our platform may contain links to third-party websites. We are not responsible for the privacy practices, policies,
          or content of those external websites.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Security Precautions</h2>
        <p>
          We maintain reasonable technical and organizational security practices to protect your personal data from
          unauthorized access, use, disclosure, alteration, damage, or destruction.
        </p>
        <p>
          While we implement industry-standard safeguards and continuously improve our systems, no method of internet
          transmission is completely secure. By using the platform, users acknowledge inherent risks in online data
          transmission.
        </p>
        <p>
          Users are responsible for maintaining the confidentiality of their login credentials. We also maintain internal
          incident response procedures to detect, analyze, contain, remediate, and recover from security incidents.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Choice / Opt-Out</h2>
        <p>
          Users can opt out of receiving non-essential promotional and marketing communications at any time by using the
          unsubscribe link in emails or by contacting support through the help center.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Advertisements</h2>
        <p>
          We may work with third-party advertising providers that use non-personally identifiable information about your
          visits to provide relevant ads.
        </p>
        <p>
          You can opt out of personalized advertising by using your device&apos;s ad personalization settings. Once opted out,
          advertising identifiers may no longer be available for personalized ad targeting.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Use of Children Information</h2>
        <p>
          Use of the platform is intended for persons who can form legally binding contracts under applicable law. We do not
          knowingly collect personal data from children under 18 years of age.
        </p>
        <p>
          If you submit personal data of a minor, you represent that you are authorized to do so and consent to processing of
          that data under this Privacy Policy.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Data Retention</h2>
        <p>
          We retain personal data only as long as necessary for the purpose it was collected, or as required by law,
          regulatory obligations, fraud prevention, dispute resolution, or legal defense.
        </p>
        <p>We may retain anonymized data for analytics and research purposes.</p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Your Rights</h2>
        <p>You may request to access, correct, update, or delete your personal data, subject to applicable law.</p>
        <p>Through our Privacy Center (or support channel), you can:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Request a copy of personal data we hold about you.</li>
          <li>Check the status of existing privacy requests.</li>
          <li>Edit or update your personal data.</li>
          <li>Request deletion of your account and associated data, where legally permissible.</li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Changes to this Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in legal, regulatory, technical, or business
          requirements. Material updates will be communicated through the platform or by email where required.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Grievance Officer</h2>
        <p>
          In accordance with applicable Indian laws, including the Information Technology Act, 2000 and relevant rules, users
          may contact the Grievance Officer for privacy, data protection, and related complaints.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Name: [To be provided]</li>
          <li>Designation: [To be provided]</li>
          <li>Company Name: [To be provided]</li>
          <li>Registered Address: No. 16, Shop No. 2, 7th Cross Road, 6th Main, Narayana Gowda Layout, BTM Layout 1st Stage, Tavarekere, Bengaluru, Karnataka 560029</li>
          <li>Contact Email: [To be provided]</li>
          <li>Phone: +91 9207966059</li>
          <li>WhatsApp: +91 9207966059</li>
          <li>Working Hours: [To be provided]</li>
          <li>Customer Support Link: [To be provided]</li>
        </ul>
        <p>
          We will acknowledge and resolve grievances within timelines prescribed under applicable law.
        </p>
      </section>
    </PolicyLayout>
  );
}
