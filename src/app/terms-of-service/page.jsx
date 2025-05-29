import React from 'react';

export const metadata = {
  title: 'Terms of Service | K-Next Gen Infotech',
  description:
    'Terms of Service for K-Next Gen Infotech - Learn about the terms governing the use of our website and cybersecurity services.',
};

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-lg mb-6">
          Last Updated: {new Date().toLocaleDateString('en-IN')}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            Welcome to K-Next Gen Infotech Global Consulting Service. These Terms of Service ("Terms") govern your access to and use of our website and services. By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access our website or use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Definitions</h2>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>"Company"</strong> refers to K-Next Gen Infotech Global Consulting Service.</li>
            <li><strong>"Website"</strong> refers to the K-Next Gen Infotech website (k-nextgentech.com).</li>
            <li><strong>"Services"</strong> refers to all cybersecurity services offered by K-Next Gen Infotech.</li>
            <li><strong>"User"</strong> refers to the individual accessing or using our website or services.</li>
            <li><strong>"Terms"</strong> refers to these Terms of Service.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Scope of Services</h2>
          <p>
            Our services include but are not limited to Log Management and Analysis, SOC Deployment and Monitoring, MDR/EDR/XDR/SOAR implementation, Penetration Testing (Web, Network, Mobile, Cloud), Cyber Resilience Services, Risk Assessment, IAM & PAM, vCISO, Source Code Review, and Incident Response.
          </p>
          <p>
            These Terms apply to the use of any and all services we provide via our website or direct engagement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Use of Our Website and Services</h2>
          <p>By accessing our website and using our services, you agree to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Use our website and services only for lawful purposes and in accordance with these Terms.</li>
            <li>Not violate any applicable laws or regulations.</li>
            <li>Not attempt unauthorized access to our systems.</li>
            <li>Not interfere with the functionality or security of our website or services.</li>
            <li>Not use automated tools to extract or copy website data without permission.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Account Registration</h2>
          <p>
            Some services may require account creation. You agree to provide accurate information and safeguard your credentials. You are responsible for all activity under your account.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
          <p>
            All website content and services are the intellectual property of K-Next Gen Infotech. Unauthorized use, reproduction, or distribution is strictly prohibited.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">User Content</h2>
          <p>
            You are responsible for content you post or share through our website. You must ensure your content does not infringe on any third-party rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Payment Terms</h2>
          <p>
            If you purchase services, you agree to provide accurate billing information. Payments are non-refundable unless stated otherwise.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
          <p>
            K-Next Gen Infotech shall not be liable for indirect or consequential damages resulting from your use or inability to use our website or services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
          <p>
            Services are provided "as is" without warranties. We do not guarantee uninterrupted or error-free performance of the website or services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
          <p>
            These Terms are governed by the laws of India. Any disputes will be resolved under Indian jurisdiction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Dispute Resolution</h2>
          <p>
            Disputes will be resolved by arbitration in accordance with the Arbitration and Conciliation Act, 1996. Arbitration will take place in Gandhinagar, Gujarat, India.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
          <p>
            We may update these Terms at any time. Continued use of the website after updates indicates your acceptance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
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

export default TermsOfService;
