// privacy-policy/components/PrivacyPolicySection.js
// (or components/PrivacyPolicySection.js if using Pages Router)

import Link from 'next/link';

export default function PrivacyPolicySection() {
  const lastUpdated = "June 17, 2025"; // Update this date when you finalize the content

  return (
    <section className="py-20 bg-background text-foreground px-4">
      <div className="max-w-4xl mx-auto text-left">
        <h1 className="font-headline text-5xl md:text-6xl text-primary mb-6 leading-tight text-center">
          Privacy Policy
        </h1>
        <p className="font-body text-sm text-muted-foreground text-center mb-10">
          Last Updated: {lastUpdated}
        </p>

        <div className="space-y-8 font-body text-base text-foreground/90 leading-relaxed">
          <p>
            Welcome to Nanhi Sunehri's Privacy Policy. We are committed to protecting your privacy and ensuring the security of your personal information. This policy outlines how we collect, use, and safeguard your data when you visit our website, use our services, or interact with us.
          </p>

          <h2 className="font-headline text-3xl text-accent mb-4 mt-6">1. Information We Collect</h2>
          <p>
            We collect information to provide and improve our services, communicate with you, and enhance your experience. The types of information we collect include:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              **Personal Identification Information:** Name, email address, phone number, and any other information you voluntarily provide when you fill out forms (e.g., contact form, volunteer application), subscribe to newsletters, or participate in our programs.
            </li>
            <li>
              **Usage Data:** Information about how you access and use our website, such as your IP address, browser type, pages visited, time spent on pages, and referring URLs.
            </li>
            <li>
              **Cookies and Tracking Technologies:** We use cookies and similar tracking technologies to track activity on our service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
            </li>
          </ul>

          <h2 className="font-headline text-3xl text-accent mb-4 mt-6">2. How We Use Your Information</h2>
          <p>We use the collected data for various purposes, including:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>To provide and maintain our Service.</li>
            <li>To notify you about changes to our Service.</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so.</li>
            <li>To provide customer support.</li>
            <li>To gather analysis or valuable information so that we can improve our Service.</li>
            <li>To monitor the usage of our Service.</li>
            <li>To detect, prevent and address technical issues.</li>
            <li>To fulfill any other purpose for which you provide it.</li>
          </ul>

          <h2 className="font-headline text-3xl text-accent mb-4 mt-6">3. Disclosure of Your Information</h2>
          <p>
            We may disclose your personal information in the good faith belief that such action is necessary to:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Comply with a legal obligation.</li>
            <li>Protect and defend the rights or property of Nanhi Sunehri.</li>
            <li>Prevent or investigate possible wrongdoing in connection with the Service.</li>
            <li>Protect the personal safety of users of the Service or the public.</li>
            <li>Protect against legal liability.</li>
          </ul>

          <h2 className="font-headline text-3xl text-accent mb-4 mt-6">4. Security of Your Data</h2>
          <p>
            The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
          </p>

          <h2 className="font-headline text-3xl text-accent mb-4 mt-6">5. Your Data Protection Rights</h2>
          <p>
            Depending on your location, you may have the following data protection rights:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>The right to access, update or to delete the information we have on you.</li>
            <li>The right of rectification.</li>
            <li>The right to object.</li>
            <li>The right of restriction.</li>
            <li>The right to data portability.</li>
            <li>The right to withdraw consent.</li>
          </ul>
          <p>
            If you wish to exercise any of these rights, please contact us.
          </p>

          <h2 className="font-headline text-3xl text-accent mb-4 mt-6">6. Links to Other Sites</h2>
          <p>
            Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
          </p>

          <h2 className="font-headline text-3xl text-accent mb-4 mt-6">7. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2 className="font-headline text-3xl text-accent mb-4 mt-6">8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
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
