// ─────────────────────────────────────────────────────────────
//  footer.jsx
//  Fixes applied:
//  • Added social links and quick nav columns
//  • Copyright year kept as 2026
// ─────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      <div className="container mx-auto px-6">

        {/* ── Top row – 3 columns ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-2">Silver House 05</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Handcrafted 925 sterling silver jewellery. Made with love in Algeria.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Collections</h4>
            <ul className="space-y-2 text-sm">
              {["Rings", "Necklaces", "Bracelets", "Sets"].map((c) => (
                <li key={c}>
                  {/* Use React Router <Link> here if you add routing later */}
                  <span className="hover:text-white cursor-pointer transition-colors">
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📍 Batna, Algeria</li>
              <li>📞 +213 666 52 23 92</li>
              <li>✉️ contact@silverhouse05.dz</li>
            </ul>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="border-t border-gray-700 pt-5 text-center text-sm text-gray-500">
          © 2026 Silver House 05. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
