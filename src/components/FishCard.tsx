import { useState } from "react";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { FishProduct } from "@/data/fishProducts";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface FishCardProps {
  product: FishProduct;
}

const FishCard = ({ product }: FishCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${quantity} kg of ${product.name} added to cart`);
    setQuantity(1);
  };

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden hover-lift group">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-heading font-semibold text-foreground">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.origin}</p>
          </div>
          <span className="text-lg font-bold text-primary">${product.pricePerKg.toFixed(2)}<span className="text-xs font-normal text-muted-foreground">/kg</span></span>
        </div>
        <p className="text-xs text-muted-foreground">Stock: {product.stock} kg available</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center border border-border rounded-lg">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:bg-muted transition-colors rounded-l-lg">
              <Minus className="w-3 h-3" />
            </button>
            <span className="px-3 text-sm font-medium min-w-[2rem] text-center">{quantity}</span>
            <button onClick={() => setQuantity(Math.min(product.stock, quantity + 1))} className="p-2 hover:bg-muted transition-colors rounded-r-lg">
              <Plus className="w-3 h-3" />
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2 px-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <ShoppingCart className="w-4 h-4" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FishCard;
