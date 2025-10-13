export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white bg-gradient-to-b from-[#6B9FFF] to-[#24005B] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-3">
            <img src="/broski-icon.png" alt="Broski Icon" className="h-16 w-16 rounded-xl" />
            <div className="flex flex-col leading-tight">
              <span className="text-2xl md:text-3xl font-bold text-gray-900">Broski</span>
              <span className="text-sm text-gray-600 -mt-1">Find your ski crew</span>
            </div>
          </div>

          <a
            href="https://apps.apple.com/app/broski/id6745537624"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 hover:opacity-90 transition-opacity"
            title="Download on the App Store"
          >
            <img
              src="/app-store-badge.svg"
              alt="Download on the App Store"
              className="h-full"
            />
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-10">Privacy Policy</h1>
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            At Broski, your privacy matters to us. This Privacy Policy explains how we collect, use,
            and protect your information.
          </p>

          <h2 className="text-2xl font-semibold mt-8">1. What We Collect</h2>
          <ul className="list-disc pl-6">
            <li>Name, email, and date of birth when you sign up</li>
            <li>Profile details like gender, resort, bio, and ski/snowboard preferences</li>
            <li>Photos you upload and availability info</li>
            <li>Location data (if you enable it) to show you nearby riders on the map</li>
            <li>App usage data and crash logs</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">2. How We Use Your Info</h2>
          <ul className="list-disc pl-6">
            <li>To create your profile and match you with others</li>
            <li>To help you find ski buddies based on resort and availability</li>
            <li>To show nearby riders and events on the map, if you grant location access</li>
            <li>To improve app features and user experience</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">3. Data Storage & Protection</h2>
          <p>
            Your data is securely stored using AWS (Amazon Web Services). Only authorized personnel can
            access it. We use encryption, authentication, and regional redundancy to protect your data.
          </p>

          <h2 className="text-2xl font-semibold mt-8">3a. Data Transfers Outside the EU</h2>
          <p>
            If you are located in the European Union (EU), please note that your data may be processed
            and stored on servers located outside the EU, including in Australia and the United States.
            These transfers are made under the European Commission’s Standard Contractual Clauses (SCCs)
            to ensure your data is protected under equivalent standards to those required by GDPR.
          </p>
          <p>
            By creating an account and using Broski, you consent to the transfer and processing of your
            information outside your home country, as described in this policy.
          </p>

          <h2 className="text-2xl font-semibold mt-8">3b. Data Processors & Third Parties</h2>
          <p>
            We use trusted third-party services to operate Broski securely and reliably:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>AWS (Amazon Web Services):</strong> For data hosting, authentication (Cognito),
              and secure file storage (S3).
            </li>
            <li>
              <strong>Stream Chat:</strong> For in-app messaging and chat functionality. Message content
              is encrypted and stored securely by Stream.
            </li>
            <li>
              <strong>Apple:</strong> For Sign in with Apple and push notifications.
            </li>
          </ul>
          <p>
            These services comply with international data protection standards and maintain strong
            security controls.
          </p>

          <h2 className="text-2xl font-semibold mt-8">4. Sharing & Disclosure</h2>
          <p>
            We never sell your data. We only share it if required by law or to prevent harm, fraud, or
            misuse of our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8">5. Your Rights</h2>
          <p>
            If you are located in the European Union (EU) or United Kingdom (UK), you have the following
            rights under the General Data Protection Regulation (GDPR):
          </p>
          <ul className="list-disc pl-6">
            <li>The right to access the personal data we hold about you</li>
            <li>The right to request correction or deletion of your data</li>
            <li>The right to withdraw consent at any time</li>
            <li>The right to data portability</li>
            <li>The right to lodge a complaint with your local data protection authority</li>
          </ul>
          <p>
            To exercise these rights, contact us at <strong>privacy@broski.app</strong>.
          </p>

          <h2 className="text-2xl font-semibold mt-8">6. Children’s Privacy</h2>
          <p>
            Broski is for users 18 and older. We do not knowingly collect or process data from minors.
          </p>

          <h2 className="text-2xl font-semibold mt-8">7. Updates</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page
            with an updated “Last updated” date.
          </p>

          <h2 className="text-2xl font-semibold mt-8">8. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or how your data is handled, please contact us:
          </p>
          <p>
            <strong>Email:</strong> privacy@broski.app<br />
            <strong>Address:</strong> Broski App, Sydney NSW, Australia
          </p>

          <p className="mt-8">Last updated: October 2025</p>
        </div>
      </main>
    </div>
  );
}
