import { useState } from "react";
import Header from "./components/header";
import Main from "./components/main";
import GenderProducts from "./components/genderproducts";
import Products from "./components/products";
import Footer from "./components/footer";

// ─────────────────────────────────────────────────────────────
//  App.jsx  –  root component
//  • Holds cart state so Header (badge) and Products (add)
//    can both read/write the same data.
//  • Passes cart helpers down as props.
// ─────────────────────────────────────────────────────────────
export default function App() {
  const [cart, setCart] = useState([]);          // shared cart state
  const [cartOpen, setCartOpen] = useState(false);

  // Add a product or increase its quantity
  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === product.id);
      if (found) return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Remove one item completely
  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  // Change quantity by delta (+1 / -1), remove if reaches 0
  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((i) => i.id === id ? { ...i, qty: i.qty + delta } : i)
        .filter((i) => i.qty > 0)
    );
  };

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header receives cart count so it can show the badge */}
      <Header
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
      />

      <main className="flex-1">
        <Main />
        <GenderProducts />
        <Products
          addToCart={addToCart}
          cart={cart}
          cartOpen={cartOpen}
          onCloseCart={() => setCartOpen(false)}
          onRemove={removeFromCart}
          onUpdateQty={updateQty}
        />
      </main>

      <Footer />
    </div>
  );
}
