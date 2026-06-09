// ─────────────────────────────────────────────────────────────
//  header.jsx
//  Fixes applied:
//  • Handbag → ShoppingBag  (Handbag does not exist in lucide-react)
//  • Cart button shows a live badge from props.cartCount
//  • Search input is controlled (useState) so it actually works
//  • onCartClick prop opens the cart drawer in App
// ─────────────────────────────────────────────────────────────
import { useState } from "react";
import { Search, ShoppingBag } from "lucide-react";  // ✅ fixed import

export default function Header({ cartCount = 0, onCartClick }) {
  const [query, setQuery] = useState("");

  return (
    <header className="bg-white shadow-md w-full p-4 flex items-center justify-between sticky top-0 z-50">
      {/* ── Logo ── */}
      <div className="flex items-center gap-2">
        <img
          src="/silverhouse.jpg"
          alt="Silver House logo"
          className="h-10 w-10 rounded-xl object-cover"
        />
        <p className="text-xl font-bold text-gray-800">Silver House 05</p>
      </div>

      {/* ── Search ── */}
      <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 w-64">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}   // ✅ controlled input
          className="bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none text-sm flex-1"
        />
        <Search className="text-gray-600 ml-2 shrink-0" size={18} />
      </div>

      {/* ── Cart button with badge ── */}
      <button
        onClick={onCartClick}                           // ✅ opens drawer in App
        className="relative flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
      >
        <ShoppingBag size={18} />                       {/* ✅ correct icon name */}
        <span>Cart</span>

        {/* Badge – only visible when cart has items */}
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>
    </header>
  );
}
