import { useState, useMemo } from "react";
import { Search, Filter } from "lucide-react";
import { fishProducts, countries, fishTypes } from "@/data/fishProducts";
import FishCard from "@/components/FishCard";

const Market = () => {
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

  const filtered = useMemo(() => {
    return fishProducts.filter((p) => {
      if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedCountry !== "All" && p.origin !== selectedCountry) return false;
      if (selectedType !== "All" && p.type !== selectedType) return false;
      if (p.pricePerKg < priceRange[0] || p.pricePerKg > priceRange[1]) return false;
      return true;
    });
  }, [search, selectedCountry, selectedType, priceRange]);

  return (
    <div className="pt-16 lg:pt-20 min-h-screen">
      {/* Header */}
      <div className="ocean-gradient section-padding pb-12">
        <div className="container-max text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-3">Sea Land Fish Market</h1>
          <p className="text-primary-foreground/80 max-w-lg mx-auto">Fresh seafood imported from the world's finest fishing markets. Order online for delivery.</p>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <div className="bg-card border border-border rounded-xl p-5 mb-8 space-y-4">
          <div className="flex items-center gap-2 text-foreground font-heading font-semibold">
            <Filter className="w-5 h-5" /> Filters
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search fish..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-ring focus:outline-none"
              />
            </div>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-ring focus:outline-none"
            >
              {countries.map((c) => (
                <option key={c} value={c}>{c === "All" ? "All Countries" : c}</option>
              ))}
            </select>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-ring focus:outline-none"
            >
              {fishTypes.map((t) => (
                <option key={t} value={t}>{t === "All" ? "All Types" : t}</option>
              ))}
            </select>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground whitespace-nowrap">Max $</span>
              <input
                type="range"
                min={0}
                max={100}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                className="flex-1 accent-primary"
              />
              <span className="text-sm font-medium text-foreground w-10">${priceRange[1]}</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-6">{filtered.length} products found</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((fish) => (
            <FishCard key={fish.id} product={fish} />
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

export default Market;
