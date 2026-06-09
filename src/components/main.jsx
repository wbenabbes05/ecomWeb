// ─────────────────────────────────────────────────────────────
//  main.jsx  –  Hero section
//  Fixes applied:
//  • Corrected misleading comments (LEFT / RIGHT were swapped)
//  • Replaced h-screen with min-h-[600px] so it doesn't clip
//    on small screens or when the header is present
// ─────────────────────────────────────────────────────────────
import { MoveRight } from "lucide-react";

export default function Main() {
  return (
    <section className="min-h-[600px] flex flex-col md:flex-row">  {/* ✅ min-h instead of h-screen */}

      {/* ── LEFT SIDE – Text content ── */}  {/* ✅ fixed comment */}
      <div className="w-full md:w-1/2 bg-gray-100 flex flex-col items-start justify-center p-10">
        <div className="max-w-md text-left">
          <p className="text-lg font-semibold text-gray-500 mb-2">
            Sterling Silver Collection
          </p>
          <h1 className="text-5xl font-bold mb-6 text-gray-800">
            Crafted for <br />
            <span className="text-gray-400">every moment.</span>
          </h1>
          <p className="text-gray-400 mb-6">
            Minimalist silver jewellery designed to last a lifetime. Each piece
            is handcrafted from 925 sterling silver.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition flex items-center gap-2">
            Shop Now <MoveRight size={18} />
          </button>
        </div>
      </div>

      {/* ── RIGHT SIDE – Decorative image panel ── */}  {/* ✅ fixed comment */}
      <div className="w-full md:w-1/2 relative overflow-hidden min-h-[400px]">
        {/* Blurred background image */}
        <div className="absolute inset-0 bg-[url('/silverhouse.jpg')] bg-cover bg-center blur-sm scale-110" />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* 2×2 emoji grid centred on the panel */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-6xl bg-gray-300 py-12 px-16 rounded-2xl">💍</div>
            <div className="text-6xl bg-gray-100 py-12 px-16 rounded-2xl">📿</div>
            <div className="text-6xl bg-gray-100 py-8  px-16 rounded-2xl">✨</div>
            <div className="text-6xl bg-gray-300 py-8  px-16 rounded-2xl">🔮</div>
          </div>
        </div>
      </div>

    </section>
  );
}
