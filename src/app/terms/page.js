// terms-conditions/components/TermsConditionsSection.js
// (or components/TermsConditionsSection.js if using Pages Router)

import Link from 'next/link';

export default function TermsConditionsSection() {
  const lastUpdated = "June 17, 2025"; // Update this date when you finalize the content

  return (
    <section className="py-20 bg-background text-foreground px-4">
      <div className="max-w-4xl mx-auto text-left">
        <h1 className="font-headline text-5xl md:text-6xl text-primary mb-6 leading-tight text-center">
          Terms and Conditions
        </h1>
        <p className="font-body text-sm text-muted-foreground text-center mb-10">
          Last Updated: {lastUpdated}
        </p>

        <div className="space-y-8 font-body text-base text-foreground/90 leading-relaxed">
          <p>
            Welcome to Nanhi Sunehri. These Terms and Conditions govern your use of our website and services. By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
          </p>

          <h2 className="font-headline text-3xl text-accent mb-4 mt-6">1. Acceptance of Terms</h2>
          <p>
            By accessing and using Nanhi Sunehri, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our Service.
          </p>

          <h2 className="font-headline text-3xl text-accent mb-4 mt-6">2. Use of Service</h2>
          <p>
            Our Service is provided for informational and engagement purposes related to Nanhi Sunehri's initiatives. You agree to use the Service only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the Service.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>You must not misuse this Service by knowingly introducing viruses, trojans, worms, logic bombs or other material that is malicious or technologically harmful.</li>
            <li>You must not attempt to gain unauthorized access to our Service, the server on which our Service is stored or any server, computer or database connected to our Service.</li>
          </ul>

          <h2 className="font-headline text-3xl text-accent mb-4 mt-6">3. User Accounts (if applicable)</h2>
          <p>
            If our Service requires you to create an account, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password.
          </p>

          <h2 className="font-headline text-3xl text-accent mb-4 mt-6">4. Intellectual Property</h2>
          <p>
            The Service and its original content (excluding content provided by users), features and functionality are and will remain the exclusive property of Nanhi Sunehri and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Nanhi Sunehri.
          </p>

          <h2 className="font-headline text-3xl text-accent mb-4 mt-6">5. Prohibited Uses</h2>
          <p>You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>In any way that violates any applicable national or international law or regulation.</li>
            <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
            <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent.</li>
            <li>To impersonate or attempt to impersonate Nanhi Sunehri, a Nanhi Sunehri employee, another user, or any other person or entity.</li>
            <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm Nanhi Sunehri or users of the Service.</li>
          </ul>

          <h2 className="font-headline text-3xl text-accent mb-4 mt-6">6. Disclaimer</h2>
          <p>
            Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
          </p>

          <h2 className="font-headline text-3xl text-accent mb-4 mt-6">7. Limitation of Liability</h2>
          <p>
            In no event shall Nanhi Sunehri, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
          </p>

          <h2 className="font-headline text-3xl text-accent mb-4 mt-6">8. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction, e.g., India], without regard to its conflict of law provisions.
          </p>

          <h2 className="font-headline text-3xl text-accent mb-4 mt-6">9. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>

          <h2 className="font-headline text-3xl text-accent mb-4 mt-6">10. Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>By email: <Link href="mailto:info@nanhisunehri.com" className="text-primary hover:underline">info@nanhisunehri.com</Link></li>
            <li>By visiting this page on our website: <Link href="/contact" className="text-primary hover:underline">/contact</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
