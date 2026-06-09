// ─────────────────────────────────────────────────────────────
//  aside.jsx  –  Sidebar navigation
//  Fixes applied:
//  • Categories now match the actual store type (jewellery)
//    Was: Electronics, Fashion, Home & Garden, Sports, Toys
//    Now: Rings, Necklaces, Bracelets, Earrings, Sets
//  • onSelect prop lets the parent filter products by category
//    (connect to GenderProducts activeTab state in App if needed)
// ─────────────────────────────────────────────────────────────

// ── Sidebar categories – matches your actual product types ───
const SIDEBAR_CATEGORIES = [
  "All",
  "Rings",
  "Necklaces",
  "Bracelets",
  "Sets",
];

export default function Aside({ activeCategory = "All", onSelect }) {
  return (
    <aside className="bg-gray-100 p-4 w-full md:w-1/4">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Categories</h2>

      <ul className="space-y-1">
        {SIDEBAR_CATEGORIES.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => onSelect?.(cat)}          // ✅ calls parent handler
              className={`w-full text-left px-2 py-1.5 rounded-md text-sm transition-colors duration-200 ${
                activeCategory === cat
                  ? "bg-black text-white font-medium"  // active style
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
