export default function Page() {
  return (
    <div className="min-h-screen bg-white bg-gradient-to-b from-[#6B9FFF] to-[#24005B] text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Left: Logo + App Name */}
          <div className="flex items-center space-x-3">
            <img src="/broski-icon.png" alt="Broski Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-gray-900">Broski</span>
          </div>

          {/* Right: App Store Badge */}
          <a href="#" className="h-10">
            <img
              src="/app-store-badge.svg"
              alt="Download on the App Store"
              className="h-full"
            />
          </a>
        </div>
      </header>


      <main className="max-w-6xl mx-auto px-4 py-20 space-y-32">
        {/* Section 1 */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <img src="/photo1.jpg" alt="Ski friends" className="rounded-xl shadow-md" />
          <div>
            <h2 className="text-3xl font-semibold mb-4">What is Broski?</h2>
            <p className="text-lg">
              Broski is the app for skiers and snowboarders looking to connect on and off the slopes.
              Whether you're chasing powder in the Rockies or cruising groomers in the Alps, find ski
              buddies who match your style and energy.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">How does it work?</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Set your profile: skill level, location & vibe</li>
              <li>Discover riders nearby who are keen to link up</li>
              <li>Chat, meet at the lift, and ride together</li>
            </ul>
          </div>
          <img src="/photo2.jpg" alt="App demo" className="rounded-xl shadow-md" />
        </section>

               {/* Section 3 */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <img src="/photo3.jpg" alt="Mountain scene" className="rounded-xl shadow-md" />
          <div>
            <h2 className="text-2xl font-semibold mb-4">Join the Crew</h2>
            <p className="text-lg mb-4">
              Broski helps you build real connections on the mountain and off. It’s like Tinder,
              but for your ski tribe.
            </p>
            <a href="#" className="h-12 inline-block">
              <img
                src="/app-store-badge-white.svg"
                alt="Download on the App Store"
                className="h-full"
              />
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
