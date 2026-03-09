import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { toast } from "sonner";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Order placed successfully! We'll contact you with delivery details.");
    clearCart();
    setShowCheckout(false);
  };

  if (items.length === 0 && !showCheckout) {
    return (
      <div className="pt-16 lg:pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto" />
          <h2 className="font-heading text-2xl font-bold text-foreground">Your cart is empty</h2>
          <p className="text-muted-foreground">Browse our Sea Land Market to add products.</p>
          <Link to="/market" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
            Browse Market
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 lg:pt-20 min-h-screen">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
        <Link to="/market" className="inline-flex items-center gap-1 text-primary font-medium text-sm mb-6 hover:gap-2 transition-all">
          <ArrowLeft className="w-4 h-4" /> Back to Market
        </Link>

        {!showCheckout ? (
          <>
            <h1 className="font-heading text-3xl font-bold text-foreground mb-8">Shopping Cart</h1>
            <div className="space-y-4 mb-8">
              {items.map((item) => (
                <div key={item.product.id} className="bg-card border border-border rounded-xl p-4 flex items-center gap-4">
                  <img src={item.product.image} alt={item.product.name} className="w-16 h-16 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-semibold text-foreground">{item.product.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.product.origin} · ${item.product.pricePerKg.toFixed(2)}/kg</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center border border-border rounded-lg">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-2 hover:bg-muted transition-colors rounded-l-lg">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 text-sm font-medium">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-2 hover:bg-muted transition-colors rounded-r-lg">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="text-sm font-bold text-foreground w-20 text-right">${(item.product.pricePerKg * item.quantity).toFixed(2)}</span>
                    <button onClick={() => removeFromCart(item.product.id)} className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-card border border-border rounded-xl p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="font-heading text-2xl font-bold text-foreground">${totalPrice.toFixed(2)}</p>
              </div>
              <button
                onClick={() => setShowCheckout(true)}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        ) : (
          <div className="max-w-lg mx-auto">
            <h1 className="font-heading text-3xl font-bold text-foreground mb-8">Checkout</h1>
            <div className="bg-card border border-border rounded-xl p-4 mb-6">
              <h3 className="font-heading font-semibold text-foreground mb-3">Order Summary</h3>
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between text-sm py-1">
                  <span className="text-muted-foreground">{item.product.name} × {item.quantity} kg</span>
                  <span className="text-foreground font-medium">${(item.product.pricePerKg * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t border-border mt-3 pt-3 flex justify-between font-semibold text-foreground">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <form onSubmit={handleCheckout} className="space-y-4">
              <input type="text" required placeholder="Full Name" className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-ring focus:outline-none" />
              <input type="tel" required placeholder="Phone Number" className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-ring focus:outline-none" />
              <input type="email" required placeholder="Email Address" className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-ring focus:outline-none" />
              <textarea required placeholder="Delivery Address" rows={3} className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-ring focus:outline-none resize-none" />
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Payment Method</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 bg-background border border-border rounded-lg p-3 cursor-pointer">
                    <input type="radio" name="payment" value="cod" defaultChecked className="accent-primary" />
                    <span className="text-sm text-foreground">Cash on Delivery</span>
                  </label>
                  <label className="flex items-center gap-3 bg-background border border-border rounded-lg p-3 cursor-pointer">
                    <input type="radio" name="payment" value="online" className="accent-primary" />
                    <span className="text-sm text-foreground">Online Payment</span>
                  </label>
                </div>
              </div>
              <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                Place Order
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
