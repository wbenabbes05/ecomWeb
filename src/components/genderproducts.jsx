// ─────────────────────────────────────────────────────────────
//  genderproducts.jsx  –  Category filter + category cards
//  Fixes applied:
//  • <a href="/..."> replaced with useState filter  (no page reload)
//  • Active tab highlighted automatically
//  • Each card has a unique image placeholder (swap for real imgs)
//  • Language unified to English throughout
//  • Consistent "Discover now" button style (no blue – matches site)
// ─────────────────────────────────────────────────────────────
import { useState } from "react";

// ── Tab data ────────────────────────────────────────────────
const TABS = ["All", "Rings", "Necklaces", "Bracelets", "Earrings"];

// ── Category card data ───────────────────────────────────────
//  Each card has its own image – swap src for your real photos
const CATEGORIES = [
  {
    id: 1,
    tab: "All",           // show in which tab ("All" = always visible)
    title: "Men's Accessories",
    description: "Chains, bracelets and rings for men",
    img: "/ACC.jpg",
  },
    {
    id: 2,
    tab: "Rings",
    title: "Rings Collection",
    description: "Silver rings for every occasion",
    img: "/bague1.jpg",
  },
  {
    id: 3,
    tab: "Necklaces",
    title: "Necklaces Collection",
    description: "Delicate chains and statement necklaces",
    img: "/chaine1.jpg",
  },
  {
    id: 4,
    tab: "Bracelets",
    title: "Bracelets Collection",
    description: "Elegant bracelets and bangles",
    img: "/chaine2.jpg",
  },
];

export default function GenderProducts() {
  const [activeTab, setActiveTab] = useState("All");  // ✅ useState instead of <a href>

  // Show cards that belong to the active tab OR are always visible ("All" cards)
  const visible = CATEGORIES.filter(
    (c) => activeTab === "All" || c.tab === activeTab || c.tab === "All"
  );

  return (
    <section className="container mx-auto px-4 py-8">

      {/* ── Tab filter buttons ── */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}          // ✅ state update – no page reload
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeTab === tab
                ? "bg-black text-white"               // active style
                : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ── Category cards grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visible.map((cat) => (
          <div
            key={cat.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={cat.img}
              alt={cat.title}              
              className="w-full h-72 object-cover"
            />
            <div className="p-4 hover:bg-gray-50 transition-colors duration-300">
              <h3 className="text-lg font-semibold mb-2">{cat.title}</h3>
              <p className="text-gray-600 mb-4">{cat.description}</p>  {/* ✅ English */}
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300">
                Discover now                          {/* ✅ consistent language */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
    {/*
      Notes:
      - The "All" tab shows all cards, including those tagged with specific categories.
      - Each card has a unique image placeholder; replace the src with your actual images.
      - The "Discover now" button is styled consistently with the rest of the site (no blue).
      - The active tab is highlighted automatically based on the state.
    */}     