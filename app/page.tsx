export default function Home() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center p-6">
        <h1 className="text-6xl font-extrabold tracking-tight sm:text-8xl mb-6">
          My Big Title
        </h1>
        <p className="text-xl sm:text-2xl text-slate-300 max-w-2xl">
          This is the text right underneath the title. Scroll down to see more content.
        </p>
        <div className="mt-12 animate-bounce text-slate-400">
          ↓ Scroll Down
        </div>
      </section>

      {/* Content Section (Revealed on Scroll) */}
      <section className="min-h-screen max-w-4xl mx-auto px-6 py-20 space-y-24">
        <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700">
          <h2 className="text-3xl font-bold mb-4">First Section</h2>
          <p className="text-slate-300 leading-relaxed">
            Add your main details, features, or project information here.
          </p>
        </div>

        <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700">
          <h2 className="text-3xl font-bold mb-4">Second Section</h2>
          <p className="text-slate-300 leading-relaxed">
            Keep adding more blocks as the user continues scrolling down the page.
          </p>
        </div>
      </section>
    </div>
  );
}
