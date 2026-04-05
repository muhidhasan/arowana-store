import { useState } from "react";
import { Search, Snowflake, Mail, MessageCircle, X, ChevronRight } from "lucide-react";
import { frozenSeafoodCategories, FrozenProduct } from "@/data/frozenSeafoodProducts";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Products = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<FrozenProduct | null>(null);

  const filteredCategories = frozenSeafoodCategories
    .map((cat) => ({
      ...cat,
      products: cat.products.filter((p) =>
        search
          ? p.name.toLowerCase().includes(search.toLowerCase()) ||
            (p.localName && p.localName.toLowerCase().includes(search.toLowerCase()))
          : true
      ),
    }))
    .filter((cat) => cat.products.length > 0);

  const whatsappUrl = (product: FrozenProduct) =>
    `https://wa.me/8801234567890?text=${encodeURIComponent(`Hi, I'd like to inquire about: ${product.name} (Frozen) — ${product.category}`)}`;

  const emailUrl = (product: FrozenProduct) =>
    `mailto:export@arowanainternational.com?subject=${encodeURIComponent(`Inquiry: ${product.name} (Frozen)`)}&body=${encodeURIComponent(`I am interested in importing ${product.name} from the ${product.category} category. Please share pricing, MOQ, and packaging details.`)}`;

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary section-padding pb-12">
        <div className="container-max text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-4">
            <Snowflake className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">100% Frozen Products</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-3">
            Frozen Seafood Catalog
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Premium frozen seafood from Bangladesh — IQF processed, HACCP certified, export-ready for global markets.
          </p>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-xl text-sm focus:ring-2 focus:ring-ring focus:outline-none"
            />
          </div>
        </div>

        {/* Categories */}
        {filteredCategories.map((category) => (
          <section key={category.id} className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-1 bg-primary rounded-full" />
              <h2 className="font-heading text-2xl font-bold text-foreground">{category.name}</h2>
              <span className="text-xs bg-muted text-muted-foreground rounded-full px-2.5 py-0.5">
                {category.products.length} {category.products.length === 1 ? "product" : "products"}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {category.products.map((product) => (
                <div
                  key={product.id}
                  className="bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all duration-200 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      {product.localName && (
                        <p className="text-xs text-muted-foreground mt-0.5">({product.localName})</p>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1 bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300 text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0">
                      <Snowflake className="w-3 h-3" /> Frozen
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground mb-1">{product.category}</p>

                  <div className="flex items-center gap-2 mt-4">
                    <button
                      onClick={() => setSelected(product)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-medium text-primary border border-primary/30 rounded-lg py-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      Details <ChevronRight className="w-3 h-3" />
                    </button>
                    <a
                      href={whatsappUrl(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-border hover:bg-green-50 hover:border-green-300 dark:hover:bg-green-950 transition-colors"
                      title="Inquire via WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 text-green-600" />
                    </a>
                    <a
                      href={emailUrl(product)}
                      className="p-2 rounded-lg border border-border hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-950 transition-colors"
                      title="Inquire via Email"
                    >
                      <Mail className="w-4 h-4 text-blue-600" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {filteredCategories.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No products match your search.</p>
          </div>
        )}
      </div>

      {/* Detail Dialog */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading flex items-center gap-2">
              {selected?.name}
              {selected?.localName && (
                <span className="text-sm font-normal text-muted-foreground">({selected.localName})</span>
              )}
            </DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                  <Snowflake className="w-3 h-3" /> Frozen Product
                </span>
                <span className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-full">
                  {selected.category}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{selected.description}</p>
              <div className="flex gap-3 pt-2">
                <a
                  href={whatsappUrl(selected)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
                <a
                  href={emailUrl(selected)}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <Mail className="w-4 h-4" /> Email Inquiry
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Products;
