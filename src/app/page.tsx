export default function Page() {
  return (
    <div className="min-h-screen bg-white bg-gradient-to-b from-[#6B9FFF] to-[#24005B] text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Left: Logo + App Name */}
          <div className="flex items-center space-x-3">
            <img src="/broski-icon.png" alt="Broski Icon" className="h-16 w-16 rounded-xl" />
            <div className="flex flex-col leading-tight">
              <span className="text-2xl md:text-3xl font-bold text-gray-900">Broski</span>
              <span className="text-sm text-gray-600 -mt-1">Find your ski crew</span>
            </div>
          </div>

          {/* Right: App Store Badge */}
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

      <main className="max-w-6xl mx-auto px-4 py-20 space-y-32">

        {/* HERO SECTION */}
        <section className="grid md:grid-cols-2 items-center gap-12">
          <div className="flex flex-col items-start space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Plan Your Next Ski Day With Friends Who Shred Like You
            </h1>
            <p className="text-lg opacity-90 max-w-md">
Broski helps skiers and snowboarders find people to ride with based on resort, availability, and skill - so you can build a crew that matches your style and stoke. See who’s heading to the mountain and link up for a day on the slopes.
            </p>
          </div>
          <div>
            <img
              src="/app-mockup.png"
              alt="Broski App Screenshot"
              className="w-full max-w-xl mx-auto"
            />
          </div>
        </section>

        <hr className="border-t border-white/30 my-12" />

        {/* What is Broski */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <img src="/photo1.jpg" alt="Ski friends" className="rounded-xl shadow-md" />
          <div>
            <h2 className="text-3xl font-semibold mb-4">What is Broski?</h2>
            <p className="text-lg">
              Broski isn’t just about meeting someone for a single ride - it’s about building a crew that fits your
              rhythm, whether you're visiting for the day, here for the season, or a local mixing it up. By making it
              easier to find people who match your pace and passion, Broski turns solo days into shared laps.
            </p>
          </div>
        </section>

        {/* How Does It Work */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold mb-4">How Does It Work?</h2>
              <ul className="list-disc list-outside pl-6 text-lg space-y-2">
              <li>Create your profile with your riding level, preferred terrain, and availability</li>
              <li>See who else is planning to ski or ride at the same resort on the same day</li>
              <li>Match with people who fit your vibe - no awkward swiping, just shared stoke</li>
              <li>Start a chat, agree on a meet-up spot, and hit the mountain together</li>
            </ul>
          </div>
          <img
            src="/photo2.jpg"
            alt="App demo"
            className="rounded-xl shadow-md order-1 md:order-2"
          />
        </section>

        {/* Why Broski, Why Now? */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <img src="/photo4.jpg" alt="Founder on the mountain" className="rounded-xl shadow-md" />
          <div>
            <h2 className="text-3xl font-semibold mb-4">Why Broski, Why Now?</h2>
            <p className="text-lg mb-4">
              Broski was born in Whistler, where even surrounded by mountains and people, I sometimes found
              myself without a crew to ride with. It’s a common story in ski towns - full of seasonal workers,
              travelers, and locals whose schedules rarely line up. Despite being places of joy, ski towns have
              some of the highest rates of loneliness and even suicide. That’s what sparked Broski - a platform
              to make finding people to ride with as easy as finding a run.
            </p>
            <p className="text-lg">
              The ski and snowboard industry sees over 130 million participants worldwide, yet there’s no dedicated
              social tool to help them connect meaningfully on the mountain. Broski fills that gap.
            </p>
          </div>
        </section>


        {/* What's Next for Broski */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold mb-4">What's Next for Broski</h2>
            <p className="text-lg mb-4">
              We're planning to bring Broski to Android next — it’s one of our most requested features, and we can’t wait to make it happen.
            </p>
            <p className="text-lg mb-4">
              Our monetisation plan includes a freemium tier with premium perks, sponsored challenges, and
              partnerships with resorts, brands, and local businesses. Broski isn't just about skiing - it’s
              about building a high-trust, high-vibe outdoor community.
            </p>
          </div>
          <img
            src="/photo3.jpg"
            alt="Mountain scene"
            className="rounded-xl shadow-md order-1 md:order-2"
          />
        </section>

                {/* What People Are Saying */}
        <section className="text-center space-y-10">
          <h2 className="text-3xl font-semibold">What People Are Saying</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Real words from early riders and supporters of Broski 🏔️
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* 21 Oct */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-left shadow-lg">
              <p className="text-white/90 italic">
                “yo bro love the app idea”
              </p>
              <p className="mt-3 text-sm text-white/70">— Wayne Brockway</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-left shadow-lg">
              <p className="text-white/90 italic">
                “Just downloaded it thanks… ….Great name btw”
              </p>
              <p className="mt-3 text-sm text-white/70">— Devin Newman</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-left shadow-lg">
              <p className="text-white/90 italic">
                “Thats awesome I cant wait for you to have it on all platforms”
              </p>
              <p className="mt-3 text-sm text-white/70">— Jasmin Goodwin</p>
            </div>

            {/* 22 Oct */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-left shadow-lg">
              <p className="text-white/90 italic">
                “Sounds like an amazing idea!! I skied a lot in France and would have loved this while I was doing my seasons!”
              </p>
              <p className="mt-3 text-sm text-white/70">— Becky Hush</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-left shadow-lg md:col-span-2">
              <p className="text-white/90 italic">
                “I really like this idea! I'm a guy that ends up spending a lot of time riding by myself because of the complexity of finding people whose abilities match yours and trying to create schedules that line up. I think this could be a really great app.”
              </p>
              <p className="mt-3 text-sm text-white/70">— Chris Sieb</p>
            </div>
          </div>

      </section>

      </main>

      <footer className="text-center text-sm text-white/80 py-12">
  <p>
    Interested in partnering or investing in Broski? Let’s talk - <a href="mailto:calebjmadgwick@gmail.com" className="underline">calebjmadgwick@gmail.com</a>
  </p>
  <p className="mt-2">
    <a href="/privacy-policy" className="underline">Privacy Policy</a>
  </p>
</footer>

    </div>
  );
}
