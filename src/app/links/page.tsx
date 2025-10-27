export default function LinksPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#6B9FFF] to-[#24005B] text-white px-6">
      <div className="text-center space-y-8 max-w-md w-full">
        {/* Logo */}
        <img
          src="/broski-icon.png"
          alt="Broski Icon"
          className="w-24 h-24 rounded-2xl mx-auto shadow-lg"
        />

        {/* Title */}
        <div>
          <h1 className="text-3xl font-bold">Broski</h1>
          <p className="text-base md:text-lg opacity-90 mt-1 font-medium">
            Find your ski crew ⛷️🏂
          </p>

        </div>

        {/* Links */}
        <div className="flex flex-col gap-4">
          {[
            {
              label: "📱 Download the App",
              href: "https://apps.apple.com/app/broski/id6745537624",
            },
            {
              label: "📸 Follow us on Instagram",
              href: "https://instagram.com/broski.app",
            },
            {
              label: "🌐 Visit our Website",
              href: "https://broski.app",
            },
            {
              label: "❄️ Buy a Sticker",
              href: "https://www.stickermule.com/broski",
            },
            {
              label: "✉️ Contact Us",
              href: "mailto:calebjmadgwick@gmail.com",
            },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 px-6 rounded-full bg-white text-[#24005B] font-semibold text-lg shadow-md hover:scale-[1.02] hover:bg-white/90 transition-transform"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Footer */}
        <p className="text-xs text-white/70 mt-8">
          © {new Date().getFullYear()} Broski
        </p>
      </div>
    </div>
  );
}
