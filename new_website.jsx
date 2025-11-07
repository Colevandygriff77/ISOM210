export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Project Briefing: Website Design and Information Architecture</h1>
        <p className="text-lg opacity-90">Transform your approved business process into a static informational website that demonstrates clear structure, accessibility, and purpose.</p>
      </header>

      <main className="max-w-5xl space-y-8">
        <section className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Project Overview</h2>
          <p className="opacity-90 mb-2">Transform your approved business process into a static informational website. Communicate a clear purpose, audience, and organized navigation using semantic HTML and shared CSS. Host publicly on GitHub Pages and document your approach.</p>
          <ul className="list-disc list-inside opacity-90">
            <li>Translate a process into a navigable 3–5 page site structure.</li>
            <li>Obtain approval for your wireframe and site flow before building.</li>
            <li>Develop a Web 1.0 site with semantic HTML and a shared stylesheet.</li>
            <li>Host the site publicly; validate basic accessibility and usability.</li>
            <li>Document AI assistance and reflect professionally in your portfolio.</li>
          </ul>
        </section>

        <section className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Final Deliverables</h2>
          <ul className="list-disc list-inside opacity-90">
            <li>Approved Wireframe & Site Flow (PDFs)</li>
            <li>Hosted Website URL (publicly viewable)</li>
            <li>Screenshots (Home, two content pages, Contact)</li>
            <li>AI Use Note (how AI assisted, what you verified)</li>
            <li>Quality & Accessibility Checklist (headings, contrast, alt text, keyboard focus)</li>
            <li>Portfolio Page Link (GitHub Pages page titled “PBL 2: Web 1.0 — The Bound Volume (Digital Shelf)”)</li>
          </ul>
        </section>

        <section className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Grading Rubric</h2>
          <table className="w-full text-left text-sm border-collapse opacity-90">
            <thead>
              <tr className="border-b border-white/30">
                <th className="p-2">Category</th>
                <th className="p-2">Weight</th>
                <th className="p-2">Exemplary (100%)</th>
                <th className="p-2">Accomplished (75%)</th>
                <th className="p-2">Developing (50%)</th>
                <th className="p-2">Beginning (25%)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/20">
                <td className="p-2">Wireframe & Planning</td>
                <td className="p-2">10 pts (14%)</td>
                <td className="p-2">Wireframe and flow fully approved; reusable patterns demonstrated.</td>
                <td className="p-2">Plans approved with minor gaps.</td>
                <td className="p-2">Partial plans or unclear flows.</td>
                <td className="p-2">Missing or unapproved.</td>
              </tr>
              <tr className="border-b border-white/20">
                <td className="p-2">HTML Structure & Semantics</td>
                <td className="p-2">12 pts (17%)</td>
                <td className="p-2">Correct landmarks and heading hierarchy across pages.</td>
                <td className="p-2">Mostly correct structure.</td>
                <td className="p-2">Some misuse of tags or hierarchy.</td>
                <td className="p-2">Poor or missing structure.</td>
              </tr>
              <tr className="border-b border-white/20">
                <td className="p-2">CSS & Design Consistency</td>
                <td className="p-2">10 pts (14%)</td>
                <td className="p-2">Professional, consistent layout and typography.</td>
                <td className="p-2">Shared CSS with minor inconsistencies.</td>
                <td className="p-2">Inconsistent styling.</td>
                <td className="p-2">Per-page or inline styles only.</td>
              </tr>
              <tr className="border-b border-white/20">
                <td className="p-2">Navigation & Accessibility</td>
                <td className="p-2">10 pts (14%)</td>
                <td className="p-2">Accessible, keyboard-friendly nav; meaningful links; no dead ends.</td>
                <td className="p-2">Mostly working nav and links.</td>
                <td className="p-2">Some broken links or gaps.</td>
                <td className="p-2">Non-functional or missing nav.</td>
              </tr>
              <tr className="border-b border-white/20">
                <td className="p-2">Hosting & Quality Check</td>
                <td className="p-2">8 pts (11%)</td>
                <td className="p-2">Public URL loads quickly; mobile-friendly; no errors.</td>
                <td className="p-2">Deployed with minor flaws.</td>
                <td className="p-2">Hosting incomplete or slow.</td>
                <td className="p-2">Not hosted or inaccessible.</td>
              </tr>
              <tr>
                <td className="p-2">Professionalism & Presentation</td>
                <td className="p-2">12 pts (17%)</td>
                <td className="p-2">Clean, readable, and error-free; visuals support purpose.</td>
                <td className="p-2">Minor errors or layout issues.</td>
                <td className="p-2">Some clutter or grammar errors.</td>
                <td className="p-2">Disorganized or error-filled.</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

      <footer className="mt-12 text-sm opacity-75">
        <p>Submitting: a text entry box, a website URL, or a file upload</p>
        <p>© {new Date().getFullYear()} Web 1.0 Project | All Rights Reserved</p>
      </footer>
    </div>
  );
}
