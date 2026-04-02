import { useState, useMemo } from "react";
import { Search, Filter, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { fishExportProducts, fishCategories } from "@/data/fishExportProducts";

const Products = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered = useMemo(() => {
    return fishExportProducts.filter((p) => {
      if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedCategory !== "All" && p.category !== selectedCategory) return false;
      return true;
    });
  }, [search, selectedCategory]);

  return (
    <div className="pt-16 lg:pt-20 min-h-screen">
      <div className="brand-gradient section-padding pb-12">
        <div className="container-max text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-3">Fish Products</h1>
          <p className="text-primary-foreground/80 max-w-lg mx-auto">Premium fish available for international export. Browse our catalog and send an inquiry.</p>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <div className="bg-card border border-border rounded-xl p-5 mb-8 space-y-4">
          <div className="flex items-center gap-2 text-foreground font-heading font-semibold">
            <Filter className="w-5 h-5" /> Filters
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-ring focus:outline-none"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-ring focus:outline-none"
            >
              {fishCategories.map((c) => (
                <option key={c} value={c}>{c === "All" ? "All Categories" : c}</option>
              ))}
            </select>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-6">{filtered.length} products found</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div key={product.id} className="bg-card rounded-xl border border-border overflow-hidden hover-lift group">
              <div className="aspect-square overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 space-y-3">
                <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <h3 className="font-heading text-lg font-bold text-foreground">{product.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground py-2 px-4 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Send Inquiry <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No products match your filters. Try adjusting your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
