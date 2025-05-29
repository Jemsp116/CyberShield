import React from 'react';

export const metadata = {
  title: 'Privacy Policy | K-Next Gen Infotech',
  description:
    'Privacy Policy for K-Next Gen Infotech - Learn how we collect, use, and protect your personal information.',
};

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-lg mb-6">
          Last Updated: {new Date().toLocaleDateString('en-IN')}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            K-Next Gen Infotech Global Consulting Service ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our cybersecurity services.
          </p>
          <p>
            By accessing or using our website and services, you acknowledge that you have read, understood, and agree to the terms outlined in this Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>

          <h3 className="text-xl font-medium mt-4 mb-2">Personal Information</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Contact details (name, email address, phone number, postal address)</li>
            <li>Payment information (billing details, transaction records)</li>
            <li>Account credentials (username, password)</li>
            <li>Professional info (company name, role, industry)</li>
          </ul>

          <h3 className="text-xl font-medium mt-4 mb-2">Usage Data</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>IP address and device identifiers</li>
            <li>Browser and operating system type</li>
            <li>Pages visited and duration</li>
            <li>Referring URLs and timestamps</li>
          </ul>

          <h3 className="text-xl font-medium mt-4 mb-2">Cookies and Tracking</h3>
          <p>
            We use cookies and similar technologies to improve user experience and track website activity. You may choose to disable cookies through your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>To provide and maintain our services</li>
            <li>To personalize user experience</li>
            <li>To improve security and prevent fraud</li>
            <li>To process transactions and respond to inquiries</li>
            <li>To comply with legal obligations</li>
            <li>To send service-related communications</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Disclosure of Your Information</h2>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Legal Compliance:</strong> As required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In the event of merger, acquisition, or asset sale</li>
            <li><strong>With Consent:</strong> When you consent to sharing for specific purposes</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p>
            We implement best practices and security measures to protect your data. However, no system can be 100% secure, and you use our services at your own risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights Under Indian Law</h2>
          <p>
            Under the Information Technology Act, 2000 and related rules, you have the right to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Know what personal data we collect and how we use it</li>
            <li>Access and update your personal data</li>
            <li>Withdraw consent for data processing</li>
            <li>Request deletion of your data (where applicable)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under 18. If you believe a child has submitted personal data, please contact us to remove the information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update this policy from time to time. The latest version will always be available on our website with the effective date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p className="mt-2">
            <strong>K-Next Gen Infotech Global Consulting Service</strong><br />
            Email: info@k-nextgentech.com<br />
            Phone: +91 6736829994<br />
            Address: W-304, Siddhraj Z Square, Kudasan, Gandhinagar, Gujarat 382421, India
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
