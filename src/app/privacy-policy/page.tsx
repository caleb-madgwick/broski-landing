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

          <a href="#" className="h-10 opacity-60 cursor-not-allowed" title="Coming Soon">
            <img
              src="/app-store-badge.svg"
              alt="Coming Soon on the App Store"
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
            <li>App usage data and crash logs</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">2. How We Use Your Info</h2>
          <ul className="list-disc pl-6">
            <li>To create your profile and match you with others</li>
            <li>To help you find ski buddies based on resort and availability</li>
            <li>To improve app features and user experience</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">3. Data Storage & Protection</h2>
          <p>Your data is securely stored using AWS services. Only authorized personnel can access it.</p>

          <h2 className="text-2xl font-semibold mt-8">4. Sharing & Disclosure</h2>
          <p>We never sell your data. We only share it if required by law or to prevent harm or fraud.</p>

          <h2 className="text-2xl font-semibold mt-8">5. Your Rights</h2>
          <p>
            You can update or delete your info anytime in the app.
          </p>

          <h2 className="text-2xl font-semibold mt-8">6. Children’s Privacy</h2>
          <p>
            Broski is for users 18 and older. We do not knowingly collect data from minors.
          </p>

          <h2 className="text-2xl font-semibold mt-8">7. Updates</h2>
          <p>
            We may update this policy. Any changes will be posted on this page.
          </p>

          <p className="mt-8">Last updated: June 2025</p>
        </div>
      </main>
    </div>
  );
}
