// ─────────────────────────────────────────────────────────────
//  products.jsx  –  Product grid + Cart drawer
//  Fixes applied:
//  • Products in a data array – no more copy-pasted HTML cards
//  • "Buy now" button calls addToCart prop (connected to App state)
//  • Prices unified to "DA"  (was mixing DZ / DA)
//  • Every img has a meaningful alt attribute
//  • Cart drawer lives here and receives cart state via props
// ─────────────────────────────────────────────────────────────

// ── Product data ─────────────────────────────────────────────
//  Add / remove products here – the grid updates automatically
const PRODUCTS = [
  { id: 1, name: "Chaine Grain de Café", price: 21000, img: "/chaine1.jpg" },
  { id: 2, name: "Gourmette Euro",        price: 9750,  img: "/chaine2.jpg" },
  { id: 3, name: "Gourmette Serpent",     price: 6000,  img: "/chaine3.jpg" },
  { id: 4, name: "Gourmette Grain de Café", price: 12000, img: "/chaine4.jpg" },
];

// ── Cart Drawer ───────────────────────────────────────────────
function CartDrawer({ cart, onClose, onRemove, onUpdateQty }) {
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    // Overlay
    <div className="fixed inset-0 z-50 flex">
      <div className="flex-1 bg-black/30" onClick={onClose} />

      {/* Side panel */}
      <div className="w-80 bg-white h-full shadow-2xl flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h2 className="font-bold text-lg text-gray-800">
            Your Cart ({cart.length})
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 text-xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-400 gap-3">
            <span className="text-5xl">🛒</span>
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto p-4 space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="flex gap-3 items-center">
                  {/* Thumbnail */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-14 h-14 rounded-lg object-cover shrink-0"
                  />

                  {/* Name + qty controls */}
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-800 text-sm truncate">
                      {item.name}
                    </p>
                    <p className="text-gray-400 text-xs mb-1">
                      {item.price.toLocaleString()} DA
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQty(item.id, -1)}
                        className="w-6 h-6 rounded bg-gray-100 text-gray-700 text-sm hover:bg-gray-200 flex items-center justify-center"
                      >
                        −
                      </button>
                      <span className="text-sm font-semibold w-4 text-center">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => onUpdateQty(item.id, 1)}
                        className="w-6 h-6 rounded bg-gray-100 text-gray-700 text-sm hover:bg-gray-200 flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Line total + remove */}
                  <div className="text-right shrink-0">
                    <p className="font-bold text-gray-800 text-sm">
                      {(item.price * item.qty).toLocaleString()} DA
                    </p>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-[11px] text-red-400 hover:text-red-600 mt-1"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div className="p-4 border-t border-gray-100 space-y-3">
              <div className="flex justify-between font-bold text-gray-800">
                <span>Total</span>
                <span>{total.toLocaleString()} DA</span>   {/* ✅ unified DA */}
              </div>
              <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition font-medium">
                Checkout →
              </button>
              <button
                onClick={onClose}
                className="w-full text-sm text-gray-500 hover:text-gray-800 transition"
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ── Products grid ─────────────────────────────────────────────
export default function Products({
  addToCart,
  cart,
  cartOpen,
  onCloseCart,
  onRemove,
  onUpdateQty,
}) {
  return (
    <>
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Some Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (   // ✅ map over array – no repeated HTML
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={product.img}
                alt={product.name}        // ✅ meaningful alt text
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-gray-600 mb-4">
                  {product.price.toLocaleString()} DA  {/* ✅ unified DA */}
                </p>
                <button
                  onClick={() => addToCart(product)}   // ✅ connected to App cart state
                  className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cart drawer – rendered only when open */}
      {cartOpen && (
        <CartDrawer
          cart={cart}
          onClose={onCloseCart}
          onRemove={onRemove}
          onUpdateQty={onUpdateQty}
        />
      )}
    </>
  );
}
